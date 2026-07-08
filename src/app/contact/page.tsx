import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact | JNR Stone Works Trading Inc.",
  description:
    "Contact JNR Stone Works Trading Inc. for HIMACS solid surface countertop consultations, quotes, and project coordination.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Start with a consultation, then move into a clean project handoff."
        lead="Use the details below to reach the team directly. Inquiry submissions are delivered to our sales inbox with a branded email format."
        meta={["+63 917 190 1474", "sales@jnrstoneworks.com", "Quezon City"]}
        actions={
          <>
            <a className="button button--gold" href="mailto:sales@jnrstoneworks.com">
              Email the Team
            </a>
            <a className="button button--ghost" href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Message on Facebook
            </a>
          </>
        }
      />

      <section className="section section--dark content-block">
        <div className="section__inner contact-grid">
          <div className="content-grid">
            <div className="contact-copy">
              <article className="contact-card">
                <span className="contact-card__icon">
                  <PhoneIcon width={18} height={18} />
                </span>
                <strong>Phone</strong>
                <p>+63 917 190 1474</p>
              </article>

              <article className="contact-card">
                <span className="contact-card__icon">
                  <MailIcon width={18} height={18} />
                </span>
                <strong>Email</strong>
                <p>sales@jnrstoneworks.com</p>
              </article>

              <article className="contact-card">
                <span className="contact-card__icon">
                  <MapPinIcon width={18} height={18} />
                </span>
                <strong>Address</strong>
                <p>7F Victoria Sports Tower, 799 EDSA Brgy. South Triangle, Quezon City 1103</p>
              </article>

              <article className="contact-card">
                <span className="contact-card__icon">
                  <FacebookIcon width={18} height={18} />
                </span>
                <strong>Facebook</strong>
                <p>JNR Stone Works Trading Inc.</p>
              </article>
            </div>

            <ContactForm />
          </div>

          <div className="map-frame" aria-label="Estimated location map">
            <iframe
              title="Estimated location in Quezon City"
              src="https://www.google.com/maps?q=7F%20Victoria%20Sports%20Tower,%20799%20EDSA%20Brgy.%20South%20Triangle,%20Quezon%20City%201103&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="page-map__caption">Estimated location in Quezon City</span>
          </div>
        </div>
      </section>
    </main>
  );
}