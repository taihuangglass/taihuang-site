import { site } from "@/lib/site";

export function WhatsAppLink({ className }: { className?: string }) {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      WhatsApp
    </a>
  );
}
