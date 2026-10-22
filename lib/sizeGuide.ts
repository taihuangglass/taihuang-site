import raw from "@/data/sizeGuide.json";

export type SizeRow = {
  Series: string
  Item: string
  "Size (mm) Top / Bottom / Height"?: string
  "Size (mm) Diameter × Height"?: string
  "Jar Weight (g)": number | string
  "Capacity (ml) water-measured": number | string
  "Qty per Carton (pcs)"?: number | string
  "Gross Weight (kg)"?: number | string
  "Carton Size (cm)"?: string
};

export type SizeItem = {
  series: SeriesId
  item: string
  size: string
  weightG: string
  capacityMl: number | null
  pcs: string
  grossKg: string
  carton: string
};

export const seriesList = [
  { id: "transparent", source: "Clear Glass Series", title: "Transparent Glass Cup series", sizeLabel: "Mouth / base / height (mm)" },
  { id: "square-octagon", source: "Square & Octagon Series", title: "Square & Octagon series", sizeLabel: "Mouth / base / height (mm)" },
  { id: "arc-bottom", source: "Curved Bottom Series", title: "Arc-Bottom Cup series", sizeLabel: "Mouth / base / height (mm)" },
  { id: "glass-lid", source: "Glass Lid Jar Series", title: "Glass Lid Jar series", sizeLabel: "Diameter × height (mm)" },
] as const;

export type SeriesId = (typeof seriesList)[number]["id"];

const text = (v: unknown): string =>
  v === undefined || v === null || v === "" || v === "-" ? "—" : String(v);

export const sizeItems: SizeItem[] = (raw as SizeRow[]).map((r) => {
  const s = seriesList.find((x) => x.source === r.Series);
  if (!s) throw new Error(`Unknown series ${r.Series}`);
  const cap = r["Capacity (ml) water-measured"];
  return {
    series: s.id,
    item: r.Item,
    size: text(r["Size (mm) Top / Bottom / Height"] ?? r["Size (mm) Diameter × Height"]),
    weightG: text(r["Jar Weight (g)"]),
    capacityMl: typeof cap === "number" ? cap : null,
    pcs: text(r["Qty per Carton (pcs)"]),
    grossKg: text(r["Gross Weight (kg)"]),
    carton: text(r["Carton Size (cm)"]),
  };
});

/** Rule of thumb: wax fill ≈ 70–80% of water capacity, in grams. */
export function waxFill(ml: number | null): string {
  if (ml === null) return "—";
  return `${Math.round(ml * 0.7)}–${Math.round(ml * 0.8)} g`;
}

export const catalogPdf = "/catalog/Taihuang-Candle-Jar-Size-Shape-Catalog.pdf";

export function sizeGuideAnchorForShape(shape: string): string {
  return shape === "square" ? "/size-guide#square-octagon" : "/size-guide";
}
