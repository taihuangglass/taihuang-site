import type { Metadata } from "next";
import Link from "next/link";
import { PackagingMedia } from "@/components/PackagingMedia";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lids & Packaging",
  description:
    "Optional bamboo, wood, and metal lids plus custom folding gift boxes with empty glass candle jar orders. MOQ 240 pcs.",
};

export default function PackagingPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Add-ons</p>
      <h1 className="mt-2 font-serif text-4xl">Lids &amp; Packaging</h1>
      <p className="mt-3 max-w-2xl text-ink/75">
        Lids and custom boxes are optional with jar orders. Price on inquiry.
        MOQ {site.moq} pcs.
      </p>
      <div className="mt-10">
        <PackagingMedia />
      </div>
      <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
        Ask for lids or a custom box on the inquiry form. Sample artwork in the
        gift-box video is a customer print, not the Taihuang brand.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
      >
        Request a quote
      </Link>
    </div>
  );
}
