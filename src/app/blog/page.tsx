import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/posts";
import BlogSidebar from "@/components/BlogSidebar";

export const metadata = {
    title: "Mohit Koli - Top Web Developer Tech Blog | AI & Development Insights",
    description: "Technology blog by Top Web Developer Mohit Koli. Expert insights on AI, Web Development, and Programming. Tutorials by Senior Developer Mohit Koli.",
    keywords: "Mohit Koli, mohitkoli.info, technology blog, AI development, web development, programming tutorials, software engineering, JavaScript, React, Node.js, artificial intelligence, coding tips, developer insights, tech trends, programming guides, full stack development",
};

export default function BlogPage() {
    return (
        <>
            <section
                className="bg-cover bg-center text-white py-20 relative"
                style={{ backgroundImage: "url('/assets/mohitkolibg.jpg')" }}
                aria-label="Blog Hero Section"
            >
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Technology Blog by Mohit Koli
                        </h1>

                        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100">
                            Discover the latest in AI development, web programming, and software engineering insights
                        </p>

                        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Explore Articles
                        </button>
                    </div>
                </div>
            </section>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Technology Articles</h2>

                        {BLOG_POSTS.map((post) => (
                            <article
                                key={post.id}
                                className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden hover:shadow-md transition-shadow"
                                itemScope
                                itemType="https://schema.org/BlogPosting"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={post.imageSrc}
                                        alt={`${post.title} - Guide by Mohit Koli`}
                                        fill
                                        className="object-cover"
                                        itemProp="image"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <time dateTime={post.date} itemProp="datePublished">
                                            {post.date}
                                        </time>
                                        <span className="mx-2">•</span>
                                        <span itemProp="timeRequired">{post.readTime}</span>
                                    </div>
                                    <h3
                                        className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer"
                                        itemProp="headline"
                                    >
                                        <Link href={`/blog/${post.slug}`} title={`Read ${post.title}`}>
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-gray-600 mb-4" itemProp="description">
                                        {/* Placeholder description as content snippet is not in posts.ts yet. 
                        Ideally, add description to posts.ts */}
                                        Explore {post.title} and gain insights into {post.category}.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div>
                                                <p
                                                    className="text-sm font-medium text-gray-900"
                                                    itemProp="author"
                                                    itemScope
                                                    itemType="https://schema.org/Person"
                                                >
                                                    <span itemProp="name">Mohit Koli</span>
                                                </p>
                                                <p className="text-xs text-gray-500">Senior Full Stack Developer</p>
                                            </div>
                                        </div>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                            title="Read full guide"
                                            itemProp="url"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <div className="text-center mt-12">
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                aria-label="Load more technology articles"
                            >
                                Load More Articles
                            </button>
                        </div>
                    </div>

                    <BlogSidebar />
                </div>
            </main>
        </>
    );
}
