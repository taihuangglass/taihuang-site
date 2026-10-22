import type { Metadata } from "next";
import { LidGuide } from "@/components/LidGuide";

export const metadata: Metadata = {
  title: "Metal candle jar lids",
  description:
    "Metal lids for empty glass candle jars from Taihuang Glass. Logo engraving available. Silicone gaskets available. MOQ 240 pcs.",
  alternates: { canonical: "/guides/metal-candle-jar-lids" },
};

export default function MetalLidsGuide() {
  return (
    <LidGuide
      current="metal-candle-jar-lids"
      eyebrow="Lids"
      title="Metal candle jar lids"
      intro="Metal lids for empty glass candle jars. Finishes listed below. Fit is matched to the jar mouth on the quote."
      options={["Gold", "Rose gold", "Silver", "Black"]}
    />
  );
}
