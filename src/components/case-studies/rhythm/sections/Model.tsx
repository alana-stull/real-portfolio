import { Reveal } from "../../../portfolio/Reveal";
import { Body, Eyebrow, Heading, Italic, Kicker, Label, Small, Tag } from "../primitives";

const SIGNALS = [
  {
    name: "Recovery Index",
    question: "What are you able to give?",
    body: "Physiological signals like readiness, HRV, and sleep, read against your own baseline.",
    tags: ["readiness", "HRV", "sleep"],
  },
  {
    name: "Exposure Index",
    question: "What is the day asking from you?",
    body: "Commitments, calendar load, tasks, and how demanding the day feels.",
    tags: ["calendar", "tasks", "perceived effort"],
  },
];

type StateName = "Aligned" | "Balanced" | "Strained" | "Overloaded";

const STATE_COLOR: Record<StateName, { dot: string; bg: string }> = {
  Aligned: { dot: "var(--rh-aligned)", bg: "rgba(91, 143, 104, 0.14)" },
  Balanced: { dot: "var(--rh-balanced)", bg: "rgba(74, 134, 200, 0.13)" },
  Strained: { dot: "var(--rh-strained)", bg: "rgba(216, 172, 53, 0.18)" },
  Overloaded: { dot: "var(--rh-overloaded)", bg: "rgba(192, 57, 43, 0.13)" },
};

// Mirrors backend/engine/assess.py (engine 2.1): recovery band × exposure band → state.
const EXPOSURE_BANDS = ["Light", "Moderate", "Heavy"];
const MATRIX: { recovery: string; states: StateName[] }[] = [
  { recovery: "High", states: ["Aligned", "Aligned", "Balanced"] },
  { recovery: "Moderate", states: ["Aligned", "Balanced", "Strained"] },
  { recovery: "Low", states: ["Balanced", "Strained", "Overloaded"] },
];

const STATES: { name: StateName; description: string }[] = [
  { name: "Aligned", description: "More available than the day is asking." },
  { name: "Balanced", description: "Capacity and demand are manageable." },
  { name: "Strained", description: "Demand is starting to outpace what's available." },
  { name: "Overloaded", description: "Low capacity on a heavy day." },
];

const PROCESS = [
  { step: "01", title: "Sync", description: "Pull in body, calendar, and check-in signals" },
  { step: "02", title: "Score", description: "Estimate recovery and exposure from evidence" },
  { step: "03", title: "Align", description: "Map them to a Rhythm state" },
  { step: "04", title: "Interpret", description: "Turn the state into guidance" },
  { step: "05", title: "Respond", description: "Deliver it in the app, voice, or light" },
];

