"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { XIcon, LeetCodeIcon, CodeforcesIcon, ZindiIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import styles from "./Footer.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

import ProfileViewCount from "@/components/ui/ProfileViewCount";

const socialLinks = [
    { icon: Github, href: "https://github.com/game-ale/", label: "GitHub" },
    { icon: LeetCodeIcon, href: "https://leetcode.com/u/game_ale/", label: "LeetCode" },
    { icon: ZindiIcon, href: "https://zindi.africa/users/game_ale", label: "Zindi" },
    { icon: CodeforcesIcon, href: "https://codeforces.com/profile/gemechualemu", label: "Codeforces" },
    { icon: Mail, href: "mailto:alemugemechu44@gmail.com", label: "Email" },
    { icon: XIcon, href: "https://x.com/alemu_geme88545", label: "X (Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gemechu-alemu-bedasa", label: "LinkedIn" },
    { icon: TelegramIcon, href: "https://t.me/AletheiaNike", label: "Telegram" },
    { icon: WhatsAppIcon, href: "https://wa.me/251949297359", label: "WhatsApp" },
];

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#projects", labelKey: "projects" as const },
    { href: "#arsenal", labelKey: "arsenal" as const },
    { href: "#experience", labelKey: "experience" as const },
    { href: "#algorithms", labelKey: "algorithms" as const },
    { href: "#contact", labelKey: "contact" as const },
];

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={`${styles.inner} container`}>
                {/* Top section: Brand + Nav + Socials */}
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

                    {/* Quick Navigation */}
                    <nav className={styles.nav} aria-label="Footer navigation">
                        <h4 className={styles.navTitle}>Quick Links</h4>
                        <ul className={styles.navList}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className={styles.navLink}>
                                        {link.label || (link.labelKey ? t.nav[link.labelKey] : "")}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social Links */}
                    <div className={styles.socialCol}>
                        <h4 className={styles.navTitle}>Connect</h4>
                        <div className={styles.socials}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith("#") ? undefined : "_blank"}
                                    rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                                    className={styles.socialLink}
                                    aria-label={link.label}
                                    title={link.label}
                                >
                                    <link.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider} />

                {/* Bottom section: Copyright + Views + Tech */}
                <div className={styles.bottom}>
                    <p>
                        &copy; {new Date().getFullYear()} {t.footer.copyright}
                    </p>
                    <ProfileViewCount />
                    <p className={styles.tech}>
                        {t.footer.techLine}
                    </p>
                </div>
            </div>
        </footer>
    );
}
