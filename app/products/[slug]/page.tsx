import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductPhoto } from "@/components/ProductPhoto";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { heroNotes } from "@/lib/productNotes";
import {
  colorLabel,
  getProduct,
  imageLookLabel,
  priceLine,
  productDescription,
  products,
  relatedProducts,
  sizeLabel,
  soldLabel,
} from "@/lib/products";
import { astmReport } from "@/lib/certs";
import { site } from "@/lib/site";
import { sizeGuideTargets } from "@/lib/sizeGuide";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.title,
    description: productDescription(product),
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = relatedProducts(product);
  const look = imageLookLabel(product);
  const notes = heroNotes[product.slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: productDescription(product),
    image: product.image.startsWith("http")
      ? product.image
      : `${site.url}${product.image}`,
    brand: site.brand,
    manufacturer: site.legalName,
  };

  const specs = [
    ["Colors", product.colors.map(colorLabel).join(", ")],
    ["Shape", product.shape],
    ["Sizes", sizeLabel(product.sizesOz)],
    ["Lid", product.withLid ? "Yes" : "No"],
    ["Paper box", product.withBox ? "Yes" : "No"],
    ...(product.thickBottom ? [["Base", "Thick bottom"]] : []),
    ...(product.finish ? [["Finish", product.finish]] : []),
    ["Price", "Inquire"],
    ["MOQ", `${site.moq} pcs`],
    ...(typeof product.sold === "number"
      ? [["Sold", soldLabel(product.sold)] as [string, string]]
      : []),
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm text-muted">
        <Link href="/products" className="hover:text-ink">
          Products
        </Link>
        <span className="mx-2">/</span>
        {product.title}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-card">
          <div className="absolute inset-6">
            <ProductPhoto
              slug={product.slug}
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          {look ? (
            <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-muted">
              {look}
            </span>
          ) : null}
        </div>
        <div>
          <h1 className="font-serif text-4xl leading-tight">{product.title}</h1>
          <p className="mt-3 text-lg text-ink/80">{priceLine(product)}</p>
          <p className="mt-4 max-w-lg text-ink/75">{product.summary}</p>
          <p className="mt-3 text-sm text-muted">
            Empty glass vessel. You fill the candle. Quotes on request. No
            published USD price.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {specs.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right capitalize">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#inquiry"
              className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
            >
              Request a quote
            </a>
            <WhatsAppLink className="inline-block rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card" />
          </div>
        </div>
      </div>

      <section className="mt-12 max-w-2xl">
        <h2 className="font-serif text-2xl">Sizes in millimetres</h2>
        <p className="mt-3 text-sm leading-6 text-ink/75">
          This listing is sold by the ounce. Mouth, base, height, water
          capacity, and approximate wax fill for the standard moulds are in the{" "}
          {sizeGuideTargets(product.shape).map((target, index) => (
            <span key={target.href}>
              {index > 0 ? " and the " : ""}
              <Link href={target.href} className="text-accent hover:underline">
                {target.label}
              </Link>
            </span>
          ))}
          .{" "}
          {product.shape === "spout"
            ? "This spout jar is not in those four series. Quote it from the ounces on this page."
            : "Match the ounce here to the water capacity there. The coloured listing does not lock one mould number."}
        </p>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="font-serif text-2xl">Hot wax</h2>
        <p className="mt-3 text-sm leading-6 text-ink/75">
          Hot-wax pouring is part of the jar specification. The published
          ASTM C149 report covers two commissioned sample sizes. If this SKU
          should be checked the same way, say so on the inquiry.{" "}
          <Link
            href="/guides/heat-resistant-glass-candle-jars"
            className="text-accent hover:underline"
          >
            Heat-resistance report
          </Link>
          .{" "}
          <a href={astmReport.href} className="text-accent hover:underline">
            {astmReport.linkLabel}
          </a>
          .
        </p>
      </section>

      {notes ? (
        <section className="mt-10 max-w-2xl">
          <h2 className="font-serif text-2xl">About this vessel</h2>
          <div className="mt-3 space-y-3 text-sm leading-6 text-ink/75">
            {notes.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {notes.also.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-accent hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section id="inquiry" className="mt-16 scroll-mt-24">
        <h2 className="font-serif text-3xl">Request a quote</h2>
        <div className="mt-6 max-w-2xl rounded-2xl border border-line bg-card p-6">
          <InquiryForm variant="product" defaultSku={product.slug} />
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-serif text-3xl">Related vessels</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
