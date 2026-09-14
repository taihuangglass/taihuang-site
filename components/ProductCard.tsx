import Link from "next/link";
import { ProductPhoto } from "@/components/ProductPhoto";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  colorLabel,
  imageLookLabel,
  priceLine,
  sizeLabel,
} from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product
  priority?: boolean
}) {
  const look = imageLookLabel(product);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square bg-paper"
      >
        <span className="absolute inset-3 block">
          <ProductPhoto
            slug={product.slug}
            src={product.image}
            alt={product.title}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain"
          />
        </span>
        {look ? (
          <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-muted">
            {look}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="font-serif text-xl leading-snug text-ink">
          <Link href={`/products/${product.slug}`}>{product.title}</Link>
        </h2>
        <p className="text-sm text-muted">
          {product.colors.map(colorLabel).join(" · ")} ·{" "}
          {sizeLabel(product.sizesOz)}
        </p>
        <p className="text-sm text-ink/80">{priceLine(product)}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
          <Link
            href={`/products/${product.slug}#inquiry`}
            className="text-sm font-medium text-accent hover:underline"
          >
            Request a quote
          </Link>
          <WhatsAppLink className="text-sm font-medium text-ink/80 hover:text-accent hover:underline" />
        </div>
      </div>
    </article>
  );
}
