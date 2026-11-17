import type { Principle } from "@/types";

export const aboutParagraphs = [
  "I'm Edmund, a software developer who likes the part of a product that users never see: the API contract, the data model, and the rules that decide who can do what. I build backend systems in Python and Flask, and I care about making them easy to understand, change, and trust.",
  "Most of my time right now goes into EduNova, a university portal backend where I'm working through authentication, role-based access, admission workflows, and an API a separate frontend can build on. I'm also building TradeLens, a crypto market analysis tool, because I enjoy digging into market data and order books.",
  "I learn by building and debugging, and I share the process as I go.",
];

export const principles: Principle[] = [
  { title: "Maintainable over clever", body: "A simple structure I can still follow months later." },
  { title: "Clear responsibilities", body: "Routes, schemas, services, repositories, and models each do one job." },
  { title: "Validate and fail clearly", body: "Bad input is rejected early, and errors tell the client what to fix." },
  { title: "Security-conscious by default", body: "Authentication, authorization, and safe defaults from the first endpoint." },
  { title: "Consistent data", body: "Relationships and constraints that keep the database honest." },
  { title: "Practical solutions", body: "Start from the real problem, then choose the tools." },
  { title: "Learning through building", body: "Ship something, see where it breaks, and improve it." },
];

export const buildSteps = [
  {
    title: "Design the system",
    body: "Map the entities, roles, and API contract before writing a single endpoint.",
    icon: "workflow",
  },
  {
    title: "Build the foundation",
    body: "Models, schemas, authentication, and a layered structure that new features can slot into.",
    icon: "layers",
  },
  {
    title: "Test, refine, and improve",
    body: "Exercise the API, read the errors, and tidy the design as it grows.",
    icon: "repeat",
  },
] as const;
