export const heroNotes: Record<
  string,
  { paragraphs: string[]; also: { href: string; label: string }[] }
> = {
  "matte-white-square-thick-bottom": {
    paragraphs: [
      "White, matte, square, with a thick bottom. Empty jar. Capacities on this listing are 8 oz, 10 oz, 12 oz, and 16 oz.",
      "This listing does not include a lid or a paper box. Both can be added on a quote. See lids and packaging, or the custom page.",
      "The ASTM C149 report does not name this SKU. It covers two commissioned sample sizes only. If you need this jar checked for hot wax, say so on the inquiry.",
    ],
    also: [
      { href: "/packaging", label: "Lids and boxes" },
      { href: "/custom", label: "Custom color and logo" },
    ],
  },
  "black-luxury-lid-box": {
    paragraphs: [
      "Black round jar sold with a lid and a paper box. Empty vessel. Capacities on this listing are 3 oz, 8 oz, and 10 oz.",
      "The photograph is a filled look so you can see the finished presentation. What we ship is the empty jar, lid, and box. You fill the wax.",
      "The ASTM C149 report does not name this SKU. Ask on the quote if this size should be checked for hot-wax pouring.",
    ],
    also: [
      { href: "/packaging", label: "Other lid and box options" },
      { href: "/custom", label: "Logo and color" },
    ],
  },
  "amber-square-lids": {
    paragraphs: [
      "Amber square jar with a lid. Empty vessel. Capacities on this listing are 4 oz, 8 oz, and 12 oz. This listing does not include a paper box.",
      "A separate amber square listing includes both a lid and a box, in 4 oz, 8 oz, and 10 oz.",
      "The ASTM C149 report does not name this SKU. Ask if you need this size checked before you pour hot wax.",
    ],
    also: [
      {
        href: "/products/amber-square-lid-box",
        label: "Amber square with lid and box",
      },
      { href: "/custom", label: "Custom finish" },
    ],
  },
};
