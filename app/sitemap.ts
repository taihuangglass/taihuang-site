import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/products",
    "/packaging",
    "/custom",
    "/about",
    "/contact",
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
