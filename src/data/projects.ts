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
          "Designed a Retrieval-Augmented Generation system: ChromaDB stores vectorized complaint embeddings, semantic search retrieves the most relevant complaints, FLAN-T5 generates responses strictly grounded in retrieved context, and hallucination guardrails validate every response against source documents.",
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
      "Complaint Data -> Embeddings -> ChromaDB -> Semantic Retrieval -> FLAN-T5 Generation -> Guardrail Validation -> Next.js Dashboard",
  },
];
