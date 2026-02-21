import { blogPosts } from "@/data/blog";
import { constructMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import BlogPostPage from "./BlogPostPage";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};
    return constructMetadata({
        title: `${post.title} | Gemechu Alemu`,
        description: post.excerpt,
        path: `/blog/${post.slug}`,
    });
}

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) notFound();
    return <BlogPostPage post={post} />;
}
