import { site } from "@/config/site";
import type { JourneyEntry } from "@/types";

/**
 * Add entries as you go. `date`, `href`, and `linkLabel` are optional, so use
 * them only for real posts, commits, or articles. Entries are shown in order.
 */
export const journey: JourneyEntry[] = [
  {
    title: "Building real backend applications",
    body: "Starting from the API contract and the data model, then working outward to authentication, validation, and documentation. EduNova is where most of this happens.",
    href: "https://github.com/Edunova-School/Edunova-backend",
    linkLabel: "See the EduNova repository",
  },
  {
    title: "Learning through implementation and debugging",
    body: "Most of what I know came from making something work, then working out why it broke. Reading errors carefully has become one of my main habits.",
  },
  {
    title: "Improving application architecture",
    body: "Moving toward a clear separation between routes, schemas, services, repositories, and models, so each piece is easier to test and change.",
  },
  {
    title: "Exploring cryptocurrency technology",
    body: "Studying market data, order books, and the Binance ecosystem. TradeLens is where that curiosity became a working tool.",
    href: "https://github.com/eddidmund12/TradeLens",
    linkLabel: "See the TradeLens repository",
  },
  {
    title: "Sharing progress and technical lessons",
    body: "Posting what I build and what I learn along the way, and taking part in developer and crypto communities.",
    ...(site.socials.x ? { href: site.socials.x, linkLabel: "Follow along on X" } : {}),
  },
];
