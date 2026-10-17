import { Users, MapPin, Sparkles, Calendar, Clock, LogIn, Gauge, Lock } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, Placeholder, Card, Pill, AvatarStack, Small } from "../primitives";

export function Experience() {
  return (
    <section id="experience" className="blyss__section">
      <Eyebrow>04 · Experience</Eyebrow>
      <Heading size="xl" style={{ marginTop: 20, maxWidth: 920 }}>
        Start with whatever you <Highlight>already know.</Highlight>
      </Heading>
      <div style={{ marginTop: 28, maxWidth: 560, display: "flex", flexDirection: "column", gap: 14 }}>
        <Body>
          Sometimes you know who you want to see. Sometimes you know where you want to go.
          Sometimes all you have is an idea.
        </Body>
        <Body>Blyss supports all three without creating three separate products.</Body>
      </div>

      {/* Three entry paths */}
      <div
        className="bl-grid-stack-3"
        style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 32 }}
      >
        <EntryPath icon={<Users size={18} color="var(--bl-navy)" />} pathNum="Path 01" eyebrow="I have people" title="Start with the group." placeholder="[Start from people · group screen]" />
        <EntryPath icon={<MapPin size={18} color="var(--bl-navy)" />} pathNum="Path 02" eyebrow="I have a place" title="Start with somewhere worth going." placeholder="[Start from a place · venue screen]" />
        <EntryPath icon={<Sparkles size={18} color="var(--bl-navy)" />} pathNum="Path 03" eyebrow="I have an idea" title="Start with what you feel like doing." placeholder="[Start from an idea · prompt screen]" />
      </div>

      <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: 240,
            boxSizing: "border-box",
            background: "var(--bl-navy)",
            borderRadius: 18,
            padding: "16px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 10px 30px rgba(55,81,105,0.25)",
          }}
        >
          <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Calendar size={18} color="var(--bl-powder)" />
            <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", color: "#fff" }}>ONE PLAN</span>
          </span>
          <AvatarStack count={3} size={22} />
        </div>
      </div>

      {/* Availability before another group chat */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>Product decision</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 820 }}>
          Availability before another group chat.
        </Heading>
        <div className="bl-grid-stack" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          <Body>
            Rather than requiring live calendar access at launch, Blyss starts with something
            lighter: people set recurring windows when they're generally free.
          </Body>
          <Body>
            When someone creates a plan, Blyss compares those preferences across the group and
            surfaces how many people are available for each time, including a Best Match when
            there's a clear winner.
          </Body>
        </div>

        <div
          className="bl-bleed bl-flex-stack"
          style={{ marginTop: 48, background: "var(--bl-panel)", padding: "48px 24px", display: "flex", gap: 32, alignItems: "flex-start" }}
        >
          <div>
            <Label style={{ color: "var(--bl-navy)" }}>Onboarding · recurring windows</Label>
            <Placeholder variant="solid" style={{ marginTop: 14, width: 240, height: 480, borderRadius: 30 }}>
              [Availability onboarding screen]
            </Placeholder>
            <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Pill>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--bl-sky)" }} />
                FREE
              </Pill>
              <Pill>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--bl-navy)" }} />
                BUSY
              </Pill>
              <Pill>
                <span style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px dashed var(--bl-grey)" }} />
                UNSET
              </Pill>
            </div>
          </div>
          <div>
            <Label style={{ color: "var(--bl-navy)" }}>Plan creation · group match</Label>
            <div style={{ marginTop: 14, position: "relative" }}>
              <Placeholder variant="solid" style={{ width: 240, height: 480, borderRadius: 30 }}>
                [Planning interface · availability matching]
              </Placeholder>
              <Card
                style={{
                  marginTop: -60,
                  marginLeft: 16,
                  position: "relative",
                  width: 210,
                  padding: 12,
                  boxShadow: "0 8px 24px rgba(55,81,105,0.12)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Pill variant="amber">
                    <Clock size={14} />
                    [Time]
                  </Pill>
                  <Pill variant="selected">Best Match</Pill>
                </div>
                <div style={{ marginTop: 10, display: "flex", gap: 8, alignItems: "center" }}>
                  <AvatarStack count={4} size={22} dashedLast />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--bl-navy)" }}>4 of 5 free</span>
                </div>
              </Card>
            </div>
            <Small xs style={{ marginTop: 16 }}>
              Bottom sheet · layered over the plan
            </Small>
          </div>
          <div style={{ alignSelf: "center", width: "100%", maxWidth: 300 }}>
            <div className="bl-heading" aria-hidden style={{ fontSize: 36, lineHeight: 0.6, color: "var(--bl-sky)" }}>
              "
            </div>
            <Heading size="sm" style={{ marginTop: 8 }}>
              Not answering isn't the same as being unavailable.
            </Heading>
          </div>
        </div>
      </div>

      {/* Commitment */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>Commitment</Eyebrow>
        <Heading size="xl" style={{ marginTop: 20, maxWidth: 900 }}>
          "I'm in" needed to <Highlight>mean something.</Highlight>
        </Heading>
        <div style={{ marginTop: 24, maxWidth: 600, display: "flex", flexDirection: "column", gap: 14 }}>
          <Body>
            Getting everyone free at the same time doesn't guarantee a plan will happen. So I
            started thinking about commitment itself as something the product could design for.
          </Body>
          <Body>Blyss supports different social contracts depending on the plan.</Body>
        </div>

        <div
          className="bl-grid-stack-3"
          style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid var(--bl-border)" }}
        >
          <CommitmentTier icon={<LogIn size={20} color="var(--bl-navy)" />} label="OPEN" title="Join if you're in." action={<Pill variant="on">Join</Pill>} />
          <CommitmentTier icon={<Gauge size={20} color="var(--bl-navy)" />} label="THRESHOLD" title="This happens when enough people commit." bordered action={
            <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <AvatarStack count={3} size={24} />
              <Pill>[n] of [min] in</Pill>
            </span>
          } />
          <CommitmentTier icon={<Lock size={20} color="var(--bl-navy)" />} label="SECURE FIRST" title="It's happening. Spots are limited." bordered action={
            <Pill variant="amber">
              <Clock size={14} />
              Spots limited
            </Pill>
          } />
        </div>

        {/* Interface vs system matrix */}
        <div style={{ marginTop: 32, overflowX: "auto" }}>
          <div style={{ minWidth: 640 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "160px repeat(3, minmax(140px, 1fr))",
                background: "#fff",
                border: "1px solid var(--bl-border)",
                borderRadius: "16px 16px 0 0",
                minHeight: 88,
              }}
            >
              <MatrixCell><Label>Interface</Label><Small style={{ marginTop: 6 }}>what the person sees</Small></MatrixCell>
              <MatrixCell border><MatrixLabel>[What they see · Open]</MatrixLabel></MatrixCell>
              <MatrixCell border><MatrixLabel>[What they see · Threshold]</MatrixLabel></MatrixCell>
              <MatrixCell border><MatrixLabel>[What they see · Secure first]</MatrixLabel></MatrixCell>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "160px repeat(3, minmax(140px, 1fr))",
                background: "var(--bl-navy)",
                border: "1px solid var(--bl-navy)",
                borderRadius: "0 0 16px 16px",
                minHeight: 88,
              }}
            >
              <MatrixCell><Label style={{ color: "#fff" }}>System</Label><Small style={{ marginTop: 6, color: "var(--bl-powder)" }}>what Blyss enforces</Small></MatrixCell>
              <MatrixCell border dark><MatrixLabel dark>[Enforced rule · Open]</MatrixLabel></MatrixCell>
              <MatrixCell border dark><MatrixLabel dark>[Enforced rule · Threshold]</MatrixLabel></MatrixCell>
              <MatrixCell border dark><MatrixLabel dark>[Enforced rule · Secure first]</MatrixLabel></MatrixCell>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EntryPath({
  icon,
  pathNum,
  eyebrow,
  title,
  placeholder,
}: {
  icon: React.ReactNode;
  pathNum: string;
  eyebrow: string;
  title: string;
  placeholder: string;
}) {
  return (
    <div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "var(--bl-sky-pale)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
        <Label>{pathNum}</Label>
      </div>
      <div style={{ marginTop: 14, fontSize: 13, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--bl-navy)" }}>
        {eyebrow}
      </div>
      <Heading size="xs" style={{ marginTop: 6 }}>
        {title}
      </Heading>
      <Placeholder style={{ marginTop: 18, height: 340, borderRadius: 28 }}>{placeholder}</Placeholder>
    </div>
  );
}

function CommitmentTier({
  icon,
  label,
  title,
  action,
  bordered,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  action: React.ReactNode;
  bordered?: boolean;
}) {
  return (
    <div className={bordered ? "bl-divide-left" : ""} style={{ padding: "24px 20px 28px" }}>
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "var(--bl-sky-pale)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
      <div style={{ marginTop: 16, fontSize: 13, fontWeight: 800, letterSpacing: "0.16em", color: "var(--bl-navy)" }}>{label}</div>
      <Heading size="xs" style={{ marginTop: 8 }}>
        {title}
      </Heading>
      <div style={{ marginTop: 16 }}>{action}</div>
    </div>
  );
}

function MatrixCell({
  children,
  border,
  dark,
}: {
  children: React.ReactNode;
  border?: boolean;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        padding: 18,
        borderLeft: border ? `1px solid ${dark ? "rgba(255,255,255,0.18)" : "var(--bl-border)"}` : undefined,
      }}
    >
      {children}
    </div>
  );
}

function MatrixLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: dark ? "var(--bl-powder)" : "var(--bl-grey)",
      }}
    >
      {children}
    </span>
  );
}
