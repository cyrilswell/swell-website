import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-32 lg:py-48">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            404
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
