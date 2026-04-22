import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { constructMetadata, generatePersonJsonLd } from "@/lib/metadata";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonJsonLd()),
          }}
        />
      </head>
      <body>
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
