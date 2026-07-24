"use client";

import { Eye } from "lucide-react";
import styles from "./ProfileViewCount.module.css";

interface ProfileViewCountProps {
    className?: string;
    username?: string;
}

export default function ProfileViewCount({ username = "game-ale", className = "" }: ProfileViewCountProps) {
    return (
        <div className={`${styles.viewCountBadge} ${className}`} title="Live Profile Views">
            <span className={styles.iconWrapper}>
                <Eye size={15} className={styles.eyeIcon} />
                <span className={styles.liveDot} />
            </span>
            <span className={styles.labelText}>Views</span>
            <img
                src={`https://komarev.com/ghpvc/?username=${username}&color=8b5cf6&style=flat-square&label=`}
                alt="Profile Views Count"
                className={styles.badgeImg}
                loading="eager"
            />
        </div>
    );
}
