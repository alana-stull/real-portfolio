import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Where an element enters from. "up" is the site's default fade + slight rise. */
type From = "up" | "bottom" | "left" | "right";

const OFFSETS: Record<From, { x?: number; y?: number }> = {
  up: { y: 20 },
  bottom: { y: 48 },
  left: { x: -48 },
  right: { x: 48 },
};

/** Fade + slide on scroll into view (once), using the site's whileInView pattern. */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  from?: From;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const directional = from !== "up";
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, ...OFFSETS[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={directional ? { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } : { duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
