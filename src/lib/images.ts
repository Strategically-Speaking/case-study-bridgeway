/**
 * Image registry — all site image URLs in one place.
 * Swap any URL here to update it everywhere it's used.
 *
 * Current source: Unsplash (free for portfolio/commercial use, no attribution required)
 * Format: https://images.unsplash.com/photo-{id}?w={width}&q=80&fit=crop&crop=faces,center
 */

const UNS = "https://images.unsplash.com";

function unsplash(id: string, w = 1200, h = 800) {
  return `${UNS}/photo-${id}?w=${w}&h=${h}&q=80&fit=crop&crop=faces,center`;
}

// ─── Page heroes ─────────────────────────────────────────────────────────────

export const heroImage = unsplash("1529156069898-49953e39b3ac", 1400, 900);
// Adults in a community learning/workshop setting

// ─── Programs ────────────────────────────────────────────────────────────────

export const programImages: Record<string, string> = {
  "workforce-readiness": unsplash("1573496359142-b8d87734a5a2", 800, 500),
  // Professional in a workplace/interview coaching setting

  "digital-literacy": unsplash("1516321318423-f06f85e504b3", 800, 500),
  // Adult learner working on a laptop in a classroom

  "financial-coaching": unsplash("1554224155-6726b3ff858f", 800, 500),
  // Financial planning session — papers, calculator, coaching

  "youth-mentorship": unsplash("1529390079861-591de354faf5", 800, 500),
  // Young person working with a mentor or in a group setting
};

// ─── Team ────────────────────────────────────────────────────────────────────

export const teamImages: Record<string, string> = {
  "team-director": unsplash("1494790108377-be9c29b29330", 400, 400),
  // Professional woman headshot

  "team-programs": unsplash("1500648767791-00dcc994a43e", 400, 400),
  // Professional man headshot

  "team-development": unsplash("1438761681033-6461ffad8d80", 400, 400),
  // Professional woman headshot
};

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const testimonialImages: Record<string, string> = {
  "testimonial-1": unsplash("1531746020798-e6953c6e8e04", 200, 200),
  // Woman portrait

  "testimonial-2": unsplash("1507003211169-0a1dd7228f2d", 200, 200),
  // Man portrait

  "testimonial-3": unsplash("1539571696357-5a69c17a67c6", 200, 200),
  // Young man portrait
};
