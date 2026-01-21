export interface BlogPost {
    id: number;
    title: string;
    date: string;
    readTime: string;
    category: string;
    views: number;
    keywords: string[];
    slug: string; // Changed from href
    imageSrc: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 8,
        title: "Will AI Replace Web Developers in 2026? (Reality vs Hype)",
        date: "Jan 21, 2026",
        readTime: "8 min read",
        category: "AI & Career",
        views: 120,
        keywords: ["ai", "web development", "career", "future of coding", "job market"],
        slug: "blog8",
        imageSrc: "/assets/AiBLog.png",
    },
    {
        id: 7,
        title: 'Is React Still Worth Learning in 2026? Expert Analysis',
        date: 'Jan 5, 2026',
        readTime: '10 min read',
        category: 'React',
        views: 1250,
        keywords: ['react', 'web development', 'frontend', 'javascript', 'frameworks'],
        slug: 'blog7',
        imageSrc: '/assets/blog7.jpg',
    },
    {
        id: 6,
        title: 'Frontend vs Backend Development – What Should You Learn First?',
        date: 'Dec 24, 2025',
        readTime: '10 min read',
        category: 'Career',
        views: 980,
        keywords: ['frontend', 'backend', 'web development', 'career', 'full stack'],
        slug: 'blog6',
        imageSrc: '/assets/website%20developer.png',
    },
    {
        id: 5,
        title: 'Hostinger VPS Hosting Review 2025: Complete Guide & 50% Discount',
        date: 'Nov 20, 2025',
        readTime: '20 min read',
        category: 'Hosting',
        views: 850,
        keywords: ['hosting', 'vps', 'server', 'web hosting', 'hostinger'],
        slug: 'blog5',
        imageSrc: '/assets/mohitkoliblog5.png',
    },
    {
        id: 4,
        title: 'Best AI Tools for Students, Developers, and Digital Marketers in 2025',
        date: 'Nov 15, 2025',
        readTime: '18 min read',
        category: 'AI Tools',
        views: 3200,
        keywords: ['ai', 'tools', 'chatgpt', 'productivity', 'students', 'developers'],
        slug: 'blog4',
        imageSrc: '/assets/tech-mohitkoli.png',
    },
    {
        id: 3,
        title: 'The 2025 Developer\'s Guide: Top 10 JavaScript Libraries & Frameworks in Demand',
        date: 'Oct 28, 2025',
        readTime: '15 min read',
        category: 'JavaScript',
        views: 2100,
        keywords: ['javascript', 'libraries', 'frameworks', 'react', 'vue', 'svelte'],
        slug: 'blog3',
        imageSrc: '/assets/mohitkolib3.jpg',
    },
    {
        id: 2,
        title: 'The Uncomfortable Truth About AI Coding: Why AI Code Assistants Make You a Worse Developer',
        date: 'Sep 22, 2025',
        readTime: '8 min read',
        category: 'AI Coding',
        views: 4500,
        keywords: ['ai coding', 'copilot', 'programming', 'skills', 'future'],
        slug: 'blog2',
        imageSrc: '/assets/AiBLog.png',
    },
    {
        id: 1,
        title: 'Complete Guide to AI in Web Development: How AI is Revolutionizing Coding',
        date: 'Sep 15, 2025',
        readTime: '12 min read',
        category: 'AI Development',
        views: 1500,
        keywords: ['ai', 'web development', 'coding', 'automation', 'future'],
        slug: 'blog1',
        imageSrc: '/assets/b1.png',
    },
];
