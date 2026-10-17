import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router";
import { ArrowLeft, ChevronDown } from "lucide-react";

export const BLYSS_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "evolution", label: "Evolution" },
  { id: "product", label: "Product" },
  { id: "system", label: "System" },
  { id: "build", label: "Build" },
  { id: "now", label: "Now" },
  { id: "reflection", label: "Reflection" },
] as const;

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Last section whose top has passed 30% of the viewport. */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(BLYSS_SECTIONS[0].id);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current: string = BLYSS_SECTIONS[0].id;
      for (const { id } of BLYSS_SECTIONS) {
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

/** Smooth-scrolls to a section (instant with reduced motion) and moves focus there. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  el.focus({ preventScroll: true });
}

function jump(e: MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  scrollToSection(id);
}

export function BlyssDesktopNav() {
  const activeId = useActiveSection();
  return (
    <aside className="bc-aside">
      <div className="bc-aside__inner">
        <div className="bc-lb" style={{ color: "#375169", marginBottom: 20 }} aria-hidden="true">
          Blyss
        </div>
        <nav aria-label="Case study sections" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {BLYSS_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => jump(e, s.id)}
              aria-current={activeId === s.id ? "location" : undefined}
              className={`bc-nv ${activeId === s.id ? "bc-nv--on" : ""}`}
            >
              <b>{num(i)}</b>
              {s.label}
            </a>
          ))}
        </nav>
        <Link to="/work" className="bc-sm" style={{ marginTop: 36, textDecoration: "none" }}>
          ← All work
        </Link>
      </div>
    </aside>
  );
}

export function BlyssMobileJumpBar() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [activeId]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const index = Math.max(
    0,
    BLYSS_SECTIONS.findIndex((s) => s.id === activeId),
  );

  return (
    <nav className="bc-jump" aria-label="Case study sections">
      <button
        type="button"
        className="bc-jump__btn"
        aria-expanded={open}
        aria-controls="bc-jump-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="bc-jump__count">
          {num(index)} / {num(BLYSS_SECTIONS.length - 1)}
        </span>
        <span className="bc-jump__label">{BLYSS_SECTIONS[index].label}</span>
        <span className="sr-only">, jump to section</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          style={{ marginLeft: "auto", flexShrink: 0, transform: open ? "rotate(180deg)" : undefined, transition: "transform .2s ease" }}
        />
      </button>
      <div className="bc-jump__progress" aria-hidden="true">
        <div className="bc-jump__fill" style={{ width: `${((index + 1) / BLYSS_SECTIONS.length) * 100}%` }} />
      </div>
      {open && (
        <div className="bc-jump__panel" id="bc-jump-panel">
          {BLYSS_SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={activeId === s.id ? "location" : undefined}
              className={`bc-jump__item ${activeId === s.id ? "bc-jump__item--on" : ""}`}
              onClick={(e) => {
                setOpen(false);
                jump(e, s.id);
              }}
            >
              <b>{num(i)}</b>
              {s.label}
            </a>
          ))}
          <Link to="/work" className="bc-jump__item" onClick={() => setOpen(false)}>
            <ArrowLeft size={14} aria-hidden="true" />
            All work
          </Link>
        </div>
      )}
    </nav>
  );
}
