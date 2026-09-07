import type { Blog } from "@/components/BlogCard";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

type StrapiBlogPost = {
  documentId: string;
  title: string;
  slug: string | null;
  description: string;
  date: string;
  image: { url: string } | null;
};

function authHeaders() {
  return STRAPI_API_TOKEN
    ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` }
    : undefined;
}

function toBlog(post: StrapiBlogPost): Blog {
  return {
    id: post.documentId,
    slug: post.slug,
    title: post.title,
    excerpt: post.description,
    date: post.date,
    // post.image.url is relative (e.g. "/uploads/x.png") for Strapi's local
    // upload provider — left as-is so the browser requests it same-origin
    // and the Next.js rewrite in next.config.ts proxies it to Strapi. If a
    // cloud upload provider is configured later, Strapi returns an absolute
    // URL here instead, which already works untouched.
    image: post.image?.url ?? "",
  };
}

export async function getBlogPosts(): Promise<Blog[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/blog-posts?populate=image`, {
      headers: authHeaders(),
    });
    if (!res.ok) return [];

    const { data }: { data: StrapiBlogPost[] } = await res.json();
    return data.map(toBlog);
  } catch {
    return [];
  }
}

// Accepts either a slug (preferred, human-readable) or a documentId
// (fallback for entries that haven't had a slug generated yet).
export async function getBlogPost(slugOrId: string): Promise<Blog | null> {
  try {
    const query = new URLSearchParams();
    query.set("filters[$or][0][slug][$eq]", slugOrId);
    query.set("filters[$or][1][documentId][$eq]", slugOrId);
    query.set("populate", "image");

    const res = await fetch(`${STRAPI_URL}/api/blog-posts?${query}`, {
      headers: authHeaders(),
    });
    if (!res.ok) return null;

    const { data }: { data: StrapiBlogPost[] } = await res.json();
    return data[0] ? toBlog(data[0]) : null;
  } catch {
    return null;
  }
}
