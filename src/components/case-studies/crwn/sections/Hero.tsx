import { motion, useReducedMotion } from "motion/react";
import { crwnImages } from "../images";
import { Body, Eyebrow, Heading, ImageSlot, Italic } from "../primitives";
import { ModeToggle } from "../ui";

const FACTS = [
  { label: "My role", value: "UX Engineer + Design Lead" },
  { label: "Platform", value: "iOS + Web" },
  { label: "Scope", value: "Brand · Product · Design System · Frontend" },
  { label: "Outcome", value: "Shipped to the App Store" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="hero" className="crwn-hero" tabIndex={-1}>
      <div className="crwn-hero__grid">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>More space for expression</Eyebrow>
          <h1 className="crwn-h crwn-hero__title">crwn.</h1>
          <Heading as="div" size="hero" className="crwn-hero__subtitle" style={{ maxWidth: 560 }}>
            Redesigning the <Italic>entire system.</Italic>
          </Heading>
          <Body style={{ marginTop: 24, maxWidth: 520 }}>
            CRWN is the digital home for textured hair: inspiration, education, and trusted providers, all in one place.
          </Body>
          <a
            href="https://www.crwnhq.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, fontSize: 16, fontWeight: 600, color: "#562321", textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 1 }}
          >
            Visit crwnhq.com <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </motion.div>

        <motion.div className="crwn-hero__visual" {...fadeUp(0.15)}>
          <svg viewBox="0 0 620 640" aria-hidden="true">
            <defs>
              <linearGradient id="crwn-hero-glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#562321" stopOpacity="0.16" />
                <stop offset="1" stopColor="#E3827F" stopOpacity="0.10" />
              </linearGradient>
            </defs>
            <circle cx="330" cy="320" r="270" fill="url(#crwn-hero-glow)" />
          </svg>
          <div className="crwn-hero__phone" style={{ left: "10%", top: "12.5%" }}>
            <ImageSlot {...crwnImages.heroClientOnboarding} variant="screen" style={{ width: "100%", height: "100%", borderRadius: 30 }} />
          </div>
          <div className="crwn-hero__phone" style={{ left: "47%", top: "6.25%" }}>
            <ImageSlot {...crwnImages.heroStylistCalendar} variant="screen" style={{ width: "100%", height: "100%", borderRadius: 30 }} />
          </div>
          <ModeToggle style={{ position: "absolute", left: "34%", top: "89.06%" }} />
        </motion.div>
      </div>

      <dl className="crwn-hero__band" style={{ margin: 0 }}>
        {FACTS.map((f) => (
          <div key={f.label}>
            <dt className="crwn-hero__band-label">{f.label}</dt>
            <dd className="crwn-hero__band-value" style={{ marginLeft: 0 }}>
              {f.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
