import "../../styles/dil.css";
import { DilDesktopNav, DilMobileJumpBar } from "../../components/case-studies/dil/DilNav";
import { Hero } from "../../components/case-studies/dil/sections/Hero";
import { Opportunity } from "../../components/case-studies/dil/sections/Opportunity";
import { Approach } from "../../components/case-studies/dil/sections/Approach";
import { Experience } from "../../components/case-studies/dil/sections/Experience";
import { Hood } from "../../components/case-studies/dil/sections/Hood";
import { Decisions } from "../../components/case-studies/dil/sections/Decisions";
import { Next } from "../../components/case-studies/dil/sections/Next";
import { Reflection } from "../../components/case-studies/dil/sections/Reflection";

export function DesignIntelligenceLab() {
  return (
    <div className="dil">
      <Hero />
      <DilMobileJumpBar />
      <div className="dil__shell">
        <DilDesktopNav />
        <div className="dil__main">
          <Opportunity />
          <Approach />
          <Experience />
          <Hood />
          <Decisions />
          <Next />
          <Reflection />
        </div>
      </div>
    </div>
  );
}
