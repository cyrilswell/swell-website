import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Shield, TrendingUp, Zap, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "FinTech",
  description:
    "Swell builds digital products for FinTech companies — banking, payments, lending, and investment platforms.",
};

const capabilities = [
  {
    icon: Shield,
    title: "Compliance-Ready Design",
    description: "Interfaces built with KYC, AML, and regulatory requirements baked in from day one.",
  },
  {
    icon: TrendingUp,
    title: "Data-Rich Dashboards",
    description: "Complex financial data presented clearly with real-time visualisation and reporting.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description: "High-performance architecture that handles peak transaction volumes without breaking a sweat.",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "Enterprise-grade security with encryption, MFA, and SOC 2 compliance support.",
  },
];

const caseStudies = [
  {
    title: "NeoBank Dashboard",
    description: "Digital banking experience for a Series B fintech startup.",
    image: "/images/placeholder-work-1.jpg",
    tag: "Case Study",
    href: "/work",
  },
  {
    title: "Payment Gateway Redesign",
    description: "Checkout flow overhaul that increased conversion by 34%.",
    image: "/images/placeholder-work-3.jpg",
    tag: "Case Study",
    href: "/work",
  },
];

export default function FinTechPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              FinTech
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Digital products for the future of finance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              We help FinTech companies build products that are secure,
              compliant, and loved by users — from neobanks to payment
              platforms to wealth management tools.
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
            title="What we bring to FinTech"
            description="Domain expertise combined with world-class design and engineering."
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
            <SectionHeading label="FinTech Work" title="Selected projects" align="left" />
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
            Building the next big thing in finance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-gray-400">
            Let&apos;s talk about how we can help you ship faster and smarter.
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
