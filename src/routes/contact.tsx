import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <PageShell>
      <div className="bg-ink py-20 text-ink-foreground">
        <div className="container-page max-w-4xl">
          <div className="mb-12">
            <p className="eyebrow">Start a Claim</p>
            <h1 className="mt-3 text-4xl md:text-5xl">Submit your case for review</h1>
            <p className="mt-4 text-ink-muted max-w-2xl text-lg">
              Provide the details of your incident. Our analysts will review the transaction data
              and evidence to determine if recovery is possible before you commit to any fees.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-background text-foreground rounded-lg p-6 md:p-10 shadow-lg border border-border">
              {/* Progress Tracker */}
              <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
                {[
                  { num: 1, label: "Personal Info" },
                  { num: 2, label: "Incident Details" },
                  { num: 3, label: "Evidence" },
                ].map((s, idx) => (
                  <div key={s.num} className="flex flex-col items-center gap-2 w-1/3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors
                        ${
                          step === s.num
                            ? "bg-primary text-primary-foreground"
                            : step > s.num
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                    >
                      {step > s.num ? <CheckCircle2 className="h-5 w-5" /> : s.num}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        step >= s.num ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">Your Information</h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Please provide your contact details so your assigned case officer can reach you.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country of Residence</Label>
                        <Input id="country" placeholder="United States" required />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">Incident Details</h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tell us about the transaction and the nature of the fraud.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fraudType">Type of Loss</Label>
                      <Select required>
                        <SelectTrigger id="fraudType">
                          <SelectValue placeholder="Select type of fraud" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="investment">Investment / Trading Scam</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency Fraud</SelectItem>
                          <SelectItem value="romance">Romance Scam</SelectItem>
                          <SelectItem value="phishing">Phishing / Unauthorized Access</SelectItem>
                          <SelectItem value="goods">Undelivered Goods / Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount Lost</Label>
                        <Input id="amount" type="number" placeholder="e.g. 15000" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select defaultValue="usd">
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="usd">USD ($)</SelectItem>
                            <SelectItem value="eur">EUR (€)</SelectItem>
                            <SelectItem value="gbp">GBP (£)</SelectItem>
                            <SelectItem value="cad">CAD ($)</SelectItem>
                            <SelectItem value="aud">AUD ($)</SelectItem>
                            <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                            <SelectItem value="usdt">Tether (USDT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paymentMethod">Payment Method Used</Label>
                      <Select required>
                        <SelectTrigger id="paymentMethod">
                          <SelectValue placeholder="How was the money sent?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wire">Bank Wire / SWIFT</SelectItem>
                          <SelectItem value="credit_card">Credit / Debit Card</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal / Payment App</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Approximate Date of Transaction</Label>
                      <Input id="date" type="date" required />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">Additional Context & Evidence</h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        Provide a brief summary of what happened. Do not include sensitive banking passwords.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Incident Summary</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe how you were approached, what you were told, and when you realized it was fraud..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="entities">Names of Entities Involved (Brokers, Platforms, Banks)</Label>
                      <Input id="entities" placeholder="e.g. FakeBroker Ltd, Binance" required />
                    </div>
                    <div className="rounded-md bg-muted p-4 flex items-start gap-3 mt-4">
                      <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Your information is securely encrypted. We will use this information to determine
                        recoverability and match you with a case officer. We do not share your details
                        with third-party marketers.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={handlePrev}>
                      Back
                    </Button>
                  ) : (
                    <div></div> // Empty div for spacing
                  )}
                  
                  {step < 3 ? (
                    <Button type="button" onClick={handleNext}>
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Submit Case for Review
                    </Button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-background text-foreground rounded-lg p-10 text-center shadow-lg border border-border animate-in zoom-in-95 duration-500">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 mb-6">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Claim Submitted Successfully</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Your case file has been encrypted and assigned a preliminary reference number. A case officer will review your submission and contact you within 24 hours.
              </p>
              <Button asChild size="lg">
                <a href="/">Return to Homepage</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}
