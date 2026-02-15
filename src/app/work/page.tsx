import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore our portfolio of case studies across FinTech and E-commerce.",
};

// Placeholder data until Sanity is connected
const placeholderWork = [
  {
    title: "NeoBank Dashboard",
    description: "A full-service digital banking experience for a Series B fintech.",
    image: "/images/placeholder-work-1.jpg",
    tag: "FinTech",
    href: "/work/neobank-dashboard",
  },
  {
    title: "Luxury Marketplace",
    description: "End-to-end e-commerce platform for a luxury fashion brand.",
    image: "/images/placeholder-work-2.jpg",
    tag: "E-commerce",
    href: "/work/luxury-marketplace",
  },
  {
    title: "Payment Gateway",
    description: "Redesigned checkout flow that increased conversion by 34%.",
    image: "/images/placeholder-work-3.jpg",
    tag: "FinTech",
    href: "/work/payment-gateway",
  },
  {
    title: "Subscription Box Platform",
    description: "Subscription commerce platform with smart retention features.",
    image: "/images/placeholder-work-4.jpg",
    tag: "E-commerce",
    href: "/work/subscription-box",
  },
];

export default async function WorkPage() {
  // TODO: Replace with Sanity fetch when connected
  // const caseStudies = await getAllCaseStudies();
  const caseStudies = placeholderWork;

  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              Our Work
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects we&apos;re proud of
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              A selection of case studies showcasing our work across industries.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {caseStudies.map((cs) => (
              <Card
                key={cs.title}
                title={cs.title}
                description={cs.description}
                image={cs.image}
                tag={cs.tag}
                href={cs.href}
              />
            ))}
          </div>
          {caseStudies.length === 0 && (
            <div className="py-20 text-center">
              <SectionHeading
                title="Coming soon"
                description="We're preparing our case studies. Check back shortly."
              />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
