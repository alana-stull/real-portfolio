import { Reveal } from "../../../portfolio/Reveal";
import { PillFlow, SectionHead } from "../ui";

export function Approach() {
  return (
    <section id="approach" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead
          n="02"
          eyebrow="The approach"
          intro="AI compresses the handoff. Founders and engineers jump straight into implementation, and design decisions end up scattered across files. We start with what's already built and bring that knowledge back to where the code lives."
        >
          The design system isn't missing. It's hiding in the code.
        </SectionHead>
      </Reveal>

      <div className="dil-shift">
        <Reveal>
          <div className="dil-flow">
            <p className="dil-lb">The usual handoff</p>
            <PillFlow
              className="dil-flow__row"
              items={[{ label: "Product" }, { label: "Design" }, { label: "Handoff" }, { label: "Engineering" }]}
            />
            <p className="dil-sm" style={{ marginTop: 18 }}>
              Decisions live in specs and files someone hands over.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="dil-flow" style={{ borderColor: "var(--dil-or-l)" }}>
            <p className="dil-lb dil-lb--or">Building with AI</p>
            <PillFlow
              className="dil-flow__row"
              items={[
                { label: "Idea" },
                { label: "Prompt", tone: "dk" },
                { label: "Code" },
                { label: "Design intelligence", tone: "or", join: "+" },
              ]}
            />
            <p className="dil-sm" style={{ marginTop: 18 }}>
              DIL reads the code to recover the system it already implies.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="dil-who">
        <div className="now">
          <p className="dil-lb dil-lb--or">Who it's for now</p>
          <p className="dil-h3">Builders without a designer</p>
          <p className="dil-sm">Solo founders, technical founders, and small teams building with AI tools.</p>
        </div>
        <div>
          <p className="dil-lb">Where it could go</p>
          <p className="dil-h3">Teams sharing one standard</p>
          <p className="dil-sm">Onboarding, shared design standards, and cross team consistency at larger organizations. Not built yet.</p>
        </div>
      </Reveal>
    </section>
  );
}
