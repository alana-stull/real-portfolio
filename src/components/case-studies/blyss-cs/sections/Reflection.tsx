import { Link } from "react-router";
import { scrollToSection } from "../BlyssCaseNav";
import { blyssImages } from "../images";
import { Body, Eyebrow, Heading, ImageSlot, Label, Reveal } from "../primitives";

const LESSONS = [
  {
    label: "The idea",
    title: "Question the original idea.",
    body: "Blyss started as a dating app. Building the right product meant being willing to let go of the first one.",
  },
  {
    label: "The system",
    title: "Strategy and code have to agree.",
    body: "Decisions about privacy, commitment, and intent had to become rules in the system, not just behavior in the interface.",
  },
  {
    label: "The measure",
    title: "Time in the app isn’t the goal.",
    body: "Success is whether people go: discovering something, finding someone to do it with, and showing up.",
  },
];

export function Reflection() {
  return (
    <section id="reflection" className="bc-sec" tabIndex={-1}>
      <Reveal>
        <Eyebrow>07 · Reflection</Eyebrow>
        <Heading size="sec" className="bc-head-gap">
          Building Blyss changed how I think about building products.
        </Heading>
        <Body className="bc-body-gap bc-measure">
          I’ve learned that building the right product sometimes means questioning the original idea, making difficult decisions about
          what matters now, and carrying those decisions all the way from strategy to code.
        </Body>
      </Reveal>

      <Reveal className="bc-cols3 bc-after-head" style={{ borderTop: "1px solid #E3E4E6", paddingTop: 28 }}>
        {LESSONS.map((l, i) => (
          <div key={l.label} style={{ padding: i === 0 ? "0 32px 0 0" : i === 2 ? "0 0 0 32px" : "0 32px" }}>
            <Label style={{ color: "#4A8DB9" }}>{l.label}</Label>
            <h3 className="bc-h bc-h-card" style={{ marginTop: 12 }}>
              {l.title}
            </h3>
            <Body className="bc-bd--sm" style={{ marginTop: 10 }}>
              {l.body}
            </Body>
          </div>
        ))}
      </Reveal>

      {/* Personal principle: editorial, navy, left-ruled */}
      <Reveal className="bc-sub bc-principle">
        <Label>The idea I keep coming back to</Label>
        <p className="bc-h bc-principle__text" style={{ marginTop: 16 }}>
          Build for the life <span style={{ color: "#5BA8D3", fontWeight: 800 }}>outside</span> the product.
        </p>
        <Body className="bc-measure" style={{ marginTop: 20 }}>
          The best outcome for Blyss isn’t more time spent in the app. It’s someone discovering something worth doing, finding someone to
          do it with, making the plan, and eventually putting their phone away.
        </Body>
      </Reveal>

      {/* Blyss sign-off: the product's tagline, set apart from the principle */}
      <div className="bc-bleed bc-signoff bc-band-pad bc-sub">
        <ImageSlot image={blyssImages.signoffLogo} w={44} h={42} contain style={{ background: "transparent", border: "none", fontSize: 8 }} />
        <p className="bc-signoff__tag">Less planning. More living.</p>
      </div>

      <div className="bc-next">
        <Link to="/case-studies/rhythm" className="bc-next__project">
          <div className="bc-lb">Next project</div>
          <div className="bc-h" style={{ marginTop: 8, fontSize: 20, letterSpacing: "-0.01em" }}>
            Rhythm <span style={{ color: "#5BA8D3", fontWeight: 600 }}>→</span>
          </div>
          <div className="bc-sm" style={{ marginTop: 2, fontSize: 14 }}>
            capacity intelligence, not productivity.
          </div>
        </Link>
        <a
          href="#hero"
          className="bc-sm"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Back to top ↑
        </a>
      </div>
    </section>
  );
}
