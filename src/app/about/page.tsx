import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Swell — a digital product studio helping FinTech and E-commerce companies build world-class experiences.",
};

const values = [
  {
    title: "Craft",
    description:
      "We obsess over the details. Every pixel, every interaction, every line of code matters.",
    number: "01",
  },
  {
    title: "Partnership",
    description:
      "We embed with your team, not just deliver to a brief. Your success is our success.",
    number: "02",
  },
  {
    title: "Impact",
    description:
      "We measure our work by outcomes — growth, engagement, and real business results.",
    number: "03",
  },
  {
    title: "Transparency",
    description:
      "Open communication, honest feedback, and clear timelines from kickoff to launch.",
    number: "04",
  },
];

const team = [
  { name: "Alex Chen", role: "Founder & Strategy" },
  { name: "Maya Patel", role: "Design Director" },
  { name: "Jordan Lee", role: "Engineering Lead" },
  { name: "Sam Rivera", role: "Growth & Analytics" },
];

export default function AboutPage() {
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
                About Swell
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We&apos;re a small team doing big things
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              Swell was founded to bridge the gap between beautiful design and
              bulletproof engineering. We believe the best digital products come
              from teams that do both, together.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.1em] text-accent">
                Our Mission
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Building products that users love and businesses rely on
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To help ambitious businesses launch digital products that users
                love and that drive measurable growth. We bring together
                strategy, design, and engineering into one streamlined process.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-swell-navy p-10 lg:p-12">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-accent/10 blur-[60px]" />
              <p className="relative text-xl font-medium leading-relaxed text-white lg:text-2xl">
                &ldquo;Great products are built at the intersection of design
                excellence and technical precision.&rdquo;
              </p>
              <div className="relative mt-6 h-px w-12 bg-accent" />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-swell-slate-200 bg-swell-slate-50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What drives us"
            description="These principles guide how we work, who we hire, and what we build."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-swell-slate-200 bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <span className="mb-4 block text-xs font-semibold text-swell-slate-300">
                  {value.number}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="The Team"
            title="Meet the people behind Swell"
            description="A tight-knit crew of designers, engineers, and strategists."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="mx-auto mb-5 h-40 w-40 overflow-hidden rounded-2xl bg-swell-slate-100 transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-3xl font-bold text-swell-slate-300">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
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
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-slate-400">
            Whether you have a project in mind or just want to explore ideas,
            we&apos;d love to hear from you.
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
