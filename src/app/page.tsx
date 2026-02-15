import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRight, ArrowUpRight, Lightbulb, Palette, Code2, TrendingUp } from "lucide-react";

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />

      <Container className="relative z-10 py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm font-medium tracking-wide text-accent-light">
              Digital Product Studio
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
            We build digital products that{" "}
            <span className="text-gradient">drive growth</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-swell-slate-400 lg:text-xl">
            Swell is a design and engineering studio helping FinTech and
            E-commerce companies ship world-class digital experiences.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/get-started" size="lg" variant="accent">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href="/work"
              size="lg"
              variant="ghost"
              className="text-swell-slate-300 hover:text-white hover:bg-white/5"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Services ── */
const services = [
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We align product direction with business goals through research, workshops, and roadmapping.",
    number: "01",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "From brand identity to UI/UX — we craft interfaces that are beautiful and intuitive.",
    number: "02",
  },
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Full-stack development with modern frameworks, scalable architecture, and clean code.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Data-driven optimisation, A/B testing, and conversion strategies to accelerate your metrics.",
    number: "04",
  },
];

function Services() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="What We Do"
          title="End-to-end digital product services"
          description="From concept to launch and beyond — we partner with you at every stage."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-swell-slate-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="mb-6 block text-xs font-semibold text-swell-slate-300">
                {service.number}
              </span>
              <service.icon className="h-6 w-6 text-accent mb-4" />
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Industries ── */
function Industries() {
  return (
    <section className="bg-swell-slate-50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Industries"
          title="Deep expertise where it matters"
          description="We specialise in two high-growth verticals so we can deliver domain-specific results."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Link
            href="/industries/fintech"
            className="group relative overflow-hidden rounded-2xl bg-swell-navy p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-swell-navy/20"
          >
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-accent/10 blur-[80px] transition-all group-hover:bg-accent/20" />
            <span className="relative inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light mb-6">
              FinTech
            </span>
            <h3 className="relative text-2xl font-bold text-white lg:text-3xl">
              Digital products for the future of finance
            </h3>
            <p className="relative mt-4 text-base leading-relaxed text-swell-slate-400">
              Banking, payments, lending, and investment platforms built for
              compliance, trust, and scale.
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors group-hover:text-white">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/industries/ecommerce"
            className="group relative overflow-hidden rounded-2xl bg-swell-navy p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl hover:shadow-swell-navy/20"
          >
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-accent/10 blur-[80px] transition-all group-hover:bg-accent/20" />
            <span className="relative inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light mb-6">
              E-commerce
            </span>
            <h3 className="relative text-2xl font-bold text-white lg:text-3xl">
              E-commerce experiences that convert
            </h3>
            <p className="relative mt-4 text-base leading-relaxed text-swell-slate-400">
              Storefronts, marketplaces, and subscription platforms optimised
              for conversion and retention.
            </p>
            <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors group-hover:text-white">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ── Featured Work ── */
const featuredWork = [
  {
    title: "NeoBank Dashboard",
    description:
      "A full-service digital banking experience for a Series B fintech.",
    image: "/images/placeholder-work-1.jpg",
    tag: "FinTech",
    href: "/work",
  },
  {
    title: "Luxury Marketplace",
    description:
      "End-to-end e-commerce platform for a luxury fashion brand.",
    image: "/images/placeholder-work-2.jpg",
    tag: "E-commerce",
    href: "/work",
  },
  {
    title: "Payment Gateway",
    description:
      "Redesigned checkout flow that increased conversion by 34%.",
    image: "/images/placeholder-work-3.jpg",
    tag: "FinTech",
    href: "/work",
  },
];

function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Selected Work"
            title="Projects we're proud of"
            align="left"
          />
          <Button
            href="/work"
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex"
          >
            View All
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button href="/work" variant="outline">
            View All Work
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ── Stats ── */
function Stats() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12", label: "Team Members" },
    { value: "5y", label: "Average Experience" },
  ];

  return (
    <section className="border-y border-swell-slate-200 bg-white py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-swell-navy lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-hero py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-swell-slate-400">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
          <div className="mt-10">
            <Button href="/get-started" size="lg" variant="accent">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Industries />
      <FeaturedWork />
      <Stats />
      <CTA />
    </>
  );
}
