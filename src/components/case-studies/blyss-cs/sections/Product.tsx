import type { ReactNode } from "react";
import { blyssImages, type BlyssImage } from "../images";
import {
  AVATAR_COLORS,
  AvatarStack,
  Body,
  Composition,
  DrawPath,
  Eyebrow,
  Heading,
  Hi,
  Icon,
  IconDot,
  ImageSlot,
  Label,
  Pill,
  Reveal,
  Small,
  type IconName,
} from "../primitives";
import { OnePlanCard } from "../ui";

const PATHS: { n: string; icon: IconName; kicker: string; title: string; image: BlyssImage; left: number; top: number }[] = [
  { n: "01", icon: "users", kicker: "I have people", title: "Start with the group.", image: blyssImages.pathPeople, left: 0, top: 0 },
  { n: "02", icon: "pin", kicker: "I have a place", title: "Start with somewhere worth going.", image: blyssImages.pathPlace, left: 354, top: 60 },
  { n: "03", icon: "sparkle", kicker: "I have an idea", title: "Start with what you feel like doing.", image: blyssImages.pathIdea, left: 708, top: 120 },
];

function PathBlock({ path }: { path: (typeof PATHS)[number] }) {
  return (
    <div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <IconDot name={path.icon} size={36} iconSize={18} />
        <span className="bc-lb">Path {path.n}</span>
      </div>
      <div className="bc-caps" style={{ marginTop: 16, fontSize: 13 }}>
        {path.kicker}
      </div>
      <h4 className="bc-h" style={{ marginTop: 8, fontSize: 24, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
        {path.title}
      </h4>
      <div style={{ marginTop: 22 }}>
        <ImageSlot image={path.image} w={220} h={456} radius={34} />
      </div>
    </div>
  );
}

function PathsDiagram() {
  return (
    <div style={{ position: "relative", width: 1008, height: 900 }}>
      <svg width="1008" height="900" viewBox="0 0 1008 900" style={{ position: "absolute", left: 0, top: 0 }} aria-hidden="true">
        <DrawPath d="M110,592 C110,760 490,720 494,800" delay={0.3} />
        <DrawPath d="M464,684 C464,760 504,770 504,800" delay={0.3} />
        <DrawPath d="M818,750 C818,810 650,800 618,812" delay={0.3} />
      </svg>
      {PATHS.map((p) => (
        <div key={p.n} style={{ position: "absolute", left: p.left, top: p.top, width: 300 }}>
          <PathBlock path={p} />
        </div>
      ))}
      <OnePlanCard style={{ position: "absolute", left: 384, top: 800 }} />
    </div>
  );
}

function PathsStacked() {
  return (
    <div>
      <div className="bc-g" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 40 }}>
        {PATHS.map((p) => (
          <PathBlock key={p.n} path={p} />
        ))}
      </div>
      <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "20px 0 12px" }}>
        <Icon name="chevronDown" size={22} color="#5BA8D3" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <OnePlanCard />
      </div>
    </div>
  );
}

function DecisionHead({ n, children }: { n: string; children: ReactNode }) {
  return (
    <>
      <Eyebrow variant="pill">Decision {n}</Eyebrow>
      <Heading as="h3" size="sub" className="bc-head-gap">
        {children}
      </Heading>
    </>
  );
}

const COMMITMENT: { icon: IconName; kicker: string; title: string; footer: ReactNode }[] = [
  { icon: "door", kicker: "OPEN", title: "Join if you’re in.", footer: <Pill variant="on">Join</Pill> },
  {
    icon: "gauge",
    kicker: "THRESHOLD",
    title: "This happens when enough people commit.",
    footer: (
      <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <AvatarStack colors={AVATAR_COLORS.slice(0, 3)} size={24} overlap={8} />
        <Pill>[n] of [min] in</Pill>
      </span>
    ),
  },
  {
    icon: "lock",
    kicker: "SECURE FIRST",
    title: "It’s happening. Spots are limited.",
    footer: (
      <Pill variant="am" icon="clock">
        Spots limited
      </Pill>
    ),
  },
];

