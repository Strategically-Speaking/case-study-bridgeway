import type { Metadata } from "next";
import { getImpactPage, getImpactStats, getTestimonials } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatCard } from "@/components/ui/StatCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the outcomes and stories behind Bridgeway's community work over 14 years.",
};

export default function ImpactPage() {
  const page = getImpactPage();
  const stats = getImpactStats();
  const testimonials = getTestimonials();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="impact-hero-heading"
        className="bg-brand-blue text-white section"
      >
        <div className="container-narrow">
          <SectionLabel light>{page.hero.label}</SectionLabel>
          <h1 id="impact-hero-heading" className="text-white mb-4 max-w-2xl">
            {page.hero.headline}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            {page.hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Full stats grid ───────────────────────────────────────────────── */}
      <section aria-labelledby="stats-heading" className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <SectionLabel>By the numbers</SectionLabel>
            <h2 id="stats-heading" className="text-brand-blue">
              14 years of outcomes
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat._id}
                className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <p
                  className="text-4xl font-bold text-brand-blue mb-1"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                {stat.description && (
                  <p className="text-xs text-gray-400">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Annual highlight ──────────────────────────────────────────────── */}
      <section aria-labelledby="annual-heading" className="section bg-surface">
        <div className="container-narrow">
          <div className="bg-brand-blue rounded-2xl p-10 md:p-16 text-white">
            <SectionLabel light>Annual highlight</SectionLabel>
            <h2 id="annual-heading" className="text-white mb-4">
              {page.annualHighlight.headline}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
              {page.annualHighlight.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section aria-labelledby="stories-heading" className="section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionLabel>Real stories</SectionLabel>
            <h2 id="stories-heading" className="text-brand-blue">
              In their own words
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t._id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section bg-brand-teal text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Add your story to ours.</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-lg mx-auto">
            Whether you&apos;re looking for support or want to fund the work — reach out.
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
            <Button href="/contact" variant="secondary" size="lg">
              Get Involved
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
