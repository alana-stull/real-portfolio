import type { LucideIcon } from "lucide-react";
import { AudioLines, Lightbulb, Monitor, PanelTop, Smartphone } from "lucide-react";
import { Reveal } from "../../../portfolio/Reveal";
import { Body, DemoVideo, Eyebrow, Heading, Italic, Kicker, Label, Small } from "../primitives";
import domeshaVideo from "../../../../assets/rhythm/video/domesha.mp4";
import domeshaPoster from "../../../../assets/rhythm/video/domesha-poster.jpg";
import domeshaHardware from "../../../../assets/rhythm/domesha-hardware.jpg";

const MODES: { icon: LucideIcon; title: string; note: string }[] = [
  { icon: Monitor, title: "Web", note: "deeper understanding" },
  { icon: Smartphone, title: "Mobile", note: "everyday awareness" },
  { icon: PanelTop, title: "Menu bar", note: "quick glance" },
  { icon: Lightbulb, title: "Do'Mesha", note: "ambient feedback" },
  { icon: AudioLines, title: "Voice", note: "hands-free interaction" },
];

export function BeyondTheScreen() {
  return (
    <section id="beyond" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>05 · Beyond the screen</Eyebrow>
      <Heading size="lg" className="rh-nowrap-wide" style={{ marginTop: 18 }}>
        Not every insight needs <Italic>another screen.</Italic>
      </Heading>

      <Reveal style={{ marginTop: 48 }}>
        <ol className="rh-spectrum">
          {MODES.map(({ icon: Icon, title, note }) => (
            <li key={title}>
              <Icon size={22} strokeWidth={1.5} color="var(--rh-ink)" aria-hidden />
              <h3 style={{ margin: "12px 0 0", fontSize: 16, fontWeight: 600, color: "var(--rh-ink)" }}>{title}</h3>
              <Small style={{ marginTop: 2 }}>{note}</Small>
            </li>
          ))}
        </ol>
        <div className="rh-spectrum__bar" aria-hidden />
        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between" }}>
          <Label>Deeper interaction</Label>
          <Label>Ambient awareness</Label>
        </div>
      </Reveal>

      {/* Do'Mesha */}
      <div
        className="rh-grid-stack"
        style={{ marginTop: 80, display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 48, alignItems: "center" }}
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
          <Kicker variant="eyebrow">Featured prototype · Do'Mesha</Kicker>
          <Heading size="md" as="h3" style={{ marginTop: 8 }}>
            What if capacity could exist in <Italic>the environment around you?</Italic>
          </Heading>
          <Body style={{ marginTop: 18 }}>
            Do'Mesha is a physical prototype exploring how capacity insights can exist beyond the
            screen. Using ambient light and voice, it communicates Rhythm states without requiring
            someone to open another app.
          </Body>
          <Small xs style={{ marginTop: 20, paddingTop: 14, borderTop: "1px solid var(--rh-border)" }}>
            Raspberry Pi · NeoPixel light ring · ElevenLabs voice · Rhythm's FastAPI engine
          </Small>
        </div>
      </div>
    </section>
  );
}
