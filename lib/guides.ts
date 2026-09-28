export const guides = [
  {
    slug: "heat-resistant-glass-candle-jars",
    title: "Heat-resistant glass candle jars",
    description:
      "What buyers mean by a heat-resistant candle jar, and the one ASTM C149 thermal shock report Taihuang publishes.",
  },
  {
    slug: "glass-candle-jar-sizes",
    title: "Glass candle jar sizes",
    description:
      "Ounce sizes on the Taihuang catalog, from 3 oz to 16 oz. Millimetre dimensions are confirmed on the quote.",
  },
  {
    slug: "custom-glass-candle-jars",
    title: "Custom glass candle jars",
    description:
      "Private-label empty candle jars: color, logo, bamboo wood or metal lids, and paper boxes. MOQ 240 pcs.",
  },
] as const;

export type GuideSlug = (typeof guides)[number]["slug"];

export function guidePath(slug: GuideSlug): string {
  return `/guides/${slug}`;
}
