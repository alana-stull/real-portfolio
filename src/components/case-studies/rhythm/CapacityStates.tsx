import type { CSSProperties } from "react";
import { Reveal } from "../../portfolio/Reveal";
import { Kicker, Small } from "./primitives";

export type StateName = "Aligned" | "Balanced" | "Strained" | "Overloaded";

export const STATE_COLOR: Record<StateName, { dot: string; bg: string }> = {
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

/** Four-state legend beside the Recovery × Exposure matrix. Shared by the published and draft case studies. */
export function CapacityStates({ style }: { style?: CSSProperties }) {
  return (
      <div
        className="rh-grid-stack"
        style={{ marginTop: 56, ...style, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.1fr)", gap: 56, alignItems: "start" }}
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

  );
}
