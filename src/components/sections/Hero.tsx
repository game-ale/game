"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, X } from "lucide-react";
import NextImage from "next/image";
import styles from "./Hero.module.css";

const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5 + i * 0.03, duration: 0.5, ease: "easeOut" as const },
    }),
};

export default function Hero() {
    const headline = "I build digital experiences.";

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
                        <motion.p
                            className={styles.greeting}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Hi, I&apos;m Gemechu.
                        </motion.p>

                        {/* Headline with letter animation */}
                        <h1 className={styles.name}>
                            {headline.split("").map((letter, i) => (
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
                        </h1>

                        {/* Description */}
                        <motion.p
                            className={styles.description}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            I design and ship scalable AI systems that turn raw data into
                            reliable intelligence RAG platforms, ML pipelines, inference
                            APIs, and full-stack AI products built for production. Combining
                            strong algorithmic thinking with backend engineering and MLOps, I
                            focus on systems that are fast, explainable, and built to scale.
                            Currently a CSE student at{" "}
                            <a
                                href="https://www.astu.edu.et/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.inlineLink}
                            >
                                Adama Science and Technology University (ASTU)
                            </a>
                            , trained through{" "}
                            <a
                                href="https://www.a2sv.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.inlineLink}
                            >
                                Africa to Silicon Valley (Backed by Google twice)
                            </a>
                            , and competing in{" "}
                            <a
                                href="https://drive.google.com/file/d/1Fz8cSTiCdfhiQvgDWzgKFZgRvjAZM4hO/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.inlineLink}
                            >
                                EtCPC _ICPC
                            </a>{" "}
                            and{" "}
                            <a
                                href="https://zindi.africa/users/game_ale"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.inlineLink}
                            >
                                Zindi Africa
                            </a>{" "}
                            while building real-world AI solutions.
                        </motion.p>

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
                                <a href="https://github.com/game-ale/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                                    <Github size={20} />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://x.com/alemu_geme88545" target="_blank" rel="noopener noreferrer" aria-label="X" className={styles.socialLink}>
                                    <X size={20} />
                                    <span>Twitter</span>
                                </a>
                                <a href="https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                                    <Linkedin size={20} />
                                    <span>LinkedIn</span>
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
