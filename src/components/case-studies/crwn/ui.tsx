import type { CSSProperties } from "react";
import {
  Bell,
  Calendar,
  Compass,
  Crown,
  Globe,
  Grid3x3,
  Heart,
  MessageSquare,
  Scissors,
  Search,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Label } from "./primitives";

/* Small UI pieces drawn in the mockup, built as real markup (not images). */

const STROKE = 1.8;

export function LikeIcon({ size = 15 }: { size?: number }) {
  return <Heart size={size} strokeWidth={STROKE} color="var(--crwn-like)" fill="var(--crwn-like)" aria-hidden="true" />;
}

/* ---------- Client / Stylist toggle ---------- */

export function ModeToggle({ style }: { style?: CSSProperties }) {
  return (
    <div className="crwn-toggle" style={style} aria-hidden="true">
      <span className="is-on">Client</span>
      <span>Stylist</span>
    </div>
  );
}

/* ---------- Palette ---------- */

export interface Swatch {
  name: string;
  hex: string;
  edge?: boolean;
}

export function PaletteGroup({ title, swatches }: { title: string; swatches: Swatch[] }) {
  return (
    <div>
      <Label>{title}</Label>
      <ul
        className="crwn-swatches"
        style={{ gridTemplateColumns: `repeat(${swatches.length}, minmax(0, 1fr))`, listStyle: "none", padding: 0, margin: "12px 0 0" }}
      >
        {swatches.map((s) => (
          <li key={s.hex}>
            <div className={`crwn-swatch__chip ${s.edge ? "crwn-swatch__chip--edge" : ""}`} style={{ background: s.hex }} />
            <div className="crwn-swatch__name">{s.name}</div>
            <div className="crwn-small crwn-small--xs">{s.hex}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Foundations ---------- */

const FOUNDATION_ICONS: { Icon: LucideIcon; name: string }[] = [
  { Icon: Compass, name: "Explore" },
  { Icon: Globe, name: "Community" },
  { Icon: Scissors, name: "Stylists" },
  { Icon: Bell, name: "Alerts" },
  { Icon: UserRound, name: "Profile" },
  { Icon: Grid3x3, name: "Posts" },
  { Icon: Calendar, name: "Schedule" },
  { Icon: MessageSquare, name: "Inbox" },
  { Icon: Heart, name: "Like" },
  { Icon: Crown, name: "Crown" },
];

export function IconSet() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 36px)", gap: 14 }} aria-hidden="true">
      {FOUNDATION_ICONS.map(({ Icon, name }) => (
        <Icon key={name} size={26} strokeWidth={STROKE} color="var(--crwn-text)" />
      ))}
    </div>
  );
}

export function ButtonPair() {
  const base: CSSProperties = {
    height: 44,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 220 }} aria-hidden="true">
      <span style={{ ...base, background: "var(--crwn-gradient)", color: "var(--crwn-white)" }}>Send Message</span>
      <span style={{ ...base, border: "1px solid #D6CFC9", background: "var(--crwn-white)" }}>Close</span>
    </div>
  );
}

export function EmptyStateTabs() {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }} aria-hidden="true">
      <span className="crwn-tag">Posts</span>
      <span className="crwn-tag">Saves</span>
      <span className="crwn-tag" style={{ opacity: 0.35, textDecoration: "line-through" }}>
        Reviews (0)
      </span>
    </div>
  );
}

/* ---------- Component library ---------- */

const MASONRY: [number, string][][] = [
  [
    [58, "#E9DFCF"],
    [40, "#D9CBB6"],
  ],
  [
    [36, "#D9CBB6"],
    [66, "#E9DFCF"],
  ],
  [
    [50, "#E9DFCF"],
    [46, "#CDBFA9"],
  ],
];

