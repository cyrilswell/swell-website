import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Insights, ideas, and perspectives from the Swell team on design, engineering, and growth.",
};

// Placeholder data until Sanity is connected
const placeholderPosts = [
  {
    title: "Why FinTech Products Need Design Systems",
    description:
      "How a shared design language accelerates development and builds user trust in financial products.",
    image: "/images/placeholder-blog-1.jpg",
    tag: "Design",
    href: "/thinking/fintech-design-systems",
  },
  {
    title: "The Art of Conversion-Driven E-commerce UX",
    description:
      "Practical patterns and data-backed strategies for turning browsers into buyers.",
    image: "/images/placeholder-blog-2.jpg",
    tag: "Growth",
    href: "/thinking/ecommerce-ux-conversion",
  },
  {
    title: "Server Components Changed How We Build",
    description:
      "How React Server Components transformed our approach to full-stack web development.",
    image: "/images/placeholder-blog-3.jpg",
    tag: "Engineering",
    href: "/thinking/server-components",
  },
  {
    title: "From Brief to Launch in 8 Weeks",
    description:
      "Our process for shipping an MVP that actually works — without cutting corners.",
    image: "/images/placeholder-blog-4.jpg",
    tag: "Strategy",
    href: "/thinking/brief-to-launch",
  },
];

export default async function ThinkingPage() {
  // TODO: Replace with Sanity fetch when connected
  // const posts = await getAllBlogPosts();
  const posts = placeholderPosts;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute -bottom-20 left-0 h-60 w-60 rounded-full bg-accent/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-medium tracking-wide text-accent-light">
                Thinking
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas worth sharing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              Perspectives on design, engineering, strategy, and growth from our
              team.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <Card
                key={post.title}
                title={post.title}
                description={post.description}
                image={post.image}
                tag={post.tag}
                href={post.href}
              />
            ))}
          </div>
          {posts.length === 0 && (
            <div className="py-20 text-center">
              <SectionHeading
                title="Coming soon"
                description="We're working on our first posts. Stay tuned."
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
