import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { dilImages } from "./images";

export const DIL_SECTIONS = [
  { id: "opportunity", label: "The opportunity" },
  { id: "approach", label: "The approach" },
  { id: "experience", label: "The experience" },
  { id: "hood", label: "Under the hood" },
  { id: "decisions", label: "Decisions + lessons" },
  { id: "next", label: "What's next" },
  { id: "reflection", label: "Reflection" },
] as const;

/** Same rule as CRWN: the last section whose top has passed 30% of the viewport. */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(DIL_SECTIONS[0].id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current: string = DIL_SECTIONS[0].id;
      for (const { id } of DIL_SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveId(current);
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

  return activeId;
}

/** Smooth-scrolls to a section (instant with reduced motion) and moves focus there for keyboard users. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  el.focus({ preventScroll: true });
}

function onSectionClick(e: MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  scrollToSection(id);
}

export function DilDesktopNav() {
  const activeId = useActiveSection();

  return (
    <aside className="dil__aside">
      <div className="dil__aside-inner">
        <div className="dil__aside-mark" aria-hidden="true">
          <img src={dilImages.mark.src} alt="" />
          DIL
        </div>
        <nav aria-label="Case study sections" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {DIL_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => onSectionClick(e, s.id)}
              aria-current={activeId === s.id ? "location" : undefined}
              className={`dil-navlink ${activeId === s.id ? "dil-navlink--active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <Link to="/work" className="dil-backlink">
          ← All work
        </Link>
      </div>
    </aside>
  );
}

export function DilMobileJumpBar() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activeId]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const activeIndex = Math.max(
    0,
    DIL_SECTIONS.findIndex((s) => s.id === activeId),
  );
  const progress = ((activeIndex + 1) / DIL_SECTIONS.length) * 100;

  return (
    <nav className="dil-jump" aria-label="Case study sections">
      <button
        type="button"
        className="dil-jump__button"
        aria-expanded={open}
        aria-controls="dil-jump-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="dil-jump__hint">Jump to</span>
        <span className="dil-jump__current">{DIL_SECTIONS[activeIndex].label}</span>
        <ChevronDown size={16} aria-hidden="true" className={`dil-jump__chevron ${open ? "dil-jump__chevron--open" : ""}`} />
      </button>
      <div className="dil-jump__progress" aria-hidden="true">
        <div className="dil-jump__progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {open && (
        <div className="dil-jump__panel" id="dil-jump-panel">
          {DIL_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={activeId === s.id ? "location" : undefined}
              onClick={(e) => {
                setOpen(false);
                onSectionClick(e, s.id);
              }}
              className={`dil-jump__item ${activeId === s.id ? "dil-jump__item--active" : ""}`}
            >
              {s.label}
            </a>
          ))}
          <Link to="/work" className="dil-jump__item" onClick={() => setOpen(false)}>
            <ArrowLeft size={14} aria-hidden="true" />
            All work
          </Link>
        </div>
      )}
    </nav>
  );
}
