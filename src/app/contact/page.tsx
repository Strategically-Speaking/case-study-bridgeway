import type { Metadata } from "next";
import { getContactPage, getSiteSettings } from "@/lib/content";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "./ContactForm";
import { User, Heart, Briefcase, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bridgeway to enroll in a program, volunteer, or learn about funding opportunities.",
};

const iconMap: Record<string, React.ReactNode> = {
  user: <User size={22} aria-hidden="true" />,
  heart: <Heart size={22} aria-hidden="true" />,
  briefcase: <Briefcase size={22} aria-hidden="true" />,
};

export default function ContactPage() {
  const page = getContactPage();
  const settings = getSiteSettings();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-hero-heading"
        className="bg-brand-blue text-white section"
      >
        <div className="container-narrow">
          <SectionLabel light>{page.hero.label}</SectionLabel>
          <h1 id="contact-hero-heading" className="text-white mb-4">
            {page.hero.headline}
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
            {page.hero.subheadline}
          </p>
        </div>
      </section>

      {/* ── Contact options ───────────────────────────────────────────────── */}
      <section aria-labelledby="options-heading" className="section bg-surface">
        <div className="container-narrow">
          <h2 id="options-heading" className="sr-only">
            How can we help?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {page.contactOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/5 text-brand-blue mb-4"
                >
                  {iconMap[option.icon]}
                </div>
                <h3 className="text-brand-blue text-base mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Form + contact details ────────────────────────────────── */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-brand-blue mb-6">Send us a message</h2>
              <ContactForm
                fields={page.form.fields}
                submitLabel={page.form.submitLabel}
                successMessage={page.form.successMessage}
              />
            </div>

            {/* Contact details */}
            <aside aria-label="Direct contact information">
              <h2 className="text-brand-blue mb-6 text-xl">Direct contact</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-brand-teal mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-brand-blue text-sm font-medium hover:text-brand-teal transition-colors"
                    >
                      {settings.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-brand-teal mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${settings.phone.replace(/\D/g, "")}`}
                      className="text-brand-blue text-sm font-medium hover:text-brand-teal transition-colors"
                    >
                      {settings.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-brand-teal mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">
                      Address
                    </p>
                    <p className="text-brand-blue text-sm font-medium">
                      {settings.address}
                    </p>
                  </div>
                </li>
              </ul>

              {/* Map placeholder */}
              <div
                className="mt-8 h-40 bg-gray-100 rounded-xl flex items-center justify-center"
                role="img"
                aria-label="Map placeholder — Metro City location"
              >
                <p className="text-gray-400 text-sm">Map</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