export function MasonryDemo() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)", gap: 6, alignItems: "start" }} aria-hidden="true">
      {MASONRY.map((col, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {col.map(([h, bg], j) => (
            <span key={j} style={{ display: "block", height: h, borderRadius: 6, background: bg }} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function FrostedOverlay() {
  return (
    <div
      style={{ position: "relative", width: 160, height: 110, borderRadius: 16, background: "#D9CBB6", overflow: "hidden" }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 10,
          padding: 10,
          borderRadius: 12,
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          fontSize: 12,
          fontWeight: 700,
          color: "var(--crwn-brown)",
        }}
      >
        Stylist name · Book
      </div>
    </div>
  );
}

export function GradientTopic() {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "center" }} aria-hidden="true">
      <div
        style={{
          width: 130,
          height: 90,
          borderRadius: 16,
          background: "var(--crwn-gradient)",
          display: "flex",
          alignItems: "flex-end",
          padding: 12,
          color: "var(--crwn-white)",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        #locs
      </div>
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "var(--crwn-gradient)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--crwn-white)",
          fontSize: 30,
          boxShadow: "0 8px 20px rgba(86,35,33,0.3)",
        }}
      >
        +
      </div>
    </div>
  );
}

export function CommentsSheet() {
  const reply: CSSProperties = {
    height: 16,
    borderRadius: 8,
    background: "var(--crwn-sand)",
    marginLeft: 22,
    borderLeft: "2px solid var(--crwn-ochre)",
  };
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center", width: "100%", justifyContent: "center" }} aria-hidden="true">
      <div style={{ position: "relative", width: 96, height: 120, flexShrink: 0, borderRadius: 16, background: "#E9DFCF", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 64,
            background: "var(--crwn-white)",
            borderRadius: "16px 16px 0 0",
            boxShadow: "0 -4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <span style={{ display: "block", width: 28, height: 3, borderRadius: 3, background: "#D6CFC9", margin: "8px auto" }} />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: "0 1 120px", minWidth: 64 }}>
        <span style={{ height: 16, borderRadius: 8, background: "#E9DFCF" }} />
        <span style={reply} />
        <span style={reply} />
        <span className="crwn-small" style={{ fontSize: 11, marginLeft: 22 }}>
          parentId
        </span>
      </div>
    </div>
  );
}

/* ---------- Community system ---------- */

export function SearchBar() {
  return (
    <div
      style={{
        height: 48,
        borderRadius: 14,
        background: "var(--crwn-white)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 16px",
        minWidth: 0,
      }}
    >
      <Search size={20} strokeWidth={STROKE} color="var(--crwn-secondary)" aria-hidden="true" />
      <span style={{ color: "#8A817B", fontSize: 15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        Search styles, products, tips...
      </span>
    </div>
  );
}

export function FilterChips({ chips, active }: { chips: string[]; active: string }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {chips.map((c) => (
        <span key={c} className={`crwn-chip ${c === active ? "crwn-chip--on" : ""}`}>
          {c}
        </span>
      ))}
    </div>
  );
}

export function TopicTag({ children }: { children: string }) {
  return <span className="crwn-topic">{children}</span>;
}

export function CommunityCard({ topic, question }: { topic: string; question: string }) {
  return (
    <div className="crwn-ccard">
      <TopicTag>{topic}</TopicTag>
      <div style={{ marginTop: 12, fontSize: 16, fontWeight: 500 }}>{question}</div>
      <div style={{ marginTop: 12, display: "flex", gap: 14, alignItems: "center", fontSize: 13, color: "var(--crwn-secondary)" }}>
        <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
          <LikeIcon />
          89
        </span>
        <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
          <MessageSquare size={15} strokeWidth={STROKE} color="var(--crwn-secondary)" aria-hidden="true" />
          42
        </span>
        <span>2 days ago</span>
      </div>
    </div>
  );
}

const THREAD = [
  { handle: "@curlycrown", text: "The As I Am leave-in absorbs instead of sitting.", avatar: "#E9DFCF", nested: false },
  { handle: "@naturallylo", text: "Do you apply it on damp or soaking wet hair?", avatar: "#D9CBB6", nested: true },
  { handle: "@curlycrown", text: "Damp, then I seal it in.", avatar: "#CDBFA9", nested: true },
];

export function NestedReplies() {
  return (
    <div style={{ width: "100%", maxWidth: 380 }}>
      <div className="crwn-ccard">
        <div style={{ fontSize: 15, fontWeight: 600 }}>Best leave-in conditioners for low porosity hair?</div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {THREAD.map((r, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 10,
                ...(r.nested ? { marginLeft: 36, paddingLeft: 12, borderLeft: "2px solid var(--crwn-band-label)" } : {}),
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: r.nested ? 22 : 26,
                  height: r.nested ? 22 : 26,
                  borderRadius: "50%",
                  background: r.avatar,
                  flexShrink: 0,
                }}
              />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--crwn-tag-text)" }}>{r.handle}</div>
                <div style={{ fontSize: 13, color: "var(--crwn-body)" }}>{r.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Nav bars (one app, two modes) ---------- */

const NAV_ITEMS: Record<"client" | "stylist", { Icon: LucideIcon; label: string; active?: boolean }[]> = {
  client: [
    { Icon: Compass, label: "Explore", active: true },
    { Icon: Globe, label: "Community" },
    { Icon: Scissors, label: "Stylists" },
    { Icon: Bell, label: "Alerts" },
    { Icon: UserRound, label: "Profile" },
  ],
  stylist: [
    { Icon: Compass, label: "Explore" },
    { Icon: Grid3x3, label: "Posts" },
    { Icon: Calendar, label: "Schedule", active: true },
    { Icon: MessageSquare, label: "Inbox" },
    { Icon: UserRound, label: "Profile" },
  ],
};

export function NavBar({ mode }: { mode: "client" | "stylist" }) {
  const activeColor = mode === "client" ? "var(--crwn-maroon)" : "var(--crwn-ochre)";
  return (
    <ul className="crwn-navbar" aria-label={`${mode === "client" ? "Client" : "Stylist"} mode tab bar`} style={{ listStyle: "none", margin: 0 }}>
      {NAV_ITEMS[mode].map(({ Icon, label, active }) => (
        <li key={label} className="crwn-navbar__item" style={active ? { color: activeColor } : undefined}>
          <Icon size={24} strokeWidth={STROKE} color={active ? activeColor : "var(--crwn-body)"} aria-hidden="true" />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}
