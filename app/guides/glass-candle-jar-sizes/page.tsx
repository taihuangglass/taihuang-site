import type { Metadata } from "next";
import Link from "next/link";
import { allSizes, products, sizeLabel } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Glass candle jar sizes",
  description:
    "The 15 finished Taihuang listings grouped by US fluid ounce. Millimetre mould sizes are in the Size Guide.",
  alternates: { canonical: "/guides/glass-candle-jar-sizes" },
};

export default function SizesGuidePage() {
  const unlisted = products.filter((p) => p.sizesOz.length === 0);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">
        Capacities
      </p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">
        Glass candle jar sizes
      </h1>
      <p className="mt-4 text-base leading-7 text-ink/80">
        These 15 listings are named in US fluid ounces, which is what candle
        brands search. Mouth, base, height, water capacity, and approximate wax
        fill for 101 moulds are in the{" "}
        <Link href="/size-guide" className="text-accent hover:underline">
          Size Guide
        </Link>
        . This page only groups the finished listings by ounce.
      </p>
      <p className="mt-3 text-base leading-7 text-ink/80">
        Every jar below is empty. You fill the wax. MOQ {site.moq} pcs. Price
        on inquiry.
      </p>

      <div className="mt-10 space-y-8">
        {allSizes.map((oz) => {
          const matches = products.filter((p) => p.sizesOz.includes(oz));
          return (
            <section key={oz}>
              <h2 className="font-serif text-2xl">{oz} oz</h2>
              <ul className="mt-3 space-y-2">
                {matches.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-accent hover:underline"
                    >
                      {p.title}
                    </Link>
                    <span className="text-sm text-ink/70">
                      {" "}
                      — {sizeLabel(p.sizesOz)}
                      {p.withLid ? ", with lid" : ""}
                      {p.withBox ? ", with box" : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {unlisted.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-serif text-2xl">Capacity on request</h2>
          <ul className="mt-3 space-y-2">
            {unlisted.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="text-accent hover:underline"
                >
                  {p.title}
                </Link>
                <span className="text-sm text-ink/70">
                  {" "}
                  — ounces are not on the listing title. Tell us the fill you
                  need.
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="mt-10 text-base leading-7 text-ink/80">
        Every catalog jar is a heat-resistant candle jar. If you are choosing a
        size because the wax is poured hot, read{" "}
        <Link
          href="/guides/heat-resistant-glass-candle-jars"
          className="text-accent hover:underline"
        >
          heat-resistant glass candle jars
        </Link>
        . The ASTM C149 report names two sample sizes. Ask on the quote if you
        need a report for the ounce you will order.
      </p>
      <p className="mt-6">
        <Link
          href="/products"
          className="text-sm font-medium text-accent hover:underline"
        >
          Filter the catalog by size
        </Link>
      </p>
    </div>
  );
}
