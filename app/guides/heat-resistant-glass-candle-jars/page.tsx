import type { Metadata } from "next";
import Link from "next/link";
import { astmReport } from "@/lib/certs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heat-resistant glass candle jars",
  description:
    "Heat resistance for hot-wax pouring, with the ASTM C149 thermal shock report Taihuang publishes. Send your jar size and pour temperature with the inquiry.",
  alternates: { canonical: "/guides/heat-resistant-glass-candle-jars" },
};

const faqs = [
  {
    q: "Do you rate every jar as heat resistant?",
    a: "No. The published report covers two commissioned sample sizes. A catalog jar is not included just because the factory name is on the report.",
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
        Heat resistance for hot-wax pouring is one of the specifications{" "}
        {site.brand} can show. Buyers search for a jar that can take hot wax.
        The document on file is an ASTM C149 thermal shock report on two
        commissioned samples. If you found that report, or you want your own
        size checked before you order, send the jar size and the wax
        temperature you pour at. Millimetre moulds are in the{" "}
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

      <h2 className="mt-12 font-serif text-3xl">What the report does not cover</h2>
      <p className="mt-4 text-base leading-7 text-ink/80">
        Those two samples are not the twelve catalog jars, and they are not
        every color or finish. A matte white square, an amber square, or a
        black jar with a lid is not automatically “the tested jar.” If your
        size, wall, or finish is different, ask us to confirm before you treat
        this PDF as your spec.
      </p>
      <p className="mt-3 text-base leading-7 text-ink/80">
        The same limit is on the{" "}
        <Link href="/about" className="text-accent hover:underline">
          factory page
        </Link>
        . Inspection reports describe the samples that were tested.
      </p>

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
          View the 12 jars
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
