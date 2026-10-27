"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { GalleryProject } from "@/lib/gallery-projects";

type GalleryGridProps = {
  projects: GalleryProject[];
};

type ProjectCarouselProps = {
  project: GalleryProject;
  projectIndex: number;
  onOpenSlideshow: (index: number) => void;
};

function useSwipe(onPrevious: () => void, onNext: () => void) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(delta) < 40) {
      return;
    }

    if (delta > 0) {
      onNext();
    } else {
      onPrevious();
    }
  };

  return { handleTouchStart, handleTouchEnd };
}

function ProjectCarousel({ project, projectIndex, onOpenSlideshow }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = project.images.length;

  const goTo = (nextIndex: number) => {
    if (imageCount === 0) {
      return;
    }

    setActiveIndex((nextIndex + imageCount) % imageCount);
  };

  const showPrevious = () => goTo(activeIndex - 1);
  const showNext = () => goTo(activeIndex + 1);
  const { handleTouchStart, handleTouchEnd } = useSwipe(showPrevious, showNext);

  return (
    <article className="panel-card project-card" id={project.slug}>
      <header className="project-card__header">
        <div>
          <span className="project-card__eyebrow">Project {String(projectIndex + 1).padStart(2, "0")}</span>
          <h3>{project.title}</h3>
          {project.location ? <p className="project-card__location">{project.location}</p> : null}
        </div>
        <p className="project-card__count">{imageCount} photos</p>
      </header>

      <figure
        className="project-card__viewer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="project-card__stage"
          onClick={() => onOpenSlideshow(activeIndex)}
          aria-label={`Open slideshow for ${project.title}`}
        >
          <Image
            src={project.images[activeIndex]}
            alt={`${project.title}${project.location ? ` in ${project.location}` : ""} photo ${activeIndex + 1}`}
            fill
            priority={projectIndex < 2}
            sizes="(max-width: 920px) 100vw, 46vw"
          />
        </button>

        {imageCount > 1 ? (
          <>
            <button
              type="button"
              className="project-card__nav project-card__nav--prev"
              onClick={showPrevious}
              aria-label={`Previous photo for ${project.title}`}
            >
              ‹
            </button>
            <button
              type="button"
              className="project-card__nav project-card__nav--next"
              onClick={showNext}
              aria-label={`Next photo for ${project.title}`}
            >
              ›
            </button>
            <figcaption className="project-card__counter">
              {activeIndex + 1} / {imageCount}
            </figcaption>
          </>
        ) : null}
      </figure>

      {imageCount > 1 ? (
        <>
          <div className="project-card__dots" role="tablist" aria-label={`${project.title} slides`}>
            {project.images.map((imagePath, index) => (
              <button
                type="button"
                key={`${project.slug}-dot-${imagePath}`}
                className="project-card__dot"
                data-active={activeIndex === index}
                onClick={() => goTo(index)}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
          <div className="project-card__thumbs" aria-label={`${project.title} photo thumbnails`}>
            {project.images.map((imagePath, index) => (
              <button
                type="button"
                key={`${project.folderName}-${imagePath}`}
                className="project-card__thumb"
                data-active={activeIndex === index}
                onClick={() => goTo(index)}
                aria-label={`View photo ${index + 1} for ${project.title}`}
              >
                <span className="project-card__thumb-image">
                  <Image src={imagePath} alt="" fill sizes="88px" />
                </span>
              </button>
            ))}
          </div>
        </>
      ) : null}

      <p className="project-card__footer">Use the arrows or tap a photo to browse the slideshow.</p>
    </article>
  );
}

function ProjectLightbox({
  project,
  startIndex,
  onClose,
}: {
  project: GalleryProject;
  startIndex: number;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const imageCount = project.images.length;

  const goTo = (nextIndex: number) => {
    setActiveIndex((nextIndex + imageCount) % imageCount);
  };

  const showPrevious = () => goTo(activeIndex - 1);
  const showNext = () => goTo(activeIndex + 1);
  const { handleTouchStart, handleTouchEnd } = useSwipe(showPrevious, showNext);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + imageCount) % imageCount);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % imageCount);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imageCount, onClose]);

  return (
    <div className="project-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} slideshow`}>
      <button type="button" className="project-lightbox__backdrop" onClick={onClose} aria-label="Close slideshow" />
      <div className="project-lightbox__panel">
        <div className="project-lightbox__top">
          <div>
            <p className="project-card__eyebrow">{project.title}</p>
            {project.location ? <p className="project-card__location">{project.location}</p> : null}
            <strong>
              {activeIndex + 1} / {imageCount}
            </strong>
          </div>
          <button type="button" className="project-lightbox__close" onClick={onClose} aria-label="Close slideshow">
            ×
          </button>
        </div>

        <figure
          className="project-lightbox__viewer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={project.images[activeIndex]}
            alt={`${project.title}${project.location ? ` in ${project.location}` : ""} photo ${activeIndex + 1}`}
            fill
            sizes="100vw"
            priority
          />

          {imageCount > 1 ? (
            <>
              <button
                type="button"
                className="project-card__nav project-card__nav--prev"
                onClick={showPrevious}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="project-card__nav project-card__nav--next"
                onClick={showNext}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          ) : null}
        </figure>

        {imageCount > 1 ? (
          <div className="project-lightbox__thumbs">
            {project.images.map((imagePath, index) => (
              <button
                type="button"
                key={`${project.slug}-lightbox-${imagePath}`}
                className="project-card__thumb"
                data-active={activeIndex === index}
                onClick={() => goTo(index)}
                aria-label={`View photo ${index + 1}`}
              >
                <span className="project-card__thumb-image">
                  <Image src={imagePath} alt="" fill sizes="88px" />
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function GalleryGrid({ projects }: GalleryGridProps) {
  const [lightbox, setLightbox] = useState<{ folderName: string; index: number } | null>(null);
  const activeProject = projects.find((project) => project.folderName === lightbox?.folderName) ?? null;

  if (projects.length === 0) {
    return (
      <div className="panel-card" style={{ padding: "1.1rem" }}>
        <strong>No project photos found yet.</strong>
        <p>Add folders under /public/assets/gallery/projects to publish them in this page.</p>
      </div>
    );
  }

  return (
    <>
      <div className="project-gallery">
        {projects.map((project, projectIndex) => (
          <ProjectCarousel
            project={project}
            projectIndex={projectIndex}
            key={project.folderName}
            onOpenSlideshow={(index) => setLightbox({ folderName: project.folderName, index })}
          />
        ))}
      </div>

      {activeProject && lightbox ? (
        <ProjectLightbox
          project={activeProject}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  );
}
