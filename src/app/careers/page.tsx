import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Swell team. We're looking for talented designers, engineers, and strategists.",
};

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
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              Careers
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Build the future with us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
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
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Remote-first", description: "Work from anywhere. We care about output, not hours in a seat." },
              { title: "High impact", description: "Small team means you'll own real projects from day one." },
              { title: "Growth-focused", description: "Learning budget, conferences, and room to grow your career." },
            ].map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-border p-8">
                <h3 className="text-lg font-semibold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="bg-swell-gray-50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Open Positions"
            title="Current openings"
            description="Don't see your role? Send us an email — we're always open to exceptional people."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/careers/${job.slug}`}
                className="group flex items-center justify-between py-6 transition-colors hover:bg-background"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                    {job.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="h-4 w-4" /> {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {job.location}
                    </span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            ))}
          </div>
          {jobs.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No open positions right now, but we&apos;re always looking for great people.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Don&apos;t see the right fit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We&apos;re always interested in hearing from talented people. Drop us a line.
          </p>
          <div className="mt-8">
            <Button href="/get-started" size="lg">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
