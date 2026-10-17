import { useEffect, useRef, useState } from "react";
import type { ReactNode, CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

/** Shared scroll-in motion for product images and placeholders (matches portfolio Reveal). */
function useRevealProps(delay = 0) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rh-eyebrow ${className}`}>{children}</div>;
}

export function Label({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`rh-label ${className}`} style={style}>
      {children}
    </div>
  );
}

type HeadingSize = "hero" | "xl" | "lg" | "md" | "sm" | "xs";

export function Heading({
  as: Tag = "h2",
  size = "md",
  children,
  className = "",
  style,
}: {
  as?: "h1" | "h2" | "h3" | "div" | "p" | "span";
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`rh-heading rh-h-${size} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function Italic({ children }: { children: ReactNode }) {
  return <span className="it">{children}</span>;
}

export function Body({
  children,
  large,
  className = "",
  style,
}: {
  children: ReactNode;
  large?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`rh-body ${large ? "rh-body--lg" : ""} ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Small({
  children,
  xs,
  className = "",
  style,
}: {
  children: ReactNode;
  xs?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <p className={`rh-small ${xs ? "rh-small--xs" : ""} ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Placeholder({
  children,
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "muted" | "phone" | "phone-solid";
  className?: string;
  style?: CSSProperties;
}) {
  const cls = ["rh-placeholder"];
  if (variant === "muted") cls.push("rh-placeholder--muted");
  if (variant === "phone") cls.push("rh-placeholder--phone");
  if (variant === "phone-solid") cls.push("rh-placeholder--phone", "rh-placeholder--phone-solid");
  return (
    <div className={`${cls.join(" ")} ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Slot({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`rh-slot ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`rh-card ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Tag({
  children,
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "pill" | "solid" | "dark" | "outline";
  className?: string;
  style?: CSSProperties;
}) {
  const cls = ["rh-tag"];
  if (variant === "pill") cls.push("rh-tag--pill");
  if (variant === "solid") cls.push("rh-tag--pill", "rh-tag--solid");
  if (variant === "dark") cls.push("rh-tag--pill", "rh-tag--dark");
  if (variant === "outline") cls.push("rh-tag--pill", "rh-tag--outline");
  return (
    <span className={`${cls.join(" ")} ${className}`} style={style}>
      {children}
    </span>
  );
}

/** iPhone screenshot inside a device frame. Without `src` it renders a labelled placeholder screen in the same frame. */
export function Phone({
  src,
  alt = "",
  label,
  delay = 0,
  className = "",
  style,
}: {
  src?: string;
  alt?: string;
  label?: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reveal = useRevealProps(delay);
  return (
    <motion.div className={`rh-iphone ${className}`} style={style} {...reveal}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="rh-iphone__screen" />
      ) : (
        <div className="rh-iphone__screen rh-iphone__screen--empty" role="img" aria-label={`Placeholder: ${label}`}>
          <span className="rh-iphone__island" aria-hidden />
          <span>{label}</span>
          <span className="rh-phone__hint">Screenshot needed</span>
        </div>
      )}
    </motion.div>
  );
}

/** Wide placeholder for a web or hardware image that hasn't been provided yet. */
export function Frame({
  label,
  ratio = "16 / 10",
  delay = 0,
  className = "",
  style,
}: {
  label: string;
  ratio?: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reveal = useRevealProps(delay);
  return (
    <motion.div className={`rh-frame ${className}`} style={{ aspectRatio: ratio, ...style }} role="img" aria-label={`Placeholder: ${label}`} {...reveal}>
      <span>{label}</span>
      <span className="rh-phone__hint">Image needed</span>
    </motion.div>
  );
}

/** Sentence-case subsection kicker: quieter than the uppercase section eyebrow. */
export function Kicker({
  children,
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  /** "eyebrow": uppercase burnt ochre, for subsection labels (A · B · C, Future direction, etc.) */
  variant?: "eyebrow";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`rh-kicker ${variant === "eyebrow" ? "rh-kicker--eyebrow" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}

/** A select editorial statement set in Tiempos Text. */
export function Editorial({
  children,
  size = "md",
  as: Tag = "p",
  className = "",
  style,
}: {
  children: ReactNode;
  size?: "md" | "lg";
  as?: "p" | "blockquote" | "div";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Tag className={`rh-editorial rh-editorial--${size} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** Desktop screenshot inside a macOS-style window frame. */
export function Desktop({
  src,
  alt,
  delay = 0,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reveal = useRevealProps(delay);
  return (
    <motion.div className={`rh-desktop ${className}`} style={style} {...reveal}>
      <div className="rh-desktop__bar" aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <img src={src} alt={alt} loading="lazy" className="rh-desktop__screen" />
    </motion.div>
  );
}

/**
 * Inline demo video. The file isn't requested until the player is within 300px of
 * the viewport (the poster shows until then). It then plays muted and looped while
 * visible and pauses when scrolled away. With reduced motion it never autoplays;
 * native controls are always there to play or pause.
 */
export function DemoVideo({
  src,
  poster,
  label,
  className = "",
  style,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [near, setNear] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video || near) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setNear(true);
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [near]);

  useEffect(() => {
    const video = ref.current;
    if (!video || !near || reduce) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [near, reduce]);

  return (
    <video
      ref={ref}
      className={`rh-video ${className}`}
      style={style}
      src={near ? src : undefined}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload={reduce ? "none" : "metadata"}
      aria-label={label}
    />
  );
}
