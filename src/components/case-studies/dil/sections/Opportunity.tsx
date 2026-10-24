import type { CSSProperties } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { dilImages } from "../images";
import { PillFlow, SectionHead, Swatch } from "../ui";

const SHOT: CSSProperties = { borderRadius: 12, boxShadow: "0 14px 34px rgba(22,22,26,.12)" };

/** Blyss: real component crops and a screen, under the AI-tools progression. */
function BlyssVisual() {
  return (
    <div className="dil-xv" role="img" aria-label="Blyss: from AI tools to components to product">
      <PillFlow
        className="dil-xflow"
        items={[{ label: "Figma Make · Claude Code", tone: "dk" }, { label: "Components" }, { label: "Product", tone: "bl" }]}
      />
      <img className="dil-xv__img" src={dilImages.blyssVenueCard.src} alt="" style={{ ...SHOT, left: "6%", top: 78, width: "37%" }} />
      <img className="dil-xv__img" src={dilImages.blyssShare.src} alt="" style={{ ...SHOT, left: "18%", top: 176, width: "33%", zIndex: 2 }} />
      <img
        className="dil-xv__img"
        src={dilImages.blyssExplore.src}
        alt=""
        style={{ left: "60%", top: 68, width: "27%", borderRadius: 18, boxShadow: "0 20px 44px rgba(22,22,26,.16)" }}
      />
    </div>
  );
}

const TOKENS = [
  { color: "#232F3E", name: "color.ink.900" },
  { color: "#3B6EA8", name: "color.action.500" },
  { color: "#D9E3EE", name: "color.surface.200" },
  { color: "#C9472B", name: "color.status.error" },
];
const SPACING = [4, 8, 12, 16, 24];

