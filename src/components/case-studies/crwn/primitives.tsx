import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { CrwnImage } from "./images";

export function Eyebrow({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`crwn-eyebrow ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Label({
  children,
  tone,
  as: Tag = "div",
  className = "",
  style,
}: {
  children: ReactNode;
  tone?: "maroon" | "ochre";
  as?: "div" | "span" | "figcaption";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`crwn-label ${tone ? `crwn-label--${tone}` : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

type HeadingSize = "hero" | "section" | "close" | "sub" | "lg" | "row" | "card" | "md" | "sm";

export function Heading({
  as: Tag = "h2",
  size,
  children,
  className = "",
  style,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "span";
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`crwn-h ${size ? `crwn-h-${size}` : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function Italic({ children }: { children: ReactNode }) {
  return <span className="it">{children}</span>;
}

export function Body({
  children,
  md,
  className = "",
  style,
}: {
  children: ReactNode;
  md?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`crwn-body ${md ? "crwn-body--md" : ""} ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Small({
  children,
  size,
  className = "",
  style,
}: {
  children: ReactNode;
  size?: "md" | "xs";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`crwn-small ${size ? `crwn-small--${size}` : ""} ${className}`} style={style}>
      {children}
    </p>
  );
}

/** Fade + slide-up on scroll into view — the same whileInView pattern as Home and Work. */
export function Reveal({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export type ImageSlotVariant = "screen" | "phone" | "figure" | "tile" | "wide";

/**
 * One image on the page. Renders the real <img> when `src` is set, otherwise the
 * mockup's labeled placeholder at the same size, radius, border, and shadow.
 * Images themselves live in ./images.ts (crwnImages).
 */
export function ImageSlot({
  src,
  alt,
  framed,
  variant,
  autoHeight,
  muted,
  className = "",
  style,
}: CrwnImage & {
  variant: ImageSlotVariant;
  /** Figures with no fixed height in the mockup: the real image sets the height. */
  autoHeight?: boolean;
  /** Desaturated "before" screens. */
  muted?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const cls = [
    "crwn-img",
    `crwn-img--${variant}`,
    autoHeight ? "crwn-img--auto" : "",
    muted ? "crwn-img--muted" : "",
    src ? "crwn-img--filled" : "",
    src && framed ? "crwn-img--bare" : "",
    className,
  ].join(" ");

  if (src) {
    return (
      <div className={cls} style={style}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={cls} style={style} role="img" aria-label={alt}>
      [{alt}]
    </div>
  );
}

export interface PinSpec {
  n: number;
  label: string;
  left: string;
  top: string;
}

/** Number-only marker pinned over an "after" screen. Positions are relative to the screen. */
export function Pin({ n, left, top }: PinSpec) {
  return (
    <span className="crwn-pin crwn-pin--marker" style={{ left, top }} aria-hidden="true">
      <span className="crwn-pin__n">{n}</span>
    </span>
  );
}

/** The full numbered chips, listed under a row's description to explain the markers. */
export function CalloutList({ callouts }: { callouts: Pick<PinSpec, "n" | "label">[] }) {
  return (
    <ol className="crwn-callouts">
      {callouts.map((c) => (
        <li key={c.n}>
          <span className="crwn-pin crwn-pin--inline">
            <span className="crwn-pin__n" aria-hidden="true">
              {c.n}
            </span>
            {c.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
