import { motion, useReducedMotion } from "motion/react";
import { Body, Desktop, Eyebrow, Heading, Phone } from "../primitives";
import insightsScreen from "../../../../assets/rhythm/3-insights.png";
import todayDesktop from "../../../../assets/rhythm/Today-Desktop@1x (2).png";

const FACTS: { label: string; value: string }[] = [
  { label: "My role", value: "Founder + UX Engineer" },
  { label: "Timeline", value: "2025 → Present" },
  { label: "Platform", value: "iOS · Web · Ambient" },
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
          <Body large style={{ marginTop: 24, fontSize: 19, lineHeight: 1.6 }}>
            A capacity intelligence system that connects wearable data and daily demands to help
            people make more informed decisions about their day.
          </Body>
        </motion.div>

        {/* Web Today in a desktop frame, with iOS Insights in front of its lower-right edge. */}
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

      <dl className="rh-hero__band">
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
