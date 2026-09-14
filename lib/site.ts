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
    return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
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