/** Amazon: an illustrative design system, no Amazon branding or interfaces. */
function SystemVisual() {
  return (
    <div className="dil-xv" role="img" aria-label="Illustrative design system: color tokens, spacing scale, and button variants">
      <div className="dil-ds">
        <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", gap: "6px 12px", justifyContent: "space-between", alignItems: "center" }}>
          <span className="dil-pill">Illustrative system</span>
          <span className="dil-lb" style={{ fontSize: 10 }}>
            Not actual Amazon assets
          </span>
        </div>
        <div className="dil-ds__panel">
          <p className="dil-lb" style={{ fontSize: 10 }}>
            Color tokens
          </p>
          <div className="dil-mono" style={{ marginTop: 12, display: "grid", gap: 8 }}>
            {TOKENS.map((t) => (
              <div key={t.name} className="dil-ds__tok">
                <Swatch color={t.color} />
                {t.name}
              </div>
            ))}
          </div>
          <p className="dil-lb dil-sp-hide" style={{ fontSize: 10, marginTop: 16 }}>
            Spacing
          </p>
          <div className="dil-mono dil-sp-hide" style={{ marginTop: 8, display: "flex", alignItems: "flex-end", gap: 6 }}>
            {SPACING.map((n) => (
              <span key={n} style={{ display: "grid", justifyItems: "center", gap: 3, fontSize: 9, color: "var(--dil-muted)" }}>
                <i style={{ width: n, height: n, background: "#3B6EA8", display: "block" }} />
                {n}
              </span>
            ))}
          </div>
        </div>
        <div className="dil-ds__panel">
          <p className="dil-lb" style={{ fontSize: 10 }}>
            Button variants
          </p>
          <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
            <span className="dil-ds__btn" style={{ background: "#3B6EA8", color: "#FFFFFF" }}>
              Primary<span className="dil-mono" style={{ opacity: 0.8 }}>md</span>
            </span>
            <span className="dil-ds__btn" style={{ border: "1px solid #3B6EA8", color: "#3B6EA8" }}>
              Secondary<span className="dil-mono">md</span>
            </span>
            <span className="dil-ds__btn" style={{ height: 26, borderRadius: 7, background: "#D9E3EE", color: "#232F3E", fontSize: 11 }}>
              Tertiary<span className="dil-mono">sm</span>
            </span>
            <span className="dil-ds__btn dil-sp-hide" style={{ background: "#EEECE6", color: "#9C988F" }}>
              Disabled<span className="dil-mono">md</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  {
    visual: <BlyssVisual />,
    eyebrow: "Startup / Building fast with AI",
    title: "Blyss Social",
    body: "I moved directly into component development with AI tools to ship faster, without wanting to sacrifice design quality.",
    challenge: "Speed vs. consistency",
  },
  {
    visual: <SystemVisual />,
    eyebrow: "Enterprise / Designing within constraints",
    title: "Amazon",
    body: "I had 12 weeks to learn an unfamiliar design system and contribute work that fit its standards.",
    challenge: "Onboarding vs. performance",
  },
];

/** Product / Design / Engineering around the DIL mark. */
function TriangleDiagram() {
  return (
    <svg
      viewBox="0 0 380 200"
      role="img"
      aria-label="Design intelligence connecting product, design, and engineering"
      style={{ width: "100%", height: "auto", maxWidth: 420, justifySelf: "end" }}
    >
      <g fill="none" stroke="#4A4A50" strokeWidth="1.5" strokeDasharray="3 5">
        <path d="M190 100 L60 40" />
        <path d="M190 100 L320 40" />
        <path d="M190 100 L190 172" />
      </g>
      <g fontFamily="Figtree, sans-serif" fontSize="11" fontWeight="600" letterSpacing="1.3" fill="#F1EFE9" textAnchor="middle">
        <rect x="10" y="22" width="100" height="36" rx="18" fill="#16161A" stroke="#4A4A50" />
        <text x="60" y="44">PRODUCT</text>
        <rect x="270" y="22" width="100" height="36" rx="18" fill="#16161A" stroke="#4A4A50" />
        <text x="320" y="44">DESIGN</text>
        <rect x="128" y="160" width="124" height="36" rx="18" fill="#16161A" stroke="#4A4A50" />
        <text x="190" y="182">ENGINEERING</text>
      </g>
      <g transform="translate(166 76)">
        <rect width="22" height="22" rx="6" fill="#6E99C6" />
        <rect x="26" width="22" height="22" rx="6" fill="#F1EFE9" />
        <rect y="26" width="22" height="22" rx="6" fill="#F1EFE9" />
        <circle cx="37" cy="37" r="11" fill="#E07B00" />
      </g>
    </svg>
  );
}

export function Opportunity() {
  return (
    <section id="opportunity" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead n="01" eyebrow="The opportunity" intro="Two different environments taught me the same lesson: moving fast shouldn't mean losing design intent.">
          AI made building easier. It didn't make everyone a designer.
        </SectionHead>
      </Reveal>

      <div className="dil-cmp">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <article className="dil-xc">
              {c.visual}
              <div className="dil-xt">
                <p className="dil-lb">{c.eyebrow}</p>
                <h3 className="dil-h3">{c.title}</h3>
                <p className="dil-b">{c.body}</p>
                <p className="dil-chal">
                  <span className="dil-lb">Challenge</span>
                  {c.challenge}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <svg className="dil-conn" viewBox="0 0 600 64" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M150 0 C150 40, 300 24, 300 60 M450 0 C450 40, 300 24, 300 60"
            fill="none"
            stroke="#C9C4B6"
            strokeWidth="1.5"
            strokeDasharray="4 5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="dil-oc">
          <div>
            <p className="dil-eb">The opportunity</p>
            <h3 className="dil-h3">Different workflows. Same design challenge.</h3>
            <p className="dil-b">
              Making design system knowledge accessible where products are built, so teams can move faster without losing consistency or
              human judgment.
            </p>
          </div>
          <TriangleDiagram />
        </div>
      </Reveal>

      <Reveal>
        <p className="dil-hmw">
          <span className="dil-lb">How might we</span>
          help teams build at AI speed without losing design intent?
        </p>
      </Reveal>
    </section>
  );
}
