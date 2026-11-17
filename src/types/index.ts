export type FeatureStatus = "implemented" | "in-progress" | "planned";

export interface Feature {
  label: string;
  detail?: string;
  status: FeatureStatus;
}

export interface Decision {
  title: string;
  body: string;
}

export type ProjectVisual = "edunova" | "tradelens";

export interface Project {
  slug: string;
  name: string;
  /** Short descriptor shown under the name. */
  tagline: string;
  /** One-paragraph summary used on the home page card. */
  summary: string;
  /** The problem the project addresses. */
  problem: string;
  /** Your role and contribution. Edit to match reality. */
  role: string;
  /** Honest description of where the project is today. */
  stage: string;
  stack: string[];
  /** Three short engineering highlights for the home page card. */
  highlights: string[];
  features: Feature[];
  decisions: Decision[];
  /** Scope notes: what the project does not claim to do. */
  scope?: string[];
  repo?: string;
  live?: string;
  visual: ProjectVisual;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: "server" | "database" | "plug" | "coins";
  skills: string[];
}

export interface JourneyEntry {
  title: string;
  body: string;
  /** Optional date string. Leave undefined rather than guessing. */
  date?: string;
  /** Optional link to an X post, GitHub activity, or article. */
  href?: string;
  linkLabel?: string;
}

export type WritingType = "Development update" | "Technical lesson" | "Project announcement" | "Learning note";

export interface WritingPost {
  type: WritingType;
  title: string;
  summary: string;
  date?: string;
  href?: string;
}

export interface Principle {
  title: string;
  body: string;
}
