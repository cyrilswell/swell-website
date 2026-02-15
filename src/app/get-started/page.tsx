"use client";

import { useActionState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactFormState } from "./action";

const budgetOptions = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

const initialState: ContactFormState = { success: false };

export default function GetStartedPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  if (state.success) {
    return (
      <section className="py-32 lg:py-48">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Thanks for reaching out!
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ve received your message and will get back to you within 24
              hours.
            </p>
            <div className="mt-8">
              <Button href="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-swell-black py-24 text-swell-white lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-swell-gray-400">
              Get Started
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build something great
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-gray-400">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-24 lg:py-32">
        <Container>
          <form
            action={formAction}
            className="mx-auto max-w-2xl space-y-8"
          >
            {state.error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {state.error}
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
              {state.fieldErrors?.name && (
                <p className="mt-1 text-sm text-red-600">{state.fieldErrors.name[0]}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="you@company.com"
              />
              {state.fieldErrors?.email && (
                <p className="mt-1 text-sm text-red-600">{state.fieldErrors.email[0]}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Your company"
              />
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium text-foreground">
                Budget range
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              >
                <option value="">Select a range</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                placeholder="Tell us about your project, goals, and timeline..."
              />
              {state.fieldErrors?.message && (
                <p className="mt-1 text-sm text-red-600">{state.fieldErrors.message[0]}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isPending}>
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Container>
      </section>
    </>
  );
}
