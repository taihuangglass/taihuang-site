import type { Metadata } from "next";
import Link from "next/link";
import { astmReport } from "@/lib/certs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heat-resistant glass candle jars",
  description:
    "Every Taihuang catalog jar is a heat-resistant candle jar. The public ASTM C149 report lists two models. We test the size you order.",
  alternates: { canonical: "/guides/heat-resistant-glass-candle-jars" },
};

const faqs = [
  {
    q: "Are the jars on this site heat resistant?",
    a: "Yes. Every jar in the catalog is a heat-resistant candle jar. The report we can show today lists two models, because one report carries two. If you need a report for the size you will order, we test that size.",
  },
  {
    q: "What temperature can I pour at?",
    a: "The report does not state a pouring temperature. Tell us the wax temperature you already use, and the jar size, and we will confirm on the quote. We will not invent a degree number.",
  },
  {
    q: "Is this borosilicate or oven glass?",
    a: "We do not make that claim. These are empty glass candle vessels. The test on file is ASTM C149 thermal shock on the two samples listed above.",
  },
  {
    q: "Are the jars SGS certified?",
    a: "No. A supplier RoHS report covers one water-based glass paint, not the jars. Colored finishes can use that paint. The jar test we publish is the ASTM C149 report.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HeatGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">
        For candle brands
      </p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">
        Heat-resistant glass candle jars
      </h1>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Every jar in the {site.brand} catalog is a heat-resistant candle jar
        for hot-wax pouring. The document we can show today is an ASTM C149
        thermal shock report on two commissioned samples. One report lists two
        models, so we do not print a separate certificate for each of the
        fifteen jars. If you need the report for your size, send the jar size
        and the wax temperature you pour at. Millimetre moulds are in the{" "}
        <Link href="/size-guide" className="text-accent hover:underline">
          Size Guide
        </Link>
        .
      </p>

      <h2 className="mt-12 font-serif text-3xl">
        Hot wax is a thermal shock question
      </h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Wax is often poured while it is still hot. The glass then sees a fast
        change in temperature. That shock is what cracks a jar that looked
        fine on the table. “Heat resistant,” “thermal shock,” and “will not
        crack with hot wax” are the same buying problem.
      </p>
      <p className="mt-3 text-base leading-7 text-ink/80">
        We do not print a “safe up to” temperature on this site. The report
        below does not give one, and a single number would not be true for
        every size and every wall.
      </p>

      <h2 className="mt-12 font-serif text-3xl">The report we can show</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        {astmReport.lab} report no. {astmReport.reportNo} ({astmReport.date}).
        Applicant and manufacturer: {site.legalName}. Method:{" "}
        {astmReport.method}, a thermal shock test for glass containers.
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-ink/80">
        <li>Commissioned sample: 80×90 mm, 6 mm wall.</li>
        <li>Commissioned sample: 56×66 mm, 3 mm wall.</li>
        <li>Result on the report: {astmReport.result}</li>
      </ul>
      <p className="mt-4">
        <a
          href={astmReport.href}
          className="text-sm font-medium text-accent hover:underline"
        >
          {astmReport.linkLabel}
        </a>
      </p>

      <h2 className="mt-12 font-serif text-3xl">What this PDF lists</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        The PDF lists two models: 80×90 mm with a 6 mm wall, and 56×66 mm with
        a 3 mm wall. One report carries two models, so the other catalog jars
        are not printed on this file. They are still heat-resistant candle
        jars. A matte white square, an amber square, a black jar with a lid, a
        glass-lid jar, and the amber spout jar are in that catalog. If you
        need a report for the size you will order, we test that size.
      </p>
      <p className="mt-3 text-base leading-7 text-ink/80">
        The same two samples are named on the{" "}
        <Link href="/about" className="text-accent hover:underline">
          factory page
        </Link>
        . Inspection reports describe the samples that were tested.
      </p>

      <h2 className="mt-12 font-serif text-3xl">Glass lids and the spout jar</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        The newer listings are heat-resistant candle jars as well. Their
        ounces are not the two models on the PDF above. Read{" "}
        <Link
          href="/guides/glass-lid-candle-jars"
          className="text-accent hover:underline"
        >
          glass lid candle jars
        </Link>{" "}
        for the 7 oz and 12 oz jars with a glass lid and a paper box, and for
        the amber spout jar.
      </p>
      <ul className="mt-4 space-y-2 text-base leading-7">
        <li>
          <Link
            href="/products/transparent-amber-glass-lid-box"
            className="text-accent hover:underline"
          >
            Transparent amber jar with a glass lid and a paper box
          </Link>
          <span className="text-ink/75"> — 7 / 12 oz. Empty vessel.</span>
        </li>
        <li>
          <Link
            href="/products/black-glass-lid-box"
            className="text-accent hover:underline"
          >
            Black jar with a glass lid and a paper box
          </Link>
          <span className="text-ink/75"> — 7 / 12 oz. Empty vessel.</span>
        </li>
        <li>
          <Link
            href="/products/amber-empty-spout-8-12"
            className="text-accent hover:underline"
          >
            Empty amber spout jar
          </Link>
          <span className="text-ink/75">
            {" "}
            — 8 / 12 oz. No lid and no box.
          </span>
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-3xl">What to put on the inquiry</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-ink/80">
        <li>Capacity in ounces, or the drawing if you have one.</li>
        <li>
          The wax temperature you already pour at. You tell us. We do not
          guess it.
        </li>
        <li>Finish: clear, spray color, frosted, or iridescent.</li>
        <li>Lid or paper box, if you need them.</li>
        <li>Quantity. Minimum {site.moq} pcs.</li>
      </ul>
      <p className="mt-4 text-base leading-7 text-ink/80">
        You fill the candle. We make the empty vessel. Price is on inquiry.
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

      <h2 className="mt-12 font-serif text-3xl">Jars buyers start from</h2>
      <ul className="mt-4 space-y-2 text-base leading-7">
        <li>
          <Link
            href="/products/matte-white-square-thick-bottom"
            className="text-accent hover:underline"
          >
            White square matte thick-bottom jar
          </Link>
          <span className="text-ink/75"> — 8 / 10 / 12 / 16 oz, no lid.</span>
        </li>
        <li>
          <Link
            href="/products/amber-square-lids"
            className="text-accent hover:underline"
          >
            Amber square jar with lid
          </Link>
          <span className="text-ink/75"> — 4 / 8 / 12 oz.</span>
        </li>
        <li>
          <Link
            href="/products/black-luxury-lid-box"
            className="text-accent hover:underline"
          >
            Black jar with lid and box
          </Link>
          <span className="text-ink/75"> — 3 / 8 / 10 oz.</span>
        </li>
        <li>
          <Link
            href="/products/black-champagne-gold"
            className="text-accent hover:underline"
          >
            Black champagne gold jar
          </Link>
          <span className="text-ink/75"> — 5 / 8 / 10 / 12 oz.</span>
        </li>
      </ul>

      <h2 className="mt-12 font-serif text-3xl">Questions</h2>
      <dl className="mt-4 divide-y divide-line border-y border-line">
        {faqs.map((item) => (
          <div key={item.q} className="py-4">
            <dt className="font-medium">{item.q}</dt>
            <dd className="mt-2 text-sm leading-6 text-ink/75">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
