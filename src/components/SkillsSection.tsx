import { Coins, Database, Plug, Server } from "lucide-react";
import { skillGroups } from "@/content/skills";
import { SectionHeading } from "./SectionHeading";
import { Tag } from "./ui";

const icons = { server: Server, database: Database, plug: Plug, coins: Coins } as const;

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <SectionHeading id="skills-title" title="What I work with">
          The tools I use in my projects, grouped by the kind of problem they solve.
        </SectionHeading>

        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div key={group.title} className="border-t border-line-strong pt-6">
                <div className="flex items-center gap-3">
                  <Icon size={20} aria-hidden className="text-accent" />
                  <h3 className="text-lg font-semibold tracking-tight">{group.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{group.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
