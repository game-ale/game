"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { useTranslation, LOCALES } from "@/i18n/LanguageContext";
import { LocaleCode } from "@/i18n/types";

export default function Navbar() {
    const { t, locale, setLocale } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    const [theme, setTheme] = useState<"dark" | "light">(() => {
        if (typeof window === "undefined") {
            return "dark";
        }
        return (localStorage.getItem("theme") as "dark" | "light" | null) ?? "dark";
    });

    const navLinks = [
        { label: t.nav.projects, href: "#projects" },
        { label: t.nav.arsenal, href: "#arsenal" },
        { label: t.nav.experience, href: "#experience" },
        { label: t.nav.algorithms, href: "#algorithms" },
        { label: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
                setLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    };

    const handleLanguageChange = (code: LocaleCode) => {
        setLocale(code);
        setLangDropdownOpen(false);
    };

    return (
        <motion.header
            className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            role="banner"
        >
            <nav className={`${styles.nav} container`} role="navigation" aria-label="Main navigation">
                <Link href="/" className={styles.logo} aria-label="Gemechu Alemu - Home">
                    <span className={styles.logoSymbol}>{"<"}</span>
                    GA
                    <span className={styles.logoSymbol}>{"/>"}</span>
                </Link>

                {/* Desktop */}
                <ul className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className={styles.navLink}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.navActions}>
                    {/* Language Switcher */}
                    <div className={styles.langSwitcher} ref={langDropdownRef}>
                        <button 
                            className={styles.langToggle}
                            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                            aria-label="Change language"
                            aria-expanded={langDropdownOpen}
                        >
                            <Globe size={16} />
                            <span>{LOCALES.find(l => l.code === locale)?.label}</span>
                            <span className={`${styles.langChevron} ${langDropdownOpen ? styles.langChevronOpen : ""}`}>▾</span>
                        </button>
                        
                        <AnimatePresence>
                            {langDropdownOpen && (
                                <motion.div
                                    className={styles.langDropdown}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {LOCALES.map((l) => (
                                        <button
                                            key={l.code}
                                            className={`${styles.langOption} ${locale === l.code ? styles.langActive : ""}`}
                                            onClick={() => handleLanguageChange(l.code)}
                                        >
                                            <span className={styles.langOptionLabel}>{l.label}</span>
                                            <span className={styles.langOptionNative}>{l.nativeName}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Theme toggle */}
                    <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {theme === "dark" ? (
                                <motion.div
                                    key="sun"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Sun size={18} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Moon size={18} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>

                    <a
                        href="https://drive.google.com/file/d/1H5CeCUmDFihHhs98QS5piNHe7tXOfPIp/view?usp=sharing"
                        className={styles.resumeBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t.nav.resume}
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        role="menu"
                    >
                        <ul className={styles.mobileLinks}>
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    role="menuitem"
                                >
                                    <a
                                        href={link.href}
                                        className={styles.navLink}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
