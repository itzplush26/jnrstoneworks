"use client";

import { useState } from "react";
import { COLOR_SWATCHES, COLOR_TONES } from "@/data/site";

export function ColorCatalog() {
  const [tone, setTone] = useState<(typeof COLOR_TONES)[number]["value"]>("all");

  const visibleSwatches =
    tone === "all" ? COLOR_SWATCHES : COLOR_SWATCHES.filter((item) => item.tone === tone);

  return (
    <div className="grid" style={{ gap: "1.2rem" }}>
      <div className="filter-bar" aria-label="Filter by tone">
        {COLOR_TONES.map((item) => (
          <button
            key={item.value}
            type="button"
            className="pill"
            data-active={tone === item.value}
            onClick={() => setTone(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="catalog-grid">
        {visibleSwatches.map((swatch) => (
          <article
            key={swatch.name}
            className="color-card"
            style={{ background: swatch.gradient }}
          >
            <div className="color-card__label">
              <strong>{swatch.name}</strong>
              <span>{swatch.description}</span>
            </div>
            <span className="media-caption">{swatch.tone}</span>
          </article>
        ))}
      </div>
    </div>
  );
}