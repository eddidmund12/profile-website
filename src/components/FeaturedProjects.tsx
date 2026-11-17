import { projects } from "@/content/projects";
import { site } from "@/config/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="projects-title" title="Projects I'm building">
          Two projects, written up as case studies: the problem, my role, the stack, and the decisions behind them.
          Both are works in progress, and each case study separates what is built from what is still ahead.
        </SectionHeading>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} flip={index % 2 === 1} />
          ))}

          <div className="rounded-2xl border border-dashed border-line-strong p-6 text-center sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight">More projects in progress</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
              New work shows up here once it is ready to be written up. Until then, the code and commit history are on
              GitHub.
            </p>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-accent underline underline-offset-4"
            >
              Browse GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
