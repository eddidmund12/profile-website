import Link from "next/link";
import { btnPrimary, btnSecondary } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[60vh] place-content-center py-20">
      <p className="font-mono text-sm text-muted">
        <span className="tk-k">404</span> <span className="tk-p">/</span> not found
      </p>
      <h1 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        That route doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The page may have moved, or the link may be mistyped. Head back to the main page or browse the projects.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={btnPrimary}>
          Back to home
        </Link>
        <Link href="/#projects" className={btnSecondary}>
          See projects
        </Link>
      </div>
    </section>
  );
}