export function Model() {
  return (
    <section id="model" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>02 · The model</Eyebrow>
      <Heading size="lg" className="rh-nowrap-wide" style={{ marginTop: 18 }}>
        Capacity needed a language the system could <Italic>understand.</Italic>
      </Heading>
      <Body style={{ marginTop: 22 }}>
        Rhythm reads capacity as the relationship between two signals: what you have available,
        and what your life is asking from you.
      </Body>

      <div className="rh-grid-stack" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
        {SIGNALS.map((signal, i) => (
          <Reveal key={signal.name} delay={i * 0.1} className="rh-card" style={{ padding: "24px 28px" }}>
            <Label>{signal.name}</Label>
            <Heading size="xs" as="h3" style={{ marginTop: 10 }}>
              {signal.question}
            </Heading>
            <Body style={{ marginTop: 10, fontSize: 15 }}>{signal.body}</Body>
            <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {signal.tags.map((tag) => (
                <Tag key={tag} variant="pill" style={{ background: "var(--rh-panel)", borderColor: "var(--rh-panel)", height: 28, fontSize: 12 }}>
                  {tag}
                </Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* State classification */}
      <div
        className="rh-grid-stack"
        style={{ marginTop: 56, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: 56, alignItems: "start" }}
      >
        <div>
          <Kicker style={{ color: "var(--rh-ink)" }}>Four capacity states</Kicker>
          <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0, display: "grid", gap: 14 }}>
            {STATES.map((state) => (
              <li key={state.name} style={{ display: "grid", gridTemplateColumns: "14px 110px minmax(0, 1fr)", gap: 10, alignItems: "baseline" }}>
                <span aria-hidden style={{ width: 10, height: 10, borderRadius: "50%", background: STATE_COLOR[state.name].dot }} />
                <span style={{ fontWeight: 700, fontSize: 15 }}>{state.name}</span>
                <Small>{state.description}</Small>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
        <figure style={{ margin: 0 }}>
          <div className="rh-matrix" role="table" aria-label="Recovery band by exposure band determines the Rhythm state">
            <div role="row" style={{ display: "contents" }}>
              <div className="rh-matrix__axis" role="columnheader">Recovery ↓ Exposure →</div>
              {EXPOSURE_BANDS.map((band) => (
                <div key={band} className="rh-matrix__axis" role="columnheader" style={{ justifyContent: "center" }}>
                  {band}
                </div>
              ))}
            </div>
            {MATRIX.map((row) => (
              <div key={row.recovery} role="row" style={{ display: "contents" }}>
                <div className="rh-matrix__axis" role="rowheader">{row.recovery}</div>
                {row.states.map((state, i) => (
                  <div key={i} role="cell" className="rh-matrix__cell" style={{ background: STATE_COLOR[state].bg }}>
                    <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: STATE_COLOR[state].dot, flexShrink: 0 }} />
                    {state}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <figcaption style={{ marginTop: 12 }}>
            <Small xs>Thresholds are provisional and still being tuned against real days.</Small>
          </figcaption>
        </figure>
        </Reveal>
      </div>

      {/* How the system runs it */}
      <Kicker style={{ marginTop: 64, color: "var(--rh-ink)" }}>How the system runs it</Kicker>
      <div
        className="rh-grid-stack"
        style={{ marginTop: 22, position: "relative", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 24 }}
      >
        <div className="rh-hide-mobile" style={{ position: "absolute", left: 0, right: 0, top: 7, height: 1, background: "var(--rh-accent)", opacity: 0.55 }} />
        {PROCESS.map((item, i) => (
          <div key={item.step} style={{ position: "relative" }}>
            <span
              style={{
                display: "block",
                boxSizing: "border-box",
                width: 15,
                height: 15,
                borderRadius: "50%",
                border: "2px solid var(--rh-accent)",
                background: i === PROCESS.length - 1 ? "var(--rh-accent)" : "var(--rh-bg)",
              }}
            />
            <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "baseline" }}>
              <Label>{item.step}</Label>
              <Heading size="xs" as="span">
                {item.title}
              </Heading>
            </div>
            <Small style={{ marginTop: 6 }}>{item.description}</Small>
          </div>
        ))}
      </div>

      {/* Principle: signals from wherever they exist */}
      <div style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid var(--rh-border)" }}>
        <Heading size="xs" as="h3">
          Your capacity shouldn't depend on <Italic>owning a wearable.</Italic>
        </Heading>
        <Small style={{ marginTop: 8 }}>
          The engine can already reach a state from check-ins, calendar, and tasks alone. I'm now
          validating how well that holds up day to day.
        </Small>
        <Reveal className="rh-signal-row" style={{ marginTop: 18 }}>
          <SignalGroup label="Connected" items={["Oura", "Apple Health", "Apple Calendar"]} />
          <span aria-hidden className="rh-signal-row__op">+</span>
          <SignalGroup label="Self-reported" items={["Energy", "How rested", "Perceived demand"]} />
          <span aria-hidden className="rh-signal-row__op">→</span>
          <Tag variant="solid" style={{ color: "var(--rh-white)" }}>capacity in context</Tag>
        </Reveal>
      </div>
    </section>
  );
}

function SignalGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rh-signal-row__group">
      <Label>{label}</Label>
      {items.map((item) => (
        <Tag key={item} variant="pill" style={{ background: "var(--rh-panel)", borderColor: "var(--rh-panel)" }}>
          {item}
        </Tag>
      ))}
    </div>
  );
}
