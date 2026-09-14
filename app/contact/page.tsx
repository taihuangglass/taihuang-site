import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a quote from ${site.legalName}. Email, WhatsApp, and WeChat.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-2 md:px-8">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Contact</p>
        <h1 className="mt-2 font-serif text-4xl">Request a quote</h1>
        <p className="mt-3 text-ink/75">
          Empty vessels only. MOQ {site.moq} pcs. Samples are available on
          request.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="text-muted">Company</dt>
            <dd className="mt-1">{site.legalName}</dd>
          </div>
          <div>
            <dt className="text-muted">Address</dt>
            <dd className="mt-1">{site.address}</dd>
          </div>
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="mt-1">
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">WhatsApp</dt>
            <dd className="mt-1">
              <a
                className="text-accent hover:underline"
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {site.whatsapp}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">WeChat</dt>
            <dd className="mt-1">{site.wechat}</dd>
          </div>
        </dl>
        <WhatsAppLink className="mt-8 inline-block rounded-full border border-line px-5 py-2.5 text-sm hover:bg-card" />
      </div>
      <div className="rounded-2xl border border-line bg-card p-6">
        <InquiryForm variant="contact" defaultSku="General inquiry" />
      </div>
    </div>
  );
}
