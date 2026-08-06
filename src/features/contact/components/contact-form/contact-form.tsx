"use client";

import { useId, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { buttonVariants } from "@/components/ui/button";
import { organizationTypes, requiredServices } from "@/content/contact/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/components/contact-form/contact-schema";
import { cn } from "@/lib/utils";

const fieldClass =
  "border-input bg-background text-body-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/40 w-full rounded-xl border px-4 py-3 transition-[border-color,box-shadow] duration-[var(--duration-fast)] focus-visible:ring-3 focus-visible:outline-none aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20";

const labelClass = "text-body-sm text-foreground mb-2 block font-medium";

/**
 * Enquiry form — the page's only client component, and the only one on the
 * site, because validation state genuinely cannot live on the server.
 *
 * No backend yet, by instruction. `onSubmit` simulates the round trip and is
 * marked with the single TODO where a real POST belongs, so wiring it later is
 * one function body rather than a refactor.
 *
 * Accessibility notes, since a form is where this matters most:
 * - Every control has a real <label htmlFor>, never a placeholder-as-label.
 * - Errors are tied to their input with aria-describedby + aria-invalid, so a
 *   screen reader announces the message when focus lands on the field.
 * - The error summary and the success panel are aria-live regions, so a
 *   submit result is announced without stealing focus.
 * - Ids are useId()-derived, so a second instance on one page cannot collide.
 */
export function ContactForm() {
  const formId = useId();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: ContactFormValues) {
    // TODO: POST `values` to the enquiry endpoint once the backend exists.
    // Everything below already handles the pending, success and reset states.
    await new Promise((resolve) => setTimeout(resolve, 600));
    // eslint-disable-next-line no-console -- placeholder until the API lands
    console.info("Contact enquiry ready to submit:", values);
    reset();
    setIsSubmitted(true);
    successRef.current?.focus();
  }

  const fieldId = (name: string) => `${formId}-${name}`;
  const errorId = (name: string) => `${formId}-${name}-error`;

  return (
    <div>
      {/* Announced politely rather than assertively: the submit was expected,
          so it should not interrupt whatever the user is reading. */}
      <div aria-live="polite">
        {isSubmitted && (
          <div
            ref={successRef}
            tabIndex={-1}
            className="border-accent/40 bg-accent/10 mb-6 flex items-start gap-3 rounded-2xl border p-5 focus-visible:outline-none"
          >
            <CheckCircle2
              aria-hidden="true"
              className="text-accent mt-0.5 size-5 shrink-0"
            />
            <div>
              <p className="text-body-sm text-foreground font-semibold">
                Thanks — your enquiry is ready to send.
              </p>
              <p className="text-body-sm text-muted-foreground mt-1">
                The form is not connected to a mailbox yet. Until it is, please email us
                directly so nothing is lost.
              </p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={fieldId("fullName")} className={labelClass}>
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id={fieldId("fullName")}
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? errorId("fullName") : undefined}
              className={fieldClass}
              {...register("fullName")}
            />
            {errors.fullName && (
              <p
                id={errorId("fullName")}
                className="text-body-sm text-destructive mt-1.5"
              >
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("companyName")} className={labelClass}>
              Company Name
            </label>
            <input
              id={fieldId("companyName")}
              type="text"
              autoComplete="organization"
              className={fieldClass}
              {...register("companyName")}
            />
          </div>

          <div>
            <label htmlFor={fieldId("email")} className={labelClass}>
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id={fieldId("email")}
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? errorId("email") : undefined}
              className={fieldClass}
              {...register("email")}
            />
            {errors.email && (
              <p id={errorId("email")} className="text-body-sm text-destructive mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("phone")} className={labelClass}>
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              id={fieldId("phone")}
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? errorId("phone") : undefined}
              className={fieldClass}
              {...register("phone")}
            />
            {errors.phone && (
              <p id={errorId("phone")} className="text-body-sm text-destructive mt-1.5">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("organizationType")} className={labelClass}>
              Organization Type <span className="text-destructive">*</span>
            </label>
            <select
              id={fieldId("organizationType")}
              defaultValue=""
              aria-invalid={Boolean(errors.organizationType)}
              aria-describedby={
                errors.organizationType ? errorId("organizationType") : undefined
              }
              className={fieldClass}
              {...register("organizationType")}
            >
              <option value="" disabled>
                Select an option
              </option>
              {organizationTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.organizationType && (
              <p
                id={errorId("organizationType")}
                className="text-body-sm text-destructive mt-1.5"
              >
                {errors.organizationType.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={fieldId("requiredService")} className={labelClass}>
              Required Service <span className="text-destructive">*</span>
            </label>
            <select
              id={fieldId("requiredService")}
              defaultValue=""
              aria-invalid={Boolean(errors.requiredService)}
              aria-describedby={
                errors.requiredService ? errorId("requiredService") : undefined
              }
              className={fieldClass}
              {...register("requiredService")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {requiredServices.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.requiredService && (
              <p
                id={errorId("requiredService")}
                className="text-body-sm text-destructive mt-1.5"
              >
                {errors.requiredService.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor={fieldId("message")} className={labelClass}>
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id={fieldId("message")}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errorId("message") : undefined}
            placeholder="Specification, quantity, delivery location and any deadline."
            className={cn(fieldClass, "resize-y")}
            {...register("message")}
          />
          {errors.message && (
            <p id={errorId("message")} className="text-body-sm text-destructive mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <div className="flex items-start gap-3">
            <input
              id={fieldId("privacyAccepted")}
              type="checkbox"
              aria-invalid={Boolean(errors.privacyAccepted)}
              aria-describedby={
                errors.privacyAccepted ? errorId("privacyAccepted") : undefined
              }
              className="border-input text-accent focus-visible:ring-ring/40 mt-0.5 size-4 shrink-0 rounded focus-visible:ring-3 focus-visible:outline-none"
              {...register("privacyAccepted")}
            />
            <label
              htmlFor={fieldId("privacyAccepted")}
              className="text-body-sm text-muted-foreground"
            >
              I agree to the Privacy Policy. <span className="text-destructive">*</span>
            </label>
          </div>
          {errors.privacyAccepted && (
            <p
              id={errorId("privacyAccepted")}
              className="text-body-sm text-destructive mt-1.5"
            >
              {errors.privacyAccepted.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            buttonVariants({ variant: "accent", size: "lg" }),
            "button-hover h-[56px] w-full gap-2 rounded-xl text-base font-semibold sm:w-auto sm:px-9",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 aria-hidden="true" className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Inquiry
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
