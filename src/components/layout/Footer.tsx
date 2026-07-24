"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

import ProfileViewCount from "@/components/ui/ProfileViewCount";

const socialLinks = [
    { icon: Github, href: "https://github.com/game-ale/", label: "GitHub" },
    {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/",
        label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:alemugemechu44@gmail.com", label: "Email" },
    {
        icon: ExternalLink,
        href: "https://leetcode.com/u/game_ale/",
        label: "LeetCode",
    },
];

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={`${styles.inner} container`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>
                            <span className={styles.logoSymbol}>{"<"}</span>
                            GA
                            <span className={styles.logoSymbol}>{"/>"}</span>
                        </span>
                        <p className={styles.tagline}>
                            {t.footer.tagline}
                        </p>
                    </div>
                    <div className={styles.socials}>
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label={link.label}
                            >
                                <link.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>
                        &copy; {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    <ProfileViewCount username="game-ale" />
                    <p className={styles.tech}>
                        {t.footer.techLine}
                    </p>
                </div>
            </div>
        </footer>
    );
}
