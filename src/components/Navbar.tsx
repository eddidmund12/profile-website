"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/config/site";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeToggle } from "./ThemeToggle";
import { btnPrimary } from "./ui";

const sectionIds = navItems.map((item) => item.id);

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled) return;
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : "";
}

export function Navbar() {
  const pathname = usePathname();
  const activeId = useActiveSection(pathname === "/");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="wrap relative flex h-16 items-center justify-between gap-4">
        <Link href="/#top" className="flex items-center gap-3" aria-label={`${site.name}, back to top`}>
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-md border border-line-strong bg-surface font-mono text-xs font-semibold text-accent"
          >
            {site.monogram}
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={activeId === item.id ? "location" : undefined}
              className={`rounded-md px-3 py-2 text-sm transition ${
                activeId === item.id ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {item.label}
              {activeId === item.id ? (
                <span aria-hidden className="mx-auto mt-1 block h-px w-4 bg-accent" />
              ) : (
                <span aria-hidden className="mt-1 block h-px" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Wrapper hides the button below lg; btnPrimary's own display utility would otherwise override `hidden`. */}
          <div className="hidden lg:block">
            <Link href="/#contact" className={btnPrimary}>
              Let&apos;s Connect
            </Link>
          </div>
          <ThemeToggle />
          <MobileNavigation items={navItems} activeId={activeId} />
        </div>
      </div>
    </header>
  );
}
