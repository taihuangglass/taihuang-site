import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const oem = [
  {
    title: "Color",
    body: "Solid, frosted, iridescent, or a pantone you send.",
  },
  {
    title: "Bottle logo",
    body: "Silk screen or decal on the vessel. Describe the mark in your inquiry.",
  },
  {
    title: "Lids",
    body: "Bamboo, wood, or metal lids to match the line.",
  },
  {
    title: "Paper box",
    body: "Plain or printed paper boxes for private-label packing.",
  },
];

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="relative isolate min-h-[72vh] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Empty glass candle jars on a work table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-end px-5 py-16 md:px-8">
          <p className="text-xs uppercase tracking-[0.22em] text-paper/80">
            {site.tagline}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-paper md:text-6xl">
            Empty glass candle jars for brands that fill their own.
          </h1>
          <p className="mt-4 max-w-xl text-base text-paper/85 md:text-lg">
            Factory vessels from Xuzhou. Color, logo, lids, and paper boxes.
            MOQ {site.moq} pcs. Not a candle shop.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-full bg-paper px-5 py-2.5 text-sm text-ink hover:bg-card"
            >
              View vessels
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-paper/50 px-5 py-2.5 text-sm text-paper hover:bg-paper/10"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Catalog
            </p>
            <h2 className="mt-2 font-serif text-3xl md:text-4xl">
              Twelve empty vessels
            </h2>
          </div>
          <Link href="/products" className="text-sm text-accent hover:underline">
            All products
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            Custom OEM
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl md:text-4xl">
            Finish the jar to the brand, then you fill it.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {oem.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line p-5">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/custom"
            className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
          >
            OEM options
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Factory</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl">{site.legalName}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">
          {site.address}. Empty glass candle jars and vessels for candle brands,
          private label, and wholesale. Inspection reports on request — see About
          for the two reports we publish.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card"
          >
            About the factory
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm text-paper hover:bg-accent/90"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
