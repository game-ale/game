"use client";

import { useEffect, useRef } from "react";
import styles from "./Starfield.module.css";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    speedX: number;
    speedY: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Adjust density
            
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    opacity: Math.random(),
                    speedX: (Math.random() - 0.5) * 0.1,
                    speedY: (Math.random() - 0.5) * 0.1 - 0.1, // Slight upward drift
                });
            }
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw gradient background (deep space purple/blue)
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            gradient.addColorStop(0, "#090514"); // Very dark purple/black at top
            gradient.addColorStop(1, "#110b29"); // Deep purple at bottom
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                
                // Add a slight twinkle effect
                const currentOpacity = star.opacity + Math.sin(Date.now() * 0.001 * star.size) * 0.2;
                const finalOpacity = Math.max(0.1, Math.min(1, currentOpacity));
                
                // Some stars are slightly purple/blue
                const isPurple = star.size > 1.8;
                ctx.fillStyle = isPurple 
                    ? `rgba(168, 85, 247, ${finalOpacity})` 
                    : `rgba(255, 255, 255, ${finalOpacity})`;
                
                if (isPurple) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
                } else {
                    ctx.shadowBlur = star.size * 2;
                    ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
                }
                
                ctx.fill();

                // Move stars
                star.x += star.speedX;
                star.y += star.speedY;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener("resize", resize);
        resize();
        drawStars();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.starfield} />;
}
