import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "../../../portfolio/Reveal";
import { dilImages } from "../images";
import { Browser, ImageSlot, PillFlow, SectionHead } from "../ui";

function StepText({ step, title, children, style }: { step: string; title: string; children: ReactNode; style?: CSSProperties }) {
  return (
    <Reveal className="dil-tx" style={style}>
      <p className="dil-step">{step}</p>
      <h3 className="dil-h3">{title}</h3>
      <p className="dil-b">{children}</p>
    </Reveal>
  );
}

const CALLOUTS = [
  { title: "Human review", body: "Open, accepted, intentional, or ignored.", pos: { left: "48%", top: "4%" } },
  { title: "Before → after", body: "Three values become one token.", pos: { right: "-2%", top: "31%" } },
  { title: "Evidence", body: "Every finding links to the exact file and line.", pos: { right: "-2%", top: "64%" } },
];

export function Experience() {
  return (
    <section id="experience" className="dil-sec" tabIndex={-1}>
      <Reveal>
        <SectionHead n="03" eyebrow="The experience">
          From a repository to actionable design insights.
        </SectionHead>
        <PillFlow items={[{ label: "Connect" }, { label: "Analyze" }, { label: "Understand" }, { label: "Act", tone: "or" }]} />
      </Reveal>

      {/* Connect */}
      <div className="dil-st">
        <StepText step="Connect" title="Pick a repo.">
          Sign in with GitHub, read only. Or paste a public repo URL.
        </StepText>
        <Reveal from="right" delay={0.08}>
          <ImageSlot image={dilImages.githubConnect} className="dil-hov" style={{ aspectRatio: "16 / 9" }} />
        </Reveal>
      </div>

      {/* Analyze */}
      <div className="dil-st dil-st--flip">
        <StepText step="Analyze" title="Watch it read your code.">
          Styles extracted, similar values grouped, intent reasoned about.
        </StepText>
        <Reveal from="left" delay={0.08}>
          <img className="dil-shot dil-hov" src={dilImages.reportReady.src} alt={dilImages.reportReady.alt} />
        </Reveal>
      </div>

      {/* Understand */}
      <div className="dil-st">
        <StepText step="Understand" title="The Design Health Report and Foundation.">
          One score in plain language, then the system your code already implies.
        </StepText>
        <Reveal from="right" delay={0.08} style={{ display: "grid", gap: 16 }}>
          <div className="dil-f2">
            <img
              className="dil-hov"
              src={dilImages.scoreCard.src}
              alt={dilImages.scoreCard.alt}
              style={{ display: "block", width: "100%", height: "auto", alignSelf: "center", borderRadius: 14, boxShadow: "0 24px 60px rgba(22,22,26,.14)" }}
            />
            <ImageSlot image={dilImages.healthReport} className="dil-hov" style={{ minHeight: 220 }} />
          </div>
          <ImageSlot image={dilImages.foundation} className="dil-hov" style={{ minHeight: 240 }} />
        </Reveal>
      </div>

      {/* Act: the largest product visual */}
      <div style={{ marginTop: 104 }}>
        <StepText step="Act" title="Prioritized Fixes, backed by evidence." style={{ maxWidth: 560 }}>
          Before and after, the exact lines, and you make the call.
        </StepText>
        <Reveal from="bottom" style={{ position: "relative", marginTop: 36 }}>
          <Browser image={dilImages.fixesAct} title="Fixes" className="dil-hov" />
          {CALLOUTS.map((c) => (
            <div key={c.title} className="dil-callout" style={c.pos}>
              <b>{c.title}</b>
              {c.body}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
