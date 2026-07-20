import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export interface FeaturedAccordionItem {
  title: string;
  description: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  image: string;
  accentColor: string;
  ctaLabel?: string;
  externalLink?: string;
  ndaNote?: string;
  accordion: FeaturedAccordionItem[];
}

export function FeaturedProjectCarousel({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const n = projects.length;
  // Loop illusion: clone the last project before the list and the first
  // project after it, so index 0 and index n+1 are decoys that get
  // silently swapped for their real counterpart once a scroll settles.
  const slides = n > 1 ? [projects[n - 1], ...projects, projects[0]] : projects;
  const realDomIndex = n > 1 ? 1 : 0;

  const [active, setActive] = useState(realDomIndex);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const settleTimer = useRef<ReturnType<typeof setTimeout>>();

  const scrollToDomIndex = (index: number, instant = false) => {
    const container = trackRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    const target =
      el.offsetLeft - (container.clientWidth - el.clientWidth) / 2;
    container.scrollTo({ left: target, behavior: instant ? "auto" : "smooth" });
  };

  // Center the first real project on mount, no animation.
  useEffect(() => {
    scrollToDomIndex(realDomIndex, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Continuous "which slide is currently dominant" tracking, for styling.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.index);
          ratios.set(index, entry.intersectionRatio);
        });
        let bestIndex = 0;
        let bestRatio = -1;
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIndex = index;
          }
        });
        setActive(bestIndex);
      },
      { root: track, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [slides.length]);

  // Once the user stops scrolling/dragging, if they landed on a decoy
  // clone, silently re-center on the matching real slide so the loop
  // never runs out of cards to scroll into.
  useEffect(() => {
    const container = trackRef.current;
    if (!container || n <= 1) return;

    const handleScroll = () => {
      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(() => {
        const containerCenter = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0;
        let closestDist = Infinity;
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const elCenter = el.offsetLeft + el.clientWidth / 2;
          const dist = Math.abs(elCenter - containerCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        });

        if (closestIndex === 0) {
          scrollToDomIndex(n, true);
          setActive(n);
        } else if (closestIndex === n + 1) {
          scrollToDomIndex(1, true);
          setActive(1);
        }
      }, 120);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [n]);

  const realIndexForDots =
    active === 0 ? n - 1 : active === n + 1 ? 0 : active - 1;

  // Clicking a decoy peek should animate straight to its real counterpart
  // in one continuous motion, rather than landing on the clone first and
  // silently re-centering afterward (which reads as a stutter/delay).
  const resolveClickTarget = (index: number) => {
    if (index === 0) return n;
    if (index === n + 1) return 1;
    return index;
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory py-7"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            data-index={index}
            className="shrink-0 snap-center w-[84%] sm:w-[78%] md:w-[76%] lg:w-[74%]"
          >
            <FeaturedProjectCard
              project={project}
              isActive={index === active}
              onActivate={() => scrollToDomIndex(resolveClickTarget(index))}
            />
          </div>
        ))}
      </div>

      {n > 1 && (
        <div className="flex items-center justify-center gap-2 mt-1">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDomIndex(index + 1)}
              aria-label={`Go to project ${index + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: index === realIndexForDots ? "24px" : "8px",
                height: "8px",
                backgroundColor:
                  index === realIndexForDots
                    ? "var(--color-maroon)"
                    : "var(--color-linen)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FeaturedProjectCard({
  project,
  isActive,
  onActivate,
}: {
  project: FeaturedProject;
  isActive: boolean;
  onActivate: () => void;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      onClick={!isActive ? onActivate : undefined}
      className="rounded-3xl overflow-hidden bg-white transition-all duration-500"
      style={{
        boxShadow:
          "0 0 1px rgba(0, 0, 0, 0.05), 0 0 24px rgba(0, 0, 0, 0.07), 0 12px 26px rgba(0, 0, 0, 0.12)",
        opacity: isActive ? 1 : 0.5,
        transform: isActive ? "scale(1)" : "scale(0.9)",
        cursor: isActive ? "default" : "pointer",
      }}
    >
      <div
        className="grid md:grid-cols-2"
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        {/* Visual */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center p-4 md:p-12">
          <div className="w-full aspect-[16/9] md:aspect-[6/5] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain"
            />
          </div>
          {project.ndaNote && (
            <p
              className="mt-3 text-center"
              style={{ fontSize: "12px", color: "var(--color-warm-grey)" }}
            >
              {project.ndaNote}
            </p>
          )}
        </div>

        {/* Accordion */}
        <div className="order-2 md:order-1 p-4 md:p-12 flex flex-col justify-center">
          <p
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-semibold)",
              letterSpacing: "0.1em",
              color: project.accentColor,
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </p>
          <h3
            style={{
              fontSize: "1.75rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-ink)",
              marginBottom: "1rem",
            }}
          >
            {project.title}
          </h3>

          <div>
            {project.accordion.map((item, index) => {
              const open = index === openIndex;
              return (
                <div
                  key={item.title}
                  style={{
                    borderTop:
                      index === 0 ? "none" : "1px solid var(--color-linen)",
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndex(index);
                    }}
                    className="w-full text-left py-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span
                        style={{
                          fontSize: "1.0625rem",
                          fontWeight: open
                            ? "var(--font-weight-bold)"
                            : "var(--font-weight-semibold)",
                          color: open
                            ? "var(--color-ink)"
                            : "var(--color-warm-grey)",
                          transition: "color 0.3s",
                        }}
                      >
                        {item.title}
                      </span>
                      <ChevronDown
                        size={18}
                        style={{
                          flexShrink: 0,
                          color: "var(--color-warm-grey)",
                          transform: open ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.3s",
                        }}
                      />
                    </div>
                    <motion.p
                      animate={{
                        height: open ? "3.6rem" : 0,
                        opacity: open ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-warm-grey)",
                        lineHeight: "1.6",
                        overflow: "hidden",
                      }}
                    >
                      <span className="block pt-2">{item.description}</span>
                    </motion.p>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-5">
            {project.externalLink ? (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg group"
                style={{
                  backgroundColor: project.accentColor,
                  color: "white",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <span>{project.ctaLabel ?? "View prototype"}</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            ) : (
              <Link
                to={`/case-studies/${project.id}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg group"
                style={{
                  backgroundColor: project.accentColor,
                  color: "white",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <span>{project.ctaLabel ?? "View case study"}</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
