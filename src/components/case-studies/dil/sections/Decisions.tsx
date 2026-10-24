import type { ReactNode } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { SectionHead, Swatch } from "../ui";

function Ide({ issue, decision, learned }: { issue: string; decision: string; learned: string }) {
  return (
    <div className="dil-ide">
      <p>
        <span>Issue</span>
        {issue}
      </p>
      <p>
        <span>Decision</span>
        {decision}
      </p>
      <p className="l">
        <span>Learned</span>
        {learned}
      </p>
    </div>
  );
}

function Code({ before, after }: { before: ReactNode; after: ReactNode }) {
  return (
    <div className="dil-code">
      <div className="k">Before</div>
      <div>{before}</div>
      <div className="k a">After</div>
      <div>{after}</div>
    </div>
  );
}

const DRIFT = ["#006BDA", "#0071E3", "#0077ED"];

export function Decisions() {
  return (
    <section id="decisions" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead
          n="05"
          eyebrow="Design decisions + lessons"
          intro="A tool that judges design has to earn belief. Our best lessons came from moments the product was confidently wrong."
        >
          Trust is a <span className="ac">design material.</span>
        </SectionHead>
      </Reveal>

      <div className="dil-finds">
        <Reveal>
          <div className="dil-find">
            <p className="dil-lb">Find 01 · Scoring</p>
            <h3 className="dil-h3">A perfect score that meant nothing.</h3>
            <Ide
              issue="Typography scored 100 with too little data to judge."
              decision={`We added a "not enough data" state.`}
              learned="A trustworthy product says what it doesn't know."
            />
            <Code
              before={
                <>
                  typography <span className="d">→</span> 100
                </>
              }
              after={
                <>
                  typography <span className="d">→</span> <b>not enough data</b>
                </>
              }
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="dil-find">
            <p className="dil-lb">Find 02 · Extraction</p>
            <h3 className="dil-h3">One card that was really eleven divs.</h3>
            <Ide
              issue="The system mistook nested layout elements for a single component, throwing off the design score."
              decision="We tested the system on real projects and improved how it identifies components."
              learned="Real-world testing revealed issues our initial tests didn't catch."
            />
            <Code
              before={
                <>
                  Card family <span className="d">=</span> 11 nested divs
                </>
              }
              after={
                <>
                  Card family <span className="d">=</span> <b>1 card</b> <span className="d">// layout wrappers apart</span>
                </>
              }
            />
          </div>
        </Reveal>
      </div>

      {/* Find 03, full width with the finding card mock */}
      <Reveal style={{ marginTop: 24 }}>
        <div className="dil-find dil-find--wide">
          <div>
            <p className="dil-lb dil-lb--or">Find 03 · Review</p>
            <h3 className="dil-h3">Designing for human judgment.</h3>
            <Ide
              issue="AI suggestions can read like verdicts."
              decision="Every finding carries evidence and confidence, with accept, ignore, or intentional."
              learned="AI should support informed decisions, not replace them."
            />
          </div>
          <div style={{ border: "1px solid var(--dil-line)", borderRadius: 16, padding: 24, background: "#FBFAF7" }}>
            <p style={{ margin: 0, font: "500 13px/1.3 var(--dil-sans)", color: "var(--dil-or-ink)" }}>Possible color drift</p>
            <p style={{ margin: "8px 0 0", font: "600 20px/1.25 var(--dil-sans)" }}>3 near identical colors likely mean one token</p>
            <div className="dil-mono" style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 14 }}>
              {DRIFT.map((c) => (
                <span key={c} style={{ display: "inline-flex", gap: 6, alignItems: "center", fontSize: 12, color: "var(--dil-body)" }}>
                  <Swatch color={c} />
                  {c.toLowerCase()}
                </span>
              ))}
            </div>
            <p className="dil-sm" style={{ marginTop: 12, fontSize: 13 }}>
              Evidence: App.jsx line 394, index.css lines 105 and 122
            </p>
            <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span className="dil-btn dil-btn--dk">Accept</span>
              <span className="dil-btn">Ignore</span>
              <span className="dil-btn">Intentional variant</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
