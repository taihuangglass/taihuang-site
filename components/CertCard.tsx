type CertCardProps = {
  title: string
  children: React.ReactNode
  href: string
  linkLabel: string
};

export function CertCard({ title, children, href, linkLabel }: CertCardProps) {
  return (
    <article className="rounded-2xl border border-line bg-card p-6">
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-6 text-ink/80">{children}</div>
      <a
        href={href}
        className="mt-5 inline-block text-sm font-medium text-accent hover:underline"
      >
        {linkLabel}
      </a>
    </article>
  );
}
