import type { Metadata } from "next";
import { getAboutPage, getTeamMembers } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TeamCard } from "@/components/ui/TeamCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bridgeway's mission, story, and the team driving workforce development and community support.",
};

export default function AboutPage() {
  const page = getAboutPage();
  const team = getTeamMembers();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-hero-heading"
        className="bg-brand-blue text-white section"
      >
        <div className="container-narrow">
          <SectionLabel light>{page.hero.label}</SectionLabel>
          <h1 id="about-hero-heading" className="text-white mb-4 max-w-3xl">
            {page.hero.headline}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            {page.hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="story-heading" className="section bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="story-heading" className="text-brand-blue mb-0">
                {page.story.headline}
              </h2>
            </div>
            <div>
              {page.story.body.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────────────────────── */}
      <section aria-labelledby="values-heading" className="section bg-surface">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <SectionLabel>What guides us</SectionLabel>
            <h2 id="values-heading" className="text-brand-blue">
              Our values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {page.values.map((value) => (
              <article
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                {/* Accent line */}
                <div
                  className="w-10 h-1 bg-brand-teal rounded-full mb-4"
                  aria-hidden="true"
                />
                <h3 className="text-brand-blue mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────────────────────── */}
      <section aria-labelledby="team-heading" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <SectionLabel>{page.teamSection.label}</SectionLabel>
            <h2 id="team-heading" className="text-brand-blue">
              {page.teamSection.headline}
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {team.map((member) => (
              <TeamCard key={member._id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-brand-teal text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Want to be part of the work?</h2>
          <p className="text-teal-100 text-lg mb-8">
            Explore our programs or get in touch to learn about volunteer and partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-teal focus-visible:ring-white"
            >
              Our Programs
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
