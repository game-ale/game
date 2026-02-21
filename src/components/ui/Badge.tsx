import styles from "./Badge.module.css";

interface BadgeProps {
    label: string;
    variant?: "default" | "accent" | "emerald" | "purple";
    size?: "sm" | "md";
}

export default function Badge({
    label,
    variant = "default",
    size = "sm",
}: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
            {label}
        </span>
    );
}
