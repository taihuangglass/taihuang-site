import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-2xl">{site.brand}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-paper/60">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-paper/80">{site.legalName}</p>
          <p className="mt-2 text-sm text-paper/70">{site.address}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-paper/50">
            Inquire
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href={`https://wa.me/${site.whatsappDigits}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>WeChat {site.wechat}</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-paper/50">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 px-5 py-4 text-center text-xs text-paper/45">
        Empty glass candle jars and vessels. Not a retail candle shop.
      </div>
    </footer>
  );
}
