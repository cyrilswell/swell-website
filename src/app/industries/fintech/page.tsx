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
    description:
      "Interfaces built with KYC, AML, and regulatory requirements baked in from day one.",
    number: "01",
  },
  {
    icon: TrendingUp,
    title: "Data-Rich Dashboards",
    description:
      "Complex financial data presented clearly with real-time visualisation and reporting.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "High-performance architecture that handles peak transaction volumes without breaking a sweat.",
    number: "03",
  },
  {
    icon: Lock,
    title: "Security First",
    description:
      "Enterprise-grade security with encryption, MFA, and SOC 2 compliance support.",
    number: "04",
  },
];

const caseStudies = [
  {
    title: "NeoBank Dashboard",
    description:
      "Digital banking experience for a Series B fintech startup.",
    image: "/images/placeholder-work-1.jpg",
    tag: "Case Study",
    href: "/work",
  },
  {
    title: "Payment Gateway Redesign",
    description:
      "Checkout flow overhaul that increased conversion by 34%.",
    image: "/images/placeholder-work-3.jpg",
    tag: "Case Study",
    href: "/work",
  },
];

export default function FinTechPage() {
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
                FinTech
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Digital products for the future of finance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              We help FinTech companies build products that are secure,
              compliant, and loved by users — from neobanks to payment platforms
              to wealth management tools.
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
            title="What we bring to FinTech"
            description="Domain expertise combined with world-class design and engineering."
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
              label="FinTech Work"
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
            Building the next big thing in finance?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-slate-400">
            Let&apos;s talk about how we can help you ship faster and smarter.
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
