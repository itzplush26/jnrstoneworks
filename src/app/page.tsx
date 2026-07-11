import Image from "next/image";
import Link from "next/link";
import {
  ABOUT_STATS,
  FEATURE_ITEMS,
  GALLERY_ITEMS,
  HOME_SWATCHES,
  WHY_CHOOSE_ITEMS,
} from "@/data/site";
import {
  ArrowRightIcon,
  CheckIcon,
  GridIcon,
  LeafIcon,
  QuoteIcon,
  ShieldIcon,
  SparkIcon,
  ToolIcon,
} from "@/components/icons";
import { ASSETS } from "@/data/assets";

export default function Home() {
  return (
    <main>
      <section id="home" className="section section--dark hero">
        <div className="hero__panel">
          <div className="hero__copy">
            <p className="hero__eyebrow">LX HAUSYS HIMACS® OFFICIAL DISTRIBUTOR</p>
            <h1 className="hero__headline">
              <span>Solid Surfaces.</span>
              <span>Timeless Spaces.</span>
              <span>Expertly Made.</span>
            </h1>
            <div className="hero__rule" />
            <p className="hero__lead">
              We fabricate and install premium LX Hausys HIMACS® Solid Surface countertops that blend
              elegance, performance, and lasting value.
            </p>
            <div className="action-row">
              <Link className="button button--gold" href="/contact">
                Request a Quote
              </Link>
              <Link className="button button--ghost" href="/gallery">
                Explore Our Work
              </Link>
            </div>
          </div>

          <div className="hero__visual">
            <Image
              className="hero__visual-image"
              src={ASSETS.images.islandPlaceholder}
              alt="Kitchen island finished in HIMACS solid surface"
              fill
              sizes="(max-width: 1120px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        <div className="hero__ribbon">
          <div className="hero__ribbon-inner">
            <SparkIcon className="hero__ribbon-icon" />
            <span>
              Custom Surfaces. <strong>Lasting Impressions.</strong>
            </span>
          </div>
        </div>
      </section>

      <section id="colors" className="section section--cream content-block">
        <div className="section__inner content-grid">
          <div className="product-copy">
            <div className="product-headline">
              <div className="product-logo-row">
                <div className="lx-logo-crop">
                  <Image
                    className="brand-logo brand-logo--lx"
                    src={ASSETS.logos.lxHausys}
                    alt="LX Hausys"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="section__eyebrow product-badge">Official Distributor</span>
              </div>
              <div className="product-himacs-lockup">
                <Image
                  className="brand-logo brand-logo--himacs"
                  src={ASSETS.logos.himacs}
                  alt="HIMACS Solid Surface"
                  width={416}
                  height={121}
                />
              </div>
              <p className="accent-copy">Elegant. Durable. Non-porous. Limitless design possibilities.</p>
            </div>
            <p className="story-line">
            JNR Stone Works Trading Inc. transforms residential and commercial spaces with expertly fabricated HIMACS® solid surface solutions, delivering seamless finishes, exceptional craftsmanship, and reliable installation.
            </p>
            <Link className="button button--cream" href="/colors">
              View Color Catalog
            </Link>
          </div>

          <div className="swatch-stage" aria-label="HIMACS material swatches">
            <div className="swatch-stack">
              {HOME_SWATCHES.map((swatch, index) => (
                <article
                  key={swatch.name}
                  className="swatch-card"
                  style={{
                    ["--swatch-left" as never]: `${index * 1.65}rem`,
                    ["--swatch-top" as never]: `${index * 0.9}rem`,
                    ["--swatch-rotate" as never]: `${index * 4 - 8}deg`,
                    ["--swatch-index" as never]: String(index + 1),
                  }}
                >
                  <Image
                    className="swatch-card__image"
                    src={swatch.image}
                    alt={`${swatch.name} HIMACS swatch`}
                    fill
                    sizes="(max-width: 920px) 36vw, 15vw"
                  />
                  <span className="swatch-card__tone">{swatch.name}</span>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section__inner grid" style={{ marginTop: "1.5rem" }}>
          <div className="feature-grid grid">
            {FEATURE_ITEMS.map((item, index) => {
              const Icon = [SparkIcon, LeafIcon, ShieldIcon, ToolIcon, GridIcon][index];

              return (
                <article key={item.title} className="feature-card">
                  <span className="feature-card__icon">
                    <Icon width={18} height={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

          <p className="closing-line text-center">
            Seamless. Sophisticated. <span>Built for Everyday Life.</span>
          </p>
        </div>
      </section>

      <section id="services" className="section section--dark content-block">
        <div className="section__inner content-grid">
          <div className="process-copy">
            <div className="process-headline">
              <span className="section__eyebrow">Process</span>
              <h2>WE FABRICATE. WE INSTALL.</h2>
              <p className="accent-copy">Built with Precision. Delivered with Pride.</p>
            </div>

            <div className="split-panels">
              <article className="panel-card">
                <span className="feature-card__icon">
                  <ToolIcon width={18} height={18} />
                </span>
                <strong>Fabrication</strong>
                <p>Precision cutting. Flawless finishing. Built with passion and expertise.</p>
              </article>

              <article className="panel-card">
                <span className="feature-card__icon">
                  <CheckIcon width={18} height={18} />
                </span>
                <strong>Installation</strong>
                <p>Professional installation. Seamless fit. Attention to every detail. Built to last.</p>
              </article>
            </div>
          </div>

          <div className="process-media">
            <Image
              className="process-media__image"
              src={ASSETS.images.processPlaceholder}
              alt="HIMACS solid surface installation detail"
              fill
              sizes="(max-width: 1120px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="section section--dark content-block">
        <div className="section__inner gallery-shell">
          <div className="page-panel content-card">
            <span className="section__eyebrow">Why Choose Us</span>
            <div className="page-heading" style={{ gap: "0.7rem" }}>
              <h2 className="section__title" style={{ fontSize: "clamp(2rem, 3vw, 3.4rem)" }}>
                WHY CHOOSE JNR STONE WORKS?
              </h2>
            </div>

            <ul className="check-list">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <li key={item}>
                  <CheckIcon width={18} height={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="closing-line">
              <QuoteIcon width={22} height={22} /> Your Vision. Our Expertise. Perfectly Seamless.
            </p>
          </div>

          <div className="gallery-grid">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <Link
                key={item.title}
                href="/gallery"
                className={`gallery-card ${item.tall ? "gallery-card--tall" : ""}`}
                style={{ background: item.gradient }}
              >
                <span className="gallery-card__category">{item.categoryLabel}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="gallery-card__arrow">
                  Explore gallery <ArrowRightIcon width={14} height={14} />
                </span>
                <span className="gallery-card__meta">placeholder photo</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="section section--cream content-block">
        <div className="section__inner grid" style={{ gap: "1.2rem" }}>
          <div className="about-copy">
            <div className="about-headline">
              <span className="section__eyebrow">About Us</span>
              <h2>Crafting Seamless Spaces. Building Lasting Impressions.</h2>
            </div>
            <p className="story-line">  
            JNR Stone Works Trading Inc. brings together years of solid surface expertise, skilled craftsmanship, and meticulous attention to detail to create seamless spaces that stand the test of time. Specializing in the fabrication and installation of HIMACS® solid surface countertops, we deliver quality, durability, and precision for every residential and commercial project.
            </p>
          </div>

          <div className="home-about">
            {ABOUT_STATS.map((item) => (
              <article key={item.value} className="about-stat">
                <span className="about-stat__icon">
                  <ShieldIcon width={18} height={18} />
                </span>
                <strong>{item.value}</strong>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section--dark content-block">
        <div className="section__inner content-grid">
          <div className="contact-copy">
            <div className="contact-headline">
              <span className="section__eyebrow">Contact</span>
              <h2>Start your project with a guided consultation.</h2>
              <p className="accent-copy">Share your measurements, sketches, or inspiration board.</p>
            </div>

            <div className="contact-rail">
              <article className="contact-card">
                <span className="contact-card__icon">
                  <SparkIcon width={18} height={18} />
                </span>
                <strong>Request a quote</strong>
                <p>Send us the essentials and we will help you shape a premium solid surface solution.</p>
              </article>

              <article className="contact-card">
                <span className="contact-card__icon">
                  <GridIcon width={18} height={18} />
                </span>
                <strong>Explore the full portfolio</strong>
                <p>See more kitchen, bathroom, and commercial applications in the gallery section.</p>
              </article>
            </div>

            <Link className="button button--gold" href="/contact">
              Open Contact Page
            </Link>
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
