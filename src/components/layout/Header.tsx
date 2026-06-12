"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getSiteSettings } from "@/lib/content";
import { cn } from "@/lib/utils";

const settings = getSiteSettings();

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
      <nav
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
            aria-label={`${settings.siteName} — home`}
          >
            {/* Logo mark */}
            <span
              className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue text-white text-sm font-bold"
              aria-hidden="true"
            >
              B
            </span>
            <span className="font-bold text-brand-blue text-sm leading-tight hidden sm:block">
              Bridgeway<br />
              <span className="font-normal text-gray-500 text-xs">Community Foundation</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {settings.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-teal",
                  pathname === item.href
                    ? "text-brand-blue border-b-2 border-brand-teal pb-0.5"
                    : "text-gray-600"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={settings.navCta.href}
              className="ml-2 inline-flex items-center px-4 py-2 bg-brand-teal text-white text-sm font-semibold rounded-lg hover:bg-brand-teal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            >
              {settings.navCta.label}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-brand-blue hover:bg-gray-100 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-gray-100 py-4 space-y-1"
          >
            {settings.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-brand-blue/5 text-brand-blue"
                    : "text-gray-600 hover:bg-gray-50 hover:text-brand-blue"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <Link
                href={settings.navCta.href}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 bg-brand-teal text-white text-sm font-semibold rounded-lg hover:bg-brand-teal-dark transition-colors"
              >
                {settings.navCta.label}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
