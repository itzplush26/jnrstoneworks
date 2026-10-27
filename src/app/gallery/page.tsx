import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { getGalleryProjects } from "@/lib/gallery-projects";

export const metadata: Metadata = {
  title: "Gallery | JNR Stone Works Trading Inc.",
  description:
    "Explore completed JNR Stone Works projects across offices, retail spaces, and premium commercial interiors.",
};

export default function GalleryPage() {
  const projects = getGalleryProjects();

  return (
    <main>
      <PageHero
        kicker="Gallery"
        title="Completed Projects for Corporate, Retail, and Commercial Interiors"
        lead="Browse installed HIMACS solid surface work by project. Open any slideshow to move through every photo from that site."
        meta={["HIMACS solid surfaces", `${projects.length} projects`, "Client-ready portfolio"]}
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
          <GalleryGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
