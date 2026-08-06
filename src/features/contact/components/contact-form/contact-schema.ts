import { z } from "zod";

import { organizationTypes, requiredServices } from "@/content/contact/contact";

/**
 * Deliberately permissive: digits, spaces, and the + ( ) - separators people
 * actually type. Anything stricter rejects valid international formats, and a
 * contact form that refuses a real number costs a lead — far worse than
 * accepting one that needs a human glance.
 */
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,19}$/;

const MESSAGE_MIN = 20;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(80, { message: "That name is longer than we can store." }),
  companyName: z
    .string()
    .trim()
    .max(120, { message: "That organization name is too long." })
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .trim()
    .min(1, { message: "We need an email address to reply to." })
    .email({ message: "That doesn't look like a valid email address." }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Please add a phone number." })
    .regex(PHONE_PATTERN, {
      message: "Use digits, and optionally + ( ) or - between them.",
    }),
  organizationType: z.enum(organizationTypes, {
    message: "Please choose the option closest to your organization.",
  }),
  requiredService: z.enum(requiredServices, {
    message: "Please choose the service you need.",
  }),
  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN, {
      message: `Please give us at least ${MESSAGE_MIN} characters so we can route this properly.`,
    })
    .max(2000, { message: "Please keep this under 2000 characters." }),
  privacyAccepted: z.literal(true, {
    message: "Please accept the privacy policy before sending.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
