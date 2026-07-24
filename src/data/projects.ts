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
    slug: "shopally-ai",
    title: "ShopAlly AI",
    subtitle: "AI-Powered Shopping Assistant",
    description:
      "A bilingual (Amharic/English) AI shopping assistant for Ethiopian consumers. Integrates OpenAI for smart product recommendations, AliExpress/Alibaba APIs for real-time data, and live ETB currency conversion with image search support.",
    heroMetric: { value: "AI", label: "Powered Search" },
    techStack: [
      "Next.js",
      "Node.js",
      "OpenAI API",
      "Tailwind CSS",
      "AliExpress API",
      "Framer Motion",
    ],
    live: "https://shop-ally-ai.vercel.app/",
    thumbnail: "/images/projects/shopally/home.png",
    screenshots: [
      "/images/projects/shopally/home.png",
      "/images/projects/shopally/how-it-works.png",
      "/images/projects/shopally/users.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Ethiopian consumers shopping on international platforms like AliExpress face three major barriers: language (most platforms are English-only), pricing confusion (no ETB conversion), and information overload (thousands of products with no smart filtering). There was no localized, intelligent shopping tool tailored for the Ethiopian market.",
      },
      {
        title: "Solution & Architecture",
        content:
          "Built a full-stack AI shopping assistant using Next.js for the frontend and Node.js for the backend. Integrated OpenAI API for natural language understanding in both Amharic and English, enabling users to type queries in their preferred language. Connected official AliExpress/Alibaba APIs to fetch real-time product data, prices, and reviews.",
      },
      {
        title: "Bilingual AI & Image Search",
        content:
          "The AI engine understands both Amharic and English queries, making it accessible to a broader Ethiopian audience. Additionally, users can upload product images to find exact or similar items powered by custom image search integration that matches visual features against the product catalog.",
      },
      {
        title: "ETB-Aware Pricing & Comparison",
        content:
          "Engineered a real-time currency conversion system that displays all prices in Ethiopian Birr (ETB) with live foreign exchange updates. The comparison feature enables side-by-side product analysis across different sellers, helping users find the best deals with accurate local pricing.",
      },
      {
        title: "Impact & Results",
        content:
          "Deployed on Vercel with a responsive, modern UI featuring glassmorphism design. Serves Ethiopian consumers with bilingual AI recommendations, real-time ETB pricing, image search, and price comparison all in a single unified platform. Received positive user feedback for its Amharic support and intuitive experience.",
      },
    ],
    metrics: [
      { value: "2", label: "Languages (AM/EN)" },
      { value: "Live", label: "ETB Pricing" },
      { value: "AI", label: "Image Search" },
      { value: "API", label: "Real-time Data" },
    ],
    architectureDescription:
      "User Query (Amharic/English) -> OpenAI NLP -> AliExpress API -> ETB Conversion -> Smart Recommendations -> Next.js UI",
    directLink: "https://shop-ally-ai.vercel.app/",
  },
  {
    slug: "ethiopia-bank-services",
    title: "Ethiopian Bank Services",
    subtitle: "Fintech Services Catalog",
    description:
      "A comprehensive catalog of 20+ Ethiopian bank services from USSD codes and mobile banking to payment APIs organized for easy browsing via a modern UI and REST API.",
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
          "Banks in Ethiopia offer many digital services like mobile banking, USSD codes, QR payments, and utility bills but the information is scattered across websites, apps, and brochures. There was no single, structured source for developers, researchers, or end-users to browse and compare bank services.",
      },
      {
        title: "Solution & Architecture",
        content:
          "Built a Next.js 13+ App Router application with TypeScript that organizes publicly available bank service data into a structured JSON/TS format. REST-style API routes serve the data programmatically, while React components provide an intuitive browsing UI with search, filtering, and bank-specific detail pages.",
      },
      {
        title: "Data Coverage",
        content:
          "Covers 20+ Ethiopian banks including CBE, Dashen, Awash, Abyssinia, Wegagen, Cooperative Bank of Oromia, Zemen, and Nib International. Services cataloged include airtime and data recharge, airline ticket payments, utility bills (electricity, water), government payments, merchant and QR payments, and transport and fuel payments.",
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
      "Static Data (JSON/TS) -> Next.js API Routes -> React UI -> Vercel Deployment",
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
          "Built a full ELT pipeline: Telethon scrapes 650+ messages from medical Telegram channels, dbt transforms raw data through staging, intermediate, and mart layers, Dagster orchestrates the entire pipeline with scheduling and monitoring, and PostgreSQL star schema stores the dimensional model.",
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
      "Telegram -> Telethon Scraper -> Raw PostgreSQL -> dbt (Staging -> Intermediate -> Marts) -> Dagster Orchestration -> FastAPI -> Next.js Dashboard",
  },
  {
    slug: "creditrust",
    title: "CrediTrust",
    subtitle: "Enterprise RAG Complaint Platform",
    description:
      "An enterprise-grade Retrieval-Augmented Generation (RAG) platform engineered to process and analyze 500,000+ Consumer Financial Protection Bureau (CFPB) complaints with live WebSocket streaming, FAISS vector search, and strict hallucination guardrails.",
    heroMetric: { value: "500K+", label: "Complaints Analyzed" },
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Flan-T5",
      "FAISS",
      "HuggingFace",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
    ],
    github: "https://github.com/game-ale/rag-complaint-chatbot",
    thumbnail: "/images/projects/creditrust/thumbnail.png",
    screenshots: [
      "/images/projects/creditrust/thumbnail.png",
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
          "Financial institutions receive hundreds of thousands of consumer complaints but lack intelligent tools to analyze patterns, extract actionable insights, and generate compliance answers. Processing 500,000+ CFPB records demands high performance, zero AI hallucinations, and robust security.",
      },
      {
        title: "Solution & Microservices Architecture",
        content:
          "Built a dockerized microservices architecture with Next.js frontend, FastAPI backend, NGINX reverse proxy, PostgreSQL database, and local Flan-T5 LLM integration. Semantic search is powered by FAISS vector index and HuggingFace embeddings.",
      },
      {
        title: "Streaming RAG Pipeline & Guardrails",
        content:
          "Engineered live WebSocket response streaming powered by Flan-T5. Strict hallucination guardrails validate generated responses against retrieved complaint narratives to guarantee 100% grounded answers.",
      },
      {
        title: "Analytics Engine & JWT Security",
        content:
          "Developed a dynamic StatsEngine that parses 500,000+ CFPB complaint records to deliver real-time KPIs, issue distributions, and month-over-month trends, secured via stateless JWT authentication.",
      },
      {
        title: "Impact & Evaluation Results",
        content:
          "Evaluated against 10 multi-category financial complaint queries, achieving a 4.8/5.0 score across accuracy, grounding, and completeness matrices with zero hallucinations.",
      },
    ],
    metrics: [
      { value: "500K+", label: "Complaints Analyzed" },
      { value: "100%", label: "Grounded Responses" },
      { value: "4.8/5", label: "RAG Evaluation Score" },
      { value: "<1s", label: "Query Response" },
    ],
    architectureDescription:
      "500K+ CFPB Complaints -> HuggingFace Embeddings -> FAISS Vector Store -> Semantic Retrieval -> Flan-T5 LLM -> WebSocket Streaming -> Next.js Glassmorphic UI",
  },
  {
    slug: "breast-cancer-prediction-engine",
    title: "Breast Cancer Prediction Engine",
    subtitle: "ML Diagnostic Classification System",
    description:
      "An end-to-end machine learning diagnostic pipeline and Streamlit web application that classifies breast tumors as benign or malignant with 98.25% accuracy using 5 ML algorithms.",
    heroMetric: { value: "98.25%", label: "Accuracy" },
    techStack: [
      "Python",
      "Scikit-Learn",
      "Streamlit",
      "Pandas",
      "PCA",
      "Seaborn",
      "Jupyter",
    ],
    github: "https://github.com/game-ale/Breast_Cancer_Prediction_Engine",
    thumbnail: "/images/projects/breast-cancer/banner.png",
    screenshots: [
      "/images/projects/breast-cancer/banner.png",
      "/images/projects/breast-cancer/model_comparison.png",
      "/images/projects/breast-cancer/roc_curves.png",
      "/images/projects/breast-cancer/confusion_matrices.png",
      "/images/projects/breast-cancer/pca_2d.png",
      "/images/projects/breast-cancer/feature_importance.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Breast cancer is one of the leading causes of cancer mortality worldwide. Traditional diagnostic methods depend on visual cell inspection, which can carry subjective error rates up to 20%. Medical professionals require robust computer-aided diagnostic (CAD) systems to boost diagnostic precision and minimize missed malignant cases.",
      },
      {
        title: "Dataset & Preprocessing",
        content:
          "Utilized the UCI Breast Cancer Wisconsin (Diagnostic) Dataset containing 569 samples with 30 nuclear feature characteristics (radius, texture, concavity, fractal dimension). Preprocessed data using StandardScaler normalization and stratified 80/20 train/test splitting to preserve class balance.",
      },
      {
        title: "Dimensionality Reduction & Feature Selection",
        content:
          "Engineered 2D PCA (Principal Component Analysis) projections to map 30 dimensions down to 2 principal components while preserving maximum variance. Performed feature importance analysis using Random Forest tree ensembles to isolate key diagnostic markers such as worst concave points, worst perimeter, and worst radius.",
      },
      {
        title: "Multi-Model Evaluation & Cross-Validation",
        content:
          "Trained and benchmarked 5 machine learning models: Logistic Regression, Support Vector Machine (SVM), Random Forest, K-Nearest Neighbors (KNN), and Gradient Boosting. Evaluated models across Accuracy, Precision, Recall, F1-Score, ROC-AUC curves, Precision-Recall curves, and 5-fold Stratified Cross-Validation.",
      },
      {
        title: "Streamlit App & Diagnostic Impact",
        content:
          "Achieved top-tier performance with 98.25% test accuracy and 0.9954 AUC (Logistic Regression & SVM) with only 1 false positive and 1 false negative. Built an interactive Streamlit inference app allowing clinicians to adjust patient tumor measurements in real time and receive instant diagnostic probability scores.",
      },
    ],
    metrics: [
      { value: "98.25%", label: "Diagnostic Accuracy" },
      { value: "0.9954", label: "ROC-AUC Score" },
      { value: "5", label: "Models Benchmarked" },
      { value: "569", label: "Clinical Samples" },
    ],
    architectureDescription:
      "Clinical FNA Features (30 metrics) -> StandardScaler -> Dimensionality Reduction (PCA) -> 5 Classifier Models -> Confusion Matrix & ROC Evaluation -> Streamlit App Inference",
  },
  {
    slug: "smart-farmer",
    title: "Smart GPS Fields Area Measure",
    subtitle: "Offline-First Mobile Land Measurement App",
    description:
      "An offline-first Flutter mobile application designed for Ethiopian smallholder farmers to measure farmland boundaries accurately using real-time GPS tracking and manual tap modes, featuring custom tile caching, local unit conversions (Mide), and Amharic/Afaan Oromoo localization.",
    heroMetric: { value: "100%", label: "Offline First" },
    techStack: [
      "Flutter",
      "Dart",
      "flutter_bloc",
      "Hive",
      "Geolocator",
      "flutter_map",
      "Clean Architecture",
    ],
    github: "https://github.com/game-ale/smart_Farmer",
    thumbnail: "/images/projects/smart-farmer/GPS_Mode_measurent_page.png",
    screenshots: [
      "/images/projects/smart-farmer/GPS_Mode_measurent_page.png",
      "/images/projects/smart-farmer/measurement_mode_page.png",
      "/images/projects/smart-farmer/measred_history_field.png",
      "/images/projects/smart-farmer/Finding_map_and_download.png",
      "/images/projects/smart-farmer/meastured_feild_history_indvidual_deatial.png",
      "/images/projects/smart-farmer/localitation_setting_page.png",
    ],
    sections: [
      {
        title: "Problem",
        content:
          "Most Ethiopian smallholder farmers do not have access to professional land surveying tools, and many rural agricultural areas lack internet connectivity. Measuring farmland accurately is crucial for seed distribution, fertilizer planning, estimating crop yields, and land management.",
      },
      {
        title: "Architecture & Tech Stack",
        content:
          "Engineered using Flutter & Dart following Clean Architecture and Domain-Driven Design (DDD) principles. Features BLoC state management, Hive local database storage with soft-delete capabilities, GoRouter with persistent bottom navigation, and GetIt dependency injection.",
      },
      {
        title: "Dual Measurement Modes & Smart GPS Safeguards",
        content:
          "Supports physical walking perimeter tracking with real-time GPS boundary drop points, as well as manual tap mode on map views. Includes an intelligent GPS accuracy monitor that auto-pauses measurement if signal error exceeds 5 meters to prevent faulty data collection.",
      },
      {
        title: "Custom Offline Caching & Spherical Math",
        content:
          "Integrates flutter_map with a custom LRU tile cache engine, allowing field measurement and map rendering in zero-connectivity rural environments. Uses maps_toolkit spherical geometry algorithms to compute precise field perimeters and surface areas.",
      },
      {
        title: "Ethiopian Localization & Local Units",
        content:
          "Fully localized in Amharic (አማርኛ) and Afaan Oromoo alongside English. Supports standard metric units (ha, m²) alongside traditional Ethiopian land measurement units such as Mide (ሚዴ). Developed as an academic project at Adama Science and Technology University (ASTU).",
      },
    ],
    metrics: [
      { value: "100%", label: "Offline Capability" },
      { value: "3", label: "Languages (EN/AM/OM)" },
      { value: "2", label: "Measurement Modes" },
      { value: "<5m", label: "GPS Error Threshold" },
    ],
    architectureDescription:
      "GPS Sensor / Touch Inputs -> Geolocator / Maps Toolkit -> BLoC State Management -> Hive Local Storage -> Flutter UI (Amharic / Afaan Oromoo / English)",
  },
];

