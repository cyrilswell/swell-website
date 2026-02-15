import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Thinking",
  description: "Insights, ideas, and perspectives from the Swell team on design, engineering, and growth.",
};

// Placeholder data until Sanity is connected
const placeholderPosts = [
  {
    title: "Why FinTech Products Need Design Systems",
    description: "How a shared design language accelerates development and builds user trust in financial products.",
    image: "/images/placeholder-blog-1.jpg",
    tag: "Design",
    href: "/thinking/fintech-design-systems",
  },
  {
    title: "The Art of Conversion-Driven E-commerce UX",
    description: "Practical patterns and data-backed strategies for turning browsers into buyers.",
    image: "/images/placeholder-blog-2.jpg",
    tag: "Growth",
    href: "/thinking/ecommerce-ux-conversion",
  },
  {
    title: "Server Components Changed How We Build",
    description: "How React Server Components transformed our approach to full-stack web development.",
    image: "/images/placeholder-blog-3.jpg",
    tag: "Engineering",
    href: "/thinking/server-components",
  },
  {
    title: "From Brief to Launch in 8 Weeks",
    description: "Our process for shipping an MVP that actually works — without cutting corners.",
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
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              Thinking
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Ideas worth sharing
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              Perspectives on design, engineering, strategy, and growth from our team.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
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
