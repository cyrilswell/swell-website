import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Briefcase, ArrowRight, Globe, Sparkles, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Swell team. We're looking for talented designers, engineers, and strategists.",
};

const perks = [
  {
    icon: Globe,
    title: "Remote-first",
    description:
      "Work from anywhere. We care about output, not hours in a seat.",
  },
  {
    icon: Sparkles,
    title: "High impact",
    description:
      "Small team means you'll own real projects from day one.",
  },
  {
    icon: GraduationCap,
    title: "Growth-focused",
    description:
      "Learning budget, conferences, and room to grow your career.",
  },
];

// Placeholder data until Sanity is connected
const placeholderJobs = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    slug: "senior-product-designer",
  },
  {
    title: "Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    slug: "full-stack-engineer",
  },
  {
    title: "Growth Strategist",
    department: "Strategy",
    location: "Remote / Hybrid",
    type: "Full-time",
    slug: "growth-strategist",
  },
];

export default async function CareersPage() {
  // TODO: Replace with Sanity fetch when connected
  // const jobs = await getAllCareers();
  const jobs = placeholderJobs;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-accent/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-medium tracking-wide text-accent-light">
                Careers
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build the future with us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              We&apos;re a small, ambitious team that values craft, impact, and
              partnership. If that sounds like you, we&apos;d love to chat.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Swell */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Why Swell"
            title="What it's like here"
            description="We're building a company where talented people do their best work."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="group rounded-2xl border border-swell-slate-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <perk.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="border-y border-swell-slate-200 bg-swell-slate-50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Open Positions"
            title="Current openings"
            description="Don't see your role? Send us an email — we're always open to exceptional people."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex items-center justify-between rounded-xl border border-swell-slate-200 bg-white p-5 transition-all duration-200 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5"
              >
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-accent-dark transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                    <span className="rounded-full bg-swell-slate-100 px-2.5 py-0.5 text-xs font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-swell-slate-400 transition-all group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
          {jobs.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No open positions right now, but we&apos;re always looking for
                great people.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Don&apos;t see the right fit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We&apos;re always interested in hearing from talented people. Drop
            us a line.
          </p>
          <div className="mt-8">
            <Button href="/get-started" size="lg" variant="accent">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
