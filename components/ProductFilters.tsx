"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { allColors, allShapes, allSizes, colorLabel } from "@/lib/products";

const shapes: { value: string; label: string }[] = [
  { value: "round", label: "Round" },
  { value: "square", label: "Square" },
  { value: "bell", label: "Bell" },
  { value: "spout", label: "Spout" },
];

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  function set(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const q = next.toString();
    router.push(q ? `${pathname}?${q}` : pathname);
  }

  const selectClass =
    "w-full rounded-lg border border-line bg-card px-3 py-2 text-sm text-ink";

  return (
    <form
      className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="text-xs uppercase tracking-[0.14em] text-muted">
        Shape
        <select
          className={`${selectClass} mt-1`}
          value={params.get("shape") ?? ""}
          onChange={(e) => set("shape", e.target.value)}
        >
          <option value="">All</option>
          {allShapes.map((s) => (
            <option key={s} value={s}>
              {shapes.find((x) => x.value === s)?.label ?? s}
            </option>
          ))}
        </select>
      </label>
      <label className="text-xs uppercase tracking-[0.14em] text-muted">
        Color
        <select
          className={`${selectClass} mt-1`}
          value={params.get("color") ?? ""}
          onChange={(e) => set("color", e.target.value)}
        >
          <option value="">All</option>
          {allColors.map((c) => (
            <option key={c} value={c}>
              {colorLabel(c)}
            </option>
          ))}
        </select>
      </label>
      <label className="text-xs uppercase tracking-[0.14em] text-muted">
        Size
        <select
          className={`${selectClass} mt-1`}
          value={params.get("size") ?? ""}
          onChange={(e) => set("size", e.target.value)}
        >
          <option value="">All</option>
          {allSizes.map((s) => (
            <option key={s} value={String(s)}>
              {s} oz
            </option>
          ))}
        </select>
      </label>
      <label className="text-xs uppercase tracking-[0.14em] text-muted">
        Lid
        <select
          className={`${selectClass} mt-1`}
          value={params.get("lid") ?? ""}
          onChange={(e) => set("lid", e.target.value)}
        >
          <option value="">All</option>
          <option value="yes">With lid</option>
        </select>
      </label>
      <div className="flex items-end">
        <button
          type="button"
          className="w-full rounded-lg border border-line px-3 py-2 text-sm text-muted hover:text-ink"
          onClick={() => router.push(pathname)}
        >
          Clear filters
        </button>
      </div>
    </form>
  );
}
