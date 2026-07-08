import type { Metadata } from "next";
import Link from "next/link";
import { ColorCatalog } from "@/components/color-catalog";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Colors | JNR Stone Works Trading Inc.",
  description:
    "Browse HIMACS solid surface color options from JNR Stone Works Trading Inc., official LX Hausys distributor in Quezon City.",
};

export default function ColorsPage() {
  return (
    <main>
      <PageHero
        kicker="Colors"
        title="HIMACS color catalog with real swatches and material specs."
        lead="Browse the curated HIMACS lineup and filter by tone, collection series, slab thickness, or color code to find the right surface faster."
        meta={["Real catalog swatches", "Series + thickness filters", "Code and Δ E5 spec tags"]}
        actions={
          <>
            <Link className="button button--gold" href="/contact">
              Request a Quote
            </Link>
            <Link className="button button--ghost" href="/gallery">
              View Gallery
            </Link>
          </>
        }
      />

      <section className="section section--cream content-block">
        <div className="section__inner grid" style={{ gap: "1.2rem" }}>
          <p className="story-line">
            Swatches and codes are based on the official HIMACS catalog references you provided. Actual
            slab appearance can vary slightly by screen and lighting conditions.
          </p>

          <ColorCatalog />
        </div>
      </section>
    </main>
  );
}