import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ABOUT_STATS } from "@/data/site";
import { ShieldIcon, SparkIcon, ToolIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us | JNR Stone Works Trading Inc.",
  description:
    "Learn about JNR Stone Works Trading Inc., official LX Hausys distributor and HIMACS solid surface specialist in Quezon City.",
};

export default function AboutUsPage() {
  const philosophyPoints = [
    "Distributor access that supports reliable material selection.",
    "Fabrication decisions made with clean edges and seam discipline.",
    "Installation coordination that keeps the client experience calm.",
  ] as const;

  const processPoints = [
    { title: "Consult", description: "Measurements, material direction, and project scope." },
    { title: "Fabricate", description: "Shop work, finishing, and quality checks." },
    { title: "Install", description: "On-site fitting and final detailing." },
  ] as const;

  return (
    <main>
      <PageHero
        kicker="About Us"
        title="A fabrication partner with distributor credentials and a design-led mindset."
        lead="JNR Stone Works Trading Inc. focuses on premium solid surface projects that feel effortless to specify, fabricate, and install."
        meta={["Official LX Hausys distributor", "Quezon City", "HIMACS solid surface"]}
        actions={
          <>
            <Link className="button button--gold" href="/contact">
              Talk to the Team
            </Link>
            <Link className="button button--ghost" href="/gallery">
              Browse Projects
            </Link>
          </>
        }
      />

      <section className="section section--cream content-block">
        <div className="section__inner grid" style={{ gap: "1.2rem" }}>
          <div className="home-about">
            {ABOUT_STATS.map((item, index) => {
              const Icon = [ShieldIcon, SparkIcon, ToolIcon][index];

              return (
                <article key={item.value} className="about-stat">
                  <span className="about-stat__icon">
                    <Icon width={18} height={18} />
                  </span>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              );
            })}
          </div>

          <div className="split-panels">
            <article className="about-philosophy">
              <span className="section__eyebrow">Craftsmanship Philosophy</span>
              <p>
                We keep the process controlled and communicative. The goal is not just a premium-looking
                countertop, but a project that feels organized from the first quote to the final clean-up.
              </p>
              <ul className="check-list" style={{ marginTop: "1rem" }}>
                {philosophyPoints.map((point) => (
                  <li key={point}>
                    <SparkIcon width={18} height={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="about-philosophy">
              <span className="section__eyebrow">Our Process</span>
              <div className="grid" style={{ gap: "0.9rem" }}>
                {processPoints.map((step) => (
                  <div key={step.title} className="panel-card">
                    <strong>{step.title}</strong>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}