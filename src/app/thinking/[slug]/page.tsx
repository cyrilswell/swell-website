import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

// TODO: Replace with Sanity fetch when connected
// import { getBlogPostBySlug } from "@/sanity/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder data
const placeholderPosts: Record<string, {
  title: string;
  author: string;
  category: string;
  excerpt: string;
  date: string;
}> = {
  "fintech-design-systems": {
    title: "Why FinTech Products Need Design Systems",
    author: "Maya Patel",
    category: "Design",
    excerpt: "How a shared design language accelerates development and builds user trust in financial products.",
    date: "January 15, 2026",
  },
  "ecommerce-ux-conversion": {
    title: "The Art of Conversion-Driven E-commerce UX",
    author: "Sam Rivera",
    category: "Growth",
    excerpt: "Practical patterns and data-backed strategies for turning browsers into buyers.",
    date: "January 8, 2026",
  },
  "server-components": {
    title: "Server Components Changed How We Build",
    author: "Jordan Lee",
    category: "Engineering",
    excerpt: "How React Server Components transformed our approach to full-stack web development.",
    date: "December 20, 2025",
  },
  "brief-to-launch": {
    title: "From Brief to Launch in 8 Weeks",
    author: "Alex Chen",
    category: "Strategy",
    excerpt: "Our process for shipping an MVP that actually works — without cutting corners.",
    date: "December 10, 2025",
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = placeholderPosts[slug];
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  // TODO: Replace with Sanity fetch
  // const post = await getBlogPostBySlug(slug);
  const post = placeholderPosts[slug];

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <Button href="/thinking" variant="ghost" className="mb-8 text-swell-gray-400 hover:text-swell-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Thinking
          </Button>
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              {post.category} &middot; {post.date}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              {post.excerpt}
            </p>
            <p className="mt-4 text-sm text-swell-gray-500">
              By {post.author}
            </p>
          </div>
        </Container>
      </section>

      {/* Content placeholder */}
      <section className="py-24 lg:py-32">
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="mb-12 aspect-video rounded-2xl bg-swell-gray-100" />
            <div className="prose prose-lg max-w-none">
              <p>
                This blog post content will be powered by Sanity CMS. Once
                connected, rich text, images, code blocks, and embedded media
                will render here automatically using Portable Text.
              </p>
              <h2>Key Takeaways</h2>
              <p>
                Placeholder for the main content sections. Sanity makes it easy
                for the team to write and publish posts with a visual editor.
              </p>
              <h2>What&apos;s Next</h2>
              <p>
                More insights from the Swell team coming soon. Subscribe to stay
                in the loop.
              </p>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
