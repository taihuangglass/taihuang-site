# Taihuang Glass — Empty glass vessels from Xuzhou

B2B inquiry site for empty glass candle jars and vessels.
Legal name: **Xuzhou Taihuang Glass Products Co., Ltd.**

Not a shop. No cart. No filled candles.

## Stack

Next.js App Router, TypeScript, Tailwind. Deploy on Vercel.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Inquiries are saved under `data/inquiries/`. Without `RESEND_API_KEY`, mail is not sent; we still keep the JSON file. Set the key on Vercel production so quotes also go to `taihuangal@outlook.com`.

## Catalog

Twelve SKUs in `data/products.json`. Product photos are empty vessels in `public/products/{slug}.jpg`. If a remote Alibaba image URL is set and fails, the page falls back to that local file.

## Certificates

PDFs in `public/certs/`. About page copy is locked — do not generalize ASTM or SGS claims.
