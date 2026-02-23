import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
    className?: string;
    target?: string;
    rel?: string;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    onClick,
    className = "",
    target,
    rel,
    type = "button",
}: ButtonProps) {
    const cls = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={cls} target={target} rel={rel}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={cls} onClick={onClick}>
            {children}
        </button>
    );
}
