import Link from "next/link";
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { getSiteSettings } from "@/lib/content";

const settings = getSiteSettings();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
              aria-label={`${settings.siteName} — home`}
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-brand-blue text-sm font-bold"
                aria-hidden="true"
              >
                B
              </span>
              <span className="font-bold text-white text-sm leading-tight">
                Bridgeway<br />
                <span className="font-normal text-blue-200 text-xs">Community Foundation</span>
              </span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed">
              {settings.tagline}
            </p>
            <p className="text-blue-200 text-xs mt-4 leading-relaxed">
              {settings.mission}
            </p>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
              Site
            </h2>
            <ul className="space-y-2">
              {settings.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-100 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4">
              Contact
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-start gap-2 text-blue-100 text-sm hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{settings.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${settings.phone.replace(/\D/g, "")}`}
                  className="flex items-start gap-2 text-blue-100 text-sm hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{settings.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-blue-100 text-sm">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{settings.address}</span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {settings.socialLinks.facebook && (
                <a
                  href={settings.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bridgeway on Facebook (opens in new tab)"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Facebook size={16} aria-hidden="true" />
                </a>
              )}
              {settings.socialLinks.linkedin && (
                <a
                  href={settings.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bridgeway on LinkedIn (opens in new tab)"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              )}
              {settings.socialLinks.instagram && (
                <a
                  href={settings.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bridgeway on Instagram (opens in new tab)"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Instagram size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-xs">
            © {year} {settings.siteName}. All rights reserved.
          </p>
          <p className="text-blue-300 text-xs">
            Built by{" "}
            <a
              href="https://strategically-speaking.com"
              className="underline hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strategically Speaking
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
