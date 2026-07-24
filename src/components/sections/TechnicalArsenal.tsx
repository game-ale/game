"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
    Braces,
    BrainCircuit,
    Database,
    Globe,
    Workflow,
} from "lucide-react";
import styles from "./TechnicalArsenal.module.css";

type ArsenalItem = {
    label: string;
    href: string;
};

type ArsenalCategory = {
    translationKey: "languages" | "frameworks" | "mlAi" | "databases" | "devopsMlops";
    icon: typeof Braces;
    items: ArsenalItem[];
    featured?: boolean;
};

const getFaviconUrl = (href: string) => {
    const hostname = new URL(href).hostname;
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
};

const categories = [
    {
        translationKey: "languages",
        icon: Braces,
        items: [
            { label: "Python", href: "https://www.python.org/" },
            { label: "C++", href: "https://isocpp.org/" },
            { label: "Java", href: "https://www.java.com/" },
            { label: "TypeScript", href: "https://www.typescriptlang.org/" },
            { label: "Dart", href: "https://dart.dev/" },
        ],
    },
    {
        translationKey: "frameworks",
        icon: Globe,
        items: [
            { label: "Next.js", href: "https://nextjs.org/" },
            { label: "React", href: "https://react.dev/" },
            { label: "Flutter", href: "https://flutter.dev/" },
            { label: "FastAPI", href: "https://fastapi.tiangolo.com/" },
            { label: "Django", href: "https://www.djangoproject.com/" },
        ],
    },
    {
        translationKey: "mlAi",
        icon: BrainCircuit,
        items: [
            { label: "XGBoost", href: "https://xgboost.readthedocs.io/" },
            { label: "LightGBM", href: "https://lightgbm.readthedocs.io/" },
            { label: "RAG", href: "https://python.langchain.com/docs/concepts/rag/" },
            { label: "SHAP", href: "https://shap.readthedocs.io/" },
            { label: "MLflow", href: "https://mlflow.org/" },
            { label: "Fine-Tuning", href: "https://platform.openai.com/docs/guides/fine-tuning" },
        ],
    },
    {
        translationKey: "databases",
        icon: Database,
        items: [
            { label: "PostgreSQL", href: "https://www.postgresql.org/" },
            { label: "MongoDB", href: "https://www.mongodb.com/" },
            { label: "MySQL", href: "https://www.mysql.com/" },
            { label: "ChromaDB", href: "https://www.trychroma.com/" },
        ],
        featured: true,
    },
    {
        translationKey: "devopsMlops",
        icon: Workflow,
        items: [
            { label: "Docker", href: "https://www.docker.com/" },
            { label: "CI/CD", href: "https://github.com/features/actions" },
            { label: "GitHub Actions", href: "https://github.com/features/actions" },
            { label: "Dagster", href: "https://dagster.io/" },
            { label: "dbt", href: "https://www.getdbt.com/" },
            { label: "MLflow", href: "https://mlflow.org/" },
        ],
    },
    ] satisfies ArsenalCategory[];

import { useTranslation } from "@/i18n/LanguageContext";

export default function TechnicalArsenal() {
    const { t } = useTranslation();

    return (
        <section className={`section ${styles.root}`} id="arsenal">
            <div className="container">
                <SectionHeading
                    label={t.arsenal.label}
                    title={t.arsenal.title}
                    subtitle={t.arsenal.subtitle}
                />

                <div className={styles.stack}>
                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <AnimatedSection key={category.translationKey} delay={index * 0.08}>
                                <GlassCard
                                    padding="md"
                                    className={`${styles.card} ${category.featured ? styles.featured : ""}`}
                                >
                                    <div className={styles.header}>
                                        <div className={styles.iconWrap}>
                                            <Icon size={16} />
                                        </div>
                                        <h3 className={styles.title}>{t.arsenal[category.translationKey]}</h3>
                                    </div>

                                    <div className={styles.items}>
                                        {category.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.itemLink}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={getFaviconUrl(item.href)}
                                                    alt=""
                                                    className={styles.itemLogo}
                                                    loading="lazy"
                                                    width={16}
                                                    height={16}
                                                />
                                                <Badge label={item.label} size="sm" />
                                            </a>
                                        ))}
                                    </div>
                                </GlassCard>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
