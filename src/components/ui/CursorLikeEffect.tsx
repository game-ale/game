"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./CursorLikeEffect.module.css";

interface Particle {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    emoji: string;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    scale: number;
}

const EMOJIS = ["❤️", "💙", "💜", "💚", "✨", "⭐", "🌟", "💫"];
const CLICK_EMOJIS = ["❤️", "💖", "💕", "💗", "💝", "💘"];

export default function CursorLikeEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0, moving: false });
    const idCounterRef = useRef(0);
    const lastSpawnRef = useRef(0);
    const frameRef = useRef(0);

    const createParticle = useCallback(
        (x: number, y: number, isClick: boolean): Particle => {
            const angle = Math.random() * Math.PI * 2;
            const speed = isClick
                ? 1.5 + Math.random() * 3
                : 0.3 + Math.random() * 1.2;
            const emojis = isClick ? CLICK_EMOJIS : EMOJIS;
            return {
                id: idCounterRef.current++,
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: -1.5 - Math.random() * (isClick ? 3 : 1.5) + Math.sin(angle) * speed * 0.5,
                life: 0,
                maxLife: isClick ? 70 + Math.random() * 40 : 40 + Math.random() * 30,
                size: isClick ? 18 + Math.random() * 14 : 10 + Math.random() * 10,
                emoji: emojis[Math.floor(Math.random() * emojis.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 6,
                opacity: 1,
                scale: isClick ? 0.2 : 0.5,
            };
        },
        []
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
            mouseRef.current.moving = true;

            const now = Date.now();
            if (now - lastSpawnRef.current > 60) {
                lastSpawnRef.current = now;
                const count = 1 + Math.floor(Math.random() * 2);
                for (let i = 0; i < count; i++) {
                    const offsetX = (Math.random() - 0.5) * 20;
                    const offsetY = (Math.random() - 0.5) * 20;
                    particlesRef.current.push(
                        createParticle(
                            e.clientX + offsetX,
                            e.clientY + offsetY,
                            false
                        )
                    );
                }
            }
        };

        const handleClick = (e: MouseEvent) => {
            const count = 8 + Math.floor(Math.random() * 6);
            for (let i = 0; i < count; i++) {
                const offsetX = (Math.random() - 0.5) * 30;
                const offsetY = (Math.random() - 0.5) * 30;
                particlesRef.current.push(
                    createParticle(
                        e.clientX + offsetX,
                        e.clientY + offsetY,
                        true
                    )
                );
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (!touch) return;
            mouseRef.current.x = touch.clientX;
            mouseRef.current.y = touch.clientY;
            mouseRef.current.moving = true;

            const now = Date.now();
            if (now - lastSpawnRef.current > 80) {
                lastSpawnRef.current = now;
                particlesRef.current.push(
                    createParticle(touch.clientX, touch.clientY, false)
                );
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (!touch) return;
            const count = 6 + Math.floor(Math.random() * 4);
            for (let i = 0; i < count; i++) {
                const offsetX = (Math.random() - 0.5) * 30;
                const offsetY = (Math.random() - 0.5) * 30;
                particlesRef.current.push(
                    createParticle(
                        touch.clientX + offsetX,
                        touch.clientY + offsetY,
                        true
                    )
                );
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);
        window.addEventListener("touchmove", handleTouchMove, { passive: true });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.life++;

                // Physics
                p.x += p.vx;
                p.vy += 0.02; // gentle gravity
                p.y += p.vy;
                p.vx *= 0.98; // friction
                p.rotation += p.rotationSpeed;

                // Lifecycle
                const progress = p.life / p.maxLife;

                // Scale: pop in, then shrink out
                if (progress < 0.15) {
                    p.scale = 0.2 + (progress / 0.15) * 0.8;
                } else if (progress > 0.7) {
                    p.scale = 1 - ((progress - 0.7) / 0.3) * 0.8;
                } else {
                    p.scale = 1;
                }

                // Opacity: fade out in last 40%
                if (progress > 0.6) {
                    p.opacity = 1 - (progress - 0.6) / 0.4;
                } else {
                    p.opacity = 1;
                }

                // Remove dead particles
                if (p.life >= p.maxLife) {
                    particles.splice(i, 1);
                    continue;
                }

                // Draw
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;
                ctx.font = `${p.size * p.scale}px serif`;
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(p.emoji, 0, 0);
                ctx.restore();
            }

            // Cap max particles for performance
            if (particles.length > 150) {
                particles.splice(0, particles.length - 150);
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchstart", handleTouchStart);
        };
    }, [createParticle]);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
