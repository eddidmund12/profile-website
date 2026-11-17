/**
 * Central site configuration.
 *
 * Edit the `configured` block below, or set the matching environment variables
 * (see .env.example). Anything left empty is hidden from the site, so no
 * placeholder links ever appear on the live page.
 */
const configured = {
  email: "",
  x: "",
  linkedin: "",
};

export const site = {
  name: "Edmund Adeyi",
  shortName: "Edmund",
  monogram: "EA",
  role: "Software developer",
  title: "Edmund Adeyi | Backend developer building APIs and practical products",
  description:
    "Edmund Adeyi is a software developer focused on backend engineering, API design, and practical technology products. Explore projects built with Python, Flask, and PostgreSQL.",
  footerBlurb:
    "Software developer focused on backend engineering, API development, and practical technology products.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || configured.email,
  socials: {
    // Derived from the repository links you supplied.
    github: "https://github.com/eddidmund12",
    x: process.env.NEXT_PUBLIC_X_URL || configured.x,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || configured.linkedin,
  },
  /** Enable only after RESEND_API_KEY and CONTACT_TO_EMAIL are set on the server. */
  contactForm: process.env.NEXT_PUBLIC_CONTACT_FORM === "true",
  sections: {
    /** Set to false to hide the Writing section and its nav link. */
    writing: true,
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
  /** Section id used for active-link highlighting on the home page. */
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/#top", id: "top" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Journey", href: "/#journey", id: "journey" },
  ...(site.sections.writing ? [{ label: "Writing", href: "/#writing", id: "writing" }] : []),
  { label: "Contact", href: "/#contact", id: "contact" },
];
