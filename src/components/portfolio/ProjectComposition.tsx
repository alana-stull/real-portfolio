import type { CSSProperties, ReactNode } from "react";
import { projectImages, type ProjectImage } from "./projectImages";

/*
 * Project thumbnail compositions for Home and Work. A composition is a
 * fixed-aspect box (container-type: inline-size); everything inside is placed
 * by percentage and sized in cqw, so it scales as one unit. Positions and
 * colors are copied from the approved mockups.
 */

type Pos = { left: string; top: string; width?: string; height?: string };

export function ProjectComposition({
  aspect,
  c1,
  c2,
  small,
  label,
  children,
}: {
  /** e.g. "16 / 8" */
  aspect: string;
  /** Hero outline + placeholder text color */
  c1: string;
  /** Dashed placeholder border color */
  c2: string;
  /** The smaller two-column compositions use larger relative type */
  small?: boolean;
  /** Accessible description of the whole composition */
  label: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`pg-comp ${small ? "pg-comp--sm" : ""}`}
      style={{ aspectRatio: aspect, ["--c1" as string]: c1, ["--c2" as string]: c2 }}
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}

/** A screen slot: real screenshot when `image.src` is set, otherwise the dashed placeholder. */
export function CompScreen({
  image,
  pos,
  phone,
  hero,
  style,
}: {
  image: ProjectImage;
  pos: Pos;
  phone?: boolean;
  hero?: boolean;
  style?: CSSProperties;
}) {
  const cls = [
    "pg-cp",
    phone ? "pg-phn" : "",
    hero ? "pg-hero" : "",
    image.src ? "pg-cp--filled" : "",
    image.src && image.framed ? "pg-cp--framed" : "",
  ].join(" ");
  return (
    <div className={cls} style={{ ...pos, ...style }}>
      {image.src ? <img src={image.src} alt={image.alt ?? image.label.replace(/^\[|\]$/g, "")} /> : image.label}
    </div>
  );
}

export function CompChip({ pos, bg, color, children }: { pos: Pos; bg: string; color: string; children: ReactNode }) {
  return (
    <span className="pg-chip" style={{ ...pos, background: bg, color }}>
      {children}
    </span>
  );
}

export function CompCard({
  pos,
  style,
  className = "",
  children,
}: {
  pos: Pos;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`pg-ccard ${className}`} style={{ ...pos, ...style }}>
      {children}
    </div>
  );
}

