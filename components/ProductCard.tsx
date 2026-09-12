import Link from "next/link";
import { ProductPhoto } from "@/components/ProductPhoto";
import { colorLabel, priceLine, sizeLabel } from "@/lib/products";
import type { Product } from "@/types/product";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product
  priority?: boolean
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <Link href={`/products/${product.slug}`} className="relative aspect-square bg-paper">
        <ProductPhoto
          slug={product.slug}
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="font-serif text-xl leading-snug text-ink">
          <Link href={`/products/${product.slug}`}>{product.title}</Link>
        </h2>
        <p className="text-sm text-muted">
          {product.colors.map(colorLabel).join(" · ")} · {sizeLabel(product.sizesOz)}
        </p>
        <p className="text-sm text-ink/80">{priceLine(product)}</p>
        <Link
          href={`/products/${product.slug}#inquiry`}
          className="mt-auto pt-2 text-sm font-medium text-accent hover:underline"
        >
          Request a quote
        </Link>
      </div>
    </article>
  );
}
