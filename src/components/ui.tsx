import type { FeatureStatus } from "@/types";

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-accent-fg transition hover:brightness-110 active:translate-y-px";

export const btnSecondary =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-line-strong px-5 text-sm font-medium text-fg transition hover:border-accent hover:text-accent";

export const textLink =
  "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted transition hover:text-fg";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-md border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted">{children}</li>
  );
}

const statusStyles: Record<FeatureStatus, { label: string; dot: string; text: string }> = {
  implemented: { label: "Implemented", dot: "bg-ok", text: "text-ok" },
  "in-progress": { label: "In progress", dot: "bg-warn", text: "text-warn" },
  planned: { label: "Planned", dot: "border border-faint", text: "text-faint" },
};

export function StatusBadge({ status }: { status: FeatureStatus }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex shrink-0 items-center gap-1.5 text-xs font-medium ${s.text}`}>
      <span aria-hidden className={`size-2 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
