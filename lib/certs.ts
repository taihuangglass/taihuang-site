export const astmReport = {
  href:
    "/certs/" +
    encodeURIComponent(
      "ASTM-C149 Thermal Shock Resistance Test for Thai Royal Glass Candle Jars.pdf",
    ),
  title: "Thermal shock — ASTM C149",
  linkLabel: "Download ASTM C149 test report",
  reportNo: "B-S02829E3695",
  lab: "Beide",
  date: "28 Apr 2026",
  method: "ASTM C149-14(2020)",
  samples: "80×90 mm, 6 mm wall; 56×66 mm, 3 mm wall",
  result: "No obvious mechanical damage after the test.",
} as const;

export const coatingReport = {
  href: "/certs/" + encodeURIComponent("sgs检测英文版.pdf"),
  title: "Colored coating — supplier RoHS report",
  linkLabel: "Download supplier test report",
  reportNo: "SHAEC24006831401",
  date: "12 Apr 2024",
  sample: "water-based glass paint LH-8388H",
  client: "Baoying County Long Hui Glass Decoration Materials Co., Ltd.",
  result: "RoHS pass for that paint sample.",
} as const;
