import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-swell-black py-28 text-swell-white lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
            Digital Product Studio
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            We build products that{" "}
            <span className="text-accent-light">drive growth</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-swell-gray-400 lg:text-xl">
            Swell is a design and engineering studio helping FinTech and
            E-commerce companies ship world-class digital experiences.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/get-started" size="lg" variant="primary" className="bg-swell-white text-swell-black hover:bg-swell-gray-200">
              Get Started
            </Button>
            <Button href="/work" size="lg" variant="ghost" className="text-swell-gray-300 hover:text-swell-white hover:bg-swell-gray-800">
              View Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
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
    title: "Strategy",
    description:
      "We align product direction with business goals through research, workshops, and roadmapping.",
  },
  {
    title: "Design",
    description:
      "From brand identity to UI/UX — we craft interfaces that are beautiful and intuitive.",
  },
  {
    title: "Engineering",
    description:
      "Full-stack development with modern frameworks, scalable architecture, and clean code.",
  },
  {
    title: "Growth",
    description:
      "Data-driven optimisation, A/B testing, and conversion strategies to accelerate your metrics.",
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
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-foreground">
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
    <section className="bg-swell-gray-50 py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Industries"
          title="Deep expertise where it matters"
          description="We specialise in two high-growth verticals so we can deliver domain-specific results."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Link
            href="/industries/fintech"
            className="group rounded-2xl border border-border bg-background p-10 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground">FinTech</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Banking, payments, lending, and investment platforms built for
              compliance, trust, and scale.
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-accent-light">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/industries/ecommerce"
            className="group rounded-2xl border border-border bg-background p-10 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground">E-commerce</h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Storefronts, marketplaces, and subscription platforms optimised
              for conversion and retention.
            </p>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent transition-colors group-hover:text-accent-light">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
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
    description: "A full-service digital banking experience for a Series B fintech.",
    image: "/images/placeholder-work-1.jpg",
    tag: "FinTech",
    href: "/work",
  },
  {
    title: "Luxury Marketplace",
    description: "End-to-end e-commerce platform for a luxury fashion brand.",
    image: "/images/placeholder-work-2.jpg",
    tag: "E-commerce",
    href: "/work",
  },
  {
    title: "Payment Gateway",
    description: "Redesigned checkout flow that increased conversion by 34%.",
    image: "/images/placeholder-work-3.jpg",
    tag: "FinTech",
    href: "/work",
  },
];

function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            label="Selected Work"
            title="Projects we're proud of"
            align="left"
          />
          <Button href="/work" variant="ghost" className="hidden sm:inline-flex">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button href="/work" variant="ghost">
            View All Work <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section className="bg-swell-black py-24 text-swell-white lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to build something great?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-swell-gray-400">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-10">
            <Button href="/get-started" size="lg" className="bg-swell-white text-swell-black hover:bg-swell-gray-200">
              Get Started
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
      <CTA />
    </>
  );
}
