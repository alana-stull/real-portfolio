import { Eyebrow, Heading, Italic, Label, Reveal, Small } from "../primitives";
import { NavBar } from "../ui";

const PRINCIPLES = [
  { title: "One app, not two.", body: "Clients and stylists switch modes instead of using separate products." },
  { title: "Navigation reflects the job.", body: "Clients prioritize discovery while stylists prioritize managing their work." },
  { title: "Booking requests belong in Inbox.", body: "Requests begin as conversations before becoming scheduled appointments." },
];

export function Modes() {
  return (
    <section id="modes" className="crwn-section" tabIndex={-1}>
      <Reveal>
        <Eyebrow>One app, two modes</Eyebrow>
        <Heading size="section" style={{ marginTop: 18, maxWidth: 720 }}>
          One app and one system. <Italic>Two nav bars.</Italic>
        </Heading>
      </Reveal>

      <Reveal className="crwn-modes" style={{ marginTop: 56 }}>
        <Label tone="maroon" style={{ textAlign: "center", letterSpacing: "0.2em" }}>
          One product system
        </Label>
        <div className="crwn-modes__grid">
          <div className="crwn-modes__col">
            <Label tone="maroon">Client mode</Label>
            <Heading as="h3" size="md" style={{ marginTop: 8 }}>
              Discover, learn, find someone.
            </Heading>
            <div style={{ marginTop: 18 }}>
              <NavBar mode="client" />
            </div>
          </div>
          <div className="crwn-modes__col">
            <Label tone="ochre">Stylist mode</Label>
            <Heading as="h3" size="md" style={{ marginTop: 8 }}>
              Show the work, run the business.
            </Heading>
            <div style={{ marginTop: 18 }}>
              <NavBar mode="stylist" />
            </div>
            <Small style={{ marginTop: 12, fontSize: 13, fontStyle: "italic" }}>Community folds into Explore for stylists.</Small>
          </div>
        </div>
      </Reveal>

      <Reveal className="crwn-grid-3 crwn-stack-md" style={{ marginTop: 56, gap: 40 }}>
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="crwn-rule-top">
            <Heading as="h3" size="md">
              {p.title}
            </Heading>
            <Small size="md" style={{ marginTop: 8 }}>
              {p.body}
            </Small>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
