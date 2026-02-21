"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Counter.module.css";

interface CounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

export default function Counter({
    end,
    suffix = "",
    prefix = "",
    duration = 2000,
    label,
}: CounterProps) {
    const [count, setCount] = useState(0);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end, duration]);

    return (
        <div ref={ref} className={styles.counter}>
            <span className={styles.value}>
                {prefix}
                {count}
                {suffix}
            </span>
            <span className={styles.label}>{label}</span>
        </div>
    );
}
