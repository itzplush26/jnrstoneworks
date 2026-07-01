"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS } from "@/data/site";
import jnrLogo from "../../jnrlogonobg.png";

export function SiteHeader() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  return <HeaderContent key={currentPath} currentPath={currentPath} />;
}

function HeaderContent({ currentPath }: { currentPath: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (currentPath !== "/") {
      return;
    }

    const sections = NAV_ITEMS.map((item) => document.getElementById(item.anchor)).filter(
      (section): section is HTMLElement => Boolean(section),
    );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-38% 0px -52% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [currentPath]);

  const homeLink = useMemo(() => (currentPath === "/" ? "/#home" : "/"), [currentPath]);

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="site-header__inner">
        <Link className="site-brand" href={homeLink} aria-label="JNR Stone Works Trading Inc. home">
          <Image
            className="site-brand__logo"
            src={jnrLogo}
            alt="JNR Stone Works Trading Inc."
            width={1000}
            height={1000}
            priority
          />
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <div className="site-header__links">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPath === "/" ? activeSection === item.anchor : currentPath === item.route;
              const href = currentPath === "/" ? `/#${item.anchor}` : item.route;

              return (
                <Link key={item.label} href={href} className="header-link" data-active={isActive}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="site-header__actions">
            <Link className="button button--ghost" href={currentPath === "/" ? "/#contact" : "/contact"}>
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
              const isActive = currentPath === "/" ? activeSection === item.anchor : currentPath === item.route;
              const href = currentPath === "/" ? `/#${item.anchor}` : item.route;

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

          <Link className="button button--gold" href={currentPath === "/" ? "/#contact" : "/contact"} onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}