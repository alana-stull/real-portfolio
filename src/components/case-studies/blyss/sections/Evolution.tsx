import { Calendar, MapPin, Sparkles, MessageCircle, Check } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, Placeholder, Pill, Small } from "../primitives";

export function Evolution() {
  return (
    <section id="evolution" className="blyss__section">
      <div
        className="bl-grid-stack"
        style={{ display: "grid", gridTemplateColumns: "minmax(0, 400px) minmax(0, 1fr)", gap: 40, alignItems: "start" }}
      >
        <div>
          <Eyebrow>02 · Origin</Eyebrow>
          <Heading size="xl" style={{ marginTop: 20 }}>
            It started with dating.
          </Heading>
          <Body style={{ marginTop: 24 }}>
            When we started Blyss in 2021, the product was focused on dating. But even then, I
            was interested in more than matching people on a screen. The harder question was
            what happened after two people wanted to connect.
          </Body>
        </div>
        <div style={{ background: "#F4F5F6", border: "1px solid var(--bl-border)", borderRadius: 20, padding: "24px 24px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <Label>Blyss Dating · archive</Label>
            <span className="bl-heading" style={{ fontSize: 32, fontWeight: 800, color: "var(--bl-grey-cool)" }}>
              2021
            </span>
          </div>
          <div className="bl-flex-stack" style={{ marginTop: 20, display: "flex", gap: 14 }}>
            <Placeholder variant="muted" style={{ width: "100%", height: 240, borderRadius: 20 }}>
              [Dating era profile screen]
            </Placeholder>
            <Placeholder variant="muted" style={{ width: "100%", height: 240, borderRadius: 20 }}>
              [Dating era screen 02]
            </Placeholder>
            <Placeholder variant="muted" style={{ width: "100%", height: 240, borderRadius: 20 }}>
              [Dating era screen 03]
            </Placeholder>
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 14, alignItems: "center" }}>
            <Placeholder variant="muted" style={{ width: 140, height: 40, borderRadius: 10, flexShrink: 0 }}>
              [2021 logo]
            </Placeholder>
            <Small xs>Original screens, unedited</Small>
          </div>
        </div>
      </div>

      {/* What changed */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>What changed</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 820 }}>
          The more we learned, the less dating looked like the whole problem.
        </Heading>

        <div
          className="bl-grid-stack"
          style={{ marginTop: 40, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 48, alignItems: "start" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Body>
              Over hundreds of conversations, the question started getting bigger. The friction
              wasn't limited to meeting romantic partners. People wanted stronger social lives,
              but turning "we should do something" into something that actually happened
              required navigating schedules, places, preferences, group chats, and commitment.
            </Body>
            <Body>We started calling that friction the coordination tax.</Body>
          </div>
          <div style={{ borderTop: "2px solid var(--bl-navy)", paddingTop: 18 }}>
            <Label style={{ color: "var(--bl-navy)" }}>THE TERM</Label>
            <Heading size="sm" style={{ marginTop: 10, color: "var(--bl-navy)" }}>
              the coordination tax
            </Heading>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Pill>
                <Calendar size={14} color="var(--bl-navy)" />
                schedules
              </Pill>
              <Pill>
                <MapPin size={14} color="var(--bl-navy)" />
                places
              </Pill>
              <Pill>
                <Sparkles size={14} color="var(--bl-navy)" />
                preferences
              </Pill>
              <Pill>
                <MessageCircle size={14} color="var(--bl-navy)" />
                group chats
              </Pill>
              <Pill>
                <Check size={14} color="var(--bl-navy)" />
                commitment
              </Pill>
            </div>
          </div>
        </div>

        {/* We thought / learned / changed */}
        <div
          className="bl-grid-stack-3"
          style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 0 }}
        >
          <ThoughtCol eyebrow="We thought" title="Connection started with finding the right person.">
            Blyss began as a dating product focused on creating more intentional matches and
            experiences.
          </ThoughtCol>
          <ThoughtCol eyebrow="We learned" title="Finding people was only part of the problem." bordered>
            Across our conversations, a broader challenge kept emerging: people wanted to spend
            time together, but turning that intention into an actual plan introduced friction of
            its own.
          </ThoughtCol>
          <ThoughtCol eyebrow="We changed" title="We expanded the problem, not just the feature set." bordered>
            Blyss evolved beyond dating to help people discover people, places, and
            possibilities, then turn them into plans that happen.
          </ThoughtCol>
        </div>
      </div>

      {/* The pivot */}
      <div className="bl-bleed" style={{ marginTop: 96, background: "var(--bl-panel)", padding: "64px 24px 72px" }}>
        <Eyebrow variant="on-white">The pivot</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 780 }}>
          Sometimes building the right product means letting go of the first one.
        </Heading>

        <div
          className="bl-grid-stack-3"
          style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 32 }}
        >
          <TimelineStage
            eyebrow="2021"
            dotColor="var(--bl-grey-cool)"
            title="Dating"
            description="Helping people form more intentional romantic connections."
            placeholderVariant="muted"
          />
          <TimelineStage
            eyebrow="2026 · Early"
            dotColor="var(--bl-powder)"
            title="Social planning"
            description="Reducing the coordination tax between wanting to hang out and actually making a plan."
            placeholderVariant="soft"
          />
          <TimelineStage
            eyebrow={<Pill variant="selected">Now</Pill>}
            dotColor="var(--bl-sky)"
            title="Social discovery"
            description="Connecting people, places, and plans to create more possibilities for life offline."
            placeholderVariant="solid"
            titleColor="var(--bl-navy)"
          />
        </div>

        <div style={{ margin: "72px auto 0", maxWidth: 720, textAlign: "center" }}>
          <div className="bl-heading" aria-hidden style={{ fontSize: 36, lineHeight: 0.5, color: "var(--bl-sky)" }}>
            "
          </div>
          <Heading size="sm" style={{ marginTop: 16, fontWeight: 600, color: "var(--bl-navy)" }}>
            The interface changed because our understanding of the problem changed.
          </Heading>
        </div>
      </div>
    </section>
  );
}

