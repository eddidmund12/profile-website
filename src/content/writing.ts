import type { WritingPost, WritingType } from "@/types";

/**
 * Add real posts here. While this list is empty, the Writing section shows
 * the kinds of things you plan to share instead. To hide the whole section,
 * set `sections.writing` to false in src/config/site.ts.
 */
export const posts: WritingPost[] = [];

export const topics: { type: WritingType; summary: string }[] = [
  {
    type: "Development update",
    summary: "What I built this week, what is blocked, and what comes next.",
  },
  {
    type: "Technical lesson",
    summary: "Bugs, design decisions, and the reasoning behind them.",
  },
  {
    type: "Project announcement",
    summary: "New projects and meaningful milestones on existing ones.",
  },
  {
    type: "Learning note",
    summary: "Things I am studying in backend engineering and crypto technology.",
  },
];
