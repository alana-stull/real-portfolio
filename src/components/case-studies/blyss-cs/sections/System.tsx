import type { CSSProperties, ReactNode } from "react";
import { blyssImages } from "../images";
import {
  AVATAR_COLORS,
  AvatarStack,
  Body,
  Composition,
  DrawPath,
  Eyebrow,
  Heading,
  Icon,
  ImageSlot,
  Label,
  Pill,
  Reveal,
  Small,
  type IconName,
} from "../primitives";
import { SignalPill, SignalPlus } from "../ui";

/** One row of what a person can access. The same rows appear in the same order on both sides. */
function AccessRow({ icon, label, locked, children }: { icon: IconName; label: string; locked?: boolean; children?: ReactNode }) {
  return (
    <li>
      <div className="bc-access__k">
        <Icon name={icon} color={locked ? "#8B8F94" : "#5BA8D3"} />
        <span className="bc-lb" style={{ color: locked ? "#6B7076" : "#333333" }}>
          {label}
        </span>
      </div>
      <div>
        {locked ? (
          <span className="bc-access__lock">
            <Icon name="lock" size={13} color="#8B8F94" />
            {children ?? "Locked until you join"}
          </span>
        ) : (
          children
        )}
      </div>
    </li>
  );
}

function PrivacyDiagram() {
  return (
    <div className="bc-privacy">
      <div className="bc-privacy__state">
        <div className="bc-privacy__head">
          <Label style={{ color: "#375169" }}>Before joining</Label>
          <span className="bc-cap">Browsing the plan</span>
        </div>
        <div className="bc-privacy__phone">
          <ImageSlot image={blyssImages.privacyBefore} w={210} h={436} radius={30} />
        </div>
        <ul className="bc-access">
          <AccessRow icon="eye" label="Momentum">
            <Pill variant="on" icon="users">
              N going
            </Pill>
          </AccessRow>
          <AccessRow icon="users" label="Who’s going" locked>
            <AvatarStack colors={Array(4).fill("#D5D8DB")} size={22} overlap={7} blurred />
            <span>Hidden</span>
          </AccessRow>
          <AccessRow icon="link" label="Social context" locked />
          <AccessRow icon="chat" label="Chat" locked />
        </ul>
      </div>

      <div className="bc-privacy__mid">
        <div className="bc-privacy__line" aria-hidden="true" />
        <Pill variant="sl" icon="check" iconColor="#B7D3E0">
          I’m in
        </Pill>
        <span className="bc-cap" style={{ maxWidth: 112 }}>
          Commitment changes access
        </span>
        <div className="bc-privacy__line bc-privacy__line--on" aria-hidden="true" />
      </div>

      <div className="bc-privacy__state bc-privacy__state--after">
        <div className="bc-privacy__head">
          <Label style={{ color: "#375169" }}>After joining</Label>
          <span className="bc-cap">Committed to the plan</span>
        </div>
        <div className="bc-privacy__phone">
          <ImageSlot image={blyssImages.privacyAfter} w={210} h={436} radius={30} tone="hero" />
        </div>
        <ul className="bc-access" style={{ borderColor: "#B7D3E0" }}>
          <AccessRow icon="eye" label="Momentum">
            <Pill variant="on" icon="users">
              N going
            </Pill>
          </AccessRow>
          <AccessRow icon="users" label="Who’s going">
            <AvatarStack colors={AVATAR_COLORS.slice(0, 5)} size={26} overlap={8} ring="#F1F7FA" />
          </AccessRow>
          <AccessRow icon="link" label="Social context">
            <span className="bc-access__lock" style={{ color: "#375169" }}>
              <Icon name="check" size={13} color="#5BA8D3" />
              Visible
            </span>
          </AccessRow>
          <AccessRow icon="chat" label="Chat">
            <span className="bc-access__lock" style={{ color: "#375169" }}>
              <Icon name="check" size={13} color="#5BA8D3" />
              Unlocked
            </span>
          </AccessRow>
        </ul>
      </div>
    </div>
  );
}

const SIGNALS: { icon: "heart" | "sparkle" | "card" | "pin" | "star"; label: string }[] = [
  { icon: "heart", label: "Interests" },
  { icon: "sparkle", label: "Vibe" },
  { icon: "card", label: "Budget" },
  { icon: "pin", label: "Distance" },
  { icon: "star", label: "Rating" },
];

function Signals() {
  return (
    <div>
      {SIGNALS.map((s, i) => (
        <div key={s.label}>
          {i > 0 && <SignalPlus />}
          <SignalPill icon={s.icon} label={s.label} />
        </div>
      ))}
    </div>
  );
}

function RuleCard({ style }: { style?: CSSProperties }) {
  return (
    <div className="bc-card" style={{ border: "2px solid #375169", borderRadius: 18, padding: 22, ...style }}>
      <div className="bc-lb" style={{ color: "#375169", lineHeight: 1.5 }}>
        Rule-based recommendations
      </div>
      <p className="bc-sm" style={{ marginTop: 10, fontSize: 14, color: "#4A4F55" }}>
        Ranks venues against the five inputs.
      </p>
    </div>
  );
}

