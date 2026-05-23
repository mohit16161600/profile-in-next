import { permanentRedirect } from "next/navigation";
import { getLocationBySlug } from "@/data/locations";

export const dynamicParams = true;

export function generateStaticParams() {
    return [];
}

export default async function LegacyLocationPage({ params }: { params: Promise<{ location: string }> }) {
    const { location } = await params;
    const locationData = getLocationBySlug(location);

    if (locationData) {
        permanentRedirect(`/developer-in/${locationData.slug}`);
    }

    permanentRedirect("/locations");
}