const FLOW = [
  { lb: "01 · Plan", title: "Someone makes a plan", dark: true },
  { lb: "02 · Real life", title: "People actually go" },
  { lb: "03 · Post / recap", title: "The memory traces back to the plan" },
];

export function Product() {
  return (
    <section id="product" className="bc-sec" tabIndex={-1}>
      <Reveal>
        <Eyebrow>03 · Product</Eyebrow>
        <Heading size="sec" className="bc-head-gap">
          Four decisions that shaped the product.
        </Heading>
        <Body className="bc-body-gap bc-measure">
          Each one started with how people actually make plans, then became an interaction, and eventually a rule in the system.
        </Body>
      </Reveal>

      {/* Decision 01 */}
      <div className="bc-sub">
        <Reveal>
          <DecisionHead n="01">Start planning with whatever you know.</DecisionHead>
          <div className="bc-cols2 bc-body-gap">
            <Body>People rarely begin with every detail figured out. Sometimes it’s a group, sometimes a place, sometimes just a feeling.</Body>
            <Body>
              Blyss lets someone start from any of the three and builds the rest of the plan from there, without becoming three separate
              products.
            </Body>
          </div>
        </Reveal>
        <Reveal className="bc-after-head">
          <Composition width={1008} height={900} wide={<PathsDiagram />} narrow={<PathsStacked />} />
        </Reveal>
      </div>

      {/* Decision 02 */}
      <div className="bc-sub">
        <Reveal>
          <DecisionHead n="02">Availability before another group chat.</DecisionHead>
          <div className="bc-cols2 bc-body-gap">
            <Body>
              Finding a time shouldn’t mean everyone explaining their schedule again. Instead of requiring calendar access, people set
              recurring windows when they’re usually free.
            </Body>
            <Body>When someone plans, Blyss finds the overlap across the group and surfaces a Best Match when there’s a clear winner.</Body>
          </div>
        </Reveal>
        <div className="bc-bleed bc-band-tint bc-after-head" style={{ paddingTop: "var(--bc-gap-y)", paddingBottom: "var(--bc-gap-y)" }}>
          <Reveal className="bc-avail">
            <div>
              <Label style={{ color: "#375169" }}>Onboarding · recurring windows</Label>
              <div style={{ marginTop: 16 }}>
                <ImageSlot image={blyssImages.availabilityOnboarding} w={270} h={560} radius={34} tone="white" />
              </div>
              <div style={{ marginTop: 20, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Pill>
                  <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "#5BA8D3" }} />
                  FREE
                </Pill>
                <Pill>
                  <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", background: "#375169" }} />
                  BUSY
                </Pill>
                <Pill>
                  <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px dashed #6B7076" }} />
                  UNSET
                </Pill>
              </div>
            </div>
            <div>
              <Label style={{ color: "#375169" }}>Plan creation · group match</Label>
              <div style={{ marginTop: 16, position: "relative", maxWidth: 270 }}>
                <ImageSlot image={blyssImages.availabilityMatching} w={270} h={560} radius={34} tone="white" />
              </div>
            </div>
            <div className="bc-avail__quote">
              <div className="bc-h" aria-hidden="true" style={{ fontSize: 72, lineHeight: 0.6, color: "#5BA8D3" }}>
                “
              </div>
              <p className="bc-h bc-h-ins" style={{ marginTop: 8 }}>
                Not answering isn’t the same as being unavailable.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decision 03 */}
      <div className="bc-sub">
        <Reveal className="bc-g bc-stack-md" style={{ gridTemplateColumns: "minmax(0, 1fr) 300px", gap: 56, alignItems: "start" }}>
          <div>
            <DecisionHead n="03">
              “I’m in” should <Hi>mean something.</Hi>
            </DecisionHead>
            <div className="bc-body-gap" style={{ maxWidth: 440, display: "flex", flexDirection: "column", gap: 16 }}>
              <Body>
                Group chats make it easy to say you’re interested without committing. Being free at the same time still doesn’t make a plan
                happen.
              </Body>
              <Body>So Blyss treats commitment as something to design for, with different social contracts for different kinds of plans.</Body>
            </div>
          </div>
          {/* Top of the phone lines up with the title (below the Decision pill) */}
          <div style={{ paddingTop: 48 }}>
            <ImageSlot image={blyssImages.commitmentSettings} w={300} h={627} radius={40} />
          </div>
        </Reveal>
        <Reveal className="bc-cols3 bc-after-head" style={{ borderTop: "1px solid #E3E4E6" }}>
          {COMMITMENT.map((c, i) => (
            <div key={c.kicker} style={{ padding: i === 0 ? "28px 24px 32px 0" : "28px 24px 32px 28px" }}>
              <IconDot name={c.icon} size={40} iconSize={20} />
              <div className="bc-caps" style={{ marginTop: 18, fontSize: 13, letterSpacing: "0.16em" }}>
                {c.kicker}
              </div>
              <h4 className="bc-h bc-h-card" style={{ marginTop: 10 }}>
                {c.title}
              </h4>
              <div style={{ marginTop: 18 }}>{c.footer}</div>
            </div>
          ))}
        </Reveal>
      </div>

      {/* Decision 04 */}
      <div className="bc-sub">
        <Reveal>
          <DecisionHead n="04">The experience comes before the post.</DecisionHead>
          <div className="bc-cols2 bc-body-gap">
            <Body>Blyss isn’t meant to be another feed competing for attention. A recommendation only matters if someone goes.</Body>
            <Body>So posts and recaps come from plans that happened. The plan is the product; the social layer is what’s left after it.</Body>
          </div>
        </Reveal>
        <Reveal className="bc-flow bc-after-head">
          {FLOW.map((f, i) => (
            <FlowCard key={f.lb} {...f} arrow={i < FLOW.length - 1} />
          ))}
        </Reveal>
        <Reveal className="bc-rule" style={{ marginTop: 32 }}>
          <div style={{ padding: "40px 56px 40px 40px", background: "#FFFFFF" }}>
            <Eyebrow variant="sub">Product principle</Eyebrow>
            <div className="bc-h bc-h-ins" style={{ marginTop: 20 }}>
              “The plan is the product.”
            </div>
            <Small style={{ marginTop: 14, fontSize: 15 }}>Real-world activity should create the social layer.</Small>
          </div>
          <div style={{ padding: "40px 40px 40px 56px", background: "#EAF3F8" }}>
            <Eyebrow variant="sub">System rule</Eyebrow>
            <div className="bc-code" style={{ marginTop: 22, fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 600, color: "#375169", overflowWrap: "anywhere" }}>
              posts.plan_id → required
            </div>
            <Small style={{ marginTop: 14, fontSize: 15, color: "#4A5F73" }}>Social content has to trace back to a real plan.</Small>
          </div>
          <div className="bc-rule__link" aria-hidden="true">
            <Icon name="link" size={18} color="#5BA8D3" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FlowCard({ lb, title, dark, arrow }: { lb: string; title: string; dark?: boolean; arrow: boolean }) {
  return (
    <>
      <div
        style={{
          borderRadius: 20,
          padding: 24,
          background: dark ? "#375169" : "#FFFFFF",
          border: dark ? undefined : "1px solid #E3E4E6",
        }}
      >
        <div className="bc-lb" style={{ color: dark ? "#B7D3E0" : "#6B7076" }}>
          {lb}
        </div>
        <div className="bc-h bc-h-card" style={{ marginTop: 10, color: dark ? "#FFFFFF" : "#333333" }}>
          {title}
        </div>
      </div>
      {arrow && (
        <div className="bc-flow__arrow" aria-hidden="true">
          →
        </div>
      )}
    </>
  );
}