/* Icons, copied from the mockup's inline SVGs */
function Ico({ stroke, fill = "none", size, children }: { stroke: string; fill?: string; size?: string; children: ReactNode }) {
  return (
    <svg
      className="pg-ico"
      style={size ? { width: size, height: size } : undefined}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* ---------------- Blyss ---------------- */

export function BlyssComposition() {
  const img = projectImages;
  // 16:8 box is 50cqw tall; tops are % of that height. Phones use the same frame as Rhythm's.
  return (
    <ProjectComposition aspect="16 / 8" c1="#375169" c2="#9CC3D8" label="Blyss on iPhone: a plan, the Explore screen, and a venue, with an invite card, a status tier, a plan card, and a venue card">
      <div className="pg-bl-phone" style={{ position: "absolute", left: "25%", top: "17%", width: "17.5%" }}>
        <img src={img.blyssPlan.src} alt="" />
      </div>
      <div className="pg-bl-phone" style={{ position: "absolute", left: "57.5%", top: "11%", width: "17.5%" }}>
        <img src={img.blyssPlace.src} alt="" />
      </div>
      <div className="pg-bl-phone pg-bl-phone--hero" style={{ position: "absolute", left: "39.5%", top: "3%", width: "21%" }}>
        <img src={img.blyssExploreHero.src} alt="" />
      </div>
      {/* Component cards on the sides */}
      <img className="pg-bl-comp" src={img.blyssInvite.src} alt="" style={{ left: "1.5%", top: "26%", width: "22%" }} />
      <img className="pg-bl-comp" src={img.blyssStatus.src} alt="" style={{ left: "7%", top: "58%", width: "19%" }} />
      <img className="pg-bl-comp" src={img.blyssPlanCard.src} alt="" style={{ left: "79.5%", top: "9%", width: "14%" }} />
      <img className="pg-bl-comp" src={img.blyssVenue.src} alt="" style={{ left: "72%", top: "50%", width: "21%" }} />
      <CompChip pos={{ left: "2.5%", top: "14%" }} bg="#375169" color="#FFFFFF">
        <Ico stroke="#FFFFFF">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </Ico>
        Plans
      </CompChip>
      <CompChip pos={{ left: "61%", top: "1.5%" }} bg="#B7D3E0" color="#375169">
        <Ico stroke="#375169">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </Ico>
        Places
      </CompChip>
      <CompChip pos={{ left: "27%", top: "6%" }} bg="#B7D3E0" color="#375169">
        <Ico stroke="#375169">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </Ico>
        People
      </CompChip>
    </ProjectComposition>
  );
}

/* ---------------- Rhythm ---------------- */

/*
 * Rhythm layout, in container units (1cqw = 1% of the composition's width):
 * the web Today in a window frame, with the iOS Today in a phone frame
 * overlapping its right edge. The pair is centered as a group, vertically too,
 * whatever the composition's aspect ratio.
 */
const RH_DESKTOP_W = 64; // base sizes, multiplied by the fit scale below
const RH_BAR_H = 2.6; // window title bar, fixed in CSS
const RH_PHONE_W = 21;
const RH_PHONE_PAD = 0.8; // phone bezel, fixed in CSS
const RH_OVERLAP = 12; // how far the phone overlaps the window, horizontally
const RH_DROP = 5; // how much lower the phone sits than the window
const RH_CHIP_H = 4.7; // chip height at the small-composition chip size
const RH_MARGIN = 2.5; // breathing room inside the box

function rhythmSizes(scale: number) {
  const desktopW = RH_DESKTOP_W * scale;
  const desktopH = desktopW * (10 / 16) + RH_BAR_H;
  const phoneW = RH_PHONE_W * scale;
  const phoneH = (phoneW - RH_PHONE_PAD * 2) * (2622 / 1206) + RH_PHONE_PAD * 2;
  const overlap = RH_OVERLAP * scale;
  const drop = RH_DROP * scale;
  const chipOut = 3; // the Oura chip hangs this far left of the window
  const width = chipOut + desktopW - overlap + phoneW;
  const height = Math.max(drop + phoneH, desktopH - 2.2 + RH_CHIP_H);
  return { desktopW, desktopH, phoneW, overlap, drop, chipOut, width, height };
}

function rhythmLayout(aspect: string) {
  const [w, h] = aspect.split("/").map((n) => parseFloat(n));
  const H = (100 * h) / w; // composition height in cqw
  // Largest scale at which the window, phone and chips all fit inside the box.
  let scale = 2;
  while (scale > 0.5) {
    const z = rhythmSizes(scale);
    if (z.width <= 100 - RH_MARGIN * 2 && z.height <= H - RH_MARGIN * 2) break;
    scale -= 0.01;
  }
  const z = rhythmSizes(scale);
  const left = (100 - z.width) / 2 + z.chipOut;
  const top = (H - z.height) / 2;
  const pct = (cqw: number) => `${(cqw / H) * 100}%`;
  return {
    desktop: { left: `${left}%`, top: pct(top), width: `${z.desktopW}%` },
    phone: { left: `${left + z.desktopW - z.overlap}%`, top: pct(top + z.drop), width: `${z.phoneW}%` },
    ouraChip: { left: `${left - z.chipOut}%`, top: pct(top + z.desktopH * 0.62) },
    calendarChip: { left: `${left + z.desktopW * 0.22}%`, top: pct(top + z.desktopH - 2.2) },
  };
}

export function RhythmComposition({ aspect = "16 / 10" }: { aspect?: string }) {
  const img = projectImages;
  const pos = rhythmLayout(aspect);
  return (
    <ProjectComposition aspect={aspect} c1="#8A5524" c2="#D9B48C" small label="Rhythm on web and iOS: the Today view on desktop and on iPhone">
      <div className="pg-rh-desktop" style={{ position: "absolute", ...pos.desktop }}>
        <div className="pg-rh-desktop__bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <img src={img.rhythmDashboard.src} alt="" />
      </div>
      <div className="pg-rh-phone" style={{ position: "absolute", ...pos.phone }}>
        <img src={img.rhythmMobile.src} alt="" />
      </div>
      <CompChip pos={pos.ouraChip} bg="#FFFFFF" color="#1A1A1A">
        <span style={{ width: "1cqw", height: "1cqw", borderRadius: "50%", background: "#C17E3A" }} />
        Oura
      </CompChip>
      <CompChip pos={pos.calendarChip} bg="#FFFFFF" color="#1A1A1A">
        <Ico stroke="#8A5524">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </Ico>
        Apple Calendar
      </CompChip>
    </ProjectComposition>
  );
}

/* ---------------- CRWN ---------------- */

function CrwnNavItem({ active, label, children }: { active?: boolean; label: string; children: ReactNode }) {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: ".7cqw",
        fontSize: "1.5cqw",
        fontWeight: active ? 700 : 600,
        color: active ? "#562321" : "#625852",
      }}
    >
      <Ico stroke={active ? "#562321" : "#2E2622"} size="2.6cqw">
        {children}
      </Ico>
      {label}
    </span>
  );
}

