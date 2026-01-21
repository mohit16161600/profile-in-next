import { BLOG_POSTS } from "@/data/posts";
import BlogSidebar from "@/components/BlogSidebar";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Blog1 from "@/components/blog-posts/Blog1";
import Blog2 from "@/components/blog-posts/Blog2";
import Blog3 from "@/components/blog-posts/Blog3";
import Blog4 from "@/components/blog-posts/Blog4";
import Blog5 from "@/components/blog-posts/Blog5";
import Blog6 from "@/components/blog-posts/Blog6";
import Blog7 from "@/components/blog-posts/Blog7";
import Blog8 from "@/components/blog-posts/Blog8";

// Mapping of slug to content component
const CONTENT_MAP: Record<string, React.ComponentType> = {
    blog1: Blog1,
    blog2: Blog2,
    blog3: Blog3,
    blog4: Blog4,
    blog5: Blog5,
    blog6: Blog6,
    blog7: Blog7,
    blog8: Blog8,
    // Future posts will be added here
};

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: "Blog Post Not Found" };

    return {
        title: `${post.title} | Mohit Koli`,
        description: `Read about ${post.title} and more web development insights on Mohit Koli's blog.`,
        // Add more metadata here from posts.ts if available (keywords, etc)
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const ContentComponent = CONTENT_MAP[slug];

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-3">
                        {/* Breadcrumb */}
                        <nav className="mb-6">
                            <ol className="flex items-center space-x-2 text-sm text-gray-500">
                                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
                                <li>/</li>
                                <li className="text-gray-900 line-clamp-1">{post.title}</li>
                            </ol>
                        </nav>

                        {/* Article Header */}
                        <header className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center">
                                        <Image
                                            src="/assets/mohit-koli-profile-photo.jpg"
                                            alt="Mohit Koli"
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-3 object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-900">Mohit Koli</p>
                                            <p className="text-gray-500">Senior Full Stack Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p>{post.date}</p>
                                    <p>{post.readTime}</p>
                                </div>
                            </div>

                            <div className="relative w-full h-[400px] mb-8">
                                <Image
                                    src={post.imageSrc}
                                    alt={post.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                        </header>

                        {/* Content Body */}
                        <div className="prose prose-lg max-w-none">
                            {ContentComponent ? <ContentComponent /> : <p>Content coming soon...</p>}
                        </div>

                        {/* Social Share (Simplified) */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mt-12 border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Share This Article</h3>
                            <div className="flex flex-wrap gap-3">
                                {/* Add share buttons here if needed, reused across posts */}
                                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Share on Twitter</button>
                                <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900">Share on LinkedIn</button>
                            </div>
                        </div>

                    </article>

                    <BlogSidebar />
                </div>
            </main>
        </>
    );
}
