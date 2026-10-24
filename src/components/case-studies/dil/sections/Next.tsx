import { Reveal } from "../../../portfolio/Reveal";
import { Pill, SectionHead } from "../ui";

/** Only Audit is built. Everything after it is planned. */
const STAGES = [
  { k: "01", title: "Audit", body: "Find what's inconsistent and infer the foundation.", built: true },
  { k: "02", title: "Repair", body: "Turn approved findings into code changes a person signs off on." },
  { k: "03", title: "Maintain", body: "Catch drift as the product keeps changing." },
  { k: "04", title: "Govern", body: "Keep systems aligned across teams and products." },
];

const PRIORITIES = ["Test on more real repos", "Measure false positives and usefulness", "Support more code patterns", "Design the Repair experience"];

export function Next() {
  return (
    <section id="next" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead
          n="06"
          eyebrow="What's next"
          intro="The roadmap moves from helping one builder understand their codebase toward team workflows and design governance. Only Audit exists today."
        >
          Spotting differences is only the beginning.
        </SectionHead>
      </Reveal>

      <Reveal className="dil-stages">
        {STAGES.map((s) => (
          <div key={s.k} className={`dil-stage ${s.built ? "dil-stage--on" : ""}`}>
            <span className="k">{s.k}</span>
            <p className="dil-h3">{s.title}</p>
            <p className="dil-sm">{s.body}</p>
            {s.built ? <Pill tone="or">● Built · MVP</Pill> : <Pill>Planned</Pill>}
          </div>
        ))}
      </Reveal>

      {/* Audience: individual builders span Audit + Repair */}
      <Reveal className="dil-scale">
        <div className="a">
          <p className="dil-lb dil-lb--or">Individual builders</p>
        </div>
        <div>
          <p className="dil-lb">Teams</p>
        </div>
        <div>
          <p className="dil-lb">Organizations</p>
        </div>
      </Reveal>

      <Reveal className="dil-nxt">
        {PRIORITIES.map((p, i) => (
          <div key={p}>
            <span className="dil-lb">{String(i + 1).padStart(2, "0")}</span>
            <span className="dil-h3" style={{ fontSize: 19 }}>
              {p}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
