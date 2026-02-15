import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Swell — a digital product studio helping FinTech and E-commerce companies build world-class experiences.",
};

const values = [
  {
    title: "Craft",
    description: "We obsess over the details. Every pixel, every interaction, every line of code matters.",
  },
  {
    title: "Partnership",
    description: "We embed with your team, not just deliver to a brief. Your success is our success.",
  },
  {
    title: "Impact",
    description: "We measure our work by outcomes — growth, engagement, and real business results.",
  },
  {
    title: "Transparency",
    description: "Open communication, honest feedback, and clear timelines from kickoff to launch.",
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
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              About Swell
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We&apos;re a small team doing big things
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
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
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our mission
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To help ambitious businesses launch digital products that users
                love and that drive measurable growth. We bring together strategy,
                design, and engineering into one streamlined process.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-swell-gray-100 p-12">
              <p className="text-center text-2xl font-semibold leading-snug text-foreground">
                &ldquo;Great products are built at the intersection of design
                excellence and technical precision.&rdquo;
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-swell-gray-50 py-24 lg:py-32">
        <Container>
          <SectionHeading
            label="Our Values"
            title="What drives us"
            description="These principles guide how we work, who we hire, and what we build."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl bg-background p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
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
              <div key={member.name} className="text-center">
                <div className="mx-auto mb-4 h-40 w-40 rounded-full bg-swell-gray-200" />
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-swell-black py-24 text-swell-white">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-swell-gray-400">
            Whether you have a project in mind or just want to explore ideas, we&apos;d
            love to hear from you.
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
