import { useEffect } from "react";
import "../../styles/rhythm.css";
import { RhythmDesktopNav, RhythmMobileJumpBar } from "../../components/case-studies/rhythm/RhythmNav";
import { Hero } from "../../components/case-studies/rhythm/sections/Hero";
import { Opportunity } from "../../components/case-studies/rhythm/sections/Opportunity";
import { Model } from "../../components/case-studies/rhythm/sections/Model";
import { Experience } from "../../components/case-studies/rhythm/sections/Experience";
import { UnderTheHood } from "../../components/case-studies/rhythm/sections/UnderTheHood";
import { BeyondTheScreen } from "../../components/case-studies/rhythm/sections/BeyondTheScreen";
import { WhatsNext } from "../../components/case-studies/rhythm/sections/WhatsNext";

/** Previous six-section version of the Rhythm case study, kept at /rhythm-old for reference. */
export function RhythmOld() {
  // Unlisted: keep the old version out of search results.
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <div className="rhythm">
      <Hero />
      <RhythmMobileJumpBar />
      <div className="rhythm__shell">
        <RhythmDesktopNav />
        <main className="rhythm__main">
          <div style={{ paddingLeft: 24, paddingRight: 24, paddingTop: 32 }}>
            <Opportunity />
            <Model />
            <Experience />
            <UnderTheHood />
            <BeyondTheScreen />
            <WhatsNext />
          </div>
        </main>
      </div>
    </div>
  );
}
