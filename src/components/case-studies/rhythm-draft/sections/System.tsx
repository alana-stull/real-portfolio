import { Fragment } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { Editorial, Eyebrow, Heading, Italic, Label } from "../../rhythm/primitives";

const PIPELINE = [
  { label: "Signals", detail: "Body, calendar, check-ins", tone: "ink" as const },
  { label: "Capacity engine", detail: "Rules decide the state", tone: "dark" as const },
  { label: "Context", detail: "State, priorities, open time", tone: "ink" as const },
  { label: "AI interpretation", detail: "Puts it into words", tone: "accent" as const },
  { label: "Response", detail: "App, voice, light", tone: "ink" as const },
];

const STACK = [
  { label: "Frontend", items: "Expo · React Native · React · TypeScript" },
  { label: "Backend + AI", items: "Python · FastAPI · Supabase · OpenAI" },
  { label: "Integrations", items: "Oura · Apple Health · Apple Calendar" },
  { label: "Prototyping", items: "Electron · Raspberry Pi · NeoPixel · ElevenLabs" },
];

export function System() {
  return (
    <section id="system" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>04 · The system</Eyebrow>
      <Heading size="lg" className="rh-h-section rh-nowrap-wide" style={{ marginTop: 18 }}>
        The model determines the state. <Italic>AI helps make sense of it.</Italic>
      </Heading>

      <figure style={{ margin: "44px 0 0" }}>
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
            Rules determine the capacity state. AI uses that state and the day's context to make the
            guidance more personal and actionable, without changing the classification.
          </Editorial>
        </figcaption>
      </figure>

      <dl
        className="rh-grid-stack"
        style={{ margin: "48px 0 0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 24, paddingTop: 20, borderTop: "1px solid var(--rh-border)" }}
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
