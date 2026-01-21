import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit Koli - Top Web Developer & Professional Developer Portfolio",
  description: "Mohit Koli is a top Web Developer and Developer specializing in React, PHP, and Laravel. Expert Web Developer services by Mohit Koli. View portfolio and projects at mohitkoli.info",
  keywords: ["Mohit Koli", "mohit koli", "mohitkoli.info", "Web Developer", "Full Stack Developer", "React Developer", "PHP Developer", "Laravel Developer", "JavaScript Developer", "Node.js Developer", "Frontend Developer", "Backend Developer", "Portfolio", "Resume", "CV", "Software Engineer", "Web Development Services"],
  authors: [{ name: "Mohit Koli" }],
  publisher: "Mohit Koli",
  metadataBase: new URL("https://mohitkoli.info"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mohit Koli - Professional Web Developer | Full Stack Developer",
    description: "Professional Web Developer and Full Stack Developer with 2+ years of experience. Specializing in React, PHP, Laravel, Node.js, and modern web technologies.",
    type: "profile",
    url: "https://mohitkoli.info/",
    images: [
      {
        url: "/assets/mohit-koli-profile-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Koli - Professional Web Developer",
      },
    ],
    firstName: "Mohit",
    lastName: "Koli",
    username: "mohitkoli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Koli - Professional Web Developer | Full Stack Developer",
    description: "Professional Web Developer and Full Stack Developer with 2+ years of experience. Specializing in React, PHP, Laravel, Node.js, and modern web technologies.",
    images: ["/assets/mohit-koli-profile-photo.jpg"],
    creator: "@mohitko86979490",
  },
  icons: {
    icon: [
      { url: "/assets/mohit-koli-profile-photo.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/assets/mohit-koli-profile-photo.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: "/assets/mohit-koli-profile-photo.jpg",
    shortcut: "/assets/mohit-koli-profile-photo.jpg",
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased font-sans bg-gray-50 text-gray-800`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohit Koli",
              url: "https://mohitkoli.info",
              image: "https://mohitkoli.info/assets/mohit-koli-profile-photo.jpg",
              sameAs: [
                "https://www.linkedin.com/in/mohitkoli1/",
                "https://github.com/mohit16161600",
                "https://twitter.com/mohitko86979490",
                "https://www.instagram.com/mohitkoli.1/"
              ],
              jobTitle: "Senior Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              },
              description: "Professional Web Developer specializing in React, PHP, Laravel, and Node.js.",
              knowsAbout: ["Web Development", "React", "Next.js", "PHP", "Laravel", "SEO"]
            }),
          }}
        />
      </body>
    </html>
  );
}
