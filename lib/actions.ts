"use server"

import { z } from "zod"

const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  postcode: z.string().min(3, "Please enter a valid postcode"),
  jobType: z.string().min(1, "Please select a job type"),
  message: z.string().optional(),
})

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type ContactFormData = z.infer<typeof contactFormSchema>

export type FormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function handleQuoteRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    postcode: formData.get("postcode"),
    jobType: formData.get("jobType"),
    message: formData.get("message"),
  }

  const result = quoteFormSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  // AI agents: replace this with your email/CRM integration
  // e.g. send email via Resend, add to HubSpot, post to webhook, etc.
  console.log("[Quote Request]", result.data)

  return {
    success: true,
    message:
      "Thanks! We've received your quote request and will be in touch shortly.",
  }
}

export async function handleContactForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  }

  const result = contactFormSchema.safeParse(rawData)

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  // AI agents: replace this with your email/CRM integration
  console.log("[Contact Form]", result.data)

  return {
    success: true,
    message: "Thanks for getting in touch! We'll reply as soon as possible.",
  }
}
