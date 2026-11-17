import type { SkillGroup } from "@/types";

/** Edit freely. Only list what you are comfortable discussing in an interview. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Backend engineering",
    description: "Building and structuring the API layer.",
    icon: "server",
    skills: [
      "Python",
      "Flask",
      "REST API design",
      "Flask-Smorest",
      "Marshmallow",
      "SQLAlchemy",
      "Authentication and authorization",
      "JWT",
      "API validation and error handling",
    ],
  },
  {
    title: "Databases and data",
    description: "Modeling data so it stays consistent.",
    icon: "database",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Relational database design",
      "ORM relationships",
      "Database migrations",
    ],
  },
  {
    title: "API infrastructure",
    description: "Documentation, configuration, and debugging.",
    icon: "plug",
    skills: [
      "OpenAPI",
      "Swagger documentation",
      "CORS",
      "Environment-based configuration",
      "API testing and debugging",
    ],
  },
  {
    title: "Web3 and crypto technology",
    description: "Market data and blockchain exploration.",
    icon: "coins",
    skills: [
      "Cryptocurrency market data",
      "Order book analysis",
      "Binance ecosystem",
      "Blockchain technology exploration",
    ],
  },
];
