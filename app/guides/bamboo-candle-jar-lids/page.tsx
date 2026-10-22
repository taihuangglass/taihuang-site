import type { Metadata } from "next";
import { LidGuide } from "@/components/LidGuide";

export const metadata: Metadata = {
  title: "Bamboo candle jar lids",
  description:
    "Bamboo lids for empty glass candle jars from Taihuang Glass. Logo engraving available. Silicone gaskets available. MOQ 240 pcs.",
  alternates: { canonical: "/guides/bamboo-candle-jar-lids" },
};

export default function BambooLidsGuide() {
  return (
    <LidGuide
      current="bamboo-candle-jar-lids"
      eyebrow="Lids"
      title="Bamboo candle jar lids"
      intro="Bamboo lids for empty glass candle jars. Fit is matched to the jar mouth on the quote."
      options={["Natural bamboo", "Black bamboo"]}
    />
  );
}
