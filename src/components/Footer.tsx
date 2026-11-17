import Link from "next/link";
import { navItems, site } from "@/config/site";
import { CurrentYear } from "./CurrentYear";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

const iconLink =
  "inline-flex size-11 items-center justify-center rounded-lg text-muted transition hover:text-fg";

export function Footer() {
  const { socials } = site;
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{site.footerBlurb}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <ul className="grid grid-cols-2 gap-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 md:justify-self-end">
          <ul className="flex items-center gap-1 md:-mr-3">
            <li>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub (opens in a new tab)">
                <GithubIcon />
              </a>
            </li>
            {socials.x ? (
              <li>
                <a href={socials.x} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="X (opens in a new tab)">
                  <XIcon />
                </a>
              </li>
            ) : null}
            {socials.linkedin ? (
              <li>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn (opens in a new tab)">
                  <LinkedinIcon />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="wrap mt-10 border-t border-line pt-6 text-sm text-faint">
        &copy; <CurrentYear /> {site.name}
      </div>
    </footer>
  );
}
