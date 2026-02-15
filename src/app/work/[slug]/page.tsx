import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

// TODO: Replace with Sanity fetch when connected
// import { getCaseStudyBySlug, getAllCaseStudies } from "@/sanity/lib/queries";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder data
const placeholderStudies: Record<string, {
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  tags: string[];
}> = {
  "neobank-dashboard": {
    title: "NeoBank Dashboard",
    client: "NeoBank Inc.",
    industry: "FinTech",
    excerpt: "A full-service digital banking experience designed for a Series B fintech startup, featuring real-time transaction monitoring, smart budgeting tools, and seamless onboarding.",
    tags: ["UI/UX Design", "React", "Node.js", "Banking"],
  },
  "luxury-marketplace": {
    title: "Luxury Marketplace",
    client: "Maison Luxe",
    industry: "E-commerce",
    excerpt: "End-to-end e-commerce platform for a luxury fashion brand, with curated collections, personalised recommendations, and white-glove checkout experience.",
    tags: ["E-commerce", "Next.js", "Shopify", "Branding"],
  },
  "payment-gateway": {
    title: "Payment Gateway",
    client: "PayFlow",
    industry: "FinTech",
    excerpt: "Complete redesign of a payment gateway checkout flow that increased conversion by 34% and reduced cart abandonment by 22%.",
    tags: ["Conversion", "UX Research", "A/B Testing", "Payments"],
  },
  "subscription-box": {
    title: "Subscription Box Platform",
    client: "BoxClub",
    industry: "E-commerce",
    excerpt: "Subscription commerce platform with smart retention features, flexible plans, and an engaging unboxing experience.",
    tags: ["Subscriptions", "React", "Stripe", "Retention"],
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = placeholderStudies[slug];
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  // TODO: Replace with Sanity fetch
  // const study = await getCaseStudyBySlug(slug);
  const study = placeholderStudies[slug];

  if (!study) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <Button href="/work" variant="ghost" className="mb-8 text-swell-gray-400 hover:text-swell-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
          </Button>
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              {study.industry} &middot; {study.client}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              {study.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-swell-gray-800 px-3 py-1 text-xs font-medium text-swell-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Content placeholder */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 aspect-video rounded-2xl bg-swell-gray-100" />
            <div className="prose prose-lg max-w-none">
              <h2>The Challenge</h2>
              <p>
                This case study content will be powered by Sanity CMS. Once
                connected, rich text, images, and structured data will render
                here automatically.
              </p>
              <h2>Our Approach</h2>
              <p>
                Placeholder content for the approach section. Sanity&apos;s Portable
                Text will render full rich-text content with embedded images,
                code blocks, and more.
              </p>
              <h2>Results</h2>
              <p>
                Placeholder for results and metrics. These will be pulled
                dynamically from Sanity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-swell-gray-50 py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Interested in similar work?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Let&apos;s discuss how we can help your business.
          </p>
          <div className="mt-8">
            <Button href="/get-started" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
