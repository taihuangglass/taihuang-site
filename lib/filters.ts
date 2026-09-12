import { products } from "@/lib/products";
import type { Product, ProductColor, ProductShape } from "@/types/product";

export type ProductFilters = {
  shape?: string
  color?: string
  size?: string
  lid?: string
};

const shapes: ProductShape[] = ["round", "square", "bell", "spout"];
const colors: ProductColor[] = [
  "white",
  "black",
  "amber",
  "champagne-gold",
  "clear",
  "pink",
  "blue",
  "gray",
  "brown",
];

export function parseFilters(
  searchParams: Record<string, string | string[] | undefined>,
): ProductFilters {
  const one = (k: string) => {
    const v = searchParams[k];
    return Array.isArray(v) ? v[0] : v;
  };
  return {
    shape: one("shape"),
    color: one("color"),
    size: one("size"),
    lid: one("lid"),
  };
}

export function filterProducts(filters: ProductFilters): Product[] {
  return products.filter((p) => {
    if (filters.shape && shapes.includes(filters.shape as ProductShape)) {
      if (p.shape !== filters.shape) return false;
    }
    if (filters.color && colors.includes(filters.color as ProductColor)) {
      if (!p.colors.includes(filters.color as ProductColor)) return false;
    }
    if (filters.size) {
      const oz = Number(filters.size);
      if (!Number.isNaN(oz) && !p.sizesOz.includes(oz)) return false;
    }
    if (filters.lid === "yes" && !p.withLid) return false;
    return true;
  });
}

export function hasActiveFilters(filters: ProductFilters): boolean {
  return Boolean(filters.shape || filters.color || filters.size || filters.lid);
}
