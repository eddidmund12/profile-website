import { Check } from "lucide-react";
import { principles } from "@/content/about";

export function EngineeringPrinciples() {
  return (
    <div>
      <h3 className="text-lg font-semibold tracking-tight">How I think about engineering</h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {principles.map((p) => (
          <li key={p.title} className="flex gap-3 py-3.5">
            <Check size={16} aria-hidden className="mt-1 shrink-0 text-accent" />
            <p className="text-sm leading-6 text-muted">
              <span className="font-medium text-fg">{p.title}.</span> {p.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
