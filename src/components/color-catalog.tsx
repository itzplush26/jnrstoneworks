"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { COLOR_SERIES, COLOR_SWATCHES, COLOR_TONES } from "@/data/site";

export function ColorCatalog() {
  const [tone, setTone] = useState<(typeof COLOR_TONES)[number]["value"]>("all");
  const [series, setSeries] = useState<(typeof COLOR_SERIES)[number]["value"]>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Ensure the Colors route starts from the top after navigation.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const visibleSwatches = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase();

    return COLOR_SWATCHES.filter((item) => {
      const byTone = tone === "all" || item.tone === tone;
      const bySeries = series === "all" || item.series === series;
      const byQuery =
        !loweredQuery ||
        item.name.toLowerCase().includes(loweredQuery) ||
        item.code.toLowerCase().includes(loweredQuery);

      return byTone && bySeries && byQuery;
    });
  }, [tone, series, query]);

  function resetFilters() {
    setTone("all");
    setSeries("all");
    setQuery("");
  }

  return (
    <div className="grid" style={{ gap: "1.2rem" }}>
      <div className="color-catalog__toolbar">
        <label className="color-filter-field">
          Tone
          <select value={tone} onChange={(event) => setTone(event.target.value as typeof tone)}>
            {COLOR_TONES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="color-filter-field">
          Series
          <select value={series} onChange={(event) => setSeries(event.target.value as typeof series)}>
            {COLOR_SERIES.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="color-filter-field color-filter-field--search">
          Search color or code
          <input
            type="search"
            placeholder="e.g. Aurora, M601, Quartz"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <button type="button" className="color-filter-reset" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      <div className="color-catalog__active">
        <span>Active:</span>
        <span>{COLOR_TONES.find((item) => item.value === tone)?.label}</span>
        <span>{COLOR_SERIES.find((item) => item.value === series)?.label}</span>
        <span>{query ? `Search: ${query}` : "Search: none"}</span>
      </div>

      <p className="color-catalog__count">
        Showing {visibleSwatches.length} of {COLOR_SWATCHES.length} HIMACS colors
      </p>
      <p className="color-catalog__notice">
        Catalog note: swatch images are sourced from the HIMACS catalog and may vary slightly from
        actual slabs due to print, screen calibration, and lighting conditions.
      </p>

      <div className="catalog-grid">
        {visibleSwatches.map((swatch) => {
          return (
            <article key={swatch.code} className="color-card color-card--photo">
              <Image
                className="color-card__image"
                src={swatch.image}
                alt={`${swatch.name} (${swatch.code})`}
                fill
                sizes="(max-width: 920px) 100vw, (max-width: 1120px) 50vw, (max-width: 1360px) 33vw, 25vw"
              />

              <div className="color-card__specs">
                <span className="spec-chip">{swatch.code}</span>
              </div>

              <div className="color-card__label">
                <strong>{swatch.name}</strong>
                <span>{swatch.series} Collection</span>
              </div>
            </article>
          );
        })}
      </div>

      {!visibleSwatches.length ? (
        <p className="story-line">
          No colors match the current filters. Try changing tone, series, or search text.
        </p>
      ) : null}
    </div>
  );
}