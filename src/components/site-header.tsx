import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import { NAV, SITE } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center bg-primary">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M2 19 9 6l4 7 2.5-4L22 19Z" fill="var(--primary-foreground)" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-base font-bold tracking-tight">
          SUMMIT
        </span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Financial Recovery
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session);
    });
    supabase.auth.getSession().then(({ data: s }) => setSignedIn(!!s.session));
    return () => data.subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden bg-ink text-ink-foreground lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="text-ink-muted">{SITE.hours}</p>
          <div className="flex items-center gap-5">
            <a className="flex items-center gap-1.5 hover:text-primary" href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>
              <Phone className="h-3.5 w-3.5" />
              {SITE.phone}
            </a>
            <a className="hover:text-primary" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to={signedIn ? "/dashboard" : "/auth"}>
              {signedIn ? "My portal" : "Client login"}
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Start a claim</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 py-4">
              <Button asChild variant="outline" className="flex-1" onClick={() => setOpen(false)}>
                <Link to={signedIn ? "/dashboard" : "/auth"}>
                  {signedIn ? "My portal" : "Client login"}
                </Link>
              </Button>
              <Button asChild className="flex-1" onClick={() => setOpen(false)}>
                <Link to="/contact">Start a claim</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
