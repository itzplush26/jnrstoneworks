"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ASSETS } from "@/data/assets";
import { NAV_ITEMS } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  return <HeaderContent key={currentPath} currentPath={currentPath} />;
}

function HeaderContent({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="JNR Stone Works Trading Inc. home">
          <span className="site-brand__mark">
            <Image
              className="site-brand__logo"
              src={ASSETS.logos.jnr}
              alt="JNR"
              width={300}
              height={296}
              priority
            />
          </span>
          <span className="site-brand__text" aria-hidden>
            <strong>JNR Stone Works</strong>
            <span>Trading Inc.</span>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <div className="site-header__links">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.route;
              const href = item.route;

              return (
                <Link key={item.label} href={href} className="header-link" data-active={isActive}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="site-header__actions">
            <Link className="button button--ghost" href="/contact">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
          </button>
        </nav>
      </div>

      <div className="site-header__drawer" data-open={menuOpen}>
        <div className="site-header__drawer-inner">
          <div className="site-header__drawer-links">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === item.route;
              const href = item.route;

              return (
                <Link
                  key={item.label}
                  href={href}
                  className="header-link"
                  data-active={isActive}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link className="button button--gold" href="/contact" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
