import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { GithubIcon } from "./icons";
import { ProjectVisualFor } from "./ProjectVisuals";
import { btnPrimary, StatusBadge, Tag } from "./ui";

export function ProjectCaseStudy({ project, next }: { project: Project; next?: Project }) {
  return (
    <article className="wrap py-12 sm:py-16 lg:py-20">
      <Link href="/#projects" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft size={16} aria-hidden />
        All projects
      </Link>

      <header className="mt-4 max-w-3xl">
        <p className="flex items-center gap-2 text-sm text-muted">
          <span aria-hidden className="size-2 rounded-full bg-ok" />
          {project.stage}
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg sm:leading-8">{project.summary}</p>
        {project.repo || project.live ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.repo ? (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                <GithubIcon size={16} />
                View source code
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line-strong px-5 text-sm font-medium hover:border-accent hover:text-accent"
              >
                Live site
                <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      <div className="mt-10 max-w-3xl lg:mt-14">
        <ProjectVisualFor visual={project.visual} />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 space-y-14 lg:col-span-8">
          <section aria-labelledby="cs-problem">
            <h2 id="cs-problem" className="text-2xl font-semibold tracking-tight">
              The problem
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{project.problem}</p>
          </section>

          <section aria-labelledby="cs-role">
            <h2 id="cs-role" className="text-2xl font-semibold tracking-tight">
              My role
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{project.role}</p>
          </section>

          <section aria-labelledby="cs-built">
            <h2 id="cs-built" className="text-2xl font-semibold tracking-tight">
              What exists today
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              Each item is labelled as implemented, in progress, or planned.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {project.features.map((feature) => (
                <li key={feature.label} className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <p className="font-medium">{feature.label}</p>
                    {feature.detail ? <p className="mt-1 max-w-xl text-sm leading-6 text-muted">{feature.detail}</p> : null}
                  </div>
                  <StatusBadge status={feature.status} />
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="cs-decisions">
            <h2 id="cs-decisions" className="text-2xl font-semibold tracking-tight">
              Engineering decisions
            </h2>
            <ul className="mt-6 space-y-8">
              {project.decisions.map((decision) => (
                <li key={decision.title} className="border-l-2 border-line-strong pl-5">
                  <h3 className="font-medium">{decision.title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-muted">{decision.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-10 lg:col-span-4" aria-label="Project details">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </ul>
          </div>
          {project.scope?.length ? (
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Scope</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                {project.scope.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>

      {next ? (
        <nav aria-label="Next project" className="mt-20 border-t border-line pt-8">
          <Link href={`/projects/${next.slug}`} className="group inline-flex flex-col gap-1">
            <span className="text-sm text-muted">Next case study</span>
            <span className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight group-hover:text-accent">
              {next.name}
              <ArrowUpRight size={18} aria-hidden />
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
