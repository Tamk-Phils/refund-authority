import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Scale,
  Lock,
  FileSearch,
  Landmark,
} from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FAQS,
  IMMEDIATE_STEPS,
  PROCESS,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/site-data";
import heroImage from "@/assets/hero-operations.jpg";
import teamImage from "@/assets/team-boardroom.jpg";
import forensicsImage from "@/assets/service-forensics.jpg";
import consultationImage from "@/assets/service-consultation.jpg";
import legalImage from "@/assets/service-legal.jpg";
import reliefImage from "@/assets/client-relief.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Summit Financial Recovery — Recover Funds Lost to Fraud" },
      {
        name: "description",
        content:
          "Summit Financial Recovery files chargebacks, wire recalls, crypto traces and regulatory complaints to recover money lost to investment, crypto and bank fraud.",
      },
      {
        property: "og:title",
        content: "Summit Financial Recovery — Recover Funds Lost to Fraud",
      },
      {
        property: "og:description",
        content:
          "Former bank fraud investigators pursuing chargebacks, wire recalls and blockchain tracing across 46 jurisdictions.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Summit Financial Recovery",
          description:
            "Fund recovery firm handling chargebacks, wire recalls, crypto tracing and regulatory escalation for victims of financial fraud.",
          areaServed: "Worldwide",
          telephone: "+1-302-555-0148",
        }),
      },
    ],
  }),
});

const SERVICE_IMAGES: Record<string, string> = {
  chargeback: consultationImage,
  "investment-fraud": teamImage,
  crypto: forensicsImage,
  wire: reliefImage,
  romance: consultationImage,
  legal: legalImage,
};

