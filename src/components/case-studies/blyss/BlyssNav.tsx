import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronDown, ArrowLeft } from "lucide-react";

export interface BlyssNavSection {
  key: string;
  number: string;
  label: string;
  /** Every element id in the DOM that should count as "this nav item" */
  ids: string[];
}

export const BLYSS_SECTIONS: BlyssNavSection[] = [
  { key: "overview", number: "01", label: "Overview", ids: ["overview"] },
  { key: "evolution", number: "02", label: "Evolution", ids: ["evolution"] },
  { key: "strategy", number: "03", label: "Strategy", ids: ["strategy"] },
  { key: "experience", number: "04", label: "Experience", ids: ["experience"] },
  { key: "system", number: "05", label: "System", ids: ["system"] },
  { key: "build", number: "06", label: "Build", ids: ["build"] },
  { key: "launch", number: "07", label: "Launch", ids: ["launch", "now"] },
  { key: "learnings", number: "08", label: "Learnings", ids: ["learnings"] },
];

function useActiveSection() {
  const [activeKey, setActiveKey] = useState<string>("overview");

  useEffect(() => {
    const idToKey = new Map<string, string>();
    BLYSS_SECTIONS.forEach((s) => s.ids.forEach((id) => idToKey.set(id, s.key)));

    const elements = Array.from(idToKey.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId: string | null = null;
        let bestRatio = 0;
        visibleRatios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          const key = idToKey.get(bestId);
          if (key) setActiveKey(key);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeKey;
}

export function BlyssDesktopNav() {
  const activeKey = useActiveSection();

  return (
    <aside className="blyss__aside">
      <div className="blyss__aside-inner">
        <nav aria-label="Case study sections" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {BLYSS_SECTIONS.map((section) => (
            <a
              key={section.key}
              href={`#${section.ids[0]}`}
              className={`bl-navlink ${activeKey === section.key ? "bl-navlink--active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <Link to="/work" className="bl-small" style={{ marginTop: 36, textDecoration: "none" }}>
          ← All work
        </Link>
      </div>
    </aside>
  );
}

export function BlyssMobileJumpBar() {
  const activeKey = useActiveSection();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [activeKey]);

  const activeIndex = BLYSS_SECTIONS.findIndex((s) => s.key === activeKey);
  const activeSection = BLYSS_SECTIONS[activeIndex] ?? BLYSS_SECTIONS[0];
  const progress = ((activeIndex + 1) / BLYSS_SECTIONS.length) * 100;

  return (
    <div className="bl-jumpbar">
      <button
        type="button"
        aria-label="Jump to section"
        aria-expanded={open}
        className="bl-jumpbar__button"
        onClick={() => setOpen((o) => !o)}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#71767B" }}>
          {activeSection.number} / {String(BLYSS_SECTIONS.length).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--bl-navy)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {activeSection.label}
        </span>
        <ChevronDown
          size={16}
          style={{ marginLeft: "auto", transform: open ? "rotate(180deg)" : undefined, transition: "transform 0.2s ease" }}
        />
      </button>
      <div className="bl-jumpbar__progress">
        <div className="bl-jumpbar__progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {open && (
        <div className="bl-jumpbar__panel" ref={panelRef}>
          {BLYSS_SECTIONS.map((section) => (
            <a
              key={section.key}
              href={`#${section.ids[0]}`}
              onClick={() => setOpen(false)}
              className={`bl-jumpbar__item ${activeKey === section.key ? "bl-jumpbar__item--active" : ""}`}
            >
              {section.label}
            </a>
          ))}
          <Link
            to="/work"
            className="bl-jumpbar__item"
            style={{ display: "flex" }}
            onClick={() => setOpen(false)}
          >
            <ArrowLeft size={14} />
            All work
          </Link>
        </div>
      )}
    </div>
  );
}
