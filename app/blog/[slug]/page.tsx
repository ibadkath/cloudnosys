/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/strapi";
import ShinyText from "@/components/ShinyText";
import BackToBlogsLink from "@/components/BackToBlogsLink";

// Small connector words that stay lowercase in proper Title Case headings
// (e.g. "Why Cloudnosys Is the AI Shield Built for the AI Attack Era").
const MINOR_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "nor", "for", "so", "yet",
  "of", "in", "on", "to", "at", "by", "as", "is", "are", "vs",
]);

// Subheadings show up in two shapes across posts:
//  - numbered, e.g. "1. Understand who is responsible for what" (sentence
//    case) or "1. Storage And Data Security" (Title Case) — any numbered
//    point is treated as a subheading regardless of casing.
//  - un-numbered Title Case lines, e.g. "Why Traditional Cloud Security
//    Tools Will Fail" or "Step 2: Multi-Step Reasoning — "If X, Then Hack
//    Y"" — every "real" word capitalized once leading punctuation (dashes,
//    quotes, parens) and minor connector words are ignored, and the line
//    doesn't end like a sentence.
function isSubheading(line: string): boolean {
  if (line.startsWith("•")) return false;
  if (/^\d+\.\s/.test(line)) return true;
  if (/[.!?]$/.test(line)) return false;

  const words = line.split(/\s+/).filter(Boolean);
  if (words.length === 0) return false;

  return words.every(w => {
    const bare = w.replace(/^[^A-Za-z0-9]+/, "");
    if (!bare) return true; // pure punctuation token, e.g. "—"
    if (MINOR_WORDS.has(bare.toLowerCase())) return true;
    return /^[A-Z0-9]/.test(bare);
  });
}

// The numbered steps under this specific heading are a sequential how-to list,
// not section headers, so they should stay regular body text even though
// isSubheading() would otherwise flag any numbered line as a subheading.
const NUMBERED_LIST_IS_PLAIN_TEXT_AFTER = "How Security And DevOps Teams Use AI Remediation In Daily Work";

function tagSubheadings(lines: string[]): { line: string; subheading: boolean }[] {
  let suppressNumbered = false;

  return lines.map(line => {
    const isNumbered = /^\d+\.\s/.test(line);
    let subheading = isSubheading(line);

    if (suppressNumbered && isNumbered) subheading = false;

    if (line === NUMBERED_LIST_IS_PLAIN_TEXT_AFTER) {
      suppressNumbered = true;
    } else if (subheading && !isNumbered) {
      suppressNumbered = false;
    }

    return { line, subheading };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const [year, month, day] = post.date.split("-").map(Number);
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="flex flex-1 flex-col">
      <section className="w-full px-4 md:px-16 py-10 md:py-20">
        <div className="max-w-3xl mx-auto">
          <BackToBlogsLink />

          <p className="label py-4" style={{ textTransform: "uppercase" }}>{formattedDate}</p>

          <h1 className="HeroHeading mt-4" style={{ fontWeight: 500 }}>
            <ShinyText text={post.title} speed={3} />
          </h1>

          <div className="label mt-8" style={{ display: "flex", flexDirection: "column" }}>
            {tagSubheadings(
              post.excerpt
                .split("\n")
                .flatMap(line => line.split(/(?=\d+\.\s+[A-Z])/))
                .map(line => line.trim())
                .filter(line => line.length > 0)
            ).map(({ line, subheading }, i) => (
              <p
                key={i}
                style={
                  subheading
                    ? { margin: 0, marginTop: i === 0 ? 0 : 64, fontSize: 28, fontWeight: 700, lineHeight: 1.5 }
                    : { margin: 0, marginTop: i === 0 ? 0 : 24 }
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
