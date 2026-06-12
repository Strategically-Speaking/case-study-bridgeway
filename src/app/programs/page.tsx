import type { Metadata } from "next";
import { getProgramsPage, getPrograms } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Bridgeway's workforce training, digital literacy, financial coaching, and youth mentorship programs.",
};

export default function ProgramsPage() {
  const page = getProgramsPage();
  const programs = getPrograms();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="programs-hero-heading"
        className="bg-brand-blue text-white section"
      >
        <div className="container-narrow">
          <SectionLabel light>{page.hero.label}</SectionLabel>
          <h1 id="programs-hero-heading" className="text-white mb-4 max-w-2xl">
            {page.hero.headline}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            {page.hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Program grid ──────────────────────────────────────────────────── */}
      <section aria-labelledby="programs-list-heading" className="section bg-surface">
        <div className="container-wide">
          <h2 id="programs-list-heading" className="sr-only">
            All programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply CTA ─────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <SectionLabel>Questions?</SectionLabel>
          <h2 className="text-brand-blue mb-4">Not sure which program is right for you?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Reach out and a program coordinator will help you find the best fit.
          </p>
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
