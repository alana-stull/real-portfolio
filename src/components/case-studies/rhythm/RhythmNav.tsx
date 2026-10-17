import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { ChevronDown, ArrowLeft } from "lucide-react";

export interface RhythmNavSection {
  key: string;
  label: string;
  id: string;
}

export const RHYTHM_SECTIONS: RhythmNavSection[] = [
  { key: "opportunity", label: "The opportunity", id: "opportunity" },
  { key: "model", label: "The model", id: "model" },
  { key: "experience", label: "The experience", id: "experience" },
  { key: "hood", label: "Under the hood", id: "hood" },
  { key: "beyond", label: "Beyond the screen", id: "beyond" },
  { key: "next", label: "What's next", id: "next" },
];

// Navigation.tsx shrinks the site header to this height once the page scrolls past 16px.
const COMPACT_HEADER_H = 56;

/**
 * Height of the fixed site header (plus the mobile jump bar when it's showing).
 * Pass `compact` when measuring for a scroll destination: by the time the page
 * gets there the header has already shrunk.
 */
function headerOffset(compact = false) {
  const header = compact
    ? COMPACT_HEADER_H
    : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--site-header-h")) || 92;
  const jumpbar = document.querySelector<HTMLElement>(".rh-jumpbar");
  const jumpbarH = jumpbar && getComputedStyle(jumpbar).display !== "none" ? jumpbar.offsetHeight : 0;
  return header + jumpbarH;
}

/**
 * Active section = the last one whose top has passed a line 30% down the visible
 * area below the header. Measuring positions on every scroll frame (rather than
 * comparing IntersectionObserver ratios, which favour short sections) keeps a
 * single section active in both directions and under fast scrolling.
 */
function useActiveSection() {
  const [activeKey, setActiveKey] = useState<string>(RHYTHM_SECTIONS[0].key);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = headerOffset();
      const line = top + (window.innerHeight - top) * 0.3;
      let current = RHYTHM_SECTIONS[0].key;
      for (const s of RHYTHM_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.key;
      }
      // At the very bottom the last section may never reach the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        current = RHYTHM_SECTIONS[RHYTHM_SECTIONS.length - 1].key;
      }
      setActiveKey(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return activeKey;
}

/** Smooth-scrolls to a section below the fixed header (instant with reduced motion) and moves focus there. */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset(true) - 16;
  window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  el.focus({ preventScroll: true });
  history.replaceState(null, "", `#${id}`);
}

function onSectionClick(e: MouseEvent<HTMLAnchorElement>, id: string, after?: () => void) {
  e.preventDefault();
  after?.();
  // Let the jump bar panel collapse first so the offset is measured at its final height.
  requestAnimationFrame(() => scrollToSection(id));
}

export function RhythmDesktopNav() {
  const activeKey = useActiveSection();

  return (
    <aside className="rhythm__aside">
      <div className="rhythm__aside-inner">
        <nav aria-label="Case study sections" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {RHYTHM_SECTIONS.map((section) => (
            <a
              key={section.key}
              href={`#${section.id}`}
              onClick={(e) => onSectionClick(e, section.id)}
              aria-current={activeKey === section.key ? "location" : undefined}
              className={`rh-navlink ${activeKey === section.key ? "rh-navlink--active" : ""}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <Link to="/work" className="rh-small" style={{ marginTop: 32, textDecoration: "none" }}>
          ← All work
        </Link>
      </div>
    </aside>
  );
}

export function RhythmMobileJumpBar() {
  const activeKey = useActiveSection();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [activeKey]);

  const activeIndex = RHYTHM_SECTIONS.findIndex((s) => s.key === activeKey);
  const activeSection = RHYTHM_SECTIONS[activeIndex] ?? RHYTHM_SECTIONS[0];
  const progress = ((activeIndex + 1) / RHYTHM_SECTIONS.length) * 100;

  return (
    <div className="rh-jumpbar">
      <button
        type="button"
        aria-label="Jump to section"
        aria-expanded={open}
        className="rh-jumpbar__button"
        onClick={() => setOpen((o) => !o)}
      >
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#6B6259" }}>
          {String(activeIndex + 1).padStart(2, "0")} / {String(RHYTHM_SECTIONS.length).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--rh-ink)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          {activeSection.label}
        </span>
        <ChevronDown
          size={16}
          style={{ marginLeft: "auto", transform: open ? "rotate(180deg)" : undefined, transition: "transform 0.2s ease" }}
        />
      </button>
      <div className="rh-jumpbar__progress">
        <div className="rh-jumpbar__progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {open && (
        <div className="rh-jumpbar__panel" ref={panelRef}>
          {RHYTHM_SECTIONS.map((section) => (
            <a
              key={section.key}
              href={`#${section.id}`}
              onClick={(e) => onSectionClick(e, section.id, () => setOpen(false))}
              aria-current={activeKey === section.key ? "location" : undefined}
              className={`rh-jumpbar__item ${activeKey === section.key ? "rh-jumpbar__item--active" : ""}`}
            >
              {section.label}
            </a>
          ))}
          <Link to="/work" className="rh-jumpbar__item" style={{ display: "flex" }} onClick={() => setOpen(false)}>
            <ArrowLeft size={14} />
            All work
          </Link>
        </div>
      )}
    </div>
  );
}
