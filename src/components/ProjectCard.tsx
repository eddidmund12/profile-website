import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { GithubIcon } from "./icons";
import { ProjectVisualFor } from "./ProjectVisuals";
import { btnPrimary, btnSecondary, Tag } from "./ui";

interface Props {
  project: Project;
  /** Flip the visual to the left on large screens. */
  flip?: boolean;
}

export function ProjectCard({ project, flip = false }: Props) {
  const titleId = `project-${project.slug}`;
  return (
    <article
      aria-labelledby={titleId}
      className="grid grid-cols-1 gap-8 rounded-2xl border border-line bg-surface/40 p-5 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10"
    >
      <div className={`min-w-0 ${flip ? "lg:order-2" : ""}`}>
        <p className="flex items-center gap-2 text-sm text-muted">
          <span aria-hidden className="size-2 rounded-full bg-ok" />
          {project.stage}
        </p>
        <h3 id={titleId} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {project.name}
          <span className="block text-base font-normal text-muted sm:text-lg">{project.tagline}</span>
        </h3>
        <p className="mt-5 text-base leading-7 text-muted">{project.summary}</p>

        <dl className="mt-6 space-y-4 text-sm leading-6">
          <div>
            <dt className="font-medium text-fg">The problem</dt>
            <dd className="mt-1 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-fg">My role</dt>
            <dd className="mt-1 text-muted">{project.role}</dd>
          </div>
          <div>
            <dt className="font-medium text-fg">Engineering decisions</dt>
            <dd className="mt-1">
              <ul className="space-y-1.5 text-muted">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/projects/${project.slug}`} className={btnPrimary}>
            View Case Study
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
              <GithubIcon size={16} />
              Source code
              <span className="sr-only"> for {project.name} (opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className={`min-w-0 ${flip ? "lg:order-1" : ""}`}>
        <ProjectVisualFor visual={project.visual} />
      </div>
    </article>
  );
}
