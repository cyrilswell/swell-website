import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, ShoppingCart, BarChart3, Palette, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "Swell builds digital products for E-commerce businesses — storefronts, marketplaces, and subscription platforms.",
};

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Conversion-First Design",
    description: "Every layout decision is guided by data to maximise add-to-cart and checkout rates.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Built-in dashboards for revenue, AOV, retention cohorts, and funnel performance.",
  },
  {
    icon: Palette,
    title: "Brand Experience",
    description: "Custom storefronts that reflect your brand while staying fast and accessible.",
  },
  {
    icon: Repeat,
    title: "Subscription & Retention",
    description: "Recurring revenue models with smart upsells, loyalty programs, and lifecycle emails.",
  },
];

const caseStudies = [
  {
    title: "Luxury Marketplace",
    description: "End-to-end e-commerce platform for a luxury fashion brand.",
    image: "/images/placeholder-work-2.jpg",
    tag: "Case Study",
    href: "/work",
  },
];

export default function EcommercePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              E-commerce
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              E-commerce experiences that convert
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              We design and build storefronts, marketplaces, and subscription
              platforms optimised for conversion, retention, and long-term growth.
            </p>
            <div className="mt-10">
              <Button href="/get-started" size="lg" className="bg-swell-white text-swell-black hover:bg-swell-gray-200">
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Capabilities"
            title="What we bring to E-commerce"
            description="From storefront to checkout — we optimise the entire customer journey."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-2xl border border-border p-8">
                <cap.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="bg-swell-gray-50 py-24 lg:py-32">
        <Container>
          <div className="flex items-end justify-between">
            <SectionHeading label="E-commerce Work" title="Selected projects" align="left" />
            <Button href="/work" variant="ghost" className="hidden sm:inline-flex">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Card key={cs.title} {...cs} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-swell-black py-24 text-swell-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to grow your e-commerce business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-gray-400">
            Let&apos;s build something your customers will love.
          </p>
          <div className="mt-8">
            <Button href="/get-started" size="lg" className="bg-swell-white text-swell-black hover:bg-swell-gray-200">
              Get Started
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
