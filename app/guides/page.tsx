import type { Metadata } from "next";
import Link from "next/link";
import { guides, guidePath } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Buyer guides",
  description:
    "Plain-language notes for candle brands buying empty glass jars: ounce sizes, lid engraving, and custom OEM.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">For buyers</p>
      <h1 className="mt-2 font-serif text-4xl">Guides</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-ink/80">
        Written for the words candle brands type into search. Empty glass
        vessels only. We do not fill the wax, and we do not publish a USD
        price. MOQ is 240 pcs.
      </p>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={guidePath(guide.slug)}
              className="block h-full rounded-2xl border border-line bg-card p-6 hover:border-accent"
            >
              <h2 className="font-serif text-2xl">{guide.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink/75">
                {guide.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
