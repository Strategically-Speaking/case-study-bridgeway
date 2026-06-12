import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, MapPin, DollarSign, ArrowLeft } from "lucide-react";
import { getProgramBySlug, getProgramSlugs, getPrograms } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { programImages } from "@/lib/images";

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render all 4 program slugs at build time
export function generateStaticParams() {
  return getProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return {};
  return {
    title: program.title,
    description: program.description,
  };
}


export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const imgSrc = programImages[program.slug] ?? programImages["workforce-readiness"];
  const allPrograms = getPrograms().filter((p) => p.slug !== program.slug);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="program-heading"
        className="bg-brand-blue text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
          >
            <ArrowLeft size={15} aria-hidden="true" /> All Programs
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>{program.category}</SectionLabel>
              <h1 id="program-heading" className="text-white mb-4">
                {program.title}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                {program.description}
              </p>

              {/* Quick meta */}
              <dl className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <Clock size={18} className="mx-auto mb-1 text-brand-teal-light" aria-hidden="true" />
                  <dt className="text-xs text-blue-200 mb-0.5">Duration</dt>
                  <dd className="text-white font-semibold text-sm">{program.duration}</dd>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <MapPin size={18} className="mx-auto mb-1 text-brand-teal-light" aria-hidden="true" />
                  <dt className="text-xs text-blue-200 mb-0.5">Format</dt>
                  <dd className="text-white font-semibold text-sm">{program.format}</dd>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <DollarSign size={18} className="mx-auto mb-1 text-brand-teal-light" aria-hidden="true" />
                  <dt className="text-xs text-blue-200 mb-0.5">Cost</dt>
                  <dd className="text-white font-semibold text-sm">{program.cost}</dd>
                </div>
              </dl>
            </div>

            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imgSrc}
                alt={program.image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Full description ──────────────────────────────────────────────── */}
      <section aria-labelledby="about-program-heading" className="section bg-white">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="md:col-span-2">
              <h2 id="about-program-heading" className="text-brand-blue mb-6">
                About this program
              </h2>
              {program.fullDescription.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}

              {/* Outcomes */}
              <div className="mt-10">
                <h3 className="text-brand-blue mb-4">Program outcomes</h3>
                <ul className="space-y-3" aria-label="Program outcomes">
                  {program.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-brand-teal mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700 text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Program details and eligibility">
              <div className="bg-surface rounded-2xl p-6 sticky top-24">
                <h3 className="text-brand-blue mb-4 text-base">Eligibility</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {program.eligibility}
                </p>

                <Button href="/contact" className="w-full justify-center" size="lg">
                  {program.ctaText}
                </Button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  A coordinator will follow up within one business day.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Other programs ────────────────────────────────────────────────── */}
      {allPrograms.length > 0 && (
        <section aria-labelledby="other-programs-heading" className="section bg-surface">
          <div className="container-wide">
            <div className="text-center mb-10">
              <SectionLabel>Keep exploring</SectionLabel>
              <h2 id="other-programs-heading" className="text-brand-blue">
                Other programs
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {allPrograms.map((p) => (
                <ProgramCard key={p._id} program={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
