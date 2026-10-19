import { Link } from "react-router";
import { Body, Editorial, Eyebrow, Heading, Italic, Kicker, Label, Small } from "../primitives";

const BUILT = [
  "Developed a capacity scoring and classification model",
  "Built the backend and API infrastructure",
  "Designed and developed the iOS experience",
  "Integrated wearable data and AI interpretation",
  "Explored ambient and voice-based interactions",
];

const ROADMAP = [
  { title: "Learn me", note: "body signals + self-report" },
  { title: "Learn my life", note: "calendar + commitments" },
  { title: "Learn what matters", note: "intentions + priorities" },
  { title: "Plan around my capacity", note: "tasks + routines + decisions" },
  { title: "Learn from what happens", note: "patterns + adaptation over time" },
];

export function WhatsNext() {
  return (
    <section id="next" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>06 · What's next</Eyebrow>

      {/* A. Built so far */}
      <Heading size="md" style={{ marginTop: 14 }}>
        Built so far
      </Heading>
      <ol className="rh-milestones">
        {BUILT.map((item, i) => (
          <li key={item}>
            <Label>{String(i + 1).padStart(2, "0")}</Label>
            <p>{item}</p>
          </li>
        ))}
      </ol>
      <Small style={{ marginTop: 20 }}>
        The iOS app runs on real data ahead of TestFlight, and the web dashboard is being rebuilt
        on the same backend.
      </Small>

      {/* B. Future direction */}
      <div className="rh-subsection">
        <Kicker variant="eyebrow">Future direction</Kicker>
        <Heading size="lg" style={{ marginTop: 14 }}>
          The goal isn't to collect more data. <Italic>It's to understand enough to help.</Italic>
        </Heading>
        <div style={{ position: "relative", marginTop: 48 }}>
        <div aria-hidden className="rh-hide-mobile" style={{ position: "absolute", left: 0, right: 0, top: 7, height: 1, background: "var(--rh-accent)", opacity: 0.55 }} />
        <ol
          className="rh-grid-stack"
          style={{ listStyle: "none", margin: 0, padding: 0, position: "relative", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 24 }}
        >
          {ROADMAP.map((step, i) => (
            <li key={step.title} style={{ position: "relative" }}>
              <span
                aria-hidden
                style={{
                  display: "block",
                  boxSizing: "border-box",
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  border: "2px solid var(--rh-accent)",
                  background: i === 0 ? "var(--rh-accent)" : "var(--rh-bg)",
                }}
              />
              <Label style={{ marginTop: 16 }}>{String(i + 1).padStart(2, "0")}</Label>
              <Heading size="xs" as="h3" style={{ marginTop: 6 }}>
                {step.title}
              </Heading>
              <Small style={{ marginTop: 4 }}>{step.note}</Small>
            </li>
          ))}
        </ol>
        </div>
      </div>

      {/* C. Reflection */}
      <div id="reflection" style={{ marginTop: 128, textAlign: "center" }}>
        <Eyebrow>What Rhythm taught me</Eyebrow>
        <Heading size="lg" style={{ margin: "18px auto 0" }}>
          The best technology doesn't always ask for <Italic>more attention.</Italic>
        </Heading>
        <Editorial size="md" style={{ margin: "24px auto 0" }}>
          Building Rhythm changed how I think about designing technology. I'm less interested in
          keeping people engaged and more interested in creating systems that understand what
          someone needs, respond meaningfully, and get out of the way.
        </Editorial>
        {/* The closing line keeps the page's last orange accent */}
        <Editorial size="lg" style={{ marginTop: 36, fontStyle: "italic", color: "var(--rh-accent-dark)" }}>
          Technology should provide more space to be human.
        </Editorial>
      </div>

      <div
        className="rh-flex-stack"
        style={{
          marginTop: 96,
          borderTop: "1px solid var(--rh-border-warm)",
          padding: "40px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 24,
        }}
      >
        <Link to="/case-studies/crwn" style={{ textDecoration: "none", color: "var(--rh-ink)" }}>
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
