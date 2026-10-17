import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { blyssImages } from "../images";
import { Body, Eyebrow, FitStage, Heading, ImageSlot } from "../primitives";

const FACTS: { label: string; lines: string[] }[] = [
  { label: "My role", lines: ["Co-Founder + CTO"] },
  { label: "Platform", lines: ["iOS + Web"] },
  { label: "Scope", lines: ["Product Strategy · Design", "Fullstack Development"] },
  { label: "Outcome", lines: ["Live in TestFlight", "Early testing in Durham + DC"] },
];

/**
 * One hero phone: the side phones fan out from behind the front one, then all
 * three float gently. Static with reduced motion.
 */
function HeroPhone({
  left,
  top,
  width,
  from,
  delay,
  floatDelay,
  children,
}: {
  left: number;
  top: number;
  width: number;
  from: { x?: number; y?: number; rotate?: number };
  delay: number;
  floatDelay: number;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      style={{ position: "absolute", left, top, width }}
      initial={reduce ? false : { x: from.x ?? 0, y: from.y ?? 0, rotate: from.rotate ?? 0 }}
      animate={{ x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5, delay: delay + 0.9 + floatDelay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="hero" className="bc-hero" tabIndex={-1}>
      <div className="bc-hero__grid">
        <div className="bc-hero__top" style={{ justifyContent: "flex-end" }}>
          <ImageSlot image={blyssImages.heroLogo} w={42} h={40} contain style={{ padding: 4, fontSize: 9, background: "transparent", border: "none" }} />
        </div>

        <motion.div className="bc-hero__text" style={{ paddingTop: 40 }} {...fade(0)}>
          <Eyebrow>More space for connection</Eyebrow>
          <Heading
            as="h1"
            size="hero"
            style={{ marginTop: 32, fontFamily: "'Schibsted Grotesk', var(--bc-font)", fontWeight: 600, letterSpacing: "-0.035em", fontSize: "clamp(48px, 5.6vw, 84px)", lineHeight: 1.02 }}
          >
            Blyss Social
          </Heading>
          <Body style={{ marginTop: 28, maxWidth: 640, fontSize: "clamp(19px, 1.45vw, 21px)", lineHeight: 1.55 }}>
            What started as a dating app evolved into a platform for discovering people, places, and experiences worth sharing.
          </Body>
          <a
            href="https://blyssocial.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 16, fontWeight: 600, color: "#375169", textDecoration: "underline", textUnderlineOffset: 4, textDecorationThickness: 1 }}
          >
            Visit blyssocial.com <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </motion.div>

        <motion.div className="bc-hero__visual" style={{ paddingTop: 72, paddingBottom: 40 }} {...fade(0.15)}>
          <FitStage width={600} height={600}>
            <div style={{ position: "relative", width: 600, height: 600 }}>
              <HeroPhone left={0} top={96} width={214} from={{ x: 150, rotate: 6 }} delay={0.45} floatDelay={0.6}>
                <ImageSlot image={blyssImages.heroPlan} w={214} h={447} delay={0.45} />
              </HeroPhone>
              <HeroPhone left={386} top={64} width={214} from={{ x: -150, rotate: -6 }} delay={0.55} floatDelay={1.2}>
                <ImageSlot image={blyssImages.heroVenue} w={214} h={447} delay={0.55} />
              </HeroPhone>
              <HeroPhone left={165} top={16} width={270} from={{ y: 60 }} delay={0.2} floatDelay={0}>
                <ImageSlot image={blyssImages.heroExplore} w={270} h={564} delay={0.2} />
              </HeroPhone>
            </div>
          </FitStage>
        </motion.div>
      </div>

      <dl className="bc-hero__band">
        {FACTS.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>
              {f.lines.map((l, i) => (
                <span key={l}>
                  {i > 0 && <br />}
                  {l}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
