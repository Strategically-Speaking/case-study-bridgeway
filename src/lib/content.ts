/**
 * Content accessors — single source of truth for all site data.
 *
 * SWAP POINT FOR SANITY:
 * When Sanity is ready, replace the JSON imports below with GROQ queries.
 * All pages and components query through these functions — nothing else
 * imports the JSON directly. Only this file needs to change.
 *
 * Example swap:
 *   import { client } from './sanity'
 *   export async function getPrograms() {
 *     return client.fetch(`*[_type == "program"]`)
 *   }
 */

import data from "@/data/bridgeway-content.json";
import type {
  SiteSettings,
  Program,
  TeamMember,
  Testimonial,
  ImpactStat,
} from "./types";

// ─── Site Settings ────────────────────────────────────────────────────────────

export function getSiteSettings(): SiteSettings {
  return data.siteSettings as SiteSettings;
}

// ─── Programs ────────────────────────────────────────────────────────────────

export function getPrograms(): Program[] {
  return data.programs as Program[];
}

export function getProgramBySlug(slug: string): Program | undefined {
  return (data.programs as Program[]).find((p) => p.slug === slug);
}

export function getProgramSlugs(): string[] {
  return (data.programs as Program[]).map((p) => p.slug);
}

// ─── Team ────────────────────────────────────────────────────────────────────

export function getTeamMembers(): TeamMember[] {
  return data.team as TeamMember[];
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export function getTestimonials(): Testimonial[] {
  return data.testimonials as Testimonial[];
}

export function getFeaturedTestimonial(): Testimonial {
  return (data.testimonials as Testimonial[])[0];
}

// ─── Impact Stats ─────────────────────────────────────────────────────────────

export function getImpactStats(): ImpactStat[] {
  return data.impactStats as ImpactStat[];
}

export function getHomeStats(): ImpactStat[] {
  // First 4 stats for the home page strip
  return (data.impactStats as ImpactStat[]).slice(0, 4);
}

// ─── Page Content ─────────────────────────────────────────────────────────────

export function getHomePage() {
  return data.pages.home;
}

export function getAboutPage() {
  return data.pages.about;
}

export function getProgramsPage() {
  return data.pages.programs;
}

export function getImpactPage() {
  return data.pages.impact;
}

export function getContactPage() {
  return data.pages.contact;
}
