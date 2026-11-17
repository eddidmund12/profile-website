import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { posts, topics } from "@/content/writing";
import type { WritingType } from "@/types";
import { SectionHeading } from "./SectionHeading";

interface CardProps {
  type: WritingType;
  title?: string;
  summary: string;
  date?: string;
  href?: string;
}

/** Reusable card for a development update, technical lesson, announcement, or learning note. */
function WritingCard({ type, title, summary, date, href }: CardProps) {
  const body = (
    <>
      <p className="text-sm font-medium text-accent">{type}</p>
      {title ? <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3> : null}
      <p className={`${title ? "mt-2" : "mt-3"} text-sm leading-6 text-muted`}>{summary}</p>
      {date ? <p className="mt-4 text-xs text-faint">{date}</p> : null}
    </>
  );
  const base = "block h-full rounded-xl border border-line bg-surface/40 p-5";
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} transition hover:border-line-strong`}
    >
      {body}
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Read
        <ArrowUpRight size={14} aria-hidden />
        <span className="sr-only"> (opens in a new tab)</span>
      </span>
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
}

export function WritingSection() {
  if (!site.sections.writing) return null;
  const hasPosts = posts.length > 0;
  const follow = site.socials.x || site.socials.github;
  const followLabel = site.socials.x ? "Follow along on X" : "Follow along on GitHub";

  return (
    <section id="writing" aria-labelledby="writing-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="writing-title" title="Writing and community">
          {hasPosts
            ? "Development updates, technical lessons, and notes from what I'm learning."
            : "I share my work and what I learn as I build. Here is what to expect as posts are added."}
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hasPosts
            ? posts.map((post) => <WritingCard key={post.title} {...post} />)
            : topics.map((topic) => <WritingCard key={topic.type} {...topic} />)}
        </div>

        <a
          href={follow}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-accent underline underline-offset-4"
        >
          {followLabel}
          <ArrowUpRight size={14} aria-hidden />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
