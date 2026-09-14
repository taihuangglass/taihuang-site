"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/lib/inquiry";
import { site } from "@/lib/site";

type Variant = "product" | "custom" | "contact";

const initial: InquiryState = {};

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  defaultValue,
  min,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: string
  defaultValue?: string | number
  min?: number
}) {
  return (
    <label className="block text-sm">
      <span className="text-ink/80">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        min={min}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg border border-line bg-card px-3 py-2 text-ink"
      />
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}

export function InquiryForm({
  variant,
  defaultSku,
}: {
  variant: Variant
  defaultSku?: string
}) {
  const [state, action, pending] = useActionState(submitInquiry, initial);
  const sku =
    defaultSku ??
    (variant === "custom" ? "Custom OEM" : "General inquiry");

  return (
    <form action={action} className="grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required error={state.fieldErrors?.name} />
        <Field
          label="Company"
          name="company"
          required
          error={state.fieldErrors?.company}
        />
        <Field
          label="Country"
          name="country"
          required
          error={state.fieldErrors?.country}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={state.fieldErrors?.email}
        />
        <Field label="WhatsApp (optional)" name="whatsapp" />
        <Field
          label="SKU"
          name="sku"
          required
          defaultValue={sku}
          error={state.fieldErrors?.sku}
        />
        <Field
          label={`Quantity (min ${site.moq})`}
          name="quantity"
          type="number"
          required
          min={site.moq}
          defaultValue={site.moq}
          error={state.fieldErrors?.quantity}
        />
      </div>

      {variant === "custom" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Color request" name="colorRequest" />
          <Field label="Logo notes" name="logo" />
          <label className="block text-sm">
            <span className="text-ink/80">Lid</span>
            <select
              name="lidType"
              className="mt-1 w-full rounded-lg border border-line bg-card px-3 py-2"
            >
              <option value="">Select</option>
              <option value="bamboo">Bamboo</option>
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
            </select>
          </label>
          <label className="block text-sm">
            <span className="text-ink/80">Paper box</span>
            <select
              name="paperBox"
              className="mt-1 w-full rounded-lg border border-line bg-card px-3 py-2"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </div>
      ) : null}

      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 text-ink/80">
          <input type="checkbox" name="includeLids" value="yes" />
          Include lids
        </label>
        <label className="flex items-center gap-2 text-ink/80">
          <input type="checkbox" name="includeCustomBox" value="yes" />
          Include custom box
        </label>
      </div>

      <label className="block text-sm">
        <span className="text-ink/80">Notes</span>
        <textarea
          name="notes"
          rows={4}
          className="mt-1 w-full rounded-lg border border-line bg-card px-3 py-2"
        />
      </label>

      <p className="text-sm text-muted">
        Minimum {site.moq} pcs. Quotes are sent to taihuangal@outlook.com. We
        reply to your email.
      </p>

      {state.error ? (
        <p className="text-sm text-red-700">{state.error}</p>
      ) : null}
      {state.ok ? (
        <p className="text-sm text-accent">
          Received. We will reply from taihuangal@outlook.com.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Request a quote"}
      </button>
    </form>
  );
}
