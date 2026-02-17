import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ArrowRight, ArrowUpRight, Lightbulb, Palette, Code2, TrendingUp } from "lucide-react";

/* ── Hero (Figma pixel-perfect) ── */
const heroStats = [
  { value: "41%+", label: "increase in new markets" },
  { value: "28+", label: "new territories" },
  { value: "64%+", label: "ROI increase" },
];

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col overflow-hidden bg-hero-figma">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.04]" aria-hidden />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,minmax(380px,1fr)] lg:gap-16 xl:gap-20 lg:items-center">
          {/* Left: copy + CTA + stats */}
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-swell-slate-400 lg:text-sm">
              AN AI-POWERED GROWTH PARTNER
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[3.5rem] xl:leading-[1.1]">
              Delivering predictable growth for high-performing brands expanding into new markets
            </h1>
            <p className="mt-5 text-base font-medium uppercase tracking-wide text-swell-slate-400 lg:text-lg">
              We help brands achieve sustainable growth and market expansion
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href="/get-started"
                size="lg"
                className="h-12 rounded-lg bg-[#0f172a] px-8 text-base font-semibold text-white shadow-lg hover:bg-swell-slate-800"
              >
                BOOK A DEMO
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                href="/get-started"
                size="lg"
                variant="ghost"
                className="h-12 rounded-lg border border-white/40 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:border-white/60"
              >
                Let&apos;s talk
              </Button>
            </div>
            <p className="mt-6 text-sm text-swell-slate-400">
              100+ Brands Trust Swell
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-sm text-swell-slate-400">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: 3D tree visual + testimonial card */}
          <div className="relative flex flex-col items-center gap-6 lg:items-end">
            {/* Placeholder for 3D tree/root asset – replace with exported image from Figma */}
            <div className="relative h-[280px] w-full max-w-md lg:h-[320px] lg:max-w-lg">
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-swell-slate-800/40 ring-1 ring-white/5">
                <div className="h-[200px] w-[160px] rounded-lg bg-gradient-to-b from-swell-slate-700/60 to-swell-slate-800/80 shadow-2xl" aria-hidden>
                  {/* Abstract tree/root silhouette placeholder */}
                  <svg viewBox="0 0 160 200" className="h-full w-full rounded-lg opacity-90" fill="none" aria-hidden>
                    <path
                      d="M80 200 V80 Q80 40 50 20 L80 0 M80 80 Q80 40 110 20 L80 0 M80 200 L40 120 M80 200 L120 120 M80 120 L60 80 M80 120 L100 80"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-swell-slate-500"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Testimonial card */}
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:max-w-[340px]">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-swell-slate-500" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-swell-slate-300">
                &ldquo;Swell has transformed our online presence and marketing strategy. Their data-driven approach is truly revolutionary.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-swell-slate-600" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-white">Alex Martinez</p>
                  <p className="text-xs text-swell-slate-400">VP of Growth, Company name</p>
                </div>
              </div>
            </div>
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
