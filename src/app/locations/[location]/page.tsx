import { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationHero from "@/components/LocationHero";
import About from "@/components/About";
import Qualification from "@/components/Qualification";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import InfiniteTechMarquee from "@/components/InfiniteTechMarquee";
import { SEO_LOCATIONS } from "@/data/locations";

export const dynamicParams = true;

export function generateStaticParams() {
    return SEO_LOCATIONS.map((location) => ({
        location: location.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const locationSlug = resolvedParams.location.toLowerCase();
    const locationData = SEO_LOCATIONS.find((l) => l.slug === locationSlug);

    const locationName = locationData ? locationData.name : locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);

    return {
        title: `Best Web Developer in ${locationName} | Mohit Koli`,
        description: `Looking for the best web developer in ${locationName}? Mohit Koli is a top rated Freelance Web Developer, Software Programmer, and Coder specializing in React, Next.js, and PHP Laravel serving ${locationName}.`,
        alternates: {
            canonical: `https://mohitkoli.info/developer-in-${locationSlug}`,
        },
    };
}

export default async function LocationPage({ params }: { params: Promise<{ location: string }> }) {
    const resolvedParams = await params;
    const locationSlug = resolvedParams.location.toLowerCase();
    const locationData = SEO_LOCATIONS.find((l) => l.slug === locationSlug);

    const locationName = locationData ? locationData.name : locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);

    return (
        <>
            <LocationHero locationName={locationName} />
            <InfiniteTechMarquee />
            <About />
            <div className="content-auto">
                <Qualification />
            </div>
            <div className="content-auto">
                <Experience />
            </div>
            <div className="content-auto">
                <Skills />
            </div>
            <div className="content-auto">
                <Projects />
            </div>
            <div className="content-auto">
                <Contact />
            </div>
        </>
    );
}
