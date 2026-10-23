import type { MetadataRoute } from "next";
import { guidePath, guides } from "@/lib/guides";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/products",
    "/size-guide",
    "/packaging",
    "/custom",
    "/about",
    "/contact",
    "/guides",
    "/guides/heat-resistant-glass-candle-jars",
    ...guides.map((guide) => guidePath(guide.slug)),
  ].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified,
    }),
  );
  const productRoutes = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified,
  }));
  return [...staticRoutes, ...productRoutes];
}
