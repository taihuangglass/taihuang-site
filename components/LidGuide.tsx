import Link from "next/link";
import { guidePath, guides, lidGuideSlugs } from "@/lib/guides";
import { site } from "@/lib/site";

export function LidGuide({
  eyebrow,
  title,
  intro,
  options,
  current,
}: {
  eyebrow: string
  title: string
  intro: string
  options: string[]
  current: (typeof lidGuideSlugs)[number]
}) {
  const others = guides.filter(
    (g) => g.slug !== current && (lidGuideSlugs as readonly string[]).includes(g.slug),
  );
  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">{eyebrow}</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">{title}</h1>
      <p className="mt-4 text-base leading-7 text-ink/80">{intro}</p>

      <h2 className="mt-10 font-serif text-2xl">Options</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-ink/80">
        {options.map((o) => (
          <li key={o}>{o}</li>
        ))}
        <li>Silicone gaskets available.</li>
      </ul>

      <h2 className="mt-10 font-serif text-2xl">Logo engraving</h2>
      <p className="mt-3 text-base leading-7 text-ink/80">
        Yes, this lid can be laser engraved with your logo. The lid engraving
        template fee is quoted per design.
      </p>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-base leading-7 text-ink/80">
        <li>You send an HD logo file.</li>
        <li>We send a preview rendering for you to confirm.</li>
        <li>We make the engraving template.</li>
        <li>We send a photo or video of the finished sample for you to confirm.</li>
        <li>We ship.</li>
      </ol>
      <p className="mt-3 text-base leading-7 text-ink/80">
        Engraving depth, the largest logo that fits, and the lead time are
        confirmed on the sample for that lid and that artwork. We do not print
        one depth or one logo size for every lid.
      </p>

      <p className="mt-10 text-base leading-7 text-ink/80">
        Choosing the jar first? Mouth diameters for every mould are in the{" "}
        <Link href="/size-guide" className="text-accent hover:underline">
          Size Guide
        </Link>
        . Other lids:{" "}
        {others.map((g, i) => (
          <span key={g.slug}>
            {i > 0 ? ", " : ""}
            <Link href={guidePath(g.slug)} className="text-accent hover:underline">
              {g.title.toLowerCase()}
            </Link>
          </span>
        ))}
        .
      </p>
      <p className="mt-3 text-sm text-muted">
        Empty jars and lids only. MOQ {site.moq} pcs. Price on inquiry.
      </p>
      <p className="mt-6">
        <Link href="/contact" className="text-sm font-medium text-accent hover:underline">
          Ask for a lid quote
        </Link>
      </p>
    </div>
  );
}
