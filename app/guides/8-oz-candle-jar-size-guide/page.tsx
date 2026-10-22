import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { sizeItems, waxFill } from "@/lib/sizeGuide";

export const metadata: Metadata = {
  title: "8 oz candle jar size guide: water capacity vs wax fill",
  description:
    "How to read candle jar water capacity vs wax fill. Why 8 oz is a marketing size, the 70–80% rule of thumb, and real Taihuang jar sizes in millimetres.",
  alternates: { canonical: "/guides/8-oz-candle-jar-size-guide" },
};

const exampleNames = ["7492 Candle Jar", "8090 Candle Jar", "80100 Candle Jar"];

export default function EightOzGuidePage() {
  const examples = exampleNames
    .map((n) => sizeItems.find((i) => i.item === n))
    .filter((i) => i !== undefined);

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:px-8">
      <p className="text-sm text-muted">
        <Link href="/guides" className="hover:text-ink">
          Guides
        </Link>
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted">Capacities</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight">8 oz candle jar size guide</h1>
      <p className="mt-4 text-base leading-7 text-ink/80">
        &ldquo;8 oz&rdquo; on a candle jar is a marketing size. It does not tell
        you whether it means fluid ounces of water, ounces of wax by weight, or
        how close to the rim the wax sits. Two jars sold as 8 oz can hold
        noticeably different amounts. Pick by measured capacity in millilitres.
      </p>

      <h2 className="mt-10 font-serif text-2xl">Candle jar water capacity vs wax fill</h2>
      <p className="mt-3 text-base leading-7 text-ink/80">
        We measure capacity with water. Water weighs about 1 g per ml. Soy and
        paraffin wax are lighter, roughly 0.8–0.9 g per ml, and you leave space
        under the rim. A practical rule of thumb: wax fill in grams is about
        70–80% of the water capacity in millilitres. Your wax blend, fragrance
        load, and fill line move the number, so always test pour.
      </p>

      <h2 className="mt-10 font-serif text-2xl">Real jars around the 8 oz mark</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-card text-xs uppercase tracking-[0.08em] text-muted">
            <tr>
              <th className="px-3 py-2">Model</th>
              <th className="px-3 py-2">Mouth / base / height (mm)</th>
              <th className="px-3 py-2">Water capacity (ml)</th>
              <th className="px-3 py-2">Approx. wax fill</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {examples.map((i) => (
              <tr key={i.item}>
                <td className="px-3 py-2 font-medium">{i.item}</td>
                <td className="px-3 py-2">{i.size}</td>
                <td className="px-3 py-2">{i.capacityMl ?? "—"}</td>
                <td className="px-3 py-2">{waxFill(i.capacityMl)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-base leading-7 text-ink/80">
        One US ounce by weight is about 28.35 g, so 8 oz of wax is about 227 g.
        On the 70–80% rule, a 250 ml jar like the 7492 lands at roughly 175–200
        g, while the 8090 (315 ml) and 80100 (320 ml) bracket 227 g. That is why
        buyers who want &ldquo;8 oz of wax&rdquo; often end up on a 300 ml+ jar.
      </p>

      <h2 className="mt-10 font-serif text-2xl">How to choose</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-base leading-7 text-ink/80">
        <li>Decide the wax weight you want to put on the label.</li>
        <li>Divide by 0.7–0.8 to get the water capacity to look for.</li>
        <li>Shortlist moulds by capacity and mouth diameter (for wick and lid fit).</li>
        <li>Order samples and test pour your own wax.</li>
      </ol>

      <p className="mt-10 text-base leading-7 text-ink/80">
        All 101 moulds with millimetre sizes, water capacity, and wax fill
        estimates are in the{" "}
        <Link href="/size-guide" className="text-accent hover:underline">
          Size Guide
        </Link>
        . Empty jars only. MOQ {site.moq} pcs. Price on inquiry.
      </p>
    </div>
  );
}
