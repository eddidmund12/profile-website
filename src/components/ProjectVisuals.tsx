import type { ReactNode } from "react";
import type { ProjectVisual } from "@/types";

function Window({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>
        <span className="truncate font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-4">{children}</div>
      <figcaption className="border-t border-line px-4 py-2.5 text-xs text-faint">{caption}</figcaption>
    </figure>
  );
}

const panel = "rounded-lg border border-line bg-surface-2 p-3.5";
const panelTitle = "text-xs font-medium text-muted";

/* ---------- EduNova: architecture + roles + academic structure ---------- */
function EduNovaVisual() {
  const layers = ["Routes", "Schemas", "Services", "Repositories", "Models"];
  const journey = ["Register", "Verify email", "Sign in", "Apply", "Staff review"];
  return (
    <Window title="edunova-backend / architecture" caption="Illustrative diagram. No real applicant data.">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className={panel}>
          <p className={panelTitle}>Layers in each module</p>
          <ol className="mt-3 space-y-1.5">
            {layers.map((layer, i) => (
              <li key={layer} className="flex items-center gap-2">
                <span
                  className="h-7 flex-1 rounded border border-line-strong bg-bg px-2.5 font-mono text-xs leading-7 text-fg"
                  style={{ marginLeft: `${i * 0.6}rem` }}
                >
                  {layer}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-3">
          <div className={panel}>
            <p className={panelTitle}>Applicant journey</p>
            <ol className="mt-3 flex flex-wrap gap-x-1.5 gap-y-2 text-xs">
              {journey.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span className="rounded border border-line-strong bg-bg px-2 py-1 text-fg">{step}</span>
                  {i < journey.length - 1 ? (
                    <span aria-hidden className="text-faint">
                      &rsaquo;
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div className={panel}>
            <p className={panelTitle}>Academic structure</p>
            <ul className="mt-3 space-y-1 font-mono text-xs text-fg">
              <li>Faculty</li>
              <li className="pl-4 text-muted">Department</li>
              <li className="pl-8 text-muted">Programme</li>
              <li className="text-accent">Academic session</li>
            </ul>
          </div>
        </div>

        <div className={`${panel} sm:col-span-2`}>
          <p className={panelTitle}>Roles</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs">
            {["Applicant", "Student", "Staff", "Administrator"].map((role) => (
              <li key={role} className="rounded-full border border-accent/50 bg-accent-soft px-3 py-1 text-fg">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Window>
  );
}

/* ---------- TradeLens: health score, signals, order book ---------- */
function Gauge({ value }: { value: number }) {
  // Semicircle gauge, value 0..100. Arc length of a r=52 semicircle = pi * 52.
  const r = 52;
  const length = Math.PI * r;
  const filled = (value / 100) * length;
  return (
    <svg viewBox="0 0 130 78" className="mx-auto h-auto w-full max-w-[200px]" role="img" aria-label={`Sample Health Score: ${value} out of 100`}>
      <path d="M13 65 A52 52 0 0 1 117 65" fill="none" strokeWidth="9" strokeLinecap="round" className="stroke-line-strong" />
      <path
        d="M13 65 A52 52 0 0 1 117 65"
        fill="none"
        strokeWidth="9"
        strokeLinecap="round"
        className="stroke-accent"
        strokeDasharray={`${filled} ${length}`}
      />
      <text x="65" y="56" textAnchor="middle" fontSize="26" fontWeight="600" className="fill-fg">
        {value}
      </text>
      <text x="65" y="73" textAnchor="middle" fontSize="8" className="fill-muted">
        Health Score
      </text>
    </svg>
  );
}

function TradeLensVisual() {
  const signals: { name: string; reading: string }[] = [
    { name: "Trend", reading: "Above 50-SMA, below 200-SMA" },
    { name: "Momentum", reading: "RSI in neutral range" },
    { name: "MACD", reading: "Bullish crossover" },
    { name: "Volatility", reading: "ATR 1.8% of price, no squeeze" },
    { name: "Volume", reading: "Z-score near zero" },
  ];
  // Illustrative order book depth, top 6 levels per side (relative size, 0 to 100).
  const bids = [92, 74, 66, 51, 38, 27];
  const asks = [58, 49, 61, 34, 29, 18];
  return (
    <Window title="tradelens / analysis" caption="Sample values for illustration only. Not live data, not advice.">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className={panel}>
          <Gauge value={64} />
          <p className="mt-1 text-center text-sm font-medium">Mixed, leaning positive</p>
        </div>

        <div className={panel}>
          <p className={panelTitle}>Signals behind the score</p>
          <dl className="mt-3 space-y-2 text-xs">
            {signals.map((s) => (
              <div key={s.name} className="flex justify-between gap-3">
                <dt className="shrink-0 font-medium text-fg">{s.name}</dt>
                <dd className="text-right text-muted">{s.reading}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={`${panel} sm:col-span-2`}>
          <div className="flex items-baseline justify-between gap-3">
            <p className={panelTitle}>Order book balance, top 6 levels</p>
            <p className="flex shrink-0 gap-3 font-mono text-xs text-muted">
              <span>
                Bids <span className="text-accent">56%</span>
              </span>
              <span>
                Asks <span className="text-violet">44%</span>
              </span>
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3" role="img" aria-label="Sample order book depth: bid volume is slightly larger than ask volume">
            <div className="space-y-1.5">
              {bids.map((w, i) => (
                <div key={i} className="flex justify-end">
                  <span className="h-3 rounded-l bg-accent/80" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              {asks.map((w, i) => (
                <div key={i}>
                  <span className="block h-3 rounded-r bg-violet/80" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export function ProjectVisualFor({ visual }: { visual: ProjectVisual }) {
  return visual === "edunova" ? <EduNovaVisual /> : <TradeLensVisual />;
}