/*
 * CRWN layout, in container units (1cqw = 1% of the composition's width).
 * The three phones share one bottom baseline and are centered as a group; the
 * nav bar sits a fixed gap below them; the whole stack is centered vertically
 * whatever the composition's aspect ratio.
 */
const PHONE_RATIO = 1.92; // the framed screenshots are ~1 : 1.92
const SIDE_W = 20.5;
const MID_W = 25;
const PHONE_GAP = 0; // the PNGs have a little transparent margin, so this still leaves a small visible gap
const NAV_GAP = 2.4;
const NAV_H = 9.2;

const CRWN_MARGIN = 2.5; // breathing room inside the box

function crwnLayout(aspect: string) {
  const [aw, ah] = aspect.split("/").map((n) => Number(n.trim()));
  const boxH = (100 * ah) / aw;
  // Grow the phones as far as the box allows (height-limited), but never below the
  // original size: on 16:10 the composition already fills the box.
  const fitH = (boxH - CRWN_MARGIN * 2 - NAV_GAP - NAV_H) / (MID_W * PHONE_RATIO);
  const fitW = (100 - CRWN_MARGIN * 2) / (SIDE_W * 2 + MID_W + PHONE_GAP * 2);
  const scale = Math.max(1, Math.min(fitH, fitW));
  const sideW = SIDE_W * scale;
  const midW = MID_W * scale;
  const groupW = sideW * 2 + midW + PHONE_GAP * 2;
  const x0 = (100 - groupW) / 2;
  const midH = midW * PHONE_RATIO;
  const sideH = sideW * PHONE_RATIO;
  const top0 = (boxH - (midH + NAV_GAP + NAV_H)) / 2;
  const baseline = top0 + midH;
  const sideTop = baseline - sideH;
  return {
    left: { left: `${x0}%`, top: `${sideTop}cqw`, width: `${sideW}%` },
    mid: { left: `${x0 + sideW + PHONE_GAP}%`, top: `${top0}cqw`, width: `${midW}%` },
    right: { left: `${x0 + sideW + PHONE_GAP + midW + PHONE_GAP}%`, top: `${sideTop}cqw`, width: `${sideW}%` },
    // upper-left, overlapping the left phone slightly (pulled inward when the phones grow)
    community: { left: `${Math.max(1, x0 + 5.5 - 24)}%`, top: `${sideTop - 7}cqw`, width: "24%" },
    // upper-right, overlapping the right phone slightly (kept inside the box)
    locs: { left: `${Math.min(x0 + groupW - 4, 100 - 17 - 1)}%`, top: `${sideTop - 6}cqw`, width: "17%" },
    nav: { left: `${50 - 29 * scale}%`, top: `${baseline + NAV_GAP}cqw`, width: `${58 * scale}%` },
  };
}

