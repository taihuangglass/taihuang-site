import { Suspense } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { filterProducts, hasActiveFilters, parseFilters } from "@/lib/filters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empty glass candle jars",
  description:
    "Fifteen empty glass candle jars and vessels. Filter by shape, color, size, and lid. Price on inquiry. MOQ 240 pcs.",
  alternates: { canonical: "/products" },
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const sp = await searchParams;
  const filters = parseFilters(sp);
  const list = filterProducts(filters);
  const active = hasActiveFilters(filters);

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Catalog</p>
      <h1 className="mt-2 font-serif text-4xl">Empty glass candle jars</h1>
      <p className="mt-3 max-w-2xl text-ink/75">
        Vessels only. You fill the candle. Every SKU is Inquire, MOQ 240 pcs.
        See{" "}
        <Link href="/guides/glass-candle-jar-sizes" className="text-accent hover:underline">
          sizes in ounces
        </Link>
        , millimetre moulds in the{" "}
        <Link href="/size-guide" className="text-accent hover:underline">
          Size Guide
        </Link>
        , or{" "}
        <Link
          href="/guides/heat-resistant-glass-candle-jars"
          className="text-accent hover:underline"
        >
          heat resistance
        </Link>
        .
      </p>
      <section className="mt-8 max-w-2xl">
        <h2 className="font-serif text-2xl">Newer listings</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
          <li>
            <Link
              href="/products/amber-empty-spout-8-12"
              className="text-accent hover:underline"
            >
              Empty amber spout jar
            </Link>
            {" — 8 oz / 12 oz. No lid, no box."}
          </li>
          <li>
            <Link
              href="/products/transparent-amber-glass-lid-box"
              className="text-accent hover:underline"
            >
              Transparent amber jar
            </Link>
            {" — glass lid, paper box, 7 oz / 12 oz. Empty vessel."}
          </li>
          <li>
            <Link
              href="/products/black-glass-lid-box"
              className="text-accent hover:underline"
            >
              Black jar
            </Link>
            {" — glass lid, paper box, 7 oz / 12 oz. Empty vessel."}
          </li>
        </ul>
      </section>
      <div className="mt-8">
        <Suspense>
          <ProductFilters />
        </Suspense>
      </div>
      {list.length === 0 ? (
        <p className="mt-12 text-muted">
          No jars match. Clear filters.
        </p>
      ) : (
        <>
          <p className="mt-6 text-sm text-muted">
            {list.length} vessel{list.length === 1 ? "" : "s"}
            {active ? " matching filters" : ""}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 3} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
