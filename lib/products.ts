import catalog from "@/data/products.json";
import type { Product } from "@/types/product";

export const products = catalog as Product[];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.slug !== product.slug)
    .sort((a, b) => {
      const aScore =
        (a.shape === product.shape ? 2 : 0) +
        (a.colors.some((c) => product.colors.includes(c)) ? 1 : 0);
      const bScore =
        (b.shape === product.shape ? 2 : 0) +
        (b.colors.some((c) => product.colors.includes(c)) ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, limit);
}

export function priceLine(product: Product): string {
  return `Inquire · MOQ ${product.moq} pcs`;
}

export function sizeLabel(sizes: number[]): string {
  if (sizes.length === 0) return "Capacity on request";
  return sizes.map((s) => `${s} oz`).join(" / ");
}

export function colorLabel(color: string): string {
  return color
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function soldLabel(n: number): string {
  return n.toLocaleString("en-US");
}

export function imageLookLabel(product: Product): string | null {
  return product.imageLook === "filled" ? "Filled look" : null;
}

export const allSizes = Array.from(
  new Set(products.flatMap((p) => p.sizesOz)),
).sort((a, b) => a - b);

export const allColors = Array.from(new Set(products.flatMap((p) => p.colors)));

export const allShapes = Array.from(
  new Set(products.map((p) => p.shape)),
) as Product["shape"][];
