import { Fragment } from "react";
import { Link } from "react-router";
import { scrollToSection } from "../CrwnNav";
import { Body, Eyebrow, Heading, Italic, Label, Reveal } from "../primitives";

const JOURNEY = ["Brand Identity", "Design System", "Product Redesign", "Development", "Launch"];

export function Reflection() {
  return (
    <>
      <section id="reflection" className="crwn-section crwn-section--reflection" tabIndex={-1}>
        <Reveal>
          <Eyebrow>What CRWN taught me</Eyebrow>
          <Heading size="close" style={{ margin: "18px auto 0", maxWidth: 700 }}>
            A design system only works if <Italic>the product can actually use it.</Italic>
          </Heading>
          <Body style={{ margin: "24px auto 0", maxWidth: 620 }}>
            CRWN reinforced that good design goes beyond Figma. Working across design and engineering meant creating a system that
            could support real users, technical constraints, and the product through launch.
          </Body>
          <div
            style={{ margin: "48px auto 0", display: "flex", justifyContent: "center", gap: 14, alignItems: "center", flexWrap: "wrap" }}
          >
            {JOURNEY.map((step, i) => (
              <Fragment key={step}>
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: "var(--crwn-ochre)" }}>
                    →
                  </span>
                )}
                <span className={`crwn-pill ${i === JOURNEY.length - 1 ? "crwn-pill--on" : ""}`}>{step}</span>
              </Fragment>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="crwn-next">
        <Link to="/case-studies/blyss">
          <Label>Next project</Label>
          <Heading as="div" size="lg" style={{ marginTop: 10 }}>
            Blyss →
          </Heading>
          <div className="crwn-small" style={{ marginTop: 4, fontStyle: "italic" }}>
            less planning. more living.
          </div>
        </Link>
        <a
          href="#hero"
          className="crwn-label crwn-backlink"
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
