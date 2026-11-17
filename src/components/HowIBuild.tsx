import { Layers, Repeat, Workflow } from "lucide-react";
import { buildSteps } from "@/content/about";

const icons = { workflow: Workflow, layers: Layers, repeat: Repeat } as const;

export function HowIBuild() {
  return (
    <div className="mt-16 md:mt-20">
      <h3 className="text-xl font-semibold tracking-tight">How I build</h3>
      <ol className="relative mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
        {buildSteps.map((step, index) => {
          const Icon = icons[step.icon];
          return (
            <li key={step.title} className="relative flex gap-4 md:block">
              {/* connector to the next step, desktop only */}
              {index < buildSteps.length - 1 ? (
                <span aria-hidden className="absolute -right-6 left-[3.25rem] top-5 hidden h-px bg-line-strong md:block" />
              ) : null}
              <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border border-line-strong bg-bg text-accent">
                <Icon size={18} aria-hidden />
              </span>
              <div className="md:mt-5">
                <p className="font-medium">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </p>
                <p className="mt-1.5 max-w-sm text-sm leading-6 text-muted">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
