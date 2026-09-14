import Link from "next/link";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="group min-w-0">
          <span className="font-serif text-2xl tracking-tight text-ink">
            {site.brand}
          </span>
          <span className="mt-0.5 block truncate text-[11px] uppercase tracking-[0.16em] text-muted">
            {site.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-ink/80 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <WhatsAppLink className="rounded-full border border-line px-3 py-2 text-sm text-ink hover:bg-card sm:px-4" />
          <Link
            href="/contact"
            className="rounded-full bg-accent px-3 py-2 text-sm text-paper hover:bg-accent/90 sm:px-4"
          >
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Request a quote</span>
          </Link>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line/60 px-5 py-2 text-sm text-ink/80 md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
