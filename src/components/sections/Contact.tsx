"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle, Linkedin, Loader2, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

const contactInfo = [
    { icon: Mail, label: "A2SV Email", value: "gemechu.alemu@a2sv.org", href: "mailto:gemechu.alemu@a2sv.org" },
    { icon: Mail, label: "Email", value: "alemugemechu44@gmail.com", href: "mailto:alemugemechu44@gmail.com" },
    { icon: Phone, label: "Phone", value: "+251 949 297 359", href: "tel:+251949297359" },
    { icon: X, label: "X / Twitter", value: "@alemu_geme88545", href: "https://x.com/alemu_geme88545" },
    { icon: Linkedin, label: "LinkedIn", value: "gemechu-alemu-bedasa", href: "https://www.linkedin.com/in/gemechu-alemu-bedasa/" },
    { icon: MapPin, label: "Location", value: "Ethiopia", href: undefined },
];



export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("https://formsubmit.co/ajax/alemugemechu44@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact from ${formData.name}`,
                    _template: "table",
                    _captcha: "false",
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                throw new Error("Failed to send message");
            }
        } catch {
            setStatus("error");
            setErrorMsg("Failed to send. You can email me directly at alemugemechu44@gmail.com");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <SectionHeading
                    label={t.contact.label}
                    title={t.contact.title}
                    subtitle={t.contact.subtitle}
                />

                <div className={styles.grid}>
                    {/* Info side */}
                    <AnimatedSection direction="left">
                        <div className={styles.info}>
                            <h3 className={styles.infoTitle}>{t.contact.getInTouch}</h3>
                            <p className={styles.infoText}>
                                {t.contact.getInTouchDesc}
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
                                                ) : item.label === "Location" ? t.contact.location : item.label}
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


                        </div>
                    </AnimatedSection>

                    {/* Form side */}
                    <AnimatedSection direction="right">
                        <GlassCard padding="lg">
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="contact-name" className={styles.label}>{t.contact.nameLabel}</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        className={styles.input}
                                        placeholder={t.contact.namePlaceholder}
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="contact-email" className={styles.label}>{t.contact.emailLabel}</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        className={styles.input}
                                        placeholder={t.contact.emailPlaceholder}
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="contact-message" className={styles.label}>{t.contact.messageLabel}</label>
                                    <textarea
                                        id="contact-message"
                                        className={styles.textarea}
                                        placeholder={t.contact.messagePlaceholder}
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>
                                <Button
                                    variant={status === "success" ? "secondary" : "primary"}
                                    size="lg"
                                    type="submit"
                                    className={status !== "idle" ? styles.submittedBtn : ""}
                                >
                                    {status === "loading" ? (
                                        <><Loader2 size={18} className={styles.spinner} /> {t.contact.sending}</>
                                    ) : status === "success" ? (
                                        <><CheckCircle size={18} /> {t.contact.sent}</>
                                    ) : (
                                        <>
                                            <Send size={18} /> {t.contact.sendButton}
                                        </>
                                    )}
                                </Button>
                                {status === "success" && (
                                    <p className={styles.successNote}>
                                        {t.contact.successMsg}
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className={styles.errorNote}>
                                        {t.contact.errorMsg}
                                    </p>
                                )}
                            </form>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