function Venues() {
  return (
    <div>
      <Label style={{ color: "#375169" }}>Venues for you</Label>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 14 }}>
        <ImageSlot image={blyssImages.venueCard1} w={288} h={194} delay={0.5} />
        <ImageSlot image={blyssImages.venueCard2} w={288} h={194} delay={0.6} />
      </div>
    </div>
  );
}

function PersonalizationDiagram() {
  return (
    <div style={{ position: "relative", width: 1008, height: 480 }}>
      <Label style={{ position: "absolute", left: 0, top: 0 }}>What people tell us</Label>
      <Label style={{ position: "absolute", left: 400, top: 0 }}>How it decides · today</Label>
      <div style={{ position: "absolute", left: 0, top: 40, width: 1008, height: 440 }}>
      <svg width="1008" height="440" viewBox="0 0 1008 440" style={{ position: "absolute", left: 0, top: 0 }} aria-hidden="true">
        <defs>
          <marker id="bc-a5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#5BA8D3" />
          </marker>
        </defs>
        {[24, 108, 192, 276, 360].map((y) => (
          <DrawPath key={y} d={`M230,${y} C320,${y} 320,210 396,210`} stroke="#B7D3E0" delay={0.1 + (y / 360) * 0.3} />
        ))}
        <DrawPath d="M664,210 L716,210" markerEnd="url(#bc-a5)" delay={0.6} />
      </svg>
      <div style={{ position: "absolute", left: 0, top: 0, width: 230 }}>
        <Signals />
      </div>
      <RuleCard style={{ position: "absolute", left: 400, top: 132, width: 264 }} />
      <div style={{ position: "absolute", left: 720, top: -40, width: 288 }}>
        <Venues />
      </div>
      </div>
    </div>
  );
}

function PersonalizationStacked() {
  const down = (
    <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
      <Icon name="chevronDown" size={22} color="#5BA8D3" />
    </div>
  );
  return (
    <div style={{ maxWidth: 420 }}>
      <Label style={{ marginBottom: 14 }}>What people tell us</Label>
      <Signals />
      {down}
      <RuleCard />
      {down}
      <Venues />
    </div>
  );
}

export function System() {
  return (
    <section id="system" className="bc-sec bc-sec--end" tabIndex={-1}>
      <Reveal>
        <Eyebrow>04 · System</Eyebrow>
        <Heading size="sec" className="bc-head-gap">
          The experience only works if the system underneath it does too.
        </Heading>
      </Reveal>

      {/* Privacy */}
      <div className="bc-sub">
        <Reveal>
          <Eyebrow variant="sub">Privacy</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            Social proof shouldn’t require social surveillance.
          </Heading>
          <Body className="bc-body-gap bc-measure">
            Before joining, people see that a plan has momentum, not who’s in it. Saying “I’m in” changes what someone is allowed to
            access, not just what the screen shows: committing is what unlocks attendee identities, social context, and the chat.
          </Body>
        </Reveal>
        <Reveal className="bc-after-head">
          <PrivacyDiagram />
        </Reveal>
      </div>

      {/* Personalization */}
      <div className="bc-sub">
        <Reveal>
          <Eyebrow variant="sub">Personalization</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            Start with signals we can actually understand.
          </Heading>
          <Body className="bc-body-gap bc-measure">
            Rather than pretending we understood users before they had used the product, we started with what they could tell us. Interests,
            vibe, budget, distance, and ratings gave us a practical foundation for personalized discovery, with room to learn from behavior
            as usage grows.
          </Body>
        </Reveal>
        <Reveal className="bc-after-head">
          <Composition width={1008} height={480} wide={<PersonalizationDiagram />} narrow={<PersonalizationStacked />} />
        </Reveal>
        <Reveal className="bc-g bc-stack-md" style={{ marginTop: 48, gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16, maxWidth: 760 }}>
          <div style={{ border: "1px solid #375169", borderRadius: 16, padding: "20px 22px" }}>
            <Pill variant="sl">Now · built</Pill>
            <div className="bc-h bc-h-card" style={{ marginTop: 14 }}>
              Explicit signals
            </div>
            <Small style={{ marginTop: 6 }}>Interests, vibe, budget, distance, and rating, weighed by rules.</Small>
          </div>
          <div style={{ border: "1px dashed #B5B8BC", borderRadius: 16, padding: "20px 22px" }}>
            <Pill dashed>Later · planned</Pill>
            <div className="bc-h bc-h-card" style={{ marginTop: 14, color: "#6B7076" }}>
              Behavioral signals
            </div>
            <Small style={{ marginTop: 6 }}>Not built yet. Worth adding once there’s enough real usage to learn from.</Small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
