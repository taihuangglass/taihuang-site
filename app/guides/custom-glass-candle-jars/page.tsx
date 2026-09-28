import type { Metadata } from "next";
import Link from "next/link";
import { coatingReport } from "@/lib/certs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom glass candle jars",
  description:
    "Private-label empty glass candle jars from Xuzhou. Color, silk screen or decal, bamboo wood or metal lids, and paper boxes. MOQ 240 pcs.",
  alternates: { canonical: "/guides/custom-glass-candle-jars" },
};

const steps = [
  {
    title: "Color",
    body: "Solid spray, frosted, iridescent, or a Pantone you send. Colored finishes can use RoHS-compliant water-based glass paint. The supplier report is for that paint sample, not a certificate for every jar.",
  },
  {
    title: "Logo",
    body: "Silk screen or decal on the vessel. Describe the artwork in the form. This site does not take a file upload yet.",
  },
  {
    title: "Lid",
    body: "Bamboo, wood, or metal. Lids are optional and are ordered with the jars, not as a separate shop.",
  },
  {
    title: "Paper box",
    body: "Plain or printed. A gift-box video on the packaging page shows a customer print, not the Taihuang brand.",
  },
];

export default function CustomGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">
        Private label
      </p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">
        Custom glass candle jars
      </h1>
      <p className="mt-4 text-base leading-7 text-ink/80">
        {site.legalName} makes empty jars for candle brands and wholesalers.
        You fill the wax. Custom work uses the same minimum as the catalog:
        MOQ {site.moq} pcs. There is no cart and no published USD price.
      </p>

      <div className="mt-10 space-y-8">
        {steps.map((step) => (
          <section key={step.title}>
            <h2 className="font-serif text-2xl">{step.title}</h2>
            <p className="mt-3 text-base leading-7 text-ink/80">{step.body}</p>
          </section>
        ))}
      </div>

      <h2 className="mt-12 font-serif text-3xl">Paint report, stated narrowly</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        SGS report {coatingReport.reportNo} ({coatingReport.date}). Sample:{" "}
        {coatingReport.sample}. Client on the report: {coatingReport.client}.{" "}
        {coatingReport.result} Taihuang jars are not described as SGS
        certified.
      </p>
      <p className="mt-4">
        <a
          href={coatingReport.href}
          className="text-sm font-medium text-accent hover:underline"
        >
          {coatingReport.linkLabel}
        </a>
      </p>

      <h2 className="mt-12 font-serif text-3xl">How a quote starts</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Send the company name, country, email, the jar or “custom OEM”, and a
        quantity of at least {site.moq}. Add the color, logo method, lid, and
        box in the notes. Samples are available on request. We reply from{" "}
        {site.email}.
      </p>
      <p className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/custom"
          className="rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
        >
          Open the OEM form
        </Link>
        <Link
          href="/packaging"
          className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card"
        >
          Lids and boxes
        </Link>
      </p>
    </div>
  );
}
