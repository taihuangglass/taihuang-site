export const guides = [
  {
    slug: "heat-resistant-glass-candle-jars",
    title: "Heat-resistant glass candle jars",
    description:
      "Hot-wax pouring and the ASTM C149 thermal shock report Taihuang publishes. Ask on the quote if your size should be checked.",
  },
  {
    slug: "glass-candle-jar-sizes",
    title: "Glass candle jar sizes",
    description:
      "Ounce sizes on the Taihuang catalog, from 3 oz to 16 oz. Millimetre dimensions are confirmed on the quote.",
  },
  {
    slug: "8-oz-candle-jar-size-guide",
    title: "8 oz candle jar size guide",
    description:
      "Candle jar water capacity vs wax fill: why an 8 oz jar is a marketing size, and how to pick by measured millilitres.",
  },
  {
    slug: "custom-glass-candle-jars",
    title: "Custom glass candle jars",
    description:
      "Private-label empty candle jars: color, logo, bamboo wood or metal lids, and paper boxes. MOQ 240 pcs.",
  },
  {
    slug: "metal-candle-jar-lids",
    title: "Metal candle jar lids",
    description:
      "Gold, rose gold, silver, or black metal lids. Logo engraving available. Silicone gaskets available.",
  },
  {
    slug: "bamboo-candle-jar-lids",
    title: "Bamboo candle jar lids",
    description:
      "Natural bamboo or black bamboo lids. Logo engraving available. Silicone gaskets available.",
  },
  {
    slug: "wood-candle-jar-lids",
    title: "Wood candle jar lids",
    description:
      "Wood and wood-grain lids. Logo engraving available. Silicone gaskets available.",
  },
] as const;

export type GuideSlug = (typeof guides)[number]["slug"];

export function guidePath(slug: GuideSlug): string {
  return `/guides/${slug}`;
}

export const lidGuideSlugs = [
  "metal-candle-jar-lids",
  "bamboo-candle-jar-lids",
  "wood-candle-jar-lids",
] as const satisfies readonly GuideSlug[];
