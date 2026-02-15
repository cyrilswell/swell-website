"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // 1. Validate
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    budget: formData.get("budget") as string,
    message: formData.get("message") as string,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const { name, email, company, budget, message } = result.data;

  // 2. Send to integrations (run in parallel)
  const integrations = [];

  // ClickUp
  if (process.env.CLICKUP_API_TOKEN && process.env.CLICKUP_LIST_ID) {
    integrations.push(
      fetch(
        `https://api.clickup.com/api/v2/list/${process.env.CLICKUP_LIST_ID}/task`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.CLICKUP_API_TOKEN,
          },
          body: JSON.stringify({
            name: `New Lead: ${name} (${company || "No company"})`,
            description: `Email: ${email}\nCompany: ${company || "N/A"}\nBudget: ${budget || "N/A"}\n\nMessage:\n${message}`,
          }),
        }
      ).catch((err) => console.error("ClickUp error:", err))
    );
  }

  // Google Sheets (via webhook — e.g. Make/Zapier/Apps Script)
  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    integrations.push(
      fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: company || "",
          budget: budget || "",
          message,
          date: new Date().toISOString(),
        }),
      }).catch((err) => console.error("Google Sheets error:", err))
    );
  }

  // Slack
  if (process.env.SLACK_WEBHOOK_URL) {
    integrations.push(
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `🆕 *New Lead from Swell Website*\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company || "N/A"}\n*Budget:* ${budget || "N/A"}\n*Message:* ${message}`,
        }),
      }).catch((err) => console.error("Slack error:", err))
    );
  }

  try {
    await Promise.allSettled(integrations);
  } catch (err) {
    console.error("Integration error:", err);
    // Don't fail the form if integrations fail
  }

  return { success: true };
}
