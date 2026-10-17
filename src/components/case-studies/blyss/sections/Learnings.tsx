import { Link } from "react-router";
import { Body, Eyebrow, Heading, Highlight, Label, Placeholder, Small } from "../primitives";

export function Learnings() {
  return (
    <section id="learnings" className="blyss__section" style={{ paddingTop: 120 }}>
      <Eyebrow>08 · What Blyss taught me</Eyebrow>
      <Heading size="xl" style={{ marginTop: 20, maxWidth: 920 }}>
        Building Blyss changed how I think about <Highlight>building products.</Highlight>
      </Heading>

      <div
        className="bl-grid-stack-3"
        style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 40 }}
      >
        <Lesson title="Listen beyond the feature request.">
          Some of the most important things I've learned from users didn't lead to a better
          feature. They changed what I believed the company should build in the first place.
        </Lesson>
        <Lesson title="Scope the product without shrinking the vision.">
          I've learned to separate what Blyss could eventually become from what it needs to
          prove next. Saying "not yet" has been as important as deciding what to build.
        </Lesson>
        <Lesson title="Design the system, not just the screen.">
          A product decision doesn't end in Figma. Privacy, commitment, availability, and social
          behavior eventually become data models, permissions, edge cases, and technical rules.
        </Lesson>
      </div>

      <div style={{ marginTop: 120 }}>
        <Eyebrow>The idea I keep coming back to</Eyebrow>
        <Heading size="hero" style={{ marginTop: 20, maxWidth: 960 }}>
          Build for the life <Highlight>outside</Highlight> the product.
        </Heading>
        <Body large style={{ marginTop: 24, maxWidth: 620 }}>
          The best outcome for Blyss isn't more time spent in the app. It's someone discovering
          something worth doing, finding someone to do it with, making the plan, and eventually
          putting their phone away.
        </Body>

        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 4 }}>
          <span className="bl-heading" style={{ fontSize: "clamp(1.85rem, 2.6vw + 1rem, 3.25rem)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--bl-navy)" }}>
            Less planning.
          </span>
          <span className="bl-heading" style={{ fontSize: "clamp(1.85rem, 2.6vw + 1rem, 3.25rem)", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--bl-navy)" }}>
            More living.
          </span>
          <span style={{ marginTop: 16, width: 100, height: 4, borderRadius: 4, background: "var(--bl-sky)" }} />
        </div>
      </div>

      <Placeholder
        className="bl-bleed"
        style={{
          marginTop: 72,
          height: 380,
          border: "none",
          borderTop: "1px dashed #9CC3D8",
          borderBottom: "1px dashed #9CC3D8",
          background: "var(--bl-sky-pale)",
          fontSize: 13,
          borderRadius: 0,
        }}
      >
        [Full-bleed closing photo]
        <br />
        friends at dinner · people walking somewhere · a concert · coffee
        <br />
        the outcome of Blyss, not the UI
      </Placeholder>

      <div
        className="bl-flex-stack"
        style={{
          marginTop: 56,
          borderTop: "1px solid var(--bl-border)",
          padding: "32px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
        }}
      >
        <Link to="/case-studies/rhythm" style={{ textDecoration: "none", color: "var(--bl-ink)" }}>
          <Label>Next project</Label>
          <Heading size="sm" style={{ marginTop: 8 }}>
            Rhythm →
          </Heading>
          <Small style={{ marginTop: 4, fontSize: 15 }}>alignment, not productivity.</Small>
        </Link>
        <a href="#hero" className="bl-small" style={{ textDecoration: "none" }}>
          Back to top ↑
        </a>
      </div>
    </section>
  );
}

function Lesson({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: "2px solid var(--bl-navy)", paddingTop: 20 }}>
      <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.3, letterSpacing: "-0.015em" }}>{title}</div>
      <Body className="bl-body--sm" style={{ marginTop: 12 }}>
        {children}
      </Body>
    </div>
  );
}
