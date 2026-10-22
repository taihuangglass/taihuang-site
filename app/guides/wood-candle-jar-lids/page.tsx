import type { Metadata } from "next";
import { LidGuide } from "@/components/LidGuide";

export const metadata: Metadata = {
  title: "Wood candle jar lids",
  description:
    "Wood lids for empty glass candle jars from Taihuang Glass. Logo engraving available. Silicone gaskets available. MOQ 240 pcs.",
  alternates: { canonical: "/guides/wood-candle-jar-lids" },
};

export default function WoodLidsGuide() {
  return (
    <LidGuide
      current="wood-candle-jar-lids"
      eyebrow="Lids"
      title="Wood candle jar lids"
      intro="Wood lids for empty glass candle jars. Fit is matched to the jar mouth on the quote."
      options={["Wood", "Wood grain"]}
    />
  );
}
