import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SERVICE_ITEMS } from "@/data/site";
import { CheckIcon, LeafIcon, ShieldIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Services | JNR Stone Works Trading Inc.",
  description:
    "Fabrication, installation, and custom design services for HIMACS solid surface projects in the Philippines.",
};

export default function ServicesPage() {
  const serviceIcons = [ShieldIcon, LeafIcon, CheckIcon] as const;

  return (
    <main>
      <PageHero
        kicker="Services"
        title="Fabrication, installation, and support shaped around the project."
        lead="JNR Stone Works Trading Inc. balances precision shop work with field-ready installation so clients can keep momentum from proposal to turnover."
        meta={["Fabrication", "Installation", "Custom Design"]}
        actions={
          <>
            <Link className="button button--gold" href="/contact">
              Schedule a Consultation
            </Link>
            <Link className="button button--ghost" href="/colors">
              Explore Colors
            </Link>
          </>
        }
      />

      <section className="section section--dark content-block">
        <div className="section__inner service-grid">
          {SERVICE_ITEMS.slice(0, 3).map((item, index) => {
            const Icon = serviceIcons[index];

            return (
              <article key={item.title} className="service-card">
                <span className="service-card__icon">
                  <Icon width={18} height={18} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}