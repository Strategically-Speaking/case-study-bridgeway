import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Monitor,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react";
import { programImages } from "@/lib/images";
import type { Program } from "@/lib/types";

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase size={20} aria-hidden="true" />,
  monitor: <Monitor size={20} aria-hidden="true" />,
  "dollar-sign": <DollarSign size={20} aria-hidden="true" />,
  users: <Users size={20} aria-hidden="true" />,
};

interface ProgramCardProps {
  program: Program;
  variant?: "grid" | "list";
}

export function ProgramCard({ program, variant = "grid" }: ProgramCardProps) {
  const imgSrc = programImages[program.slug] ?? programImages["workforce-readiness"];

  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <Image
          src={imgSrc}
          alt={program.image.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-blue text-white text-xs font-semibold rounded-full">
            {iconMap[program.icon]}
            {program.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-semibold text-brand-blue mb-2">
          {program.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {program.description}
        </p>

        {/* Meta */}
        <dl className="grid grid-cols-2 gap-2 mb-5 text-xs">
          <div>
            <dt className="text-gray-400 font-medium">Duration</dt>
            <dd className="text-gray-700 font-semibold">{program.duration}</dd>
          </div>
          <div>
            <dt className="text-gray-400 font-medium">Cost</dt>
            <dd className="text-gray-700 font-semibold">{program.cost}</dd>
          </div>
        </dl>

        <Link
          href={`/programs/${program.slug}`}
          className="inline-flex items-center gap-1.5 text-brand-teal font-semibold text-sm hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
          aria-label={`Learn more about ${program.title}`}
        >
          Learn more <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
