import { Fragment } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { Body, Editorial, Eyebrow, Heading, Italic, Label, Small } from "../primitives";

const PIPELINE = [
  { label: "Signals", detail: "Body, calendar, check-ins", tone: "ink" as const },
  { label: "Capacity engine", detail: "Rules decide the state", tone: "dark" as const },
  { label: "Context", detail: "State, priorities, open time", tone: "ink" as const },
  { label: "Interpretation", detail: "AI writes the guidance", tone: "accent" as const },
  { label: "Response", detail: "App, voice, light", tone: "ink" as const },
];

const DECISIONS = [
  {
    title: "Deterministic by design",
    body: "Capacity states are calculated through defined rules, keeping AI interpretation separate from classification.",
  },
  {
    title: "Context over isolated data",
    body: "Wearable signals, personal check-ins, and daily demands contribute to a more complete understanding of capacity.",
  },
  {
    title: "Built across experiences",
    body: "A shared backend supports Rhythm's iOS and web experiences, with additional prototypes exploring ambient and voice interactions.",
  },
];

const STACK = [
  { label: "Frontend", items: "Expo · React Native · React · TypeScript" },
  { label: "Backend + AI", items: "Python · FastAPI · Supabase · OpenAI" },
  { label: "Integrations", items: "Oura · Apple Health · Apple Calendar" },
  { label: "Prototyping", items: "Electron · Raspberry Pi · NeoPixel · ElevenLabs" },
];

export function UnderTheHood() {
  return (
    <section id="hood" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>04 · Under the hood</Eyebrow>
      <Heading size="xl" style={{ marginTop: 18 }}>
        The model determines the state. <Italic>AI helps make sense of it.</Italic>
      </Heading>

      {/* Architecture */}
      <figure style={{ margin: "48px 0 0" }}>
        <Reveal>
        <ol className="rh-pipeline">
          {PIPELINE.map((stage, i) => (
            <Fragment key={stage.label}>
              {i > 0 && (
                <li aria-hidden className="rh-pipeline__arrow">
                  →
                </li>
              )}
              <li className={`rh-pipeline__step rh-pipeline__step--${stage.tone}`}>
                <span className="rh-pipeline__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="rh-pipeline__label">{stage.label}</span>
                <span className="rh-pipeline__detail">{stage.detail}</span>
              </li>
            </Fragment>
          ))}
        </ol>
        </Reveal>
        <div className="rh-grid-stack rh-hide-mobile" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "3fr 2fr", gap: 24 }}>
          <Label style={{ borderTop: "1px solid var(--rh-ink)", paddingTop: 8 }}>Deterministic</Label>
          <Label style={{ borderTop: "1px dashed var(--rh-accent)", paddingTop: 8 }}>Generative</Label>
        </div>
        <figcaption>
          <Editorial size="md" style={{ marginTop: 32 }}>
            Rhythm calculates capacity states using a deterministic model. AI then interprets that
            context to provide personalized guidance, rather than determining the state itself.
          </Editorial>
        </figcaption>
      </figure>

      {/* Key decisions */}
      <ol
        className="rh-grid-stack-3"
        style={{ listStyle: "none", margin: "64px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 40 }}
      >
        {DECISIONS.map((d, i) => (
          <li key={d.title} style={{ borderTop: "1px solid var(--rh-ink)", paddingTop: 18 }}>
            <Label>{String(i + 1).padStart(2, "0")}</Label>
            <h3 style={{ margin: "8px 0 0", fontSize: 17, fontWeight: 600, lineHeight: 1.35, color: "var(--rh-ink)" }}>{d.title}</h3>
            <Small style={{ marginTop: 6 }}>{d.body}</Small>
          </li>
        ))}
      </ol>

      {/* Stack */}
      <dl
        className="rh-grid-stack"
        style={{ margin: "56px 0 0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24, paddingTop: 20, borderTop: "1px solid var(--rh-border)" }}
      >
        {STACK.map((row) => (
          <div key={row.label}>
            <dt className="rh-label">{row.label}</dt>
            <dd className="rh-small" style={{ margin: "6px 0 0", color: "var(--rh-ink)" }}>
              {row.items}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
