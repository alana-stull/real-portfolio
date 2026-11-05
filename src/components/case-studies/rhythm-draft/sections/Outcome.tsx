import { Link } from "react-router";
import { Reveal } from "../../../portfolio/Reveal";
import { Body, DemoVideo, Editorial, Eyebrow, Heading, Italic, Kicker, Label, Small } from "../../rhythm/primitives";
import domeshaVideo from "../../../../assets/rhythm/video/domesha.mp4";
import domeshaPoster from "../../../../assets/rhythm/video/domesha-poster.jpg";
import domeshaHardware from "../../../../assets/rhythm/domesha-hardware.jpg";

export function Outcome() {
  return (
    <section id="outcome" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>05 · The outcome</Eyebrow>
      <Heading size="lg" className="rh-h-section rh-nowrap-wide" style={{ marginTop: 18 }}>
        From an idea to <Italic>a working experience.</Italic>
      </Heading>
      <Body style={{ marginTop: 18 }}>
        Rhythm is now a working iOS app, connecting recovery, calendar commitments, and priorities
        through a capacity-aware planning experience. The app integrates Oura, Apple Health, and Apple Calendar,
        with a rules-based capacity model and AI-supported guidance.
      </Body>
      <Body style={{ marginTop: 12 }}>
        The product is in early testing through TestFlight, with ongoing work focused on validating
        how well its guidance reflects real days.
      </Body>

      {/* Do'Mesha */}
      <div
        className="rh-grid-stack"
        style={{ marginTop: 64, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "center" }}
      >
        <div style={{ position: "relative", paddingBottom: "10%" }}>
          <Reveal style={{ width: "84%" }}>
            <DemoVideo
              src={domeshaVideo}
              poster={domeshaPoster}
              label="Do'Mesha prototype on a workbench: a frosted globe on a white base, its light slowly pulsing"
              style={{ aspectRatio: "4 / 5", borderRadius: 18, objectPosition: "center" }}
            />
          </Reveal>
          <div style={{ position: "absolute", right: 0, bottom: 0, width: "40%" }}>
            <Reveal delay={0.15}>
              <img
                src={domeshaHardware}
                alt="Inside Do'Mesha's base: a NeoPixel LED ring, the controller board, and the speaker"
                loading="lazy"
                style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover", borderRadius: 14, border: "1px solid var(--rh-border)", boxShadow: "0 16px 40px rgba(31,27,23,0.1)" }}
              />
            </Reveal>
          </div>
        </div>
        <div>
          <Kicker variant="eyebrow">Prototype · Do'Mesha</Kicker>
          <Heading size="md" as="h3" style={{ marginTop: 8 }}>
            Not every insight needs <Italic>another screen.</Italic>
          </Heading>
          <Body style={{ marginTop: 14 }}>
            Do'Mesha shows your Rhythm state through ambient light and voice, so you can notice it
            without opening an app.
          </Body>
          <Small xs style={{ marginTop: 18, paddingTop: 12, borderTop: "1px solid var(--rh-border)" }}>
            Raspberry Pi · NeoPixel light ring · ElevenLabs voice · Rhythm's FastAPI engine
          </Small>
        </div>
      </div>

      {/* Closing */}
      <div style={{ marginTop: 96, textAlign: "center" }}>
        <Heading size="lg" className="rh-h-section rh-nowrap-wide" style={{ margin: "0 auto" }}>
          The best technology doesn't always ask for <Italic>more attention.</Italic>
        </Heading>
        <Editorial size="lg" style={{ marginTop: 20, fontStyle: "italic", color: "var(--rh-accent-dark)" }}>
          Technology should provide more space to be human.
        </Editorial>
      </div>

      <div
        className="rh-flex-stack"
        style={{
          marginTop: 80,
          borderTop: "1px solid var(--rh-border-warm)",
          padding: "40px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
        }}
      >
        <Link to="/crwn" style={{ textDecoration: "none", color: "var(--rh-ink)" }}>
          <Label>Next project</Label>
          <Heading size="sm" style={{ marginTop: 10 }}>
            CRWN →
          </Heading>
          <Body style={{ marginTop: 4, fontStyle: "italic" }}>the home for every textured hair journey.</Body>
        </Link>
        <a href="#hero" className="rh-label" style={{ textDecoration: "none" }}>
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
