/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export type Blog = {
  id: string;
  slug: string | null;
  image: string;
  title: string;
  excerpt: string;
  date: string;
};

export function BlogCard({ blog }: { blog: Blog }) {
  const [year, month, day] = blog.date.split("-").map(Number);
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${blog.slug ?? blog.id}`}
      className="blog-card"
      style={{
        display: 'block',
        background: '#0d1520',
        borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.08)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={blog.image}
        alt={blog.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #0E1117 0%, rgba(14,17,23,0.6) 50%, transparent 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0 20px 24px',
          display: 'flex', flexDirection: 'column', gap: 10,
          overflow: 'hidden',
        }}
      >
        <h3 className="blog-card-text" style={{ margin: 0, wordBreak: 'break-word', overflowWrap: 'break-word' }}>{blog.title}</h3>
        <p  className="blog-card-para blog-card-excerpt" style={{ margin: 0, color: 'rgba(255,255,255,0.75)' }}>{blog.excerpt}</p>
        <p  className="blog-card-para" style={{ margin: 0, color: 'rgba(255,255,255,0.45)' }}>{formattedDate}</p>
      </div>
    </Link>
  );
}
