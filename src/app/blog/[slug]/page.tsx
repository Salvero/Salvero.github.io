import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "@/styles/mdx-content.module.css";

// ============================================
// Static Generation
// ============================================

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

// ============================================
// Metadata
// ============================================

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | Salman's Blog`,
        description: post.description,
    };
}

// ============================================
// Blog Post Page
// ============================================

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen py-24">
            <article className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Back link */}
                <Link
                    href="/#blog"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>

                {/* Post header */}
                <header className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        {post.title}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Post content */}
                <div className={styles["mdx-content"]}>
                    <MDXRemote source={post.content} />
                </div>
            </article>
        </main>
    );
}
