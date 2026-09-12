# Taihuang Glass

B2B inquiry site for empty glass candle jars. Legal name: Xuzhou Taihuang Glass Products Co., Ltd.

Not a shop. No cart. No custom domain in this deploy.

## Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

`RESEND_API_KEY` can stay empty. Inquiries still save as JSON under `data/inquiries/` and the form shows: *Received. We will reply from taihuangal@outlook.com.*

## Deploy on Vercel (no custom domain)

1. Push this repo to GitHub (HTTPS).
2. Open [vercel.com](https://vercel.com) and sign in with GitHub.
3. **Add New… → Project**.
4. **Import** this GitHub repository.
5. Framework Preset: **Next.js** (leave the default). Do not add a custom domain.
6. Environment Variables:
   - `INQUIRY_TO_EMAIL` = `taihuangal@outlook.com`
   - `RESEND_API_KEY` = leave empty for now
7. **Deploy**. Use the `*.vercel.app` URL Vercel gives you.
