import fs from "fs";
import path from "path";
import matter from "gray-matter";

// ============================================
// TypeScript Interfaces
// ============================================

export interface PostFrontmatter {
    title: string;
    description: string;
    tags: string[];
    slug: string;
    featured?: boolean;
}

export interface Post extends PostFrontmatter {
    content: string;
}

export interface PostMeta extends PostFrontmatter { }

// ============================================
// Constants
// ============================================

const POSTS_DIRECTORY = path.join(process.cwd(), "src/posts");

// ============================================
// Utility Functions
// ============================================

/**
 * Get all post slugs for static path generation
 */
export function getPostSlugs(): string[] {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
        return [];
    }

    const files = fs.readdirSync(POSTS_DIRECTORY);
    return files
        .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx?$/, ""));
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
    const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
    const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);

    let filePath = "";
    if (fs.existsSync(mdPath)) {
        filePath = mdPath;
    } else if (fs.existsSync(mdxPath)) {
        filePath = mdxPath;
    } else {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        title: data.title || "Untitled",
        description: data.description || "",
        tags: data.tags || [],
        slug: data.slug || slug,
        featured: data.featured || false,
        content,
    };
}

/**
 * Get all posts metadata for the index page
 * Returns posts sorted by featured status (featured first)
 */
export function getAllPostsMeta(): PostMeta[] {
    const slugs = getPostSlugs();

    const posts: PostMeta[] = [];

    for (const slug of slugs) {
        const post = getPostBySlug(slug);
        if (post) {
            posts.push({
                title: post.title,
                description: post.description,
                tags: post.tags,
                slug: post.slug,
                featured: post.featured,
            });
        }
    }

    // Sort: featured posts first, then alphabetically by title
    return posts.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return a.title.localeCompare(b.title);
    });
}

/**
 * Get featured posts only
 */
export function getFeaturedPosts(): PostMeta[] {
    return getAllPostsMeta().filter((post) => post.featured);
}
