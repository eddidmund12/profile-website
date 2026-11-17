import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/config/site";
import { ContactForm } from "./ContactForm";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

const channel =
  "flex min-h-14 items-center justify-between gap-4 border-b border-line py-3 text-base transition hover:text-accent";

export function ContactSection() {
  const { email, socials, contactForm } = site;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className={`grid grid-cols-1 gap-12 ${contactForm ? "lg:grid-cols-2 lg:gap-16" : ""}`}>
          <div>
            <h2 id="contact-title" className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Have an idea worth building?
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg sm:leading-8">
              I&apos;m always interested in connecting with people building useful products, solving technical
              problems, or exploring new ideas.
            </p>

            <ul className="mt-8 max-w-md border-t border-line">
              {email ? (
                <li>
                  <a href={`mailto:${email}`} className={channel}>
                    <span className="flex items-center gap-3">
                      <Mail size={18} aria-hidden className="text-accent" />
                      {email}
                    </span>
                    <ArrowUpRight size={16} aria-hidden className="text-faint" />
                  </a>
                </li>
              ) : null}
              <li>
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className={channel}>
                  <span className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-accent" />
                    GitHub
                  </span>
                  <ArrowUpRight size={16} aria-hidden className="text-faint" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              {socials.x ? (
                <li>
                  <a href={socials.x} target="_blank" rel="noopener noreferrer" className={channel}>
                    <span className="flex items-center gap-3">
                      <XIcon size={18} className="text-accent" />X (Twitter)
                    </span>
                    <ArrowUpRight size={16} aria-hidden className="text-faint" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
              {socials.linkedin ? (
                <li>
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={channel}>
                    <span className="flex items-center gap-3">
                      <LinkedinIcon size={18} className="text-accent" />
                      LinkedIn
                    </span>
                    <ArrowUpRight size={16} aria-hidden className="text-faint" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          {contactForm ? (
            <div className="rounded-2xl border border-line bg-surface/40 p-5 sm:p-8">
              <ContactForm />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
