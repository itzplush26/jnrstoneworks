"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { HOME_SWATCHES } from "@/data/site";

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  return offset;
}

export function HomeSwatchCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = HOME_SWATCHES.length;
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const SWIPE_THRESHOLD = 36;

  const previousCard = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    touchCurrentX.current = touchStartX.current;
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    touchCurrentX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd() {
    if (touchStartX.current === null || touchCurrentX.current === null) {
      touchStartX.current = null;
      touchCurrentX.current = null;
      return;
    }

    const deltaX = touchCurrentX.current - touchStartX.current;

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX < 0) {
        nextCard();
      } else {
        previousCard();
      }
    }

    touchStartX.current = null;
    touchCurrentX.current = null;
  }

  return (
    <div className="swatch-stage" aria-label="HIMACS material swatches carousel">
      <div
        className="swatch-carousel__viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="swatch-carousel__arrow swatch-carousel__arrow--left"
          onClick={previousCard}
          aria-label="Show previous swatch"
        >
          ‹
        </button>

        <div className="swatch-carousel__track">
          {HOME_SWATCHES.map((swatch, index) => {
            const offset = getCircularOffset(index, activeIndex, total);
            const absOffset = Math.abs(offset);

            const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.18;
            const scale = 1 - absOffset * 0.08;
            const x = offset * 2.2;
            const y = absOffset * 0.8;
            const rotate = offset * 5;
            const zIndex = 30 - absOffset;

            return (
              <article
                key={swatch.name}
                className={`swatch-card ${index % 2 === 0 ? "swatch-card--light" : "swatch-card--dark"}`}
                data-active={offset === 0}
                style={{
                  transform: `translateX(calc(-50% + ${x}rem)) translateY(${y}rem) scale(${scale}) rotate(${rotate}deg)`,
                  opacity,
                  zIndex,
                }}
                onClick={() => setActiveIndex(index)}
                aria-label={`${swatch.name} swatch`}
              >
                <Image
                  className="swatch-card__image"
                  src={swatch.image}
                  alt={`${swatch.name} HIMACS swatch`}
                  fill
                  sizes="(max-width: 920px) 45vw, 16vw"
                />
                <span className="swatch-card__tone">{swatch.name}</span>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="swatch-carousel__arrow swatch-carousel__arrow--right"
          onClick={nextCard}
          aria-label="Show next swatch"
        >
          ›
        </button>
      </div>

      <div className="swatch-carousel__meta">
        <span>{activeIndex + 1} / {total}</span>
      </div>
    </div>
  );
}
