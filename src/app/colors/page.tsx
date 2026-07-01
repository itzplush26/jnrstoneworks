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
        title="HIMACS solid surface swatches for refined interiors."
        lead="Filter the catalog by tone to compare whites, beiges, greys, and blacks that suit residential and commercial projects."
        meta={["Filter by tone", "Fast-loading placeholder catalog", "Designed for future product photography"]}
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
            The catalog below uses placeholder swatch renders for now, giving the site a polished visual
            system while leaving room for real product photography later.
          </p>

          <ColorCatalog />
        </div>
      </section>
    </main>
  );
}