import "../../styles/crwn.css";
import { CrwnDesktopNav, CrwnMobileJumpBar } from "../../components/case-studies/crwn/CrwnNav";
import { Hero } from "../../components/case-studies/crwn/sections/Hero";
import { Overview } from "../../components/case-studies/crwn/sections/Overview";
import { System } from "../../components/case-studies/crwn/sections/System";
import { Screens } from "../../components/case-studies/crwn/sections/Screens";
import { Modes } from "../../components/case-studies/crwn/sections/Modes";
import { Stylist } from "../../components/case-studies/crwn/sections/Stylist";
import { Code } from "../../components/case-studies/crwn/sections/Code";
import { Launch } from "../../components/case-studies/crwn/sections/Launch";
import { Reflection } from "../../components/case-studies/crwn/sections/Reflection";

export function Crwn() {
  return (
    <div className="crwn">
      <Hero />
      <CrwnMobileJumpBar />
      <div className="crwn__shell">
        <CrwnDesktopNav />
        <div className="crwn__main">
          <Overview />
          <System />
          <Screens />
          <Modes />
          <Stylist />
          <Code />
          <Launch />
          <Reflection />
        </div>
      </div>
    </div>
  );
}