function ThoughtCol({
  eyebrow,
  title,
  bordered,
  children,
}: {
  eyebrow: string;
  title: string;
  bordered?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={bordered ? "bl-divide-left" : ""} style={{ paddingRight: 24 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div style={{ marginTop: 16, fontSize: 20, fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.015em" }}>
        {title}
      </div>
      <Body className="bl-body--sm" style={{ marginTop: 10 }}>
        {children}
      </Body>
    </div>
  );
}

function TimelineStage({
  eyebrow,
  dotColor,
  title,
  description,
  placeholderVariant,
  titleColor,
}: {
  eyebrow: React.ReactNode;
  dotColor: string;
  title: string;
  description: string;
  placeholderVariant: "muted" | "soft" | "solid";
  titleColor?: string;
}) {
  return (
    <div style={{ position: "relative", borderTop: "2px solid var(--bl-border)", paddingTop: 20, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: -7,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: dotColor,
          border: "2px solid var(--bl-panel)",
        }}
      />
      {typeof eyebrow === "string" ? <Label>{eyebrow}</Label> : eyebrow}
      <div
        style={{
          marginTop: 12,
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: titleColor ?? "var(--bl-ink)",
        }}
      >
        {title}
      </div>
      <Small style={{ marginTop: 8, fontSize: 14, minHeight: 44 }}>{description}</Small>
      <div className="bl-flex-stack" style={{ marginTop: 20, display: "flex", gap: 10, alignItems: "flex-end" }}>
        <Placeholder variant={placeholderVariant} style={{ width: "48%", height: 190, borderRadius: 18 }}>
          [Screen]
        </Placeholder>
        <Placeholder variant={placeholderVariant} style={{ width: "48%", height: 190, borderRadius: 18 }}>
          [Screen]
        </Placeholder>
      </div>
    </div>
  );
}
