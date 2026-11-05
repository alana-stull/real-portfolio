import { Reveal } from "../../../portfolio/Reveal";
import { CapacityStates } from "../../rhythm/CapacityStates";
import { Body, Eyebrow, Heading, Italic, Label, Small } from "../../rhythm/primitives";

const SIGNALS = [
  { name: "Recovery Index", body: "What you have to give: readiness, HRV, and sleep against your own baseline." },
  { name: "Exposure Index", body: "What the day asks: calendar load, tasks, and how demanding it feels." },
];

export function Approach() {
  return (
    <section id="approach" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>02 · The approach</Eyebrow>
      <Heading size="lg" className="rh-h-section rh-nowrap-wide" style={{ marginTop: 18 }}>
        Capacity isn't just how you feel. <Italic>It's what your day demands.</Italic>
      </Heading>

      <div className="rh-grid-stack" style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
        {SIGNALS.map((signal, i) => (
          <Reveal key={signal.name} delay={i * 0.1} className="rh-card" style={{ padding: "22px 26px" }}>
            <Label>{signal.name}</Label>
            <Body style={{ marginTop: 8, fontSize: 15 }}>{signal.body}</Body>
          </Reveal>
        ))}
      </div>

      <CapacityStates style={{ marginTop: 48 }} />

      <Small style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid var(--rh-border)" }}>
        <b style={{ color: "var(--rh-ink)", fontWeight: 600 }}>Capacity shouldn't depend on owning a
        wearable.</b> Without one, Rhythm works from check-ins, calendar data, and tasks.
      </Small>
    </section>
  );
}
