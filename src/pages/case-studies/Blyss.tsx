import "../../styles/blyss-case-study.css";
import { BlyssDesktopNav, BlyssMobileJumpBar } from "../../components/case-studies/blyss-cs/BlyssCaseNav";
import { Hero } from "../../components/case-studies/blyss-cs/sections/Hero";
import { Overview } from "../../components/case-studies/blyss-cs/sections/Overview";
import { Evolution } from "../../components/case-studies/blyss-cs/sections/Evolution";
import { Product } from "../../components/case-studies/blyss-cs/sections/Product";
import { System } from "../../components/case-studies/blyss-cs/sections/System";
import { Build } from "../../components/case-studies/blyss-cs/sections/Build";
import { Now } from "../../components/case-studies/blyss-cs/sections/Now";
import { Reflection } from "../../components/case-studies/blyss-cs/sections/Reflection";

export function Blyss() {
  return (
    <div className="bcs">
      <Hero />
      <BlyssMobileJumpBar />
      <div className="bc-shell">
        <BlyssDesktopNav />
        <div className="bc-main">
          <Overview />
          <Evolution />
          <Product />
          <System />
          <Build />
          <Now />
          <Reflection />
        </div>
      </div>
    </div>
  );
}
