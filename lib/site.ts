export const CANONICAL_SITE_URL = "https://www.taihuangglass.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  const unusable =
    !raw ||
    raw.includes("localhost") ||
    raw.includes("127.0.0.1") ||
    raw.includes("vercel.app");

  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    return unusable ? CANONICAL_SITE_URL : raw;
  }

  return raw && !unusable ? raw : "http://localhost:3000";
}

export const site = {
  brand: "Taihuang Glass",
  tagline: "Empty glass vessels from Xuzhou",
  legalName: "Xuzhou Taihuang Glass Products Co., Ltd.",
  email: "taihuangal@outlook.com",
  whatsapp: "+86 183 052 00666",
  whatsappDigits: "8618305200666",
  whatsappHref:
    "https://wa.me/8618305200666?text=Hello%2C%20I%20want%20a%20quote%20for%20glass%20candle%20jars.%20MOQ%20240.",
  wechat: "18305200666",
  address:
    "Zhangji Town, Tongshan District, Xuzhou City, Jiangsu Province, China",
  moq: 240,
  description:
    "Empty glass candle jars and vessels for candle brands, private label, and wholesale. Factory in Xuzhou, Jiangsu. OEM color, logo, lids, and paper boxes. Price on inquiry. MOQ 240 pcs.",
  get url() {
    return resolveSiteUrl();
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/packaging", label: "Packaging" },
  { href: "/custom", label: "Custom OEM" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
