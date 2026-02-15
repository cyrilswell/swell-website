import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="py-32">
      <Container>
        <div className="flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-swell-gray-200 border-t-accent" />
        </div>
      </Container>
    </section>
  );
}
