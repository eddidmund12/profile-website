import { aboutParagraphs } from "@/content/about";
import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { HowIBuild } from "./HowIBuild";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="about-title" className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              I like the part of a product people never see.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {aboutParagraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <EngineeringPrinciples />
          </div>
        </div>
        <HowIBuild />
      </div>
    </section>
  );
}
