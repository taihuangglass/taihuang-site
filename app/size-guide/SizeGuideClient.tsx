"use client";

import Image from "next/image";
import { useState } from "react";
import { seriesList, waxFill, type SizeItem } from "@/lib/sizeGuide";

const ranges = [
  { id: "all", label: "All capacities", min: 0, max: Infinity },
  { id: "lt100", label: "Under 100 ml", min: 0, max: 99.999 },
  { id: "100-200", label: "100–200 ml", min: 100, max: 200 },
  { id: "201-300", label: "201–300 ml", min: 200.001, max: 300 },
  { id: "301-500", label: "301–500 ml", min: 300.001, max: 500 },
  { id: "501-800", label: "501–800 ml", min: 500.001, max: 800 },
  { id: "gt800", label: "Over 800 ml", min: 800.001, max: Infinity },
] as const;

export function SizeGuideClient({ items }: { items: SizeItem[] }) {
  const [range, setRange] = useState<(typeof ranges)[number]["id"]>("all");
  const r = ranges.find((x) => x.id === range)!;
  const visible = (i: SizeItem) =>
    range === "all" ||
    (i.capacityMl !== null && i.capacityMl >= r.min && i.capacityMl <= r.max);

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-5 border-b border-line bg-paper/95 px-5 py-4 md:-mx-8 md:px-8">
        <nav aria-label="Series" className="flex flex-wrap gap-2 text-sm">
          {seriesList.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-line px-3 py-1 hover:border-accent"
            >
              {s.title}
            </a>
          ))}
        </nav>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-muted">Water capacity:</span>
          {ranges.map((x) => (
            <button
              key={x.id}
              type="button"
              onClick={() => setRange(x.id)}
              aria-pressed={range === x.id}
              className={`rounded-full px-3 py-1 ${
                range === x.id
                  ? "bg-accent text-paper"
                  : "border border-line hover:border-accent"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>
        {range !== "all" ? (
          <p className="mt-3 text-xs text-muted">
            Moulds with no water capacity on the size sheet stay hidden while a
            range is selected. Choose All capacities to see them.
          </p>
        ) : null}
      </div>

      {seriesList.map((s) => {
        const rows = items.filter((i) => i.series === s.id);
        const shown = rows.filter(visible);
        const full = s.id !== "glass-lid";
        return (
          <section key={s.id} id={s.id} className="mt-12 scroll-mt-40">
            <h2 className="font-serif text-3xl">{s.title}</h2>
            <p className="mt-1 text-sm text-muted">
              {rows.length} moulds{range !== "all" ? ` · ${shown.length} in this range` : ""}
            </p>
            {shown.length === 0 ? (
              <p className="mt-4 text-sm text-ink/70">No mould in this capacity range.</p>
            ) : (
              <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
                <table className="w-full min-w-[820px] text-left text-sm">
                  <thead className="bg-card text-xs uppercase tracking-[0.08em] text-muted">
                    <tr>
                      <th className="px-3 py-2">Photo</th>
                      <th className="px-3 py-2">Model</th>
                      <th className="px-3 py-2">{s.sizeLabel}</th>
                      <th className="px-3 py-2">Water capacity (ml)</th>
                      <th className="px-3 py-2">Approx. wax fill</th>
                      <th className="px-3 py-2">Jar weight (g)</th>
                      {full ? (
                        <>
                          <th className="px-3 py-2">Pcs / carton</th>
                          <th className="px-3 py-2">Gross (kg)</th>
                          <th className="px-3 py-2">Carton (cm)</th>
                        </>
                      ) : null}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {shown.map((i) => (
                      <tr key={i.item}>
                        <td className="px-3 py-2">
                          {i.image ? (
                            <Image
                              src={i.image}
                              alt={i.item}
                              width={64}
                              height={64}
                              className="h-14 w-14 object-contain"
                            />
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="px-3 py-2 font-medium">{i.item}</td>
                        <td className="px-3 py-2">{i.size}</td>
                        <td className="px-3 py-2">{i.capacityMl ?? "—"}</td>
                        <td className="px-3 py-2">{waxFill(i.capacityMl)}</td>
                        <td className="px-3 py-2">{i.weightG}</td>
                        {full ? (
                          <>
                            <td className="px-3 py-2">{i.pcs}</td>
                            <td className="px-3 py-2">{i.grossKg}</td>
                            <td className="px-3 py-2">{i.carton}</td>
                          </>
                        ) : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
