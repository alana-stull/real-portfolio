import type { ReactNode } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { SectionHead, Swatch, Pill } from "../ui";

type Lane = "rules" | "ai" | "human";

const LANE_LABEL: Record<Lane, string> = { rules: "Rules", ai: "Claude", human: "Human" };
const LANE_CLASS: Record<Lane, string> = { rules: "", ai: "dil-lane--ai", human: "dil-lane--hu" };
const LANE_COLOR: Record<Lane, string | undefined> = { rules: undefined, ai: "var(--dil-or-ink)", human: "var(--dil-ink)" };

function Arrow() {
  return (
    <svg className="dil-arrow" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" />
    </svg>
  );
}

const EXTRACT = ["#1F4470", "#E07B00", "#2B5A8F", "#16161A", "#9FB4CC", "#244C7A", "#E07B00", "#1F4470", "#16161A", "#1F4470", "#9FB4CC", "#F1A54A"];

function Group({ colors, border }: { colors: string[]; border: string }) {
  return (
    <div style={{ display: "flex", gap: 5, padding: 6, border: `1.5px dashed ${border}`, borderRadius: 8 }}>
      {colors.map((c, i) => (
        <Swatch key={i} color={c} />
      ))}
    </div>
  );
}

const STEPS: { lane: Lane; title: string; body: string; node: ReactNode; last?: boolean }[] = [
  {
    lane: "rules",
    title: "Extract",
    body: "Every color, size, and component in the code.",
    node: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 18px)", gap: 7 }}>
        {EXTRACT.map((c, i) => (
          <Swatch key={i} color={c} />
        ))}
      </div>
    ),
  },
  {
    lane: "rules",
    title: "Cluster",
    body: "Group values that look alike to spot patterns and drift.",
    node: (
      <div style={{ display: "grid", gap: 8, justifyItems: "center" }}>
        <Group colors={["#1F4470", "#244C7A", "#2B5A8F"]} border="#9FB4CC" />
        <div style={{ display: "flex", gap: 8 }}>
          <Group colors={["#E07B00", "#F1A54A"]} border="#D6D2C8" />
          <Group colors={["#16161A", "#16161A"]} border="#D6D2C8" />
        </div>
      </div>
    ),
  },
  {
    lane: "ai",
    title: "Reason",
    body: "Claude judges intent from grouped findings.",
    node: (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
          <Swatch color="#1F4470" />
          <Swatch color="#244C7A" />
          <Swatch color="#2B5A8F" />
        </div>
        <p style={{ margin: "12px 0 0", font: "600 15px/1.2 var(--dil-sans)" }}>Same intent?</p>
        <p style={{ margin: "4px 0 0", font: "500 13px/1.2 var(--dil-sans)", color: "var(--dil-or-ink)" }}>or a real variant</p>
      </div>
    ),
  },
  {
    lane: "rules",
    title: "Score",
    body: "Scores come from rules, never the model.",
    node: (
      <div style={{ textAlign: "center" }}>
        <p style={{ margin: 0, font: "600 44px/1 var(--dil-sans)", letterSpacing: "-.03em", color: "var(--dil-blue)" }}>85</p>
        <p className="dil-mono" style={{ margin: "8px 0 0", fontSize: 11, color: "var(--dil-muted)" }}>
          score = rules(findings)
        </p>
      </div>
    ),
  },
  {
    lane: "human",
    title: "Decide",
    body: "A person makes the final call.",
    last: true,
    node: (
      <div style={{ display: "grid", gap: 7, width: 120 }}>
        <span className="dil-btn dil-btn--dk" style={{ justifyContent: "center", height: 30 }}>
          Accept
        </span>
        <span className="dil-btn" style={{ justifyContent: "center", height: 30 }}>
          Ignore
        </span>
        <span className="dil-btn" style={{ justifyContent: "center", height: 30 }}>
          Intentional
        </span>
      </div>
    ),
  },
];

const GUARDRAILS = [
  { title: "Deterministic scoring", body: "Rules calculate the numbers. The LLM never does." },
  { title: "Reasoning with evidence", body: "Every finding points to real files and lines." },
  { title: "Transparent confidence", body: "Uncertainty is shown, not hidden." },
  { title: "Human control", body: "Read only access. Nothing changes without a person." },
];

const STACK = ["Next.js", "TypeScript", "Tailwind", "Supabase", "Anthropic API", "GitHub App", "Vitest", "Vercel"];

export function Hood() {
  return (
    <section id="hood" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead
          n="04"
          eyebrow="Under the hood"
          intro="We didn't want the model making every call. Code extracts, groups, and scores. Claude answers the one question rules can't: is this difference intentional, or drift?"
        >
          AI interprets. <span className="ac">Rules decide.</span>
        </SectionHead>
      </Reveal>

      <Reveal className="dil-pipe">
        {/* Lane bars (desktop); on mobile each step shows its own lane label instead */}
        {STEPS.map((s, i) => (
          <div key={`lane-${i}`} className={`dil-lane ${LANE_CLASS[s.lane]}`} aria-hidden="true">
            {LANE_LABEL[s.lane]}
          </div>
        ))}
        {STEPS.map((s) => (
          <div key={s.title}>
            <div className={`dil-node ${s.lane === "ai" ? "dil-node--ai" : ""}`}>
              {s.node}
              {!s.last && <Arrow />}
            </div>
            <div className="dil-ptxt">
              <span className="dil-ml" style={{ color: LANE_COLOR[s.lane] }}>
                {LANE_LABEL[s.lane]}
              </span>
              <p className="dil-h3">{s.title}</p>
              <p className="dil-sm">{s.body}</p>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal style={{ marginTop: 80 }}>
        <p className="dil-lb">Guardrails</p>
        <div className="dil-guard">
          {GUARDRAILS.map((g) => (
            <div key={g.title}>
              <p className="dil-h3">{g.title}</p>
              <p className="dil-sm">{g.body}</p>
            </div>
          ))}
        </div>
        <p className="dil-b" style={{ marginTop: 28, color: "var(--dil-ink)" }}>
          Built to support human judgment, not replace designers.
        </p>
      </Reveal>

      <Reveal
        style={{
          marginTop: 48,
          display: "flex",
          flexWrap: "wrap",
          gap: "12px 32px",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid var(--dil-line)",
          paddingTop: 24,
        }}
      >
        <p className="dil-lb">Built with</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {STACK.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
