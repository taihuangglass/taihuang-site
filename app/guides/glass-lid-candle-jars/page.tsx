import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Glass lid candle jars",
  description:
    "Empty 7 oz and 12 oz candle jars with a glass lid and a paper box. Heat-resistant jars. A test report for your size is made when you need it. MOQ 240 pcs.",
  alternates: { canonical: "/guides/glass-lid-candle-jars" },
};

export default function GlassLidCandleJarsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">
        For candle brands
      </p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">
        Glass lid candle jars
      </h1>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Two catalog jars ship with a glass lid and a paper box, in 7 oz and
        12 oz. They are empty. You fill the wax. They are heat-resistant
        candle jars, the same as every jar on this site. Minimum order{" "}
        {site.moq} pcs. Price is on inquiry.
      </p>

      <h2 className="mt-12 font-serif text-3xl">
        Transparent amber, glass lid and box
      </h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        <Link
          href="/products/transparent-amber-glass-lid-box"
          className="text-accent hover:underline"
        >
          Transparent amber candle jar with a glass lid and a paper box
        </Link>
        . 7 oz and 12 oz. Empty vessel. The glass lid and the paper box are
        part of this listing.
      </p>

      <h2 className="mt-12 font-serif text-3xl">Black, glass lid and box</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        <Link
          href="/products/black-glass-lid-box"
          className="text-accent hover:underline"
        >
          Black candle jar with a glass lid and a paper box
        </Link>
        . 7 oz and 12 oz. Empty vessel. The glass lid and the paper box are
        part of this listing.
      </p>

      <h2 className="mt-12 font-serif text-3xl">Amber spout jar</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        The spout jar is a different shape. It does not have a glass lid or a
        paper box.{" "}
        <Link
          href="/products/amber-empty-spout-8-12"
          className="text-accent hover:underline"
        >
          Empty amber spout candle jar
        </Link>
        , 8 oz and 12 oz. It is a heat-resistant candle jar as well. You fill
        the wax.
      </p>

      <h2 className="mt-12 font-serif text-3xl">The report we can show</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Every jar in the catalog is a heat-resistant candle jar. The file we
        can open today is an ASTM C149 report on two samples: 80×90 mm with a
        6 mm wall, and 56×66 mm with a 3 mm wall. One report lists two models.
        The 7 oz, 12 oz, and 8 oz jars on this page are not those two samples,
        so they are not printed on that PDF. If you need a report for the size
        you will order, we test that size. Tell us the wax temperature you
        already pour at. We do not print a degree number on this site.
      </p>
      <p className="mt-3 text-base leading-7 text-ink/80">
        The samples, the laboratory, and the PDF are on{" "}
        <Link
          href="/guides/heat-resistant-glass-candle-jars"
          className="text-accent hover:underline"
        >
          heat-resistant glass candle jars
        </Link>
        . Ounce sizes for the rest of the catalog are in the{" "}
        <Link href="/guides/glass-candle-jar-sizes" className="text-accent hover:underline">
          size guide
        </Link>
        .
      </p>

      <p className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
        >
          Request a quote
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card"
        >
          View the 15 jars
        </Link>
      </p>
    </div>
  );
}
