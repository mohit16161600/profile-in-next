import { permanentRedirect } from "next/navigation";
import { getLocationBySlug, SEO_LOCATIONS } from "@/data/locations";

export const dynamicParams = false;

export function generateStaticParams() {
    return SEO_LOCATIONS.map((location) => ({
        location: location.slug,
    }));
}

export default async function LegacyLocationPage({ params }: { params: Promise<{ location: string }> }) {
    const { location } = await params;
    const locationData = getLocationBySlug(location);

    if (locationData) {
        permanentRedirect(`/developer-in/${locationData.slug}`);
    }

    permanentRedirect("/locations");
}
