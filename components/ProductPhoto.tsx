"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductPhoto({
  slug,
  src,
  alt,
  fill,
  priority = false,
  sizes,
  className,
}: {
  slug: string
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  sizes?: string
  className?: string
}) {
  const local = `/products/${slug}.jpg`;
  const [current, setCurrent] = useState(src || local);

  return (
    <Image
      src={current}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => {
        if (current !== local) setCurrent(local);
      }}
    />
  );
}
