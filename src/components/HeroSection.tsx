import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/config/site";
import { HeroVisual } from "./HeroVisual";
import { GithubIcon } from "./icons";
import { btnPrimary, btnSecondary, textLink } from "./ui";

export function HeroSection() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate scroll-mt-20 overflow-hidden">
      <div aria-hidden className="dot-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-32 -top-32 -z-10 size-[34rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 65%)" }}
      />

      <div className="wrap grid grid-cols-1 gap-12 pb-20 pt-12 sm:pt-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28 lg:pt-24">
        <div className="min-w-0 lg:col-span-7">
          <h1
            id="hero-title"
            className="rise text-balance text-[clamp(2.35rem,6.4vw,4.4rem)] font-semibold leading-[1.04] tracking-tight"
          >
            Building the systems behind great products.
          </h1>
          <p className="rise mt-6 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8" style={{ "--d": "90ms" } as React.CSSProperties}>
            I&apos;m {site.name}, a software developer focused on backend engineering, API development, and practical
            technology products. I turn complex requirements into structured, reliable systems.
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-x-3 gap-y-1" style={{ "--d": "180ms" } as React.CSSProperties}>
            <Link href="/#projects" className={btnPrimary}>
              Explore My Work
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/#contact" className={btnSecondary}>
              Let&apos;s Connect
            </Link>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className={`${textLink} sm:ml-2`}>
              <GithubIcon size={16} />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <p className="rise mt-10 flex items-center gap-2.5 text-sm text-muted" style={{ "--d": "260ms" } as React.CSSProperties}>
            <span aria-hidden className="size-2 shrink-0 rounded-full bg-accent" />
            <span>
              Currently building{" "}
              <Link href="/projects/edunova" className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                EduNova
              </Link>{" "}
              and{" "}
              <Link href="/projects/tradelens" className="text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent">
                TradeLens
              </Link>
              .
            </span>
          </p>
        </div>

        <div className="rise min-w-0 lg:col-span-5" style={{ "--d": "220ms" } as React.CSSProperties}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
