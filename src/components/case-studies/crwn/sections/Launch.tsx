import { crwnImages } from "../images";
import { Body, Eyebrow, Heading, ImageSlot, Italic, Label, Reveal } from "../primitives";

// Left to right, with the mockup's vertical stagger. Slots use the screenshots' ~1 : 1.92 shape.
const LAUNCH_SCREENS = [
  { image: crwnImages.launch1, width: 200, height: 384, stagger: 0 },
  { image: crwnImages.launch2, width: 210, height: 403, stagger: 60 },
  { image: crwnImages.launch3, width: 220, height: 422, stagger: 10 },
  { image: crwnImages.launch4, width: 210, height: 403, stagger: 80 },
  { image: crwnImages.launch5, width: 200, height: 384, stagger: 30 },
];

const PILLARS = [
  {
    label: "Marketplace infrastructure",
    rule: "var(--crwn-maroon)",
    body: "Scoped the Stripe Connect integration for provider payouts, and helped troubleshoot Twilio and the backend workflows behind the client and provider experience.",
  },
  {
    label: "App Store launch",
    rule: "var(--crwn-ochre)",
    body: "Product screenshots, the App Store description, privacy documentation, and submission preparation.",
  },
  {
    label: "Company website",
    rule: "var(--crwn-honey)",
    body: "Rebuilt the homepage and About experience, extending CRWN’s identity and visual system beyond the app.",
  },
];

export function Launch() {
  return (
    <section id="launch" className="crwn-section crwn-section--launch" tabIndex={-1}>
      <Reveal>
        <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          <Eyebrow>Launch</Eyebrow>
          <span
            className="crwn-tag"
            style={{
              height: 24,
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              background: "var(--crwn-maroon)",
              borderColor: "var(--crwn-maroon)",
              color: "var(--crwn-white)",
            }}
          >
            Live on the App Store
          </span>
        </div>
        <Heading size="section" style={{ marginTop: 18 }}>
          From a redesigned interface to <Italic>a product ready for launch.</Italic>
        </Heading>
        <Body style={{ marginTop: 24 }}>
          Getting CRWN ready to ship meant working beyond the screens. Alongside the frontend redesign, I helped troubleshoot
          authentication, payment processing, and backend workflows, while supporting the infrastructure needed for clients and
          providers to use the same platform.
        </Body>
      </Reveal>

      <Reveal className="crwn-launch-band">
        {LAUNCH_SCREENS.map((s, i) => (
          <div
            key={i}
            style={{ flex: `0 1 ${s.width}px`, paddingTop: s.stagger, ["--stagger" as string]: `${s.stagger}px` }}
          >
            <ImageSlot {...s.image} variant="screen" style={{ width: "100%", aspectRatio: `${s.width} / ${s.height}` }} />
          </div>
        ))}
      </Reveal>

      <Reveal className="crwn-grid-3 crwn-stack-md" style={{ marginTop: 64, gap: 40 }}>
        {PILLARS.map((p) => (
          <div key={p.label} style={{ borderTop: `2px solid ${p.rule}`, paddingTop: 20 }}>
            <Label tone="maroon">{p.label}</Label>
            <Body md style={{ marginTop: 12 }}>
              {p.body}
            </Body>
          </div>
        ))}
      </Reveal>

      <Reveal style={{ marginTop: 48, display: "flex", gap: "16px 36px", flexWrap: "wrap" }}>
        <a className="crwn-ext" href="https://apps.apple.com/us/app/crwn/id6806900748" target="_blank" rel="noopener noreferrer">
          View CRWN on the App Store <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a className="crwn-ext" href="https://crwnhq.com" target="_blank" rel="noopener noreferrer">
          Visit CRWN website <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </Reveal>
    </section>
  );
}
