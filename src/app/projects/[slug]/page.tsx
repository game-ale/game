import { projects } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import CaseStudyPage from "./CaseStudyPage";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};
    return constructMetadata({
        title: `${project.title} — Case Study | Gemechu Alemu`,
        description: project.description,
        path: `/projects/${project.slug}`,
    });
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();
    return <CaseStudyPage project={project} />;
}
