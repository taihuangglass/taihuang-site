import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { guidePath, guides, lidGuideSlugs } from "@/lib/guides";
import { astmReport } from "@/lib/certs";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { catalogPdf, sizeItems } from "@/lib/sizeGuide";
import { SizeGuideClient } from "./SizeGuideClient";

export const metadata: Metadata = {
  title: "Candle jar size guide",
  description:
    "Mouth, base, and height in millimetres, water-measured capacity, and approximate wax fill for 101 Taihuang glass candle jar moulds in four series.",
  alternates: { canonical: "/size-guide" },
};

const lidGuides = guides.filter((g) =>
  (lidGuideSlugs as readonly string[]).includes(g.slug),
);

export default function SizeGuidePage() {
  const hasPdf = existsSync(path.join(process.cwd(), "public", catalogPdf));
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Size Guide</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">
        Glass candle jar size guide
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-ink/80">
        {sizeItems.length} moulds in four series. Sizes are mouth / base /
        height in millimetres (diameter × height for the glass lid series).
        Capacity is measured with water. A dash means the figure is not on our
        size sheet; ask on the quote. Empty jars only. MOQ {site.moq} pcs.
        Price on inquiry.
      </p>

      <section className="mt-6 max-w-3xl rounded-2xl border border-line bg-card p-5 text-sm leading-6 text-ink/80">
        <h2 className="font-serif text-xl text-ink">Water capacity vs wax fill</h2>
        <p className="mt-2">
          Water weighs about 1 g per ml. Soy and paraffin wax are lighter,
          roughly 0.8–0.9 g per ml, and a candle is not poured to the brim. So
          the &ldquo;Approx. wax fill&rdquo; column is a rule of thumb: 70–80% of
          the water capacity, in grams. Example: the 8090 Candle Jar (81/76/91
          mm) holds 315 ml of water, so plan for about 221–252 g of wax. Test
          pour your own wax before ordering labels.{" "}
          <Link href={guidePath("8-oz-candle-jar-size-guide")} className="text-accent hover:underline">
            Read the 8 oz candle jar size guide
          </Link>
          .
        </p>
      </section>

      <div className="mt-8">
        <SizeGuideClient items={sizeItems} />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="font-serif text-3xl">Lids and logo engraving</h2>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-7 text-ink/80">
          <li>Metal lids can be engraved with your logo.</li>
          <li>Bamboo lids can be engraved with your logo.</li>
          <li>Wood lids can be engraved with your logo.</li>
          <li>
            Glass lids are primarily for color. Logo engraving is possible but
            difficult, and we do not recommend it.
          </li>
        </ul>
        <p className="mt-4 text-base leading-7 text-ink/80">
          Lid logos are laser engraved. The lid engraving template fee is
          quoted per design. Sampling: HD logo file → preview rendering for
          your confirmation → template → photo or video of the finished sample
          for your confirmation → ship. Engraving depth, the largest logo that
          fits, and the lead time are confirmed on that sample. They change
          with the lid and the artwork, so this page does not print one number
          for every lid.
        </p>
        <ul className="mt-4 space-y-1 text-sm">
          {lidGuides.map((g) => (
            <li key={g.slug}>
              <Link href={guidePath(g.slug)} className="text-accent hover:underline">
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="thermal" className="mt-12 max-w-3xl scroll-mt-28">
        <h2 className="font-serif text-2xl">Heat resistance</h2>
        <p className="mt-3 text-sm leading-6 text-ink/75">
          Hot-wax pouring is a product specification we can document. The
          published test is ASTM C149 ({astmReport.method}) on two commissioned
          samples: {astmReport.samples}. Result: {astmReport.result} If you
          found that report, or you need another mould checked before you pour,
          send the size and your wax temperature with the inquiry.{" "}
          <a href={astmReport.href} className="text-accent hover:underline">
            {astmReport.linkLabel}
          </a>
          .{" "}
          <Link
            href="/guides/heat-resistant-glass-candle-jars"
            className="text-accent hover:underline"
          >
            Read the heat-resistance page
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl">Catalog listings</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="text-accent hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm">
          <Link href="/products" className="font-medium text-accent hover:underline">
            Browse all products
          </Link>
        </p>
      </section>

      <div className="mt-12 flex flex-wrap gap-3">
        {hasPdf ? (
          <a
            href={catalogPdf}
            download
            className="rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
          >
            Download the full size &amp; shape catalog (PDF)
          </a>
        ) : null}
        <Link
          href="/contact"
          className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card"
        >
          Request a quote
        </Link>
      </div>
    </div>
  );
}
