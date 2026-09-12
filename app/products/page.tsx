import { Suspense } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { filterProducts, hasActiveFilters, parseFilters } from "@/lib/filters";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empty glass candle jars",
  description:
    "Twelve empty glass candle jars and vessels. Filter by shape, color, size, and lid. MOQ 240 pcs.",
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
        Vessels only. You fill the candle. Every SKU is MOQ 240 pcs, quoted in
        USD.
      </p>
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
