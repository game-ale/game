import { constructMetadata } from "@/lib/metadata";
import BlogListPage from "./BlogListPage";

export const metadata = constructMetadata({
    title: "Blog — Engineering Articles | Gemechu Alemu",
    description:
        "Deep dives into system design, AI engineering, RAG pipelines, and competitive programming.",
    path: "/blog",
});

export default function BlogPage() {
    return <BlogListPage />;
}