const PILLARS = [
  {
    icon: FileSearch,
    title: "Evidence before argument",
    body: "Banks decide on documents, not sympathy. Every filing we make is built around the reason codes and evidence standards the reviewing institution actually applies.",
  },
  {
    icon: Landmark,
    title: "Pressure at the right point",
    body: "Fraudsters are unreachable. Their acquiring banks, processors and licensing bodies are not, and those are the parties that can return your money.",
  },
  {
    icon: Scale,
    title: "Honest assessment",
    body: "We decline cases we do not believe are recoverable and tell you why. An accurate no on day one is worth more than an expensive maybe.",
  },
  {
    icon: Lock,
    title: "Confidential by default",
    body: "Case files are encrypted, access is limited to your assigned officers, and nothing is shared outside the institutions handling your dispute.",
  },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImage}
          alt="Summit Financial Recovery analysts reviewing transaction data on trading desks"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="container-page grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Fund recovery since 2016</p>
            <h1 className="mt-4 text-4xl leading-[1.05] md:text-6xl">
              Money taken by fraud
              <span className="block text-primary">can still be recovered.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              Summit is a recovery firm staffed by former bank fraud
              investigators, chargeback analysts and blockchain forensic
              specialists. We file the disputes, trace the funds and force the
              institutions in the payment chain to answer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a free case review <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link to="/auth">Track an existing case</Link>
              </Button>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-ink-muted">
              <ShieldCheck className="h-4 w-4 text-primary" />
              No upfront retainer. Assessment is free and confidential.
            </p>
          </div>

          <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Case desk snapshot
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-ink-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-white/15 pt-5 text-sm text-ink-muted">
              Figures reflect closed and settled matters through the last
              reporting period. Individual results vary with payment method and
              elapsed time.
            </div>
          </div>
        </div>
      </section>

      {/* Urgency band */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="container-page flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm leading-relaxed md:text-base">
              <strong className="font-semibold">Time limits are strict.</strong>{" "}
              Wire recalls work best within 72 hours and most card disputes
              expire 120 days after the transaction.
            </p>
          </div>
          <Button asChild variant="secondary" className="shrink-0">
            <Link to="/contact">Report a loss now</Link>
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="max-w-2xl rule-accent">
            <p className="eyebrow">What we recover</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Six recovery routes, chosen by how the money left your account
            </h2>
            <p className="mt-4 text-muted-foreground">
              The right instrument depends entirely on the payment rail. A card
              payment, a SWIFT wire and a crypto transfer each need a different
              filing, a different counterparty and a different deadline.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <article key={service.slug} className="group bg-background p-7">
                <span className="font-display text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {service.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                      <span className="text-foreground/80">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  hash={service.slug}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Read the approach <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Split feature */}
      <section className="bg-surface py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={teamImage}
              alt="Summit case officers reviewing a financial investigation file"
              loading="lazy"
              width={1408}
              height={944}
              className="w-full object-cover"
            />
            <div className="absolute -bottom-6 left-6 hidden bg-primary p-6 text-primary-foreground md:block">
              <p className="font-display text-3xl font-bold">24h</p>
              <p className="text-xs uppercase tracking-[0.14em]">
                First assessment response
              </p>
            </div>
          </div>
          <div className="rule-accent">
            <p className="eyebrow">Why claims fail without help</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Most disputes are refused on paperwork, not on merit
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Banks refuse claims because the wrong reason code was used, the
              evidence arrived incomplete, the deadline passed while the victim
              waited on a call-back, or the narrative did not match the
              network's definition of the fraud. None of those are questions of
              whether you were actually defrauded.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <div key={p.title}>
                  <p.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-3 text-base">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink py-20 text-ink-foreground">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">The casework</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              A documented five-stage recovery process
            </h2>
            <p className="mt-4 text-ink-muted">
              Every stage is logged in your client portal with dates,
              submissions and responses, so you always know exactly where the
              claim stands.
            </p>
          </div>

          <ol className="mt-12 grid gap-px bg-white/10 lg:grid-cols-5">
            {PROCESS.map((p) => (
              <li key={p.step} className="bg-ink p-6">
                <span className="font-display text-4xl font-bold text-primary/70">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  {p.duration}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Immediate steps */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rule-accent">
            <p className="eyebrow">If it happened today</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Six things to do in the first 24 hours
            </h2>
            <p className="mt-4 text-muted-foreground">
              What you do today materially changes what can be recovered later.
              Work through this list before anything else, whether or not you
              engage us.
            </p>
            <img
              src={reliefImage}
              alt="Client reviewing her bank records at home after reporting a fraud"
              loading="lazy"
              width={1200}
              height={800}
              className="mt-8 hidden w-full object-cover lg:block"
            />
          </div>
          <ol className="space-y-px bg-border">
            {IMMEDIATE_STEPS.map((step, i) => (
              <li key={step} className="flex gap-5 bg-background p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-accent font-display text-sm font-bold text-accent-foreground">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-foreground/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Practice imagery strip */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="max-w-2xl rule-accent">
            <p className="eyebrow">Inside the work</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Forensics, casework and escalation under one roof
            </h2>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                img: forensicsImage,
                title: "Blockchain forensics",
                body: "Analysts cluster wallet activity and follow stolen assets through bridges and mixers to a regulated exchange where a freeze can be requested.",
              },
              {
                img: consultationImage,
                title: "Dedicated case officers",
                body: "One named officer owns your file end to end, in your time zone, and answers directly rather than routing you through a call queue.",
              },
              {
                img: legalImage,
                title: "Regulatory escalation",
                body: "When a bank refuses a valid claim, the file goes to the ombudsman or regulator with the complaint already drafted and evidenced.",
              },
            ].map((c) => (
              <article key={c.title}>
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="h-56 w-full object-cover"
                />
                <h3 className="mt-5 text-lg">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20">
        <div className="container-page">
          <div className="max-w-2xl rule-accent">
            <p className="eyebrow">Client outcomes</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              What resolved cases look like
            </h2>
          </div>
          <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="bg-background p-8">
                <div className="h-1 w-10 bg-primary" />
                <blockquote className="mt-5 leading-relaxed text-foreground/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Portal */}
      <section className="bg-surface py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="rule-accent">
            <p className="eyebrow">Client portal</p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Your case file, visible at any hour
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Register once and every claim you file with us appears in a
              secure portal: reference number, current stage, amount claimed,
              amount recovered and a dated timeline of every submission and
              response. No chasing, no guesswork.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Submit new claims with structured evidence fields",
                "Track stage changes from filing through settlement",
                "Read case notes added by your assigned officer",
                "Encrypted storage with access limited to your own records",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/auth">Open your portal</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">See the full process</Link>
              </Button>
            </div>
          </div>
          <div className="border border-border bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Case reference
                </p>
                <p className="font-display text-lg font-bold">RB-4C81A0E2</p>
              </div>
              <span className="bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Negotiation
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-5 py-5 text-sm">
              <div>
                <dt className="text-muted-foreground">Claimed</dt>
                <dd className="font-display text-xl font-bold">$41,900</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Recovered to date</dt>
                <dd className="font-display text-xl font-bold text-primary">
                  $18,250
                </dd>
              </div>
            </dl>
            <ul className="space-y-4 border-t border-border pt-5 text-sm">
              {[
                ["12 Mar", "Chargeback filed with issuing bank, reason code 10.4"],
                ["27 Mar", "Merchant representment received and rebutted"],
                ["09 Apr", "Partial credit posted to client account"],
                ["21 Apr", "Pre-arbitration filed on the remaining balance"],
              ].map(([date, note]) => (
                <li key={date} className="flex gap-4">
                  <span className="w-14 shrink-0 font-semibold text-primary">
                    {date}
                  </span>
                  <span className="text-muted-foreground">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rule-accent">
            <p className="eyebrow">Questions</p>
            <h2 className="mt-2 text-3xl md:text-4xl">Answered plainly</h2>
            <p className="mt-4 text-muted-foreground">
              If your question is not here, the case desk will answer it before
              you commit to anything.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/faq">Read all questions</Link>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.slice(0, 5).map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 text-ink-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl">
              Tell us what happened. We will tell you what is recoverable.
            </h2>
            <p className="mt-3 max-w-2xl text-ink-muted">
              A free, confidential assessment from a case officer, usually
              within one business day.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link to="/contact">
              Start a case review <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
