import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom OEM",
  description:
    "OEM empty glass candle jars: color, bottle logo, bamboo wood or metal lids, and paper boxes. MOQ 240 pcs.",
};

const blocks = [
  {
    title: "Color",
    body: "Solid spray, frosted, iridescent, or a pantone you send. Colored finishes can use RoHS-compliant water-based glass paint.",
  },
  {
    title: "Bottle logo",
    body: "Silk screen or decal on the vessel. Describe the artwork in the form. File upload is not in this version.",
  },
  {
    title: "Lids",
    body: "Bamboo, wood, or metal lids. Mix with the jar colorway in the same order.",
  },
  {
    title: "Paper box",
    body: "Plain or printed paper boxes for private-label packing.",
  },
];

export default function CustomPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">OEM</p>
      <h1 className="mt-2 font-serif text-4xl">Custom empty vessels</h1>
      <p className="mt-3 max-w-2xl text-ink/75">
        We make the jar. You fill the candle. MOQ {site.moq} pcs on OEM as well
        as catalog SKUs.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {blocks.map((b) => (
          <article key={b.title} className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-serif text-2xl">{b.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">{b.body}</p>
          </article>
        ))}
      </div>
      <section className="mt-14 max-w-2xl">
        <h2 className="font-serif text-3xl">Request OEM</h2>
        <div className="mt-6 rounded-2xl border border-line bg-card p-6">
          <InquiryForm variant="custom" defaultSku="Custom OEM" />
        </div>
      </section>
    </div>
  );
}
