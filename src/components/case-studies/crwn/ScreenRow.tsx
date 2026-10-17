import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { CrwnImage } from "./images";
import { Body, CalloutList, Heading, ImageSlot, Label, Pin, Reveal, type PinSpec } from "./primitives";

export interface ScreenSpec {
  image: CrwnImage;
  /** Mockup size in px. The screen keeps this aspect ratio and scales down on small viewports. */
  width: number;
  height: number;
  variant?: "screen" | "phone";
  pins?: PinSpec[];
}

/** Two screens side by side, the second dropped by `stagger` px. Also handles a single screen. */
export function StaggeredScreens({
  screens,
  gap = 12,
  stagger = 30,
  muted,
  revealDelay,
}: {
  screens: ScreenSpec[];
  gap?: number;
  stagger?: number;
  muted?: boolean;
  /** When set, each screen fades + rises in on scroll, starting after this many seconds. */
  revealDelay?: number;
}) {
  const reduce = useReducedMotion();
  const animate = revealDelay !== undefined && !reduce;
  return (
    <div className="crwn-screens" style={{ gap }}>
      {screens.map((s, i) => (
        <motion.div
          key={i}
          className="crwn-screen"
          style={{
            width: s.width,
            flex: "0 1 auto",
            aspectRatio: `${s.width} / ${s.height}`,
            marginTop: i > 0 ? stagger : 0,
          }}
          initial={animate ? { opacity: 0, y: 32 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: (revealDelay ?? 0) + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageSlot {...s.image} variant={s.variant ?? "screen"} muted={muted} />
          {s.pins?.map((p) => <Pin key={p.n} {...p} />)}
        </motion.div>
      ))}
    </div>
  );
}

/** All pins on a set of screens, in number order — feeds ScreenRow's `callouts`. */
export function calloutsFrom(screens: ScreenSpec[]) {
  return screens.flatMap((s) => s.pins ?? []).sort((a, b) => a.n - b.n);
}

/** Before screens → after screens (with number markers), used in Before + after. */
export function BeforeAfter({ before, after }: { before: ScreenSpec[]; after: ScreenSpec[] }) {
  return (
    <div className="crwn-compare">
      <div className="crwn-compare__group">
        <Label>Before</Label>
        <div style={{ marginTop: 14 }}>
          <StaggeredScreens screens={before} muted revealDelay={0} />
        </div>
      </div>
      <div className="crwn-compare__arrow" aria-hidden="true">
        →
      </div>
      <div className="crwn-compare__group">
        <Label tone="maroon">After</Label>
        <div style={{ marginTop: 14 }}>
          <StaggeredScreens screens={after} revealDelay={0.25} />
        </div>
      </div>
    </div>
  );
}

/**
 * The shared row pattern for Before + after and The stylist side:
 * a text column on the left, screens on the right. Stacks on narrower viewports.
 */
export function ScreenRow({
  label,
  icon,
  title,
  body,
  headingAs = "h3",
  compact,
  wide,
  callouts,
  children,
}: {
  label: string;
  icon?: ReactNode;
  title: ReactNode;
  body: ReactNode;
  headingAs?: "h3" | "h4";
  /** Stylist-side spacing (slightly tighter between rows). */
  compact?: boolean;
  /** Before + after rows: text (with the numbered legend) on top, screens full width underneath. */
  wide?: boolean;
  /** Numbered notes listed under the body; matching number markers sit on the screens. */
  callouts?: Pick<PinSpec, "n" | "label">[];
  /** The visual column: <StaggeredScreens>, <BeforeAfter>, or anything else. */
  children: ReactNode;
}) {
  return (
    <Reveal className={`crwn-row ${compact ? "crwn-row--compact" : ""} ${wide ? "crwn-row--wide" : ""}`}>
      <div className="crwn-row__text">
        {icon ? (
          <div className="crwn-row__icon-label">
            {icon}
            <Label as="span" tone="maroon">
              {label}
            </Label>
          </div>
        ) : (
          <Label tone="maroon">{label}</Label>
        )}
        <Heading as={headingAs} size="row" style={{ marginTop: 14 }}>
          {title}
        </Heading>
        <Body md style={{ marginTop: 14 }}>
          {body}
        </Body>
        {callouts?.length ? <CalloutList callouts={callouts} /> : null}
      </div>
      <div className="crwn-row__visual" style={{ minWidth: 0 }}>
        {children}
      </div>
    </Reveal>
  );
}
