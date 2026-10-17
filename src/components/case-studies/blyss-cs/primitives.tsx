import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { BlyssImage } from "./images";

/* ---------- Type ---------- */

export function Eyebrow({
  children,
  style,
  variant = "section",
}: {
  children: ReactNode;
  style?: CSSProperties;
  variant?: "section" | "sub" | "pill";
}) {
  return (
    <div className={`bc-eb ${variant !== "section" ? `bc-eb--${variant}` : ""}`} style={style}>
      {children}
    </div>
  );
}

export function Label({ children, style, as: Tag = "div" }: { children: ReactNode; style?: CSSProperties; as?: "div" | "span" }) {
  return (
    <Tag className="bc-lb" style={style}>
      {children}
    </Tag>
  );
}

type HSize = "hero" | "sec" | "sub" | "ins" | "card";

export function Heading({
  as: Tag = "h2",
  size,
  children,
  style,
  className = "",
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "div" | "p";
  size?: HSize;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <Tag className={`bc-h ${size ? `bc-h-${size}` : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** The slate highlighted phrase inside a heading. */
export function Hi({ children }: { children: ReactNode }) {
  return <span className="bc-hi">{children}</span>;
}

export function Body({ children, style, className = "" }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return (
    <p className={`bc-bd ${className}`} style={style}>
      {children}
    </p>
  );
}

export function Small({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="bc-sm" style={style}>
      {children}
    </p>
  );
}

/* ---------- Motion ---------- */

/** Fade + slide-up on scroll into view — the site's whileInView pattern. */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  /** Horizontal offset to slide in from (default: rise from below). */
  x?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, x, y: x ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

/** An SVG connector that draws itself in when scrolled into view. */
export function DrawPath({ d, stroke = "#5BA8D3", markerEnd, delay = 0 }: { d: string; stroke?: string; markerEnd?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      markerEnd={markerEnd}
      initial={reduce ? false : { pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: "easeInOut" }}
    />
  );
}

/* ---------- Icons (paths copied from the mockup) ---------- */

const ICONS = {
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  link: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  chat: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 21l1.9-5.1A8.5 8.5 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5Z" />,
  check: <path d="M20 6 9 17l-5-5" />,
  sparkle: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M19 3v4M17 5h4" />
    </>
  ),
  chevronRight: <path d="m9 18 6-6-6-6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  door: (
    <>
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h3M13 20h9M10 12v.01" />
      <path d="M13 4.56v16.1a1 1 0 0 1-1.24.97L5 20V5.56a2 2 0 0 1 1.52-1.94l4-1A2 2 0 0 1 13 4.56Z" />
    </>
  ),
  gauge: (
    <>
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="6" width="20" height="14" rx="2" />
      <path d="M2 10h20M16 15h2" />
    </>
  ),
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
};

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 14, color = "#375169" }: { name: IconName; size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {ICONS[name]}
    </svg>
  );
}

/** Round tinted badge with an icon inside. */
export function IconDot({
  name,
  size = 32,
  iconSize = 16,
  dark,
}: {
  name: IconName;
  size?: number;
  iconSize?: number;
  dark?: boolean;
}) {
  return (
    <span className="bc-icon-dot" style={{ width: size, height: size, background: dark ? "#375169" : undefined }}>
      <Icon name={name} size={iconSize} color={dark ? "#FFFFFF" : "#375169"} />
    </span>
  );
}

/* ---------- Pills, avatars ---------- */

export function Pill({
  variant,
  icon,
  iconColor,
  dashed,
  style,
  children,
}: {
  variant?: "on" | "sl" | "am";
  icon?: IconName;
  iconColor?: string;
  dashed?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const color = iconColor ?? (variant === "am" ? "#333333" : variant === "sl" ? "#FFFFFF" : "#375169");
  return (
    <span className={`bc-pill ${variant ? `bc-pill--${variant}` : ""} ${dashed ? "bc-pill--dashed" : ""}`} style={style}>
      {icon && <Icon name={icon} color={color} />}
      {children}
    </span>
  );
}

export const AVATAR_COLORS = ["#B7D3E0", "#5BA8D3", "#375169", "#8B8F94", "#D5E6EE", "#7FB9DC"];

export function AvatarStack({
  colors,
  size,
  overlap,
  ring = "#FFFFFF",
  blurred,
}: {
  colors: string[];
  size: number;
  overlap: number;
  ring?: string;
  blurred?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
      {colors.map((c, i) => (
        <span
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            marginLeft: i ? -overlap : 0,
            border: `2px solid ${ring}`,
            background: c,
            filter: blurred ? "blur(1.5px)" : undefined,
          }}
        />
      ))}
    </span>
  );
}

/* ---------- Image slot ---------- */

export type SlotTone = "default" | "white" | "hero" | "archive" | "now" | "crop";

/**
 * One image on the page. Shows the real image when `src` is set, otherwise the
 * mockup's dashed placeholder labeled with `alt`. `w`/`h` are the mockup size:
 * the slot keeps that aspect ratio and treats the width as a max.
 */
export function ImageSlot({
  image,
  w,
  h,
  radius,
  tone = "default",
  fill,
  contain,
  delay = 0,
  style,
}: {
  image: BlyssImage;
  w?: number;
  h?: number;
  radius?: number | string;
  tone?: SlotTone;
  /** Fill the parent (grid cells, fixed bands) instead of sizing from w/h. */
  fill?: boolean;
  /** Show the whole image (logos) instead of cropping to the slot. */
  contain?: boolean;
  /** Seconds to wait before the scroll-in animation, for staggering rows of screens. */
  delay?: number;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const motionProps = {
    initial: reduce ? false : { opacity: 0, y: 28, scale: 0.97 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
  const sizing: CSSProperties = fill
    ? { width: "100%", height: "100%" }
    : w && h
      ? { width: "100%", maxWidth: w, aspectRatio: `${w} / ${h}`, flexShrink: 1 }
      : h
        ? { width: "100%", height: h }
        : {};
  const framed = image.src && image.framed;
  const phone = image.src && image.phone;
  const card = image.src && image.card;
  const variant = framed ? "bc-ph--framed" : card ? "bc-ph--card" : "";
  const cls = `bc-ph ${tone !== "default" ? `bc-ph--${tone}` : ""} ${image.src ? "bc-ph--filled" : ""} ${variant}`;
  const s: CSSProperties = {
    ...sizing,
    borderRadius: card ? 16 : radius,
    ...style,
  };
  if (phone) {
    // Realistic iPhone (same construction as Rhythm's): bezel + side buttons, screen at its true aspect.
    const { aspectRatio: _a, height: _h, ...outer } = s;
    return (
      // Wrapper owns the size so the frame's % padding resolves against the phone's own width.
      <motion.div style={{ ...outer, borderRadius: undefined, maxWidth: fill ? "100%" : w }} {...motionProps}>
        <div className="bc-iphone">
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="bc-iphone__screen" />
        </div>
      </motion.div>
    );
  }
  if (image.src) {
    return (
      <motion.div className={cls} style={s} {...motionProps}>
        <img src={image.src} alt={image.alt} loading="lazy" decoding="async" style={{ ...(contain || framed ? { objectFit: "contain" as const } : null), ...(image.position ? { objectPosition: image.position } : null) }} />
      </motion.div>
    );
  }
  return (
    <motion.div className={cls} style={s} role="img" aria-label={image.alt} {...motionProps}>
      [{image.alt}]
    </motion.div>
  );
}

/* ---------- Scaled stage ---------- */

/** Renders children at the design size and scales them down to fit the container width. */
export function FitStage({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setScale(Math.min(1, w / width));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div ref={ref} className="bc-fit" style={{ height: height * scale }}>
      <div className="bc-fit__inner" style={{ width, height, transform: `scale(${scale})` }}>
        {children}
      </div>
    </div>
  );
}

/**
 * A composition that scales (wide) and swaps to a stacked layout when its
 * container is under 800px (narrow).
 */
export function Composition({
  width,
  height,
  wide,
  narrow,
  style,
}: {
  width: number;
  height: number;
  wide: ReactNode;
  narrow: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div className="bc-cq" style={style}>
      <div className="bc-cq__wide">
        <FitStage width={width} height={height}>
          {wide}
        </FitStage>
      </div>
      <div className="bc-cq__narrow">{narrow}</div>
    </div>
  );
}
