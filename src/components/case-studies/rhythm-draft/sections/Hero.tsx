import { motion, useReducedMotion } from "motion/react";
import { Body, Desktop, Eyebrow, Heading, Phone } from "../../rhythm/primitives";
import insightsScreen from "../../../../assets/rhythm/3-insights.png";
import todayDesktop from "../../../../assets/rhythm/Today-Desktop@1x (2).png";

const FACTS: { label: string; value: string }[] = [
  { label: "My role", value: "Founder + UX Engineer" },
  { label: "Timeline", value: "2025 → Present" },
  { label: "Platform", value: "iOS · Web · Ambient prototype" },
  { label: "Scope", value: "Product Strategy · UX/UI · AI/ML" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="hero" className="rh-hero" tabIndex={-1}>
      <div className="rh-hero__grid">
        <motion.div {...fadeUp(0)}>
          <Eyebrow>More space for wellbeing</Eyebrow>
          <Heading as="h1" size="hero" className="rh-hero__title" style={{ marginTop: 18 }}>
            Rhythm
          </Heading>
          <Heading as="p" size="sm" style={{ marginTop: 16 }}>
            Capacity-aware planning for everyday life.
          </Heading>
          <Body large style={{ marginTop: 14, fontSize: 18, lineHeight: 1.6 }}>
            A system that connects recovery and daily demands to help people plan around what they
            have available to give.
          </Body>
          <a
            href="https://findrhythm.co"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20, fontSize: 16, fontWeight: 600, color: "#8E5720", textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 1 }}
          >
            Visit findrhythm.co <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </motion.div>

        <motion.div className="rh-hero__visual" {...fadeUp(0.15)}>
          <div className="rh-hero__web">
            <Desktop
              src={todayDesktop}
              alt="Rhythm web Today: the day's schedule with an open window Rhythm suggests for the gym and a protected block, how you're doing (Balanced), priorities, and what matters now"
            />
          </div>
          <div className="rh-hero__phone" style={{ right: "0%", top: "18%" }}>
            <Phone delay={0.15} src={insightsScreen} alt="Rhythm Insights: an October calendar with a Rhythm state on most days, and a one-month Oura readiness trend" />
          </div>
        </motion.div>
      </div>

      <dl className="rh-hero__band rh-hero__band--light">
        {FACTS.map((f) => (
          <div key={f.label}>
            <dt className="rh-hero__band-label">{f.label}</dt>
            <dd className="rh-hero__band-value">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
