"use client";

import { useActionState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { submitContactForm, type ContactFormState } from "./action";
import { ArrowRight, Mail, MessageSquare, Clock } from "lucide-react";

const budgetOptions = [
  "Under $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

const initialState: ContactFormState = { success: false };

const benefits = [
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "We'll discuss your goals and recommend the best approach.",
  },
  {
    icon: Clock,
    title: "24h Response",
    description: "You'll hear back from us within one business day.",
  },
  {
    icon: Mail,
    title: "No Commitment",
    description: "Just a conversation — no obligations or pressure.",
  },
];

export default function GetStartedPage() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <section className="relative overflow-hidden bg-hero min-h-screen flex items-center">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Thanks for reaching out!
            </h1>
            <p className="mt-4 text-lg text-swell-slate-400">
              We&apos;ve received your message and will get back to you within
              24 hours.
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
      <section className="relative overflow-hidden bg-hero pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
        <div className="absolute -top-20 right-20 h-60 w-60 rounded-full bg-accent/10 blur-[100px]" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-sm font-medium tracking-wide text-accent-light">
                Get Started
              </span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something great
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-swell-slate-400">
              Tell us about your project and we&apos;ll get back to you within
              24 hours.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Benefits */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-5">
            {/* Benefits sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                What to expect
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We make the first step easy. Fill out the form and we&apos;ll
                take it from there.
              </p>
              <div className="mt-8 space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50">
                      <benefit.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form action={formAction} className="space-y-6">
                {state.error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {state.error}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-swell-slate-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-swell-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    placeholder="Your name"
                  />
                  {state.fieldErrors?.name && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {state.fieldErrors.name[0]}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-swell-slate-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-swell-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    placeholder="you@company.com"
                  />
                  {state.fieldErrors?.email && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {state.fieldErrors.email[0]}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-swell-slate-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-swell-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full appearance-none rounded-lg border border-swell-slate-200 bg-white px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
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
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-swell-slate-200 bg-white px-4 py-3 text-sm text-foreground placeholder:text-swell-slate-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                  {state.fieldErrors?.message && (
                    <p className="mt-1.5 text-sm text-red-600">
                      {state.fieldErrors.message[0]}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="accent"
                  className="w-full sm:w-auto"
                  disabled={isPending}
                >
                  {isPending ? "Sending..." : "Send Message"}
                  {!isPending && <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
