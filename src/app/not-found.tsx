import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-lg text-center">
          <p className="text-7xl font-bold text-accent lg:text-9xl">404</p>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-base text-swell-slate-400">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or deleted.
          </p>
          <div className="mt-8">
            <Button href="/" variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
