import Image from "next/image";
import { testimonialImages } from "@/lib/images";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

export function TestimonialCard({ testimonial, featured }: TestimonialCardProps) {
  const imgSrc = testimonialImages[testimonial._id] ?? testimonialImages["testimonial-1"];

  if (featured) {
    return (
      <figure className="bg-brand-blue rounded-2xl p-8 md:p-12 text-white max-w-3xl mx-auto">
        <span
          className="block text-6xl text-brand-teal leading-none mb-4 font-serif"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <blockquote>
          <p className="text-xl md:text-2xl leading-relaxed font-light mb-8">
            {testimonial.quote}
          </p>
        </blockquote>
        <figcaption className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/20 shrink-0">
            <Image
              src={imgSrc}
              alt={testimonial.image.alt}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-blue-200 text-sm">{testimonial.program}</p>
          </div>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
      <span
        className="text-4xl text-brand-teal leading-none mb-3 font-serif"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <blockquote className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {testimonial.quote}
        </p>
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={imgSrc}
            alt={testimonial.image.alt}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-semibold text-brand-blue text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.program}</p>
        </div>
      </figcaption>
    </figure>
  );
}
