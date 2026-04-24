import styles from "./Badge.module.css";

interface BadgeProps {
    label: string;
    variant?: "default" | "accent" | "emerald" | "purple";
    size?: "sm" | "md";
    href?: string;
}

export default function Badge({
    label,
    variant = "default",
    size = "sm",
    href,
}: BadgeProps) {
    const className = `${styles.badge} ${styles[variant]} ${styles[size]} ${href ? styles.linkBadge : ""}`;

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
            </a>
        );
    }

    return (
        <span className={className}>
            {label}
        </span>
    );
}
