import type { CSSProperties, ReactNode } from "react";
import type { DilImage } from "./images";

/** Section header: "01 / The opportunity" eyebrow, headline, optional intro. */
export function SectionHead({ n, eyebrow, children, intro }: { n: string; eyebrow: string; children: ReactNode; intro?: ReactNode }) {
  return (
    <div className="dil-shd">
      <p className="dil-eb">
        <span className="n">{n}</span> / {eyebrow}
      </p>
      <h2 className="dil-h2">{children}</h2>
      {intro && <p className="dil-bd">{intro}</p>}
    </div>
  );
}

export function Pill({ tone, children }: { tone?: "or" | "bl" | "dk"; children: ReactNode }) {
  return <span className={`dil-pill ${tone ? `dil-pill--${tone}` : ""}`}>{children}</span>;
}

/** Pills separated by arrows (or another joiner). */
export function PillFlow({ items, className = "dil-flowpills" }: { items: { label: string; tone?: "or" | "bl" | "dk"; join?: string }[]; className?: string }) {
  return (
    <div className={className}>
      {items.map((it, i) => (
        <span key={it.label} style={{ display: "contents" }}>
          {i > 0 && (
            <span className="dil-ar" aria-hidden="true">
              {it.join ?? "→"}
            </span>
          )}
          <Pill tone={it.tone}>{it.label}</Pill>
        </span>
      ))}
    </div>
  );
}

/** A screenshot in a light browser frame. */
export function Browser({ image, title, style, className = "" }: { image: DilImage; title?: string; style?: CSSProperties; className?: string }) {
  return (
    <div className={`dil-browser ${className}`} style={style}>
      {title !== undefined && (
        <div className="dil-browser__bar">
          <i />
          <i />
          <i />
          <span>{title}</span>
        </div>
      )}
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

/** A screenshot slot: the real image when `src` is set, otherwise the dashed placeholder. */
export function ImageSlot({ image, style, className = "" }: { image: DilImage; style?: CSSProperties; className?: string }) {
  if (image.src) {
    // A real screenshot shows at its own proportions; the placeholder sizing only applies to empty slots.
    return <img className={`dil-shot ${className}`} src={image.src} alt={image.alt} />;
  }
  return (
    <div className={`dil-phx ${className}`} style={style} role="img" aria-label={`Missing screenshot: ${image.alt}`}>
      {image.label}
      {image.hint && <small>{image.hint}</small>}
    </div>
  );
}

export function Swatch({ color }: { color: string }) {
  return <i className="dil-sw" style={{ background: color }} aria-hidden="true" />;
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="dil-lk" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
