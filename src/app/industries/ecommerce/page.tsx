import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ArrowRight,
  ShoppingCart,
  BarChart3,
  Palette,
  Repeat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "Swell builds digital products for E-commerce businesses — storefronts, marketplaces, and subscription platforms.",
};

const capabilities = [
  {
    icon: ShoppingCart,
    title: "Conversion-First Design",
    description:
      "Every layout decision is guided by data to maximise add-to-cart and checkout rates.",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Built-in dashboards for revenue, AOV, retention cohorts, and funnel performance.",
    number: "02",
  },
  {
    icon: Palette,
    title: "Brand Experience",
    description:
      "Custom storefronts that reflect your brand while staying fast and accessible.",
    number: "03",
  },
  {
    icon: Repeat,
    title: "Subscription & Retention",
    description:
      "Recurring revenue models with smart upsells, loyalty programs, and lifecycle emails.",
    number: "04",
  },
];

const caseStudies = [
  {
    title: "Luxury Marketplace",
    description:
      "End-to-end e-commerce platform for a luxury fashion brand.",
    image: "/images/placeholder-work-2.jpg",
    tag: "Case Study",
    href: "/work",
  },
];

export default function EcommercePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute -top-20 right-20 h-60 w-60 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute -bottom-20 left-20 h-40 w-40 rounded-full bg-accent/5 blur-[80px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-medium tracking-wide text-accent-light">
                E-commerce
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              E-commerce experiences that convert
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              We design and build storefronts, marketplaces, and subscription
              platforms optimised for conversion, retention, and long-term
              growth.
            </p>
            <div className="mt-10">
              <Button href="/get-started" size="lg" variant="accent">
                Start a Project
                <ArrowRight className="h-4 w-4" />
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
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group rounded-2xl border border-swell-slate-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="mb-6 block text-xs font-semibold text-swell-slate-300">
                  {cap.number}
                </span>
                <cap.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies */}
      <section className="border-y border-swell-slate-200 bg-swell-slate-50 py-24 lg:py-32">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              label="E-commerce Work"
              title="Selected projects"
              align="left"
            />
            <Button
              href="/work"
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((cs) => (
              <Card key={cs.title} {...cs} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-hero py-24 lg:py-32">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full bg-accent/10 blur-[100px]" />

        <Container className="relative z-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to grow your e-commerce business?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-slate-400">
            Let&apos;s build something your customers will love.
          </p>
          <div className="mt-8">
            <Button href="/get-started" size="lg" variant="accent">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
