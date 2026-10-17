import type { ReactNode } from "react";
import { blyssImages } from "../images";
import { Body, Composition, DrawPath, Eyebrow, Heading, Icon, IconDot, ImageSlot, Pill, Reveal } from "../primitives";

function BlockHead({ icon, label, dark, big }: { icon: "users" | "pin" | "calendar"; label: string; dark?: boolean; big?: boolean }) {
  return (
    <div className="bc-row">
      <IconDot name={icon} dark={dark} />
      <span className="bc-lb" style={{ color: "#375169", fontSize: big ? 13 : undefined }}>
        {label}
      </span>
    </div>
  );
}

function Question({ children, big }: { children: ReactNode; big?: boolean }) {
  return (
    <h3
      className="bc-h"
      style={{ marginTop: 14, fontSize: big ? 32 : 26, lineHeight: big ? 1.15 : 1.2, letterSpacing: big ? "-0.025em" : "-0.02em" }}
    >
      {children}
    </h3>
  );
}

/** Desktop diagram: the mockup's 1008×780 composition, scaled to fit. */
function Diagram() {
  return (
    <div style={{ position: "relative", width: 1008, height: 780 }}>
      <div style={{ position: "absolute", left: 580, top: 0, width: 428, height: 780, background: "#F1F7FA", borderRadius: 28 }} />
      <svg width="1008" height="780" viewBox="0 0 1008 780" style={{ position: "absolute", left: 0, top: 0 }} aria-hidden="true">
        <defs>
          <marker id="bc-a1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#5BA8D3" />
          </marker>
        </defs>
        <DrawPath d="M306,200 C460,200 560,310 646,340" markerEnd="url(#bc-a1)" delay={0.2} />
        <DrawPath d="M490,600 C590,600 600,540 646,520" markerEnd="url(#bc-a1)" delay={0.45} />
      </svg>

      <div style={{ position: "absolute", left: 0, top: 0, width: 420 }}>
        <BlockHead icon="users" label="People" />
        <Question>Who do I want to experience life with?</Question>
        <div style={{ marginTop: 18 }}>
          <ImageSlot image={blyssImages.overviewGroupPicker} w={290} h={216} />
        </div>
      </div>


      <div style={{ position: "absolute", left: 120, top: 408, width: 420 }}>
        <BlockHead icon="pin" label="Places" />
        <Question>What’s worth doing around me?</Question>
        <div style={{ marginTop: 18 }}>
          <ImageSlot image={blyssImages.overviewVenueCard} w={360} h={242} delay={0.1} />
        </div>
      </div>

      <div style={{ position: "absolute", left: 620, top: 40, width: 348 }}>
        <BlockHead icon="calendar" label="Plans" dark big />
        <Question big>How does possibility become something real?</Question>
        <div style={{ position: "relative", margin: "28px 0 0 34px" }}>
          <ImageSlot image={blyssImages.overviewPlanScreen} w={268} h={556} radius={40} tone="white" delay={0.15} />
        </div>
      </div>
    </div>
  );
}

/** Narrow screens: the same three blocks, stacked. */
function Stacked() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <div>
        <BlockHead icon="users" label="People" />
        <Question>Who do I want to experience life with?</Question>
        <div style={{ marginTop: 18 }}>
          <ImageSlot image={blyssImages.overviewGroupPicker} w={420} h={313} />
        </div>
      </div>
      <div>
        <BlockHead icon="pin" label="Places" />
        <Question>What’s worth doing around me?</Question>
        <div style={{ marginTop: 18 }}>
          <ImageSlot image={blyssImages.overviewVenueCard} w={420} h={283} />
        </div>
      </div>
      <div style={{ background: "#F1F7FA", borderRadius: 24, padding: "28px 20px 32px" }}>
        <BlockHead icon="calendar" label="Plans" dark big />
        <Question big>How does possibility become something real?</Question>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ImageSlot image={blyssImages.overviewPlanScreen} w={268} h={556} radius={40} tone="white" />
        </div>
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <section id="overview" className="bc-sec" tabIndex={-1}>
      <Reveal>
        <Eyebrow>01 · Overview</Eyebrow>
        <Heading size="sec" className="bc-head-gap" style={{ fontSize: "clamp(24px, 2vw, 29px)" }}>
          Technology can connect us without actually bringing us together.
        </Heading>
        <div className="bc-cols2 bc-body-gap">
          <Body>
            Blyss is a social discovery platform built on a simple idea: technology should make it easier to experience life with other
            people, not become the experience itself.
          </Body>
          <Body>It connects people and places through plans, so a possibility can turn into real life.</Body>
        </div>
      </Reveal>

      <Reveal className="bc-after-head">
        <Composition width={1008} height={780} wide={<Diagram />} narrow={<Stacked />} />
      </Reveal>

      <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
        <Pill style={{ height: 36, padding: "0 16px", fontSize: 14 }}>People + Places</Pill>
        <span aria-hidden="true" style={{ color: "#5BA8D3" }}>
          →
        </span>
        <Pill variant="sl" style={{ height: 36, padding: "0 16px", fontSize: 14 }}>
          Plans
        </Pill>
        <span aria-hidden="true" style={{ color: "#5BA8D3" }}>
          →
        </span>
        <Pill variant="on" style={{ height: 36, padding: "0 16px", fontSize: 14 }}>
          Real life
        </Pill>
      </div>
    </section>
  );
}
