import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Gallery | JNR Stone Works Trading Inc.",
  description:
    "Filterable HIMACS solid surface project gallery for kitchen countertops, bathroom vanities, and commercial spaces.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="A preview of kitchens, vanities, and commercial surfaces."
        lead="The masonry-style grid below is ready for real project photography when you have it. For now, the placeholder system keeps the portfolio section polished and consistent."
        meta={["Kitchen Countertops", "Bathroom Vanities", "Commercial Spaces"]}
        actions={
          <>
            <Link className="button button--gold" href="/contact">
              Request a Quote
            </Link>
            <Link className="button button--ghost" href="/services">
              See Services
            </Link>
          </>
        }
      />

      <section className="section section--dark content-block">
        <div className="section__inner">
          <GalleryGrid />
        </div>
      </section>
    </main>
  );
}