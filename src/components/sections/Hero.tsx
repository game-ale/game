"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { XIcon, LeetCodeIcon, CodeforcesIcon, ZindiIcon, TelegramIcon, WhatsAppIcon, PortfolioIcon } from "@/components/ui/BrandIcons";
import NextImage from "next/image";
import styles from "./Hero.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.inner}>
                {/* Centered Profile Image with Glow */}
                <motion.div
                    className={styles.avatarWrap}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                >
                    <div className={styles.avatarGlow} />
                    <NextImage
                        src="/images/profile/me.png"
                        alt="Gemechu Alemu"
                        width={120}
                        height={120}
                        className={styles.avatar}
                        priority
                    />
                </motion.div>

                {/* Social Links Row */}
                <motion.div
                    className={styles.socialBadge}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <a href="https://gemechualemu.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className={styles.socialIcon}>
                        <PortfolioIcon size={16} />
                    </a>
                    <a href="https://leetcode.com/u/game_ale/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className={styles.socialIcon}>
                        <LeetCodeIcon size={16} />
                    </a>
                    <a href="https://zindi.africa/users/game_ale" target="_blank" rel="noopener noreferrer" aria-label="Zindi" className={styles.socialIcon}>
                        <ZindiIcon size={16} />
                    </a>
                    <a href="https://codeforces.com/profile/gemechualemu" target="_blank" rel="noopener noreferrer" aria-label="Codeforces" className={styles.socialIcon}>
                        <CodeforcesIcon size={16} />
                    </a>
                    <a href="mailto:alemugemechu44@gmail.com" aria-label="Email" className={styles.socialIcon}>
                        <Mail size={16} />
                    </a>
                    <a href="https://x.com/alemu_geme88545" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialIcon}>
                        <XIcon size={16} />
                    </a>
                    <a href="https://www.linkedin.com/in/gemechu-alemu-bedasa" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                        <Linkedin size={18} />
                    </a>
                    <a href="https://t.me/AletheiaNike" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={styles.socialIcon}>
                        <TelegramIcon size={16} />
                    </a>
                    <a href="https://wa.me/251949297359" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>
                        <WhatsAppIcon size={16} />
                    </a>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    className={styles.heading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {t.hero.greeting.slice(0, -1).join(" ")}{" "}
                    <span className={styles.headingAccent}>{t.hero.greeting[t.hero.greeting.length - 1]}</span>
                </motion.h1>

                {/* Secondary Title */}
                <motion.h2
                    className={styles.subtitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    {t.hero.headline}
                </motion.h2>

                {/* Description */}
                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    {t.hero.description}
                    <a
                        href="https://www.astu.edu.et/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.inlineLink}
                    >
                        {t.hero.descriptionAstu}
                    </a>
                    , trained through{" "}
                    <a
                        href="https://www.a2sv.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.inlineLink}
                    >
                        {t.hero.descriptionA2sv}
                    </a>
                    , and competing in{" "}
                    <a
                        href="https://drive.google.com/file/d/1Fz8cSTiCdfhiQvgDWzgKFZgRvjAZM4hO/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.inlineLink}
                    >
                        {t.hero.descriptionEtcpc}
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://zindi.africa/users/game_ale"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.inlineLink}
                    >
                        {t.hero.descriptionZindi}
                    </a>
                    {t.hero.descriptionClosing}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    <a href="#projects" className={styles.primaryBtn}>
                        {t.nav.projects}
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1H5CeCUmDFihHhs98QS5piNHe7tXOfPIp/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        <FileText size={16} />
                        {t.nav.resume}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
