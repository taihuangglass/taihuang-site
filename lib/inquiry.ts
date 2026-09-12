"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { site } from "@/lib/site";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company is required").max(160),
  country: z.string().trim().min(1, "Country is required").max(80),
  email: z.string().trim().email("Enter a valid email"),
  whatsapp: z.string().trim().max(40).optional().or(z.literal("")),
  sku: z.string().trim().min(1, "SKU is required").max(80),
  quantity: z.coerce
    .number()
    .int()
    .min(site.moq, `Minimum quantity is ${site.moq} pcs`),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  colorRequest: z.string().trim().max(80).optional().or(z.literal("")),
  logo: z.string().trim().max(400).optional().or(z.literal("")),
  lidType: z.enum(["", "bamboo", "wood", "metal"]).optional(),
  paperBox: z.enum(["", "yes", "no"]).optional(),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type InquiryState = {
  ok?: boolean
  error?: string
  fieldErrors?: Record<string, string>
};

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === "string" ? v : "";
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (str(formData, "website")) {
    return { ok: true };
  }

  const parsed = schema.safeParse({
    name: str(formData, "name"),
    company: str(formData, "company"),
    country: str(formData, "country"),
    email: str(formData, "email"),
    whatsapp: str(formData, "whatsapp"),
    sku: str(formData, "sku"),
    quantity: str(formData, "quantity"),
    notes: str(formData, "notes"),
    colorRequest: str(formData, "colorRequest"),
    logo: str(formData, "logo"),
    lidType: str(formData, "lidType"),
    paperBox: str(formData, "paperBox"),
    website: str(formData, "website"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { error: "Please check the form.", fieldErrors };
  }

  const data = parsed.data;
  const to = process.env.INQUIRY_TO_EMAIL ?? site.email;

  try {
    await saveInquiry(data, to);
  } catch (err) {
    console.error("[inquiry:save]", err);
  }

  const lines = [
    `Name: ${data.name}`,
    `Company: ${data.company}`,
    `Country: ${data.country}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp || "—"}`,
    `SKU: ${data.sku}`,
    `Quantity: ${data.quantity} pcs`,
    data.colorRequest ? `Color request: ${data.colorRequest}` : "",
    data.logo ? `Logo: ${data.logo}` : "",
    data.lidType ? `Lid: ${data.lidType}` : "",
    data.paperBox ? `Paper box: ${data.paperBox}` : "",
    "",
    data.notes || "",
  ].filter((line, i, arr) => line !== "" || arr[i - 1] !== "");

  const body = lines.join("\n").trim();
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.info("[inquiry]", { to, sku: data.sku, company: data.company });
    return { ok: true };
  }

  const from =
    process.env.RESEND_FROM ?? `${site.brand} <noreply@example.com>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Quote request · ${data.sku} · ${data.company}`,
      text: body,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[inquiry:resend]", res.status, detail);
    return {
      error:
        "Could not send the inquiry. Email taihuangal@outlook.com or try again.",
    };
  }

  return { ok: true };
}

function slugPart(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "inquiry";
}

async function saveInquiry(
  data: z.infer<typeof schema>,
  to: string,
): Promise<void> {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const filename = `${stamp}-${slugPart(data.sku)}.json`;
  const payload = JSON.stringify(
    {
      receivedAt: new Date().toISOString(),
      to,
      ...data,
    },
    null,
    2,
  );
  const dirs = [
    path.join(process.cwd(), "data", "inquiries"),
    path.join("/tmp", "taihuang-inquiries"),
  ];
  let last: unknown;
  for (const dir of dirs) {
    try {
      await mkdir(dir, { recursive: true });
      await writeFile(path.join(dir, filename), payload);
      return;
    } catch (err) {
      last = err;
    }
  }
  throw last;
}
