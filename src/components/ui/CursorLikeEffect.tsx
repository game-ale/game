"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CursorLikeEffect.module.css";

export default function CursorLikeEffect() {
    const [isMobile, setIsMobile] = useState(false);
    
    // Main cursor position
    const cursor = useRef({ x: 0, y: 0 });
    
    // Trailing cursor position (the larger circle)
    const trailingCursor = useRef({ x: 0, y: 0 });
    
    // Refs for the DOM elements
    const dotRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
        // Check if device is mobile or touch
        const checkMobile = () => {
            const isTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
            const isSmallScreen = window.innerWidth <= 768;
            setIsMobile(isTouch || isSmallScreen);
        };
        
        checkMobile();
        window.addEventListener("resize", checkMobile);
        
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const onMouseMove = (e: MouseEvent) => {
            cursor.current.x = e.clientX;
            cursor.current.y = e.clientY;
            
            // Instantly update the small dot
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const animate = () => {
            // Smoothly move the trailing circle towards the main cursor
            const dx = cursor.current.x - trailingCursor.current.x;
            const dy = cursor.current.y - trailingCursor.current.y;
            
            // Adjust the ease factor for the trail (0.15 is smooth)
            trailingCursor.current.x += dx * 0.15;
            trailingCursor.current.y += dy * 0.15;

            if (circleRef.current) {
                circleRef.current.style.transform = `translate3d(${trailingCursor.current.x}px, ${trailingCursor.current.y}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        const onMouseDown = () => {
            if (circleRef.current) circleRef.current.classList.add(styles.clicking);
        };
        const onMouseUp = () => {
            if (circleRef.current) circleRef.current.classList.remove(styles.clicking);
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName?.toLowerCase() === 'a' ||
                target.tagName?.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                if (circleRef.current) circleRef.current.classList.add(styles.hovering);
            } else {
                if (circleRef.current) circleRef.current.classList.remove(styles.hovering);
            }
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("mouseover", onMouseOver);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("mouseover", onMouseOver);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            <div ref={dotRef} className={styles.cursorDot} />
            <div ref={circleRef} className={styles.cursorCircle} />
        </>
    );
}
