import { Link } from "@tanstack/react-router";

import { NAV, SERVICES, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center bg-primary">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path d="M2 19 9 6l4 7 2.5-4L22 19Z" fill="var(--primary-foreground)" />
              </svg>
            </span>
            <span className="font-display text-base font-bold">SUMMIT</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {SITE.tagline}. Chargebacks, wire recalls, blockchain tracing and
            regulatory escalation, handled by former bank investigators.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/auth" className="hover:text-primary">
                Client portal
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Practice areas</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em]">Case desk</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            <li>{SITE.address}</li>
            <li>
              <a className="hover:text-primary" href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>
                {SITE.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            Summit Financial Recovery is a private investigation and claims
            management firm. We are not a law firm and do not provide legal
            advice. No recovery outcome is guaranteed.
          </p>
        </div>
      </div>
    </footer>
  );
}
