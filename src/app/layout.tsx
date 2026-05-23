import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohit Koli | Freelance Web Developer, Programmer & Coder",
  description: "Mohit Koli is a top Web Developer, Programmer, and Software Coder specializing in React, Next.js, PHP, and Laravel. Contract Mohit Koli for expert web services.",
  keywords: ["Mohit Koli", "mohit koli", "mohitkoli.info", "Web Developer", "Programmer", "Coder", "Software Coder", "Full Stack Developer", "React Developer", "PHP Developer", "Laravel Developer", "JavaScript Programmer", "Node.js Developer", "Frontend Developer", "Backend Developer", "Portfolio", "Software Engineer", "Freelance Developer"],
  authors: [{ name: "Mohit Koli", url: "https://mohitkoli.info" }],
  publisher: "Mohit Koli",
  metadataBase: new URL("https://mohitkoli.info"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Mohit Koli - Professional Web Developer, Programmer & Coder",
    description: "Professional Web Developer, Coder, and Full Stack Programmer with 2+ years of experience. Specializing in React, PHP, Laravel, Node.js, and modern web technologies.",
    type: "website",
    url: "https://mohitkoli.info/",
    siteName: "Mohit Koli Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/assets/mohit-koli-profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Koli - Professional Web Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Koli - Professional Web Developer | Coder | Programmer",
    description: "Expert Web Developer and Full Stack Programmer with 2+ years of experience. High-end React and scalable PHP/Laravel engineering.",
    images: ["/assets/mohit-koli-profile-photo.jpg"],
    creator: "@mohitko86979490",
    site: "@mohitko86979490",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/mohit-koli-profile-photo.jpg",
    shortcut: "/favicon.ico",
  },
  category: "technology",
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedCursor from "@/components/AnimatedCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased font-sans"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <AnimatedCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Mohit Koli",
                "url": "https://mohitkoli.info",
                "image": "https://mohitkoli.info/assets/mohit-koli-profile-photo.jpg",
                "jobTitle": "Senior Full Stack Developer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Sheopals Pvt Ltd"
                },
                "sameAs": [
                    "https://github.com/mohit16161600",
                    "https://www.linkedin.com/in/mohit-koli-b47260213",
                    "https://x.com/mohitko86979490",
                    "https://www.instagram.com/mohit12162/"
                ],
                "description": "Senior Full Stack Developer and Freelance Web Specialist expert in React, Next.js, and PHP Laravel Development.",
                "knowsAbout": ["Web Development", "React", "Next.js", "PHP", "Laravel", "Node.js", "SEO", "UI/UX Design"]
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "Mohit Koli - Web Development Services",
                "image": "https://mohitkoli.info/assets/mohit-koli-profile-photo.jpg",
                "areaServed": [
                  { "@type": "City", "name": "Delhi" },
                  { "@type": "City", "name": "Mumbai" },
                  { "@type": "City", "name": "Gurugram" },
                  { "@type": "City", "name": "Noida" },
                  { "@type": "City", "name": "Bangalore" },
                  { "@type": "City", "name": "Hyderabad" },
                  { "@type": "City", "name": "Chennai" },
                  { "@type": "City", "name": "Pune" },
                  { "@type": "City", "name": "Kolkata" },
                  { "@type": "City", "name": "Ahmedabad" },
                  { "@type": "State", "name": "Maharashtra" },
                  { "@type": "State", "name": "Karnataka" },
                  { "@type": "State", "name": "Gujarat" },
                  { "@type": "Country", "name": "India" }
                ],
                "description": "Top-rated freelance Web Developer providing high-performance React, Next.js, and PHP Laravel solutions.",
                "url": "https://mohitkoli.info",
                "priceRange": "$$",
                "telephone": "+91 8383868837",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "IN"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Mohit Koli | Senior Full Stack Developer",
                "url": "https://mohitkoli.info",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://mohitkoli.info/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}
