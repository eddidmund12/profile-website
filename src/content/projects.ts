import type { Project } from "@/types";

/**
 * Add a new project by appending an object here. It automatically appears on
 * the home page, gets its own case study page at /projects/<slug>, and is
 * included in the sitemap.
 *
 * Feature `status` values keep implemented work visibly separate from
 * work in progress and planned work. Please review them and change any that
 * don't match the current state of each repository.
 */
export const projects: Project[] = [
  {
    slug: "edunova",
    name: "EduNova",
    tagline: "University portal backend",
    summary:
      "A university portal backend that supports applicants, students, and staff through structured REST APIs, designed to serve a separate frontend over JSON.",
    problem:
      "Admissions, academic records, and staff workflows all depend on the same underlying data. Before any frontend is useful, that data needs a backend with clear structure, strict validation, and access rules that match each person's role.",
    role: "Backend development: API structure, data model, authentication and authorization, validation, and documentation.",
    stage: "In active development",
    stack: [
      "Python",
      "Flask",
      "Flask-Smorest",
      "Marshmallow",
      "SQLAlchemy",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "OpenAPI",
    ],
    highlights: [
      "Layered modules: routes, schemas, services, repositories, models.",
      "JWT authentication with role-based authorization.",
      "OpenAPI documentation generated from the code.",
    ],
    features: [
      { label: "Modular application architecture", status: "implemented" },
      { label: "Authentication and role-based authorization", detail: "JWT identifies the user; roles decide access.", status: "implemented" },
      { label: "Applicant registration, email verification, and login", status: "implemented" },
      { label: "Admission application workflows", status: "implemented" },
      {
        label: "Academic structures",
        detail: "Faculties, departments, programmes, and academic sessions.",
        status: "implemented",
      },
      { label: "Application validation and centralized API responses", status: "implemented" },
      { label: "Repository and service separation", detail: "Database access is kept out of business logic.", status: "implemented" },
      { label: "Staff and administrative functionality", status: "in-progress" },
    ],
    decisions: [
      {
        title: "Separate responsibilities into layers",
        body: "Routes handle HTTP, schemas validate and shape data, services hold the business rules, repositories talk to the database, and models describe the data. Each layer has one job, so a change in one place doesn't ripple through the rest.",
      },
      {
        title: "Authenticate with JWT, authorize by role",
        body: "A token proves who the caller is. A separate role check decides whether an applicant, student, or staff member may perform the action, so permissions live in one predictable place.",
      },
      {
        title: "Validate at the edge",
        body: "Marshmallow schemas reject malformed input before it reaches business logic, and errors come back in a consistent format that a frontend can display without special cases.",
      },
      {
        title: "Document the API as it is built",
        body: "Flask-Smorest generates OpenAPI documentation from the same schemas the API uses, so the docs track the code instead of drifting from it.",
      },
      {
        title: "Serve a separate frontend through JSON",
        body: "The backend returns JSON only and uses environment-based configuration and CORS, so any web or mobile client can build on it.",
      },
    ],
    scope: [
      "EduNova is an evolving engineering project. It is not presented as a deployed production platform.",
    ],
    repo: "https://github.com/Edunova-School/Edunova-backend",
    visual: "edunova",
  },
  {
    slug: "tradelens",
    name: "TradeLens",
    tagline: "Crypto market analysis engine",
    summary:
      "A self-grading crypto market analysis engine built on the Binance MCP Server. It turns live market data into trend, momentum, volatility, and order-book signals, then combines them into one Health Score.",
    problem:
      "Reading a market usually means checking several indicators and the order book at the same time. TradeLens brings those signals together into a single 0 to 100 Health Score with a label, and keeps every underlying signal visible so the score can be checked.",
    role: "Design and development of the analysis logic and the service around it.",
    stage: "In active development",
    stack: ["Python", "Flask", "Binance MCP Server", "Binance market data"],
    highlights: [
      "Composite Health Score from trend, momentum, MACD, and order book bias.",
      "Divergence, squeeze, and volume anomaly detection.",
      "Order book balance across the top N levels.",
    ],
    features: [
      {
        label: "Health Score (0 to 100)",
        detail: "Composite of trend, momentum, MACD, and order book bias, shown as one number plus a label.",
        status: "implemented",
      },
      { label: "Trend", detail: "Price compared with the 50-SMA and 200-SMA.", status: "implemented" },
      {
        label: "Momentum",
        detail: "RSI, with 70 and above read as overbought and 30 and below as oversold, by convention.",
        status: "implemented",
      },
      {
        label: "RSI and price divergence",
        detail: "Flags when price and RSI disagree on direction, a classic early-warning signal.",
        status: "implemented",
      },
      { label: "MACD", detail: "Crossover detection between the MACD and signal lines.", status: "implemented" },
      {
        label: "Volatility",
        detail: "ATR as a percentage of price, plus squeeze detection. Tight Bollinger bands often precede a breakout.",
        status: "implemented",
      },
      { label: "Volume", detail: "Z-score anomaly detection for spikes and unusual quiet.", status: "implemented" },
      { label: "Key levels", detail: "Recent swing high and low as support and resistance.", status: "implemented" },
      { label: "Order book", detail: "Bid versus ask volume balance across the top N levels.", status: "implemented" },
    ],
    decisions: [
      {
        title: "One score, with the evidence attached",
        body: "A single Health Score is easy to read at a glance, but it is only trustworthy if you can see what produced it. Each signal stays visible next to the composite.",
      },
      {
        title: "Use conventional thresholds",
        body: "RSI levels of 70 and 30 are widely used, so the output matches what most people expect to see. The thresholds are named in the code rather than buried.",
      },
      {
        title: "Look for disagreement, not just direction",
        body: "Divergence between price and RSI, and tight Bollinger bands before a breakout, are early-warning conditions. They are reported as flags instead of being folded silently into the score.",
      },
      {
        title: "Measure anomalies statistically",
        body: "Volume is judged with a z-score against its own recent behavior, so a spike or an unusual quiet is defined by the data rather than a fixed number.",
      },
      {
        title: "Read the order book as a balance",
        body: "Comparing bid and ask volume across the top N levels gives a simple measure of which side has more liquidity near the current price.",
      },
    ],
    scope: [
      "TradeLens analyzes current market conditions. It does not predict prices, execute trades, or guarantee any trading outcome.",
      "Nothing it produces is financial advice.",
    ],
    repo: "https://github.com/eddidmund12/TradeLens",
    visual: "tradelens",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
