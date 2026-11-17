import { ArrowUpRight } from "lucide-react";
import { journey } from "@/content/journey";
import { SectionHeading } from "./SectionHeading";

export function JourneyTimeline() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="journey-title" title="My development journey">
          How I&apos;m growing as a developer: the themes that run through the work so far.
        </SectionHeading>

        <ol className="relative max-w-3xl border-l border-line-strong pl-7 sm:pl-10">
          {journey.map((entry) => (
            <li key={entry.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[calc(1.75rem+4.5px)] top-2 size-2 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2.5rem+4.5px)]"
              />
              {entry.date ? <p className="text-sm text-faint">{entry.date}</p> : null}
              <h3 className="text-lg font-semibold tracking-tight">{entry.title}</h3>
              <p className="mt-2 max-w-xl text-base leading-7 text-muted">{entry.body}</p>
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-4"
                >
                  {entry.linkLabel ?? "Read more"}
                  <ArrowUpRight size={14} aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
