"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ContactFormField } from "@/lib/types";

interface ContactFormProps {
  fields: ContactFormField[];
  submitLabel: string;
  successMessage: string;
}

export function ContactForm({ fields, submitLabel, successMessage }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId) {
      // Demo mode: simulate success after a short delay
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <CheckCircle size={48} className="text-brand-teal mb-4" aria-hidden="true" />
        <h3 className="text-brand-blue mb-2">Message sent!</h3>
        <p className="text-gray-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.type === "textarea" || field.type === "select"
                ? "sm:col-span-2"
                : ""
            }
          >
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              {field.label}
              {field.required && (
                <span className="text-brand-teal ml-1" aria-hidden="true">
                  *
                </span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={4}
                required={field.required}
                aria-required={field.required}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition resize-none"
                placeholder={`${field.label}...`}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                aria-required={field.required}
                defaultValue=""
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition bg-white"
              >
                <option value="" disabled>
                  Select an option
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                aria-required={field.required}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
                placeholder={field.label}
              />
            )}
          </div>
        ))}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          Something went wrong — please try again or email us directly.
        </p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="mr-2 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            submitLabel
          )}
        </Button>
        <p className="text-xs text-gray-400 mt-3">
          * Required fields. We&apos;ll respond within one business day.
        </p>
      </div>
    </form>
  );
}
