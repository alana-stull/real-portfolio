import type { ReactNode } from "react";

export function Eyebrow({
  children,
  variant,
}: {
  children: ReactNode;
  variant?: "on-white" | "dark";
}) {
  const cls = ["bl-eyebrow"];
  if (variant === "on-white") cls.push("bl-eyebrow--on-white");
  if (variant === "dark") cls.push("bl-eyebrow--dark");
  return <div className={cls.join(" ")}>{children}</div>;
}

export function Label({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`bl-label ${className}`} style={style}>
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
  style?: React.CSSProperties;
}) {
  return (
    <Tag className={`bl-heading bl-h-${size} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return <span className="hl">{children}</span>;
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
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={`bl-body ${large ? "bl-body--lg" : ""} ${className}`}
      style={style}
    >
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
  style?: React.CSSProperties;
}) {
  return (
    <p
      className={`bl-small ${xs ? "bl-small--xs" : ""} ${className}`}
      style={style}
    >
      {children}
    </p>
  );
}

export function Placeholder({
  children,
  variant = "default",
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "default" | "solid" | "muted" | "soft";
  className?: string;
  style?: React.CSSProperties;
}) {
  const cls = ["bl-placeholder"];
  if (variant === "solid") cls.push("bl-placeholder--solid");
  if (variant === "muted") cls.push("bl-placeholder--muted");
  if (variant === "soft") cls.push("bl-placeholder--soft");
  return (
    <div className={`${cls.join(" ")} ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Slot({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`bl-slot ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Card({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`bl-card ${className}`} style={style}>
      {children}
    </div>
  );
}

export function Pill({
  children,
  variant,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "on" | "selected" | "amber" | "dashed";
  className?: string;
  style?: React.CSSProperties;
}) {
  const cls = ["bl-pill"];
  if (variant === "on") cls.push("bl-pill--on");
  if (variant === "selected") cls.push("bl-pill--selected");
  if (variant === "amber") cls.push("bl-pill--amber");
  if (variant === "dashed") cls.push("bl-pill--dashed");
  return (
    <span className={`${cls.join(" ")} ${className}`} style={style}>
      {children}
    </span>
  );
}

const AVATAR_COLORS = [
  "#B7D3E0",
  "#5BA8D3",
  "#375169",
  "#8B8F94",
  "#D5E6EE",
  "#7FB9DC",
];

export function AvatarStack({
  count = 4,
  dashedLast = false,
  size = 26,
}: {
  count?: number;
  dashedLast?: boolean;
  size?: number;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="bl-avatar"
          style={{
            width: size,
            height: size,
            background: AVATAR_COLORS[i % AVATAR_COLORS.length],
          }}
        />
      ))}
      {dashedLast && (
        <span
          className="bl-avatar bl-avatar--dashed"
          style={{ width: size, height: size }}
        />
      )}
    </span>
  );
}

export function CodeLine({ children }: { children: ReactNode }) {
  return <div className="bl-code">{children}</div>;
}
