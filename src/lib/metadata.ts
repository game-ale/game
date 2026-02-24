import type { Metadata } from "next";

const siteConfig = {
    name: "Gemechu Alemu",
    title: "Gemechu Alemu — AI Systems Engineer",
    description:
        "AI Systems Engineer building scalable, production-grade intelligence platforms. Specializing in ML pipelines, RAG systems, and high-performance APIs.",
    url: "https://gemechualemu.dev",
    ogImage: "/og-image.png",
    links: {
        github: "https://github.com/game-ale/",
        linkedin:
            "https://www.linkedin.com/in/gemechu-alemu-bedasa-9a5185338/",
        leetcode: "https://leetcode.com/u/game_ale/",
        codeforces: "https://codeforces.com/profile/gemechualemu",
        zindi: "https://zindi.africa/users/game_ale",
        email: "alemugemechu44@gmail.com",
        resume: "https://drive.google.com/file/d/1H5CeCUmDFihHhs98QS5piNHe7tXOfPIp/view?usp=sharing",
    },
};

export function constructMetadata({
    title = siteConfig.title,
    description = siteConfig.description,
    path = "",
}: {
    title?: string;
    description?: string;
    path?: string;
} = {}): Metadata {
    const url = `${siteConfig.url}${path}`;
    return {
        title,
        description,
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: "en_US",
            type: "website",
            images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [siteConfig.ogImage],
        },
        alternates: { canonical: url },
        robots: { index: true, follow: true },
        icons: {
            icon: "/favicon.svg",
            shortcut: "/favicon.svg",
            apple: "/favicon.svg",
        },
    };
}

export function generatePersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Gemechu Alemu",
        jobTitle: "AI Systems Engineer",
        url: siteConfig.url,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.leetcode,
            siteConfig.links.codeforces,
        ],
        email: siteConfig.links.email,
        knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "System Design",
            "Competitive Programming",
            "Full-Stack Development",
        ],
    };
}

export { siteConfig };

