export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "building-production-rag-pipeline",
        title: "Building a Production RAG Pipeline with Guardrails",
        excerpt:
            "A deep dive into designing retrieval-augmented generation systems that never hallucinate — covering vector stores, retrieval strategies, and response validation at scale.",
        date: "2025-12-15",
        readTime: "12 min",
        category: "AI Engineering",
        tags: ["RAG", "LLM", "ChromaDB", "Production ML"],
    },
    {
        slug: "system-design-ml-inference",
        title: "System Design for ML Inference at Scale",
        excerpt:
            "How to design low-latency ML serving systems — from model optimization and batching strategies to horizontal scaling and monitoring in production.",
        date: "2025-11-20",
        readTime: "15 min",
        category: "System Design",
        tags: ["System Design", "ML Ops", "Scalability", "FastAPI"],
    },
    {
        slug: "competitive-programming-better-engineer",
        title: "Why Competitive Programming Makes You a Better Engineer",
        excerpt:
            "After 1000+ problems, here's how algorithmic thinking transforms your approach to system design, debugging, and writing production code.",
        date: "2025-10-05",
        readTime: "8 min",
        category: "Engineering",
        tags: ["Competitive Programming", "Algorithms", "Career"],
    },
];
