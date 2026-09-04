export const SITE = {
  name: "Summit Financial Recovery",
  short: "Summit",
  tagline: "Global asset recovery for victims of financial fraud",
  phone: "+1 (302) 555-0148",
  email: "casework@summitfinancialrecovery.com",
  address: "1201 Orange Street, Suite 600, Wilmington, DE 19801",
  hours: "Case desk open 24 hours, Monday to Saturday",
};

export const NAV = [
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: "$52.6M", label: "Recovered for clients since 2016" },
  { value: "11,400+", label: "Case files opened and worked" },
  { value: "82%", label: "Recovery rate on qualified claims" },
  { value: "46", label: "Jurisdictions covered" },
];

export const SERVICES = [
  {
    slug: "chargeback",
    title: "Card Chargeback Recovery",
    summary:
      "Formal Visa, Mastercard and Amex dispute filings for unauthorised, misrepresented or undelivered transactions.",
    detail:
      "We assemble the compelling evidence packet issuers actually require: transaction logs, merchant correspondence, terms breaches and reason-code mapping. Most card networks allow 120 days from the transaction or from the date the service was expected, and in specific circumstances up to 540 days. We file inside the window, respond to merchant representment and escalate to pre-arbitration where the issuer's first decision is wrong.",
    points: [
      "Reason-code selection and evidence packaging",
      "Representment rebuttal and pre-arbitration",
      "Issuer escalation and regulator complaints",
    ],
  },
  {
    slug: "investment-fraud",
    title: "Investment & Broker Fraud",
    summary:
      "Recovery work against unlicensed brokerages, fake trading platforms, boiler rooms and Ponzi-style schemes.",
    detail:
      "Unregulated brokers rely on victims giving up quietly. We identify the payment processors, acquiring banks and corporate shells behind the platform, then apply pressure through the channels those entities depend on: acquirer compliance teams, licensing bodies and financial regulators in the jurisdiction of incorporation.",
    points: [
      "Platform and entity identification",
      "Acquiring bank and processor complaints",
      "Regulatory filings in the operator's jurisdiction",
    ],
  },
  {
    slug: "crypto",
    title: "Crypto Asset Tracing",
    summary:
      "Blockchain forensics that follow stolen coins across wallets, mixers and bridges to a compliant exchange.",
    detail:
      "Public ledgers do not forget. Our analysts cluster addresses, trace hops through bridges and mixing services and identify the point where funds touch a regulated venue with know-your-customer obligations. That attribution report is what enables an exchange freeze request or a law-enforcement referral to move.",
    points: [
      "Address clustering and hop analysis",
      "Exchange freeze and preservation requests",
      "Court-ready attribution reporting",
    ],
  },
  {
    slug: "wire",
    title: "Wire & Transfer Recall",
    summary:
      "Fast recall action on SWIFT, SEPA, ACH and Faster Payments transfers sent under deception.",
    detail:
      "Wire recall is a race. Beneficiary banks will freeze funds that are still on account, but balances are usually moved within hours. We prepare the recall instruction, the fraud narrative and the beneficiary details your bank needs, and we chase the correspondent chain rather than waiting on a call-back.",
    points: [
      "Same-day recall instruction drafting",
      "Beneficiary bank and correspondent follow-up",
      "Reimbursement claims under APP fraud rules",
    ],
  },
  {
    slug: "romance",
    title: "Romance & Social Engineering",
    summary:
      "Discreet casework for long-running relationship, task-scam and pig-butchering losses.",
    detail:
      "These cases usually involve dozens of payments across several rails over many months. We build a single reconstructed payment ledger, separate the recoverable rails from the unrecoverable ones and pursue each with the correct instrument, without judgement and without pressure.",
    points: [
      "Full payment reconstruction",
      "Rail-by-rail recoverability assessment",
      "Confidential handling throughout",
    ],
  },
  {
    slug: "legal",
    title: "Legal & Regulatory Escalation",
    summary:
      "Referral to vetted counsel and formal complaints when financial channels are exhausted.",
    detail:
      "When a bank refuses a legitimate reimbursement claim, the next step is the ombudsman or the regulator, not another phone call. We prepare the complaint file and, where the sum justifies it, refer the matter to independent counsel in the correct jurisdiction for freezing or disclosure orders.",
    points: [
      "Ombudsman and regulator complaint files",
      "Vetted independent counsel referral",
      "Asset preservation applications",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Free case assessment",
    body: "Tell us what happened, how much was lost and how it was paid. A case officer reviews the file and tells you honestly whether the loss is recoverable and by which route. There is no charge and no obligation.",
    duration: "Within 24 hours",
  },
  {
    step: "02",
    title: "Evidence and reconstruction",
    body: "We build the payment ledger, gather statements, correspondence, wallet addresses and platform records, and confirm every dispute deadline that applies to your case.",
    duration: "2 to 5 business days",
  },
  {
    step: "03",
    title: "Filing and pressure",
    body: "Chargebacks, recall instructions, processor complaints and regulatory filings go out under a documented strategy. Every submission is logged in your client portal.",
    duration: "Days 5 to 20",
  },
  {
    step: "04",
    title: "Negotiation and escalation",
    body: "Merchants and banks push back. We answer representments, escalate to pre-arbitration, and take refusals to the ombudsman or regulator where the decision is wrong.",
    duration: "4 to 16 weeks",
  },
  {
    step: "05",
    title: "Settlement and release",
    body: "Recovered funds are returned to your own verified bank account, never through us as an intermediary. You receive a closing report covering everything that was filed.",
    duration: "On approval",
  },
];

export const IMMEDIATE_STEPS = [
  "Stop every further payment. No legitimate recovery requires you to send more money first.",
  "Photograph and export everything: chats, emails, invoices, platform screens, wallet addresses and receipts.",
  "Call your bank or card issuer today and ask for the transaction to be blocked, recalled or disputed in writing.",
  "Change the passwords on your email and banking accounts and turn on two-factor authentication.",
  "Report the loss to your national fraud reporting body and keep the reference number.",
  "Open a case file with us so the dispute deadlines are calculated before they expire.",
];

export const FAQS = [
  {
    q: "What does it cost to work with Summit?",
    a: "The case assessment is free. If we take the case on, our work is billed on a success basis: a percentage of what is actually recovered, agreed in writing before any filing is made. We do not ask for a large retainer and we never ask for payment in cryptocurrency or gift cards.",
  },
  {
    q: "Can you guarantee my money back?",
    a: "No, and neither can anyone else. Recovery depends on how the money moved, how long ago, and whether it still sits somewhere reachable. We tell you the realistic odds at assessment, and we decline cases we do not believe are recoverable.",
  },
  {
    q: "How quickly do I need to act?",
    a: "Immediately. Wire recalls have the best chance within 24 to 72 hours. Card chargebacks typically run to 120 days from the transaction or expected delivery date. Crypto tracing stays viable much longer, but the sooner funds are flagged at an exchange, the better.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Yes. Case files are encrypted at rest, access is restricted to the officers assigned to your matter, and we do not sell, share or publish client data. You can request deletion of your file at any time after closure.",
  },
  {
    q: "Do you work with clients outside the United States?",
    a: "Yes. We handle claims across 46 jurisdictions, including the UK, the EEA, Canada, Australia, the Gulf states and much of West and Southern Africa. Your case officer works in your time zone wherever possible.",
  },
  {
    q: "I was already scammed by a 'recovery' company. Can you help?",
    a: "Yes, and it is more common than most people admit. Secondary recovery fraud usually leaves a fresh, recent payment trail, which is often more recoverable than the original loss. Bring both sets of records.",
  },
  {
    q: "What do you need from me to start?",
    a: "Dates, amounts, the payment method used, the name the funds went to, and any correspondence you still have. If some of it is missing, open the case anyway and we will work out what can be reconstructed.",
  },
  {
    q: "Will you contact the scammer on my behalf?",
    a: "We do not negotiate with the fraudster. Recovery pressure is applied to the regulated institutions in the payment chain, which is where the leverage actually sits.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I lost eleven months of savings to a trading platform that looked completely legitimate. Summit told me on day one which payments were realistically recoverable and which were not. Four months later £38,000 came back.",
    name: "H. Okafor",
    role: "Investment fraud claim, London",
  },
  {
    quote:
      "The chargeback my bank had already refused twice was overturned at pre-arbitration. What made the difference was the evidence file they put together, not persistence on the phone.",
    name: "D. Marchetti",
    role: "Card dispute, Toronto",
  },
  {
    quote:
      "They traced the crypto to an exchange, filed the freeze request and kept me updated in the portal the entire time. I never once had to chase anyone for an answer.",
    name: "S. Rahman",
    role: "Crypto tracing claim, Dubai",
  },
];

export const CASE_TYPES = [
  "Card chargeback",
  "Investment or broker fraud",
  "Crypto asset theft",
  "Wire or bank transfer",
  "Romance or social engineering",
  "Phishing or account takeover",
  "Other",
];

export const PAYMENT_METHODS = [
  "Credit or debit card",
  "Bank transfer / wire",
  "Cryptocurrency",
  "Payment app",
  "Gift cards",
  "Cash or other",
];

export const STATUS_LABELS: Record<string, string> = {
  submitted: "Submitted",
  under_review: "Under review",
  dispute_filed: "Dispute filed",
  negotiation: "Negotiation",
  recovered: "Recovered",
  closed: "Closed",
};
