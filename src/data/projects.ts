export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroMetric: { value: string; label: string };
  techStack: string[];
  github?: string;
  live?: string;
  thumbnail?: string;
  screenshots?: string[];
  sections: CaseStudySection[];
  metrics: Metric[];
  architectureDescription: string;
  directLink?: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const projects: Project[] = [
  {
    slug: "ethiopia-bank-services",
    title: "Ethiopian Bank Services",
    subtitle: "Fintech Services Catalog",
    description:
      "A comprehensive catalog of 20+ Ethiopian bank services — from USSD codes and mobile banking to payment APIs — organized for easy browsing via a modern UI and REST API.",
    heroMetric: { value: "20+", label: "Banks Covered" },
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "React",
    ],
    live: "https://ethiopia-bank-services.vercel.app/",
    thumbnail: "/images/projects/ethiobank/home.png",
    screenshots: [
      "/images/projects/ethiobank/home.png",
      "/images/projects/ethiobank/banks.png",
      "/images/projects/ethiobank/service.png",
      "/images/projects/ethiobank/exchange-rate.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Banks in Ethiopia offer many digital services — mobile banking, USSD codes, QR payments, utility bills — but the information is scattered across websites, apps, and brochures. There was no single, structured source for developers, researchers, or end-users to browse and compare bank services.",
      },
      {
        title: "Solution & Architecture",
        content:
          "Built a Next.js 13+ App Router application with TypeScript that organizes publicly available bank service data into a structured JSON/TS format. REST-style API routes serve the data programmatically, while React components provide an intuitive browsing UI with search, filtering, and bank-specific detail pages.",
      },
      {
        title: "Data Coverage",
        content:
          "Covers 20+ Ethiopian banks including CBE, Dashen, Awash, Abyssinia, Wegagen, Cooperative Bank of Oromia, Zemen, and Nib International. Services cataloged include airtime & data recharge, airline ticket payments, utility bills (electricity, water), government payments, merchant & QR payments, and transport & fuel payments.",
      },
      {
        title: "Use Cases",
        content:
          "Designed as a base for fintech development, academic research, and educational purposes. The structured API enables third-party apps to integrate bank service data, while the UI serves as a reference tool for comparing services across institutions.",
      },
      {
        title: "Impact & Results",
        content:
          "Deployed on Vercel with instant access to structured data for 20+ banks. Provides a clean REST API for programmatic access and a modern, responsive UI for manual browsing. Serves as a unique open-source resource for Ethiopia's fintech ecosystem.",
      },
    ],
    metrics: [
      { value: "20+", label: "Banks Covered" },
      { value: "50+", label: "Services Cataloged" },
      { value: "REST", label: "API Access" },
      { value: "Live", label: "On Vercel" },
    ],
    architectureDescription:
      "Static Data (JSON/TS) → Next.js API Routes → React UI → Vercel Deployment",
    directLink: "https://ethiopia-bank-services.vercel.app/",
  },
  {
    slug: "ethiomedIntel",
    title: "EthioMedIntel",
    subtitle: "Medical Intelligence Platform",
    description:
      "An end-to-end medical data intelligence platform that scrapes, transforms, and classifies Telegram health data using production-grade ETL pipelines and YOLOv8 computer vision.",
    heroMetric: { value: "650+", label: "Messages Processed" },
    techStack: [
      "Python",
      "Telethon",
      "dbt",
      "Dagster",
      "FastAPI",
      "YOLOv8",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    github:
      "https://github.com/game-ale/EthioMedIntel-Medical-Telegram-Intelligence-Platform",
    thumbnail: "/images/projects/ethiomedintel/dashboard.png",
    screenshots: [
      "/images/projects/ethiomedintel/dashboard.png",
      "/images/projects/ethiomedintel/searching.png",
      "/images/projects/ethiomedintel/detail-result.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Ethiopian medical professionals share critical health information through Telegram channels, but this data is unstructured, scattered, and inaccessible for systematic analysis. There was no pipeline to ingest, clean, model, and serve this data for decision-making.",
      },
      {
        title: "Architecture & Pipeline",
        content:
          "Built a full ELT pipeline: Telethon scrapes 650+ messages from medical Telegram channels → dbt transforms raw data through staging, intermediate, and mart layers → Dagster orchestrates the entire pipeline with scheduling and monitoring → PostgreSQL star schema stores the dimensional model.",
      },
      {
        title: "ML & Computer Vision",
        content:
          "Integrated YOLOv8 for medical image classification, achieving 80%+ accuracy on health-related visual content. The model classifies images shared in Telegram channels to detect medical conditions and categorize content types.",
      },
      {
        title: "API & Dashboard",
        content:
          "Developed a FastAPI backend with 10+ RESTful endpoints serving cleaned, transformed data. Built a Next.js 16 dashboard with interactive visualizations, real-time data exploration, and comprehensive analytics views.",
      },
      {
        title: "Impact & Results",
        content:
          "Processed 650+ medical messages through a fully automated pipeline. Achieved 80%+ image classification accuracy. Delivered 10+ API endpoints with sub-200ms response times. Created a production-ready dashboard for medical data analysis.",
      },
    ],
    metrics: [
      { value: "650+", label: "Messages Processed" },
      { value: "80%+", label: "YOLOv8 Accuracy" },
      { value: "10+", label: "API Endpoints" },
      { value: "5", label: "Pipeline Stages" },
    ],
    architectureDescription:
      "Telegram → Telethon Scraper → Raw PostgreSQL → dbt (Staging → Intermediate → Marts) → Dagster Orchestration → FastAPI → Next.js Dashboard",
  },
  {
    slug: "creditrust",
    title: "CrediTrust",
    subtitle: "RAG Analytics Platform",
    description:
      "A Retrieval-Augmented Generation platform that analyzes 15,000+ consumer complaints with strict hallucination guardrails, delivering 100% grounded responses through FLAN-T5 and ChromaDB.",
    heroMetric: { value: "15K+", label: "Complaints Analyzed" },
    techStack: [
      "Python",
      "FLAN-T5",
      "ChromaDB",
      "Next.js",
      "Recharts",
      "Framer Motion",
      "FastAPI",
    ],
    github: "https://github.com/game-ale/rag-complaint-chatbot",
    thumbnail: "/images/projects/creditrust/dashboard.png",
    screenshots: [
      "/images/projects/creditrust/dashboard.png",
      "/images/projects/creditrust/ai-response.png",
      "/images/projects/creditrust/history.png",
      "/images/projects/creditrust/system-core.png",
      "/images/projects/creditrust/market-analysis.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Financial institutions receive thousands of consumer complaints but lack intelligent tools to analyze patterns, generate insights, and respond with verified, grounded information. Traditional chatbots hallucinate and provide unreliable answers.",
      },
      {
        title: "RAG Architecture",
        content:
          "Designed a Retrieval-Augmented Generation system: ChromaDB stores vectorized complaint embeddings → semantic search retrieves the most relevant complaints → FLAN-T5 generates responses strictly grounded in retrieved context → hallucination guardrails validate every response against source documents.",
      },
      {
        title: "Hallucination Prevention",
        content:
          "Implemented strict guardrail mechanisms that cross-reference every generated response against source documents. Achieved 100% grounded responses by rejecting any output that cannot be traced back to the original complaint data.",
      },
      {
        title: "Frontend & Visualization",
        content:
          "Built a glassmorphism Next.js UI with Recharts for complaint analytics dashboards and Framer Motion for fluid interactions. The interface provides real-time querying, trend visualization, and interactive complaint exploration.",
      },
      {
        title: "Impact & Results",
        content:
          "Analyzed 15,000+ consumer complaints with zero hallucinated responses. Delivered a production-grade RAG system with sub-second query times and complete response traceability.",
      },
    ],
    metrics: [
      { value: "15K+", label: "Complaints Analyzed" },
      { value: "100%", label: "Grounded Responses" },
      { value: "0", label: "Hallucinations" },
      { value: "<1s", label: "Query Response" },
    ],
    architectureDescription:
      "Complaint Data → Embeddings → ChromaDB → Semantic Retrieval → FLAN-T5 Generation → Guardrail Validation → Next.js Dashboard",
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection System",
    subtitle: "E-commerce & Banking Transactions",
    description:
      "A machine learning system for detecting fraudulent transactions using advanced feature engineering, imbalanced data handling, and model explainability with SHAP.",
    heroMetric: { value: "High", label: "AUC-PR Score" },
    techStack: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "SHAP",
      "Pandas",
      "Matplotlib",
    ],
    github:
      "https://github.com/game-ale/Fraud-Detection-System-E-commerce-Banking-Transactions",
    sections: [
      {
        title: "Problem",
        content:
          "E-commerce and banking platforms face massive financial losses from fraudulent transactions. The challenge is detecting fraud in highly imbalanced datasets where fraudulent transactions represent less than 1% of all data, making traditional classification approaches ineffective.",
      },
      {
        title: "Feature Engineering",
        content:
          "Designed advanced features including geolocation-based anomaly detection (comparing transaction locations with user history), behavioral pattern analysis (spending velocity, time-of-day patterns), and transaction graph features to capture relational fraud patterns.",
      },
      {
        title: "Modeling & Imbalance Handling",
        content:
          "Applied SMOTE (Synthetic Minority Over-sampling Technique) to address severe class imbalance. Trained ensemble models with hyperparameter optimization. Evaluated using AUC-PR and F1 metrics specifically chosen for imbalanced classification.",
      },
      {
        title: "Explainability",
        content:
          "Integrated SHAP (SHapley Additive exPlanations) for full model explainability. Generated feature importance visualizations, individual prediction explanations, and global model behavior analysis to ensure trust and transparency in fraud decisions.",
      },
      {
        title: "Impact & Results",
        content:
          "Achieved high AUC-PR scores on highly imbalanced data. Delivered interpretable fraud predictions with SHAP explanations for every flagged transaction. Built a reproducible ML pipeline with comprehensive evaluation metrics.",
      },
    ],
    metrics: [
      { value: "High", label: "AUC-PR Score" },
      { value: "SMOTE", label: "Imbalance Solution" },
      { value: "SHAP", label: "Explainability" },
      { value: "3", label: "Feature Categories" },
    ],
    architectureDescription:
      "Raw Transactions → Feature Engineering (Geo + Behavioral) → SMOTE Resampling → Model Training → SHAP Explainability → Prediction API",
  },
  {
    slug: "hotel-booking-pro",
    title: "Hotel Booking & Management",
    subtitle: "Clean Architecture & BLoC MVP",
    description:
      "A production-ready, scalable Flutter application built with Uncle Bob’s Clean Architecture. Unified platform connecting travelers, hotel owners, and admins with atomic transactions and real-time mapping.",
    heroMetric: { value: "MVP", label: "Production Ready" },
    techStack: [
      "Flutter",
      "Firebase",
      "BLoC",
      "GoRouter",
      "GetIt",
      "Google Maps",
      "fpdart",
    ],
    github: "https://github.com/game-ale/hotel-booking-app",
    sections: [
      {
        title: "Problem",
        content:
          "Traditional hotel systems often lack a unified interface for multiple stakeholders. Building a platform that scales across travelers, owners, and admins requires a strict separation of concerns to handle complex data flows, real-time availability, and secure wallet-based payments.",
      },
      {
        title: "Clean Architecture & BLoC",
        content:
          "The project adheres to Uncle Bob’s Clean Architecture, enforcing a strict separation between Presentation, Domain, and Data layers. I used BLoC (Business Logic Component) for predictable state management and GetIt for dependency injection, ensuring the entire codebase is modular, testable, and highly maintainable.",
      },
      {
        title: "Advanced Integrations",
        content:
          "Leveraged the Google Maps Platform for location-centric discovery, including Places API for autocomplete. Implemented a custom closed-loop wallet system for secure payments, using Firebase Cloud Functions to ensure that creating a booking and deducting funds happen atomically.",
      },
      {
        title: "Performance & Offline UX",
        content:
          "Implemented a robust offline strategy using Firestore's persistence and local caching with shared_preferences. The app features image optimization, pagination for hotel feeds, and atomic NoSQL updates to maintain data integrity even in low-connectivity environments.",
      },
      {
        title: "Stakeholder Ecosystem",
        content:
          "Built a multi-role ecosystem with Role-Based Access Control (RBAC). Travelers get interactive discovery; Hotel Owners gain rich property management and revenue analytics; Admins oversee the entire platform via a global 'Super Dashboard' for monitoring platform health and transactions.",
      },
    ],
    metrics: [
      { value: "Clean", label: "Architecture" },
      { value: "BLoC", label: "State Mgmt" },
      { value: "Atomic", label: "Payments" },
      { value: "RBAC", label: "Multi-Role" },
    ],
    architectureDescription:
      "Flutter (BLoC) → Domain (Use Cases) → Data Layer (Firebase + Google Maps) → Atomic Cloud Functions",
  },
];
