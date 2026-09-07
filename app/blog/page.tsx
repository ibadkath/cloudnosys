import { BlogCard } from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/strapi";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="flex flex-1 flex-col">
      <section className="w-full px-4 md:px-16 py-10 md:py-20">
        <div className="flex flex-col items-start text-left mb-10 md:mb-16">
          <h1 className="HeroHeading" style={{ fontWeight: 300 }}>
            Latest Industry Trends
          </h1>
          <p className="label mt-4 max-w-xl">
            Stay up to date with articles, case studies, and expert perspectives
            to navigate the evolving landscape of cloud security.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {posts.slice(0, 3).map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
