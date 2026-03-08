export interface LocationData {
    slug: string;
    name: string;
    type: 'city' | 'state';
}

export const SEO_LOCATIONS: LocationData[] = [
    // Top Tier Cities
    { slug: 'delhi', name: 'Delhi', type: 'city' },
    { slug: 'mumbai', name: 'Mumbai', type: 'city' },
    { slug: 'gurugram', name: 'Gurugram', type: 'city' },
    { slug: 'noida', name: 'Noida', type: 'city' },
    { slug: 'bangalore', name: 'Bangalore', type: 'city' },
    { slug: 'hyderabad', name: 'Hyderabad', type: 'city' },
    { slug: 'chennai', name: 'Chennai', type: 'city' },
    { slug: 'pune', name: 'Pune', type: 'city' },
    { slug: 'kolkata', name: 'Kolkata', type: 'city' },
    { slug: 'ahmedabad', name: 'Ahmedabad', type: 'city' },
    { slug: 'jaipur', name: 'Jaipur', type: 'city' },
    { slug: 'surat', name: 'Surat', type: 'city' },
    { slug: 'lucknow', name: 'Lucknow', type: 'city' },
    { slug: 'chandigarh', name: 'Chandigarh', type: 'city' },
    { slug: 'indore', name: 'Indore', type: 'city' },

    // Other Major Cities
    { slug: 'patna', name: 'Patna', type: 'city' },
    { slug: 'bhopal', name: 'Bhopal', type: 'city' },
    { slug: 'kanpur', name: 'Kanpur', type: 'city' },
    { slug: 'nagpur', name: 'Nagpur', type: 'city' },
    { slug: 'agra', name: 'Agra', type: 'city' },
    { slug: 'varanasi', name: 'Varanasi', type: 'city' },
    { slug: 'amritsar', name: 'Amritsar', type: 'city' },
    { slug: 'coimbatore', name: 'Coimbatore', type: 'city' },
    { slug: 'kochi', name: 'Kochi', type: 'city' },
    { slug: 'bhubaneswar', name: 'Bhubaneswar', type: 'city' },
    { slug: 'guwahati', name: 'Guwahati', type: 'city' },

    // States
    { slug: 'maharashtra', name: 'Maharashtra', type: 'state' },
    { slug: 'karnataka', name: 'Karnataka', type: 'state' },
    { slug: 'gujarat', name: 'Gujarat', type: 'state' },
    { slug: 'tamil-nadu', name: 'Tamil Nadu', type: 'state' },
    { slug: 'uttar-pradesh', name: 'Uttar Pradesh', type: 'state' },
    { slug: 'rajasthan', name: 'Rajasthan', type: 'state' },
    { slug: 'kerala', name: 'Kerala', type: 'state' },
    { slug: 'punjab', name: 'Punjab', type: 'state' },
    { slug: 'haryana', name: 'Haryana', type: 'state' },
    { slug: 'bihar', name: 'Bihar', type: 'state' },
    { slug: 'madhya-pradesh', name: 'Madhya Pradesh', type: 'state' },
    { slug: 'west-bengal', name: 'West Bengal', type: 'state' },
    { slug: 'telangana', name: 'Telangana', type: 'state' },
    { slug: 'andhra-pradesh', name: 'Andhra Pradesh', type: 'state' }
];