export function CrwnComposition({ aspect = "16 / 10" }: { aspect?: string }) {
  const img = projectImages;
  const L = crwnLayout(aspect);
  const phoneShape = { aspectRatio: `1 / ${PHONE_RATIO}` };
  return (
    <ProjectComposition aspect={aspect} c1="#562321" c2="#D3B8AA" small label="CRWN app screens with interface callouts">
      <CompScreen image={img.crwnStylistProfile} phone pos={L.left} style={phoneShape} />
      <CompScreen image={img.crwnBooking} phone pos={L.right} style={phoneShape} />
      <CompScreen image={img.crwnExploreHero} phone hero pos={L.mid} style={phoneShape} />

      {/* Community card (hidden first when the composition gets narrow) */}
      <CompCard
        className="pg-crwn-community"
        pos={L.community}
        style={{ padding: "2.2cqw", borderRadius: "2.4cqw", border: "1px solid #EFE7DF" }}
      >
        <span
          style={{
            display: "inline-block",
            padding: ".9cqw 1.8cqw",
            borderRadius: 999,
            background: "#F3EBDD",
            color: "#8A6A3E",
            fontSize: "1.6cqw",
            fontWeight: 600,
          }}
        >
          Low Porosity
        </span>
        <p style={{ margin: "1.6cqw 0 0", font: "500 1.9cqw/1.4 Figtree, sans-serif", color: "#1E1714" }}>
          Best leave-in conditioners for low porosity hair?
        </p>
        <div
          style={{
            marginTop: "1.6cqw",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: ".6cqw 2cqw",
            fontSize: "1.5cqw",
            fontWeight: 500,
            color: "#625852",
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: ".6cqw" }}>
            <Ico stroke="#E3827F" fill="#E3827F" size="1.9cqw">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </Ico>
            89
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: ".6cqw" }}>
            <Ico stroke="#625852" size="1.9cqw">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </Ico>
            42
          </span>
          <span style={{ whiteSpace: "nowrap" }}>2 days ago</span>
        </div>
      </CompCard>

      {/* Gradient topic card */}
      <CompCard
        pos={L.locs}
        style={{
          aspectRatio: "3 / 2",
          padding: "2cqw",
          borderRadius: "2.4cqw",
          background: "linear-gradient(135deg, #5C2922, #A25E34)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <span style={{ font: "700 2.6cqw/1 Figtree, sans-serif", color: "#FFFFFF" }}>#locs</span>
      </CompCard>

      {/* Bottom nav bar */}
      <CompCard
        pos={L.nav}
        style={{
          padding: "1.6cqw 2cqw",
          borderRadius: "3cqw",
          border: "1px solid #E8E2DC",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CrwnNavItem active label="Explore">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </CrwnNavItem>
        <CrwnNavItem label="Community">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </CrwnNavItem>
        <CrwnNavItem label="Stylists">
          <circle cx="6" cy="6" r="3" />
          <path d="M8.12 8.12 12 12" />
          <path d="M20 4 8.12 15.88" />
          <circle cx="6" cy="18" r="3" />
          <path d="M14.8 14.8 20 20" />
        </CrwnNavItem>
        <CrwnNavItem label="Alerts">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </CrwnNavItem>
        <CrwnNavItem label="Profile">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </CrwnNavItem>
      </CompCard>
    </ProjectComposition>
  );
}
