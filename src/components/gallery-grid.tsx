"use client";

import { useState } from "react";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/data/site";
import { ArrowRightIcon } from "@/components/icons";

export function GalleryGrid() {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]["value"]>("all");

  const visibleItems =
    filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="grid" style={{ gap: "1.2rem" }}>
      <div className="filter-bar" aria-label="Filter by project type">
        {GALLERY_FILTERS.map((item) => (
          <button
            key={item.value}
            type="button"
            className="pill"
            data-active={filter === item.value}
            onClick={() => setFilter(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid gallery-grid--masonry">
        {visibleItems.map((item) => (
          <article
            key={item.title}
            className={`gallery-card ${item.tall ? "gallery-card--tall" : ""}`}
            style={{ background: item.gradient }}
          >
            <span className="gallery-card__category">{item.categoryLabel}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="gallery-card__arrow">
              View project <ArrowRightIcon width={14} height={14} />
            </span>
            <span className="gallery-card__meta">placeholder photo</span>
          </article>
        ))}
      </div>
    </div>
  );
}