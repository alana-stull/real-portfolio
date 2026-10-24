import { Reveal } from "../../../portfolio/Reveal";
import { dilImages } from "../images";
import { Browser, ExternalLink } from "../ui";

const FACTS = [
  { label: "My role", value: "Co-Founder · Lead Engineer" },
  { label: "Team", value: "Alana Stull, Chris Dos Santos, Ja'Mesha Robinson" },
  { label: "Timeline", value: "Sept 2026 to now" },
  { label: "Disciplines", value: "Product strategy · AI product · UX engineering · Design systems" },
  { label: "Status", value: "Audit MVP live, testing with builders" },
];

export function Hero() {
  return (
    <section id="hero" tabIndex={-1}>
      <div className="dil-hero">
        <Reveal>
          <p className="dil-eb">Team project · Duke AI Product Management</p>
          <img className="dil-hero__wordmark" src={dilImages.wordmark.src} alt={dilImages.wordmark.alt} />
          <h1>
            Design intelligence for the next generation of <span>software builders.</span>
          </h1>
          <p className="dil-bd" style={{ marginTop: 20, maxWidth: 480 }}>
            Making design intelligence part of how teams build, not just how designers design.
          </p>
          <p style={{ margin: "28px 0 0" }}>
            <ExternalLink href="https://designintelligencelab.app">Visit designintelligencelab.app ↗</ExternalLink>
          </p>
        </Reveal>
        <Reveal className="dil-hvis" delay={0.08}>
          <Browser image={dilImages.fixes} title="designintelligencelab.app" style={{ width: "92%", marginLeft: "auto" }} />
          <Browser image={dilImages.scoreCardHero} style={{ position: "absolute", left: 0, bottom: 0, width: "34%" }} />
        </Reveal>
      </div>
      <div className="dil-facts">
        <dl style={{ margin: "0 auto" }}>
          {FACTS.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
