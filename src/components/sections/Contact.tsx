"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
    { icon: Mail, label: "A2SV Email", value: "gemechu.alemu@a2sv.org", href: "mailto:gemechu.alemu@a2sv.org" },
    { icon: Mail, label: "Gmail", value: "alemugemechu44@gmail.com", href: "mailto:alemugemechu44@gmail.com" },
    { icon: Phone, label: "Phone", value: "+251 949 297 359", href: "tel:+251949297359" },
    { icon: MapPin, label: "Location", value: "Ethiopia", href: undefined },
];

const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/game-ale/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/" },
    { icon: ExternalLink, label: "LeetCode", href: "https://leetcode.com/u/game_ale/" },
    { icon: ExternalLink, label: "Zindi Africa", href: "https://zindi.africa/users/game_ale" },
    { icon: ExternalLink, label: "Codeforces", href: "https://codeforces.com/profile/gemechualemu" },
];

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:alemugemechu44@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionHeading
                    label="Contact"
                    title="Let's Build Something"
                    subtitle="Open to opportunities in AI/ML Engineering and Systems Engineering"
                />

                <div className={styles.grid}>
                    {/* Info side */}
                    <AnimatedSection direction="left">
                        <div className={styles.info}>
                            <h3 className={styles.infoTitle}>Get In Touch</h3>
                            <p className={styles.infoText}>
                                I&apos;m actively looking for AI/ML Engineer and Systems-Focused
                                Software Engineer roles at top technology companies. Let&apos;s
                                discuss how I can contribute to your team.
                            </p>

                            <div className={styles.contactList}>
                                {contactInfo.map((item) => (
                                    <div key={item.label} className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <item.icon size={18} />
                                        </div>
                                        <div>
                                            <span className={styles.contactLabel}>
                                                {item.label === "A2SV Email" ? (
                                                    <><a href="https://a2sv.org/" target="_blank" rel="noopener noreferrer" className={styles.contactLabelLink}>A2SV</a> Email</>
                                                ) : item.label}
                                            </span>
                                            {item.href ? (
                                                <a href={item.href} className={styles.contactValue}>
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className={styles.contactValue}>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
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
                    </AnimatedSection>

                    {/* Form side */}
                    <AnimatedSection direction="right">
                        <GlassCard padding="lg">
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name" className={styles.label}>Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className={styles.input}
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className={styles.input}
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="message" className={styles.label}>Message</label>
                                    <textarea
                                        id="message"
                                        className={styles.textarea}
                                        placeholder="Your message..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <Button variant="primary" size="lg">
                                    <Send size={18} /> Send Message
                                </Button>
                            </form>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
