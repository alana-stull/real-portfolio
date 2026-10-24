import { Link } from "react-router";
import { Reveal } from "../../../portfolio/Reveal";
import { scrollToSection } from "../DilNav";
import { dilImages } from "../images";
import { ExternalLink } from "../ui";

export function Reflection() {
  return (
    <>
      <section id="reflection" className="dil-close" tabIndex={-1}>
        <Reveal>
          <img src={dilImages.mark.src} alt="" style={{ display: "block", width: 40, height: 40, margin: "0 auto" }} />
          <h2 className="dil-h2" style={{ margin: "24px auto 0", maxWidth: 720 }}>
            Building with AI should make thoughtful design more accessible.
          </h2>
          <p className="dil-bd">
            AI is changing how we build software, but thoughtful design still requires human judgment. Design Intelligence Lab explores how
            we can make that judgment more accessible, helping teams move faster without losing the intention behind what they create.
          </p>
          <p className="dil-big">
            <span>AI proposes.</span> <span style={{ color: "var(--dil-or)" }}>Humans decide.</span>
          </p>
          <div className="dil-links">
            <ExternalLink href="https://designintelligencelab.app">Try designintelligencelab.app ↗</ExternalLink>
            <ExternalLink href="https://docs.google.com/presentation/d/1jblZSd0uWnKFrkeLCl3cO7i9LUIoMpQ1bNlhy9b_kIQ/edit?usp=sharing">View our midterm pitch deck ↗</ExternalLink>
          </div>
          <p className="dil-sm" style={{ marginTop: 28, color: "var(--dil-muted)" }}>
            Built with Chris Dos Santos and Ja'Mesha Robinson in Duke's AI Product Management course.
          </p>
        </Reveal>
      </section>

      <div className="dil-next">
        <Link to="/blyss" className="np">
          <p className="dil-lb">Next project</p>
          <p className="dil-h3" style={{ marginTop: 10, fontSize: 28 }}>
            Blyss Social →
          </p>
          <p className="dil-sm" style={{ marginTop: 4, fontStyle: "italic" }}>
            less planning. more living.
          </p>
        </Link>
        <a
          href="#hero"
          className="dil-backlink"
          style={{ marginTop: 0 }}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Back to top ↑
        </a>
      </div>
    </>
  );
}
