"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/config/site";
import { btnPrimary } from "./ui";

interface Props {
  items: NavItem[];
  activeId: string;
}

/**
 * Disclosure-style menu: a button with aria-expanded controls a list of links.
 * Escape closes it and returns focus to the button.
 */
export function MobileNavigation({ items, activeId }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (query.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-fg transition hover:border-line-strong"
      >
        {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-bg px-5 pb-6 pt-2 shadow-2xl shadow-black/30 sm:px-8"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={activeId === item.id ? "location" : undefined}
                className={`flex min-h-12 items-center text-base font-medium ${
                  activeId === item.id ? "text-accent" : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/#contact" onClick={() => setOpen(false)} className={`${btnPrimary} mt-5 w-full`}>
          Let&apos;s Connect
        </Link>
      </nav>
    </div>
  );
}
