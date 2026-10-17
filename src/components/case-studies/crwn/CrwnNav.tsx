import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";

export const CRWN_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "system", label: "Branding + system" },
  { id: "screens", label: "Before + after" },
  { id: "modes", label: "One app, two modes" },
  { id: "stylist", label: "The stylist side" },
  { id: "code", label: "Design × code" },
  { id: "launch", label: "Launch" },
  { id: "reflection", label: "Reflection" },
] as const;

/** Same rule as the mockup: the last section whose top has passed 30% of the viewport. */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(CRWN_SECTIONS[0].id);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current: string = CRWN_SECTIONS[0].id;
      for (const { id } of CRWN_SECTIONS) {
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

export function CrwnDesktopNav() {
  const activeId = useActiveSection();

  return (
    <aside className="crwn__aside">
      <div className="crwn__aside-inner">
        <div className="crwn-h crwn-nav__title" aria-hidden="true">
          crwn
        </div>
        <nav aria-label="Case study sections" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {CRWN_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => onSectionClick(e, s.id)}
              aria-current={activeId === s.id ? "location" : undefined}
              className={`crwn-navlink ${activeId === s.id ? "crwn-navlink--active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <Link to="/work" className="crwn-label crwn-backlink">
          ← All work
        </Link>
      </div>
    </aside>
  );
}

export function CrwnMobileJumpBar() {
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
    CRWN_SECTIONS.findIndex((s) => s.id === activeId),
  );
  const progress = ((activeIndex + 1) / CRWN_SECTIONS.length) * 100;

  return (
    <nav className="crwn-jump" aria-label="Case study sections">
      <button
        type="button"
        className="crwn-jump__button"
        aria-expanded={open}
        aria-controls="crwn-jump-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="crwn-jump__hint">Jump to section</span>
        <span className="crwn-jump__current">{CRWN_SECTIONS[activeIndex].label}</span>
        <ChevronDown size={16} aria-hidden="true" className={`crwn-jump__chevron ${open ? "crwn-jump__chevron--open" : ""}`} />
      </button>
      <div className="crwn-jump__progress" aria-hidden="true">
        <div className="crwn-jump__progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {open && (
        <div className="crwn-jump__panel" id="crwn-jump-panel">
          {CRWN_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={activeId === s.id ? "location" : undefined}
              onClick={(e) => {
                setOpen(false);
                onSectionClick(e, s.id);
              }}
              className={`crwn-jump__item ${activeId === s.id ? "crwn-jump__item--active" : ""}`}
            >
              {s.label}
            </a>
          ))}
          <Link to="/work" className="crwn-jump__item crwn-jump__item--plain" onClick={() => setOpen(false)}>
            <ArrowLeft size={14} aria-hidden="true" />
            All work
          </Link>
        </div>
      )}
    </nav>
  );
}
