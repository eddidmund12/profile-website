import type { ReactNode } from "react";

/* Small helpers that render JSON tokens with the shared syntax colors. */
const Key = ({ children }: { children: ReactNode }) => (
  <span className="tk-k">
    {'"'}
    {children}
    {'"'}
  </span>
);
const Str = ({ children }: { children: ReactNode }) => (
  <span className="tk-s">
    {'"'}
    {children}
    {'"'}
  </span>
);
const P = ({ children }: { children: ReactNode }) => <span className="tk-p">{children}</span>;
const Line = ({ indent = 0, children }: { indent?: 0 | 1 | 2; children: ReactNode }) => (
  <div className="whitespace-pre" style={{ paddingLeft: `${indent * 1.25}rem` }}>
    {children}
  </div>
);

function ApiResponse() {
  return (
    <div className="rounded-xl border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </span>
          <code className="truncate font-mono text-xs text-muted">GET /api/v1/applications/me</code>
        </div>
        <span className="shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-ok">200 OK</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6" tabIndex={0} aria-label="Example API response">
        <code>
          <Line>
            <P>{"{"}</P>
          </Line>
          <Line indent={1}>
            <Key>status</Key>
            <P>: </P>
            <Str>success</Str>
            <P>,</P>
          </Line>
          <Line indent={1}>
            <Key>message</Key>
            <P>: </P>
            <Str>Application retrieved</Str>
            <P>,</P>
          </Line>
          <Line indent={1}>
            <Key>data</Key>
            <P>: {"{"}</P>
          </Line>
          <Line indent={2}>
            <Key>id</Key>
            <P>: </P>
            <Str>app_demo_001</Str>
            <P>,</P>
          </Line>
          <Line indent={2}>
            <Key>programme</Key>
            <P>: </P>
            <Str>Computer Science</Str>
            <P>,</P>
          </Line>
          <Line indent={2}>
            <Key>state</Key>
            <P>: </P>
            <Str>under_review</Str>
          </Line>
          <Line indent={1}>
            <P>{"}"}</P>
          </Line>
          <Line>
            <P>{"}"}</P>
          </Line>
        </code>
      </pre>
      <p className="border-t border-line px-4 py-2.5 text-xs text-faint">Illustrative response shape</p>
    </div>
  );
}

function ServiceMap() {
  const node = "fill-surface-2 stroke-line-strong";
  const label = "fill-fg font-mono";
  return (
    <figure className="mt-4 rounded-xl border border-line bg-surface px-4 pb-3 pt-4">
      <svg
        viewBox="0 0 300 140"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram: a client calls a Flask API. The API checks authentication, validates input against schemas, and passes work to a service layer backed by PostgreSQL."
      >
        {/* connections */}
        <path d="M59 70H75" className="flow stroke-accent" strokeWidth="1.5" fill="none" />
        <path d="M141 70H157" className="flow stroke-accent" strokeWidth="1.5" fill="none" />
        <path d="M221 70H237" className="flow stroke-accent" strokeWidth="1.5" fill="none" />
        <path d="M108 34V54" className="stroke-line-strong" strokeWidth="1.5" fill="none" />
        <path d="M108 86V106" className="stroke-line-strong" strokeWidth="1.5" fill="none" />

        {/* nodes */}
        <rect x="3" y="54" width="56" height="32" rx="6" className={node} />
        <text x="31" y="73.5" textAnchor="middle" fontSize="10" className={label}>
          Client
        </text>

        <rect x="75" y="54" width="66" height="32" rx="6" className="fill-accent-soft stroke-accent" />
        <text x="108" y="73.5" textAnchor="middle" fontSize="10" className={label}>
          Flask API
        </text>

        <rect x="157" y="54" width="64" height="32" rx="6" className={node} />
        <text x="189" y="73.5" textAnchor="middle" fontSize="10" className={label}>
          Services
        </text>

        <rect x="237" y="54" width="60" height="32" rx="6" className={node} />
        <text x="267" y="73.5" textAnchor="middle" fontSize="10" className={label}>
          Postgres
        </text>

        <rect x="75" y="6" width="66" height="28" rx="6" className={node} />
        <text x="108" y="23.5" textAnchor="middle" fontSize="9.5" className={label}>
          JWT auth
        </text>

        <rect x="75" y="106" width="66" height="28" rx="6" className={node} />
        <text x="108" y="123.5" textAnchor="middle" fontSize="9.5" className={label}>
          Schemas
        </text>
      </svg>
      <figcaption className="mt-2 text-xs text-faint">How a request moves through the backend</figcaption>
    </figure>
  );
}

export function HeroVisual() {
  return (
    <div className="w-full">
      <ApiResponse />
      <ServiceMap />
    </div>
  );
}
