import "../../styles/rhythm.css";
import { RhythmDesktopNav, RhythmMobileJumpBar } from "../../components/case-studies/rhythm/RhythmNav";
import { RHYTHM_DRAFT_SECTIONS } from "../../components/case-studies/rhythm-draft/sections";
import { Hero } from "../../components/case-studies/rhythm-draft/sections/Hero";
import { Problem } from "../../components/case-studies/rhythm-draft/sections/Problem";
import { Approach } from "../../components/case-studies/rhythm-draft/sections/Approach";
import { Experience } from "../../components/case-studies/rhythm-draft/sections/Experience";
import { System } from "../../components/case-studies/rhythm-draft/sections/System";
import { Outcome } from "../../components/case-studies/rhythm-draft/sections/Outcome";

/** The Rhythm case study (five sections), at /rhythm. The previous version lives at /rhythm-old. */
export function Rhythm() {
  return (
    <div className="rhythm">
      <Hero />
      <RhythmMobileJumpBar sections={RHYTHM_DRAFT_SECTIONS} />
      <div className="rhythm__shell">
        <RhythmDesktopNav sections={RHYTHM_DRAFT_SECTIONS} />
        <main className="rhythm__main">
          <div style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 32 }}>
            <Problem />
            <Approach />
            <Experience />
            <System />
            <Outcome />
          </div>
        </main>
      </div>
    </div>
  );
}
