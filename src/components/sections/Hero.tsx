"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import NextImage from "next/image";
import styles from "./Hero.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 + i * 0.03, duration: 0.5, ease: "easeOut" as const },
    }),
};

const greetingVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: 0.15 + i * 0.16,
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className={styles.hero} id="hero">
            <div className={`${styles.inner} container`}>
                {/* Decorative elements */}
                <div className={styles.orb1} />
                <div className={styles.orb2} />
                <div className={styles.orb3} />

                <div className={styles.heroGrid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Greeting */}
                        <motion.h1
                            className={styles.greeting}
                            initial="hidden"
                            animate="visible"
                            aria-label={t.hero.greeting.join(" ")}
                        >
                            {t.hero.greeting.map((word, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={greetingVariants}
                                    className={i === t.hero.greeting.length - 1 || i === t.hero.greeting.length - 2 && t.hero.greeting[t.hero.greeting.length - 1] === "" ? styles.greetingAccent : styles.greetingWord}
                                >
                                    {word}
                                </motion.span>
                            ))}
                            <motion.span
                                className={styles.greetingGlow}
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
                            />
                        </motion.h1>

                        {/* Supporting headline with letter animation */}
                        <h2 className={styles.name}>
                            {t.hero.headline.split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className={letter === " " ? styles.space : ""}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h2>

                        {/* Description */}
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
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

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                        >
                            <div className={styles.socialStrip}>
                                <a
                                    href="https://github.com/game-ale/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                    aria-label={t.hero.github}
                                    title={t.hero.github}
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://x.com/alemu_geme88545"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                    aria-label={t.hero.twitter}
                                    title={t.hero.twitter}
                                >
                                    <X size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialBtn}
                                    aria-label={t.hero.linkedin}
                                    title={t.hero.linkedin}
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                            <a href="#contact" className={styles.primaryAction}>
                                {t.hero.contactBtn}
                                <span className={styles.arrow}>→</span>
                            </a>
                        </motion.div>

                    </motion.div>

                    <div className={styles.imageContainer}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
                        >
                            <div className={styles.imageFrame}>
                                <div className={styles.imageBackground} />
                                <NextImage
                                    src="/images/profile/me.png"
                                    alt="Gemechu Alemu"
                                    width={400}
                                    height={400}
                                    className={styles.profileImg}
                                    priority
                                />
                                <div className={styles.imageBorder} />
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.ctas}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                        >
                            <div className={styles.socials}>
                                <a href="https://github.com/game-ale/" target="_blank" rel="noopener noreferrer" aria-label={t.hero.github} className={styles.socialLink}>
                                    <Github size={20} />
                                    <span>{t.hero.github}</span>
                                </a>
                                <a href="https://x.com/alemu_geme88545" target="_blank" rel="noopener noreferrer" aria-label={t.hero.twitter} className={styles.socialLink}>
                                    <X size={20} />
                                    <span>{t.hero.twitter}</span>
                                </a>
                                <a href="https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/" target="_blank" rel="noopener noreferrer" aria-label={t.hero.linkedin} className={styles.socialLink}>
                                    <Linkedin size={20} />
                                    <span>{t.hero.linkedin}</span>
                                </a>
                            </div>
                            <a href="#contact" className={styles.contactLink}>
                                Contact
                            </a>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
