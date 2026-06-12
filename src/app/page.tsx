import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  getHomePage,
  getHomeStats,
  getPrograms,
  getFeaturedTestimonial,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatCard } from "@/components/ui/StatCard";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { heroImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Bridgeway Community Foundation — Building Bridges to Opportunity",
  description:
    "Bridgeway empowers underserved adults through workforce training, digital literacy, and community support programs.",
};

export default function HomePage() {
  const page = getHomePage();
  const stats = getHomeStats();
  const programs = getPrograms();
  const testimonial = getFeaturedTestimonial();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative bg-brand-blue text-white overflow-hidden"
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #2A9D8F 0%, transparent 60%), radial-gradient(circle at 10% 80%, #2A5298 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <SectionLabel light>Workforce · Digital Literacy · Community</SectionLabel>
              <h1 id="hero-heading" className="text-white mb-6">
                {page.hero.headline}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-lg">
                {page.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href={page.hero.primaryCta!.href} size="lg">
                  {page.hero.primaryCta!.label}
                </Button>
                <Button
                  href={page.hero.secondaryCta!.href}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-brand-blue focus-visible:ring-white"
                >
                  {page.hero.secondaryCta!.label}
                </Button>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={page.hero.image!.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <section aria-label="Impact at a glance" className="bg-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
            {stats.map((stat) => (
              <StatCard
                key={stat._id}
                value={stat.value}
                label={stat.label}
                light
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs preview ──────────────────────────────────────────────── */}
      <section
        aria-labelledby="programs-heading"
        className="section bg-surface"
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <SectionLabel>{page.programsSection.label}</SectionLabel>
            <h2 id="programs-heading" className="text-brand-blue mb-4">
              {page.programsSection.headline}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {page.programsSection.subheadline}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {programs.map((program) => (
              <ProgramCard key={program._id} program={program} />
            ))}
          </div>

          <div className="text-center">
            <Button href={page.programsSection.cta.href} variant="secondary" size="lg">
              {page.programsSection.cta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* ── Impact section ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="impact-heading"
        className="section bg-white"
      >
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>{page.impactSection.label}</SectionLabel>
              <h2 id="impact-heading" className="text-brand-blue mb-4">
                {page.impactSection.headline}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {page.impactSection.body}
              </p>
              <Button href={page.impactSection.cta.href}>
                {page.impactSection.cta.label}
                <ArrowRight size={16} className="ml-2" aria-hidden="true" />
              </Button>
            </div>
            {/* Visual accent */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { v: "2,400+", l: "Adults served annually" },
                  { v: "78%", l: "Job placement rate" },
                  { v: "14", l: "Years in the community" },
                  { v: "40+", l: "Employer partners" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="bg-surface rounded-xl p-5 text-center shadow-sm"
                  >
                    <p className="text-3xl font-bold text-brand-blue">{s.v}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="testimonial-heading"
        className="section bg-surface"
      >
        <div className="container-narrow">
          <h2 id="testimonial-heading" className="sr-only">
            Participant testimonial
          </h2>
          <TestimonialCard testimonial={testimonial} featured />
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="section bg-brand-blue text-white"
      >
        <div className="container-narrow text-center">
          <h2 id="cta-heading" className="text-white mb-4">
            {page.finalCta.headline}
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            {page.finalCta.body}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={page.finalCta.primaryCta.href} size="lg">
              {page.finalCta.primaryCta.label}
            </Button>
            <Button
              href={page.finalCta.secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-brand-blue focus-visible:ring-white"
            >
              {page.finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
