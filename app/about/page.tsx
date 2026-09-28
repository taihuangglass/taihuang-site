import type { Metadata } from "next";
import Link from "next/link";
import { CertCard } from "@/components/CertCard";
import { astmReport, coatingReport } from "@/lib/certs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About the factory",
  description: `${site.legalName} in Xuzhou, Jiangsu. Empty glass candle vessels. ASTM C149 sample test and supplier coating report.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Factory</p>
      <h1 className="mt-2 font-serif text-4xl">{site.legalName}</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">
        We make empty glass candle jars and vessels in Xuzhou, Jiangsu, for
        candle brands, private label, and wholesale. Forming, spray or frost,
        print, lids, and paper boxes. You fill the wax.
      </p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-ink/80">
        {site.address}
      </p>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Inspection reports available on request. The two reports we publish are
        below. They describe the samples that were tested — not the whole
        catalog.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <CertCard
          title={astmReport.title}
          href={astmReport.href}
          linkLabel={astmReport.linkLabel}
        >
          <p>Beide report no. B-S02829E3695 (28 Apr 2026).</p>
          <p>
            Applicant/manufacturer: Xuzhou Taihuang Glass Products Co., Ltd.
          </p>
          <p>
            Tested commissioned samples: 80×90 mm, 6 mm wall; 56×66 mm, 3 mm
            wall.
          </p>
          <p>
            Method: ASTM C149-14(2020). Result: no obvious mechanical damage
            after the test.
          </p>
          <p>
            Buyers looking for a heat-resistant jar can read{" "}
            <Link href="/guides/heat-resistant-glass-candle-jars" className="text-accent hover:underline">
              what this test does and does not cover
            </Link>
            .
          </p>
        </CertCard>

        <CertCard
          title={coatingReport.title}
          href={coatingReport.href}
          linkLabel={coatingReport.linkLabel}
        >
          <p>SGS report SHAEC24006831401 (12 Apr 2024).</p>
          <p>Sample: water-based glass paint LH-8388H.</p>
          <p>
            Client on the report: Baoying County Long Hui Glass Decoration
            Materials Co., Ltd.
          </p>
          <p>Result: RoHS pass for that paint sample.</p>
          <p>
            Colored finishes can use RoHS-compliant water-based glass paint.
            Supplier test report available.
          </p>
        </CertCard>
      </div>
    </div>
  );
}
