import type { CSSProperties, ReactNode } from "react";
import { Bookmark, Crown, Eye, MessageSquare, TrendingUp, Users, BarChart3 } from "lucide-react";

/*
 * Real CRWN app components, rebuilt as markup so they fit their slots.
 * Photos are stand-in gradient tiles in the app's palette.
 * Source designs: src/assets/updated crwn assets/ (onboarding, loading state,
 * analytics, inbox + booking components).
 */

const ACCENT = "#B35D2B"; // analytics + schedule accent from the app

/* ---------- Loading states: skeleton → loaded masonry ---------- */

const LOADED = [
  { label: "Knotless Braids", bg: "linear-gradient(160deg, #C49A72, #9A6D48)", h: 92 },
  { label: "Twists", bg: "linear-gradient(160deg, #5C2420, #3A1412)", h: 84 },
  { label: "Cornrows", bg: "linear-gradient(160deg, #5E4637, #4A2C1A)", h: 104 },
  { label: "Wigs • Weaves", bg: "linear-gradient(160deg, #B0643A, #6E5442)", h: 74 },
];
const SKELETON = ["#F1E8E1", "#EAE8E6", "#E6D8CC", "#F1E9E2"];

function Masonry({ loaded }: { loaded?: boolean }) {
  const cols = [
    [LOADED[0], LOADED[1]],
    [LOADED[2], LOADED[3]],
  ];
  return (
    <div className="crwn-mk-masonry" aria-hidden="true">
      {cols.map((col, ci) => (
        <div key={ci} className="crwn-mk-masonry__col">
          {col.map((t, ti) => (
            <div
              key={t.label}
              className={`crwn-mk-tile ${loaded ? "" : "crwn-mk-tile--skeleton"}`}
              style={{ height: t.h, background: loaded ? t.bg : SKELETON[ci * 2 + ti] }}
            >
              <span className="crwn-mk-tile__label">{loaded ? t.label : ""}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function LoadingStatesMock() {
  return (
    <div className="crwn-mk-loading">
      <div className="crwn-mk-loading__panel">
        <span className="crwn-mk-cap">Loading</span>
        <Masonry />
      </div>
      <span className="crwn-mk-arrow" aria-hidden="true">
        →
      </span>
      <div className="crwn-mk-loading__panel">
        <span className="crwn-mk-cap">Loaded</span>
        <Masonry loaded />
      </div>
    </div>
  );
}

/* ---------- Onboarding components ---------- */

export function OnboardingMock() {
  return (
    <div className="crwn-mk-onboard" aria-hidden="true">
      <div className="crwn-mk-steps">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} style={{ background: i < 3 ? "#1E1714" : i === 3 ? "#C79B6E" : "#EADFD3" }} />
        ))}
      </div>
      <div className="crwn-mk-chips">
        {["Protective", "Cuts", "Natural", "Locs"].map((c, i) => (
          <span key={c} className={i === 0 ? "is-on" : ""}>
            {c}
          </span>
        ))}
      </div>
      <div className="crwn-mk-option">Natural Styles</div>
      <div className="crwn-mk-continue">Continue</div>
    </div>
  );
}

/* ---------- Analytics (provider business view) ---------- */

function Stat({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div>
      <div className="crwn-mk-stat__label">
        {icon}
        {label}
      </div>
      <div className="crwn-mk-stat__value">{value}</div>
    </div>
  );
}

const ICON = { size: 13, strokeWidth: 1.8, color: ACCENT, "aria-hidden": true } as const;
const WEEK = [
  { d: "M", v: 8 },
  { d: "T", v: 14 },
  { d: "W", v: 38 },
  { d: "T", v: 52 },
  { d: "F", v: 22 },
  { d: "S", v: 92 },
  { d: "S", v: 70 },
];

export function AnalyticsMock() {
  return (
    <div className="crwn-mk-panel crwn-mk-grid2" role="img" aria-label="Analytics components: profile stats and weekly views chart">
      <div className="crwn-mk-card">
        <div className="crwn-mk-stats">
          <Stat icon={<Crown {...ICON} />} label="Total Crowns" value="1,745" />
          <Stat icon={<Eye {...ICON} />} label="Profile Visits" value="8,190" />
          <Stat icon={<Bookmark {...ICON} />} label="Total Saves" value="365" />
          <Stat icon={<Users {...ICON} />} label="Bookings" value="51" />
        </div>
        <div className="crwn-mk-rowline">
          <span className="crwn-mk-stat__label">
            <TrendingUp {...ICON} />
            Avg. Engagement Rate
          </span>
          <b style={{ color: ACCENT }}>26.0%</b>
        </div>
      </div>
      <div className="crwn-mk-card">
        <div className="crwn-mk-rowline" style={{ borderTop: "none", paddingTop: 0, marginTop: 0 }}>
          <span className="crwn-mk-kicker">
            <BarChart3 {...ICON} />
            Views this week
          </span>
          <span className="crwn-mk-muted">Peak: 450</span>
        </div>
        <div className="crwn-mk-bars">
          {WEEK.map((w, i) => (
            <div key={i} className="crwn-mk-bars__col">
              <span style={{ height: `${w.v}%` }} />
              <i>{w.d}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Schedule + booking workflow ---------- */

function DepositPill({ children = "Deposit Paid" }: { children?: ReactNode }) {
  return <span className="crwn-mk-pill crwn-mk-pill--grad">{children}</span>;
}

const APPTS = [
  { name: "Alana Stull", service: "Box Braids", time: "10:00 AM", len: "6 hours", paid: true },
  { name: "Sarah Nyaanga", service: "Island Twists", time: "5:00 PM", len: "4 hours", paid: true },
];

function MiniCalendar() {
  const days = Array.from({ length: 35 }, (_, i) => i - 3); // month starts on Thursday
  return (
    <div className="crwn-mk-card crwn-mk-cal">
      <div className="crwn-mk-cal__head">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="crwn-mk-cal__grid">
        {days.map((d) => (
          <span key={d} className={d === 15 ? "is-booked" : ""}>
            {d >= 1 && d <= 31 ? d : ""}
            {d === 15 && (
              <>
                <i>10AM</i>
                <i>5PM</i>
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BookingWorkflowMock() {
  return (
    <div className="crwn-mk-panel crwn-mk-grid2" role="img" aria-label="Schedule components: today's appointments with deposit status and the booking calendar">
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="crwn-mk-card" style={{ padding: "10px 12px" }}>
          <div className="crwn-mk-muted">Today</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: ACCENT }}>3 appointments</div>
        </div>
        {APPTS.map((a) => (
          <div key={a.name} className="crwn-mk-card" style={{ padding: "10px 12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <b style={{ fontSize: 13 }}>{a.name}</b>
              {a.paid && <DepositPill />}
            </div>
            <div className="crwn-mk-muted">{a.service}</div>
            <div className="crwn-mk-muted" style={{ color: "#3A322D" }}>
              {a.time} · {a.len}
            </div>
          </div>
        ))}
      </div>
      <MiniCalendar />
    </div>
  );
}

/* ---------- Booking request (stylist inbox) ---------- */

function Avatar({ size = 34, style }: { size?: number; style?: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, borderRadius: "50%", background: "linear-gradient(150deg, #7B5A44, #3B2416)", flexShrink: 0, ...style }}
    />
  );
}

function Detail({ k, v }: { k: string; v: ReactNode }) {
  return (
    <div className="crwn-mk-detail">
      <span>{k}</span>
      <span>{v}</span>
    </div>
  );
}

export function BookingRequestMock() {
  return (
    <div className="crwn-mk-panel crwn-mk-grid3" role="img" aria-label="Booking request components: request card with accept and decline, service details, and the client's hair profile">
      <div className="crwn-mk-card">
        <div className="crwn-mk-kicker">Requests</div>
        <div style={{ marginTop: 10, display: "flex", gap: 10, alignItems: "center" }}>
          <Avatar />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "center" }}>
              <b style={{ fontSize: 13 }}>Alana Stull</b>
              <span className="crwn-mk-pill">Pending</span>
            </div>
            <div className="crwn-mk-muted">Knotless Braids · May 15, 2:00 PM</div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          <span className="crwn-mk-btn crwn-mk-btn--primary">Accept</span>
          <span className="crwn-mk-btn">Decline</span>
        </div>
      </div>
      <div className="crwn-mk-card">
        <div className="crwn-mk-kicker">Service details</div>
        <Detail k="Service" v="Box Braids" />
        <Detail k="Time" v="10:00 AM" />
        <Detail k="Duration" v="6 hours" />
        <Detail k="Deposit Status" v={<span className="crwn-mk-pill crwn-mk-pill--honey">Paid</span>} />
      </div>
      <div className="crwn-mk-card">
        <div className="crwn-mk-kicker">Hair profile</div>
        <div className="crwn-mk-profile">
          {[
            ["Hair Type", "4C"],
            ["Porosity", "Low"],
            ["Density", "High"],
            ["Texture", "Coily"],
          ].map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <b>{v}</b>
            </div>
          ))}
        </div>
        <div className="crwn-mk-muted" style={{ marginTop: 10, display: "flex", gap: 6, alignItems: "center" }}>
          <MessageSquare size={12} strokeWidth={1.8} aria-hidden="true" />
          Client bringing 2 packs of 4/27/30 Xpression hair.
        </div>
      </div>
    </div>
  );
}

