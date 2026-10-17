import { Reveal } from "../../../portfolio/Reveal";
import { Body, DemoVideo, Editorial, Eyebrow, Heading, Italic, Kicker, Label, Small } from "../primitives";
import imgDecisionTree from "figma:asset/6e779625fb662faf58d030a5d5d0c8c97aba8332.png";
import imgKMeans from "figma:asset/25d5106bdba9de064632f793d4254244f12a9077.png";
import imgLandingPage from "figma:asset/c7f19defa44cc725455837139730c5c11137da75.png";
import imgSecondaryPage from "figma:asset/7159b76e7713bc4b775f93ca2793e258323c147a.png";
import v1Video from "../../../../assets/rhythm/video/rhythm-v1-walkthrough.mp4";
import v1Poster from "../../../../assets/rhythm/video/rhythm-v1-walkthrough-poster.jpg";
import desktopVideo from "../../../../assets/rhythm/video/rhythm-desktop-prototype.mp4";
import desktopPoster from "../../../../assets/rhythm/video/rhythm-desktop-prototype-poster.jpg";

// Earlier prototypes, in order. Neither is the current product.
const PROTOTYPES = [
  {
    num: "01",
    title: "Initial exploration",
    meta: "Mindful productivity dashboard · Fall 2025",
    body: "An early experiment combining self-reported behaviors with AI-generated guidance.",
    video: v1Video,
    poster: v1Poster,
    label: "Screen recording of the first Rhythm prototype: entering sleep, screen time, productivity, and a daily goal, then an AI analysis with a focus action",
  },
  {
    num: "02",
    title: "Desktop prototype",
    meta: "Capacity-aware planning · Spring 2026",
    body: "An expanded experience connecting recovery, daily demands, and task planning.",
    video: desktopVideo,
    poster: desktopPoster,
    label: "Screen recording of the Rhythm desktop prototype: readiness and calendar load, adding tasks, a Balanced interpretation, and the history view",
  },
];

export function Opportunity() {
  return (
    <section id="opportunity" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>01 · The opportunity</Eyebrow>
      <Heading size="lg" style={{ marginTop: 18 }}>
        What if technology understood what you <Italic>have to give,</Italic> not just what you
        have to do?
      </Heading>
      <Heading size="sm" as="h3" className="rh-nowrap-wide" style={{ marginTop: 36 }}>
        Our tools understand pieces of our lives. <Italic>Not how they fit together.</Italic>
      </Heading>
      <Body style={{ marginTop: 12 }}>
        Wearables track our activity and performance, calendars organize our schedules, and task
        managers track our responsibilities. But these tools rarely help us understand how those
        signals interact.
      </Body>

      {/* Early exploration */}
      <div style={{ marginTop: 64 }}>
        <Kicker variant="eyebrow">Early exploration · Fall 2025</Kicker>
        <Heading size="sm" as="h3" style={{ marginTop: 8 }}>
          From digital habits to human capacity
        </Heading>
        <Body style={{ marginTop: 10 }}>
          Rhythm began with an exploration of how screen time, sleep, and daily habits influence
          productivity and wellbeing. Through data analysis, I began questioning whether
          productivity was the right thing to optimize in the first place.
        </Body>

        <div className="rh-charts">
          <Reveal>
            <figure className="rh-chart">
              <img
                className="rh-chart__img"
                src={imgDecisionTree}
                alt="Bar chart of decision tree feature importance: screen time hours highest at about 0.66, then sleep hours, leisure screen time, and exercise minutes per week"
                loading="lazy"
              />
              <figcaption>
                <Label style={{ color: "var(--rh-ink)" }}>Decision tree analysis</Label>
                <Small style={{ marginTop: 4 }}>
                  Which behaviors best predicted self-reported productivity. Screen time led,
                  followed by sleep.
                </Small>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="rh-chart">
              <img
                className="rh-chart__img"
                src={imgKMeans}
                alt="Elbow plot for k-means clustering, with the curve bending at 3 and 5 clusters"
                loading="lazy"
              />
              <figcaption>
                <Label style={{ color: "var(--rh-ink)" }}>K-means clustering</Label>
                <Small style={{ marginTop: 4 }}>
                  Choosing how many patterns to look for across screen time, sleep, and
                  productivity. The curve bends at 3 and 5 clusters.
                </Small>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      <div
        className="rh-grid-stack"
        style={{ marginTop: 56, display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)", gap: 56, alignItems: "center" }}
      >
        <Reveal>
          <figure style={{ margin: 0, background: "var(--rh-white)", border: "1px solid var(--rh-border)", borderRadius: 18, padding: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              <img
                src={imgLandingPage}
                alt="Mindful Productivity Dashboard input screen: sleep hours, screen time, and a productivity slider"
                loading="lazy"
                style={{ width: "100%", borderRadius: 10, border: "1px solid var(--rh-border-warm)" }}
              />
              <img
                src={imgSecondaryPage}
                alt="Mindful Productivity Dashboard result screen with an LLM-written reflection"
                loading="lazy"
                style={{ width: "100%", borderRadius: 10, border: "1px solid var(--rh-border-warm)" }}
              />
            </div>
            <figcaption style={{ marginTop: 14, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
              <Label style={{ color: "var(--rh-ink)" }}>Mindful Productivity Dashboard</Label>
              <Small xs>The first prototype, built on that analysis</Small>
            </figcaption>
          </figure>
        </Reveal>

        <div className="rh-divide-left">
          <div
            className="rh-heading"
            style={{ fontSize: 30, color: "#A39A90", textDecoration: "line-through", textDecorationThickness: 1.5 }}
          >
            Productivity
          </div>
          <div aria-hidden style={{ fontSize: 18, color: "var(--rh-muted)", padding: "4px 0" }}>
            ↓
          </div>
          {/* One of the page's few intentional orange accents */}
          <div className="rh-heading" style={{ fontSize: 40, fontStyle: "italic", color: "var(--rh-accent)" }}>
            Capacity
          </div>
          <Editorial size="lg" style={{ marginTop: 28 }}>
            Productivity was the wrong thing to optimize.
          </Editorial>
          <Body style={{ marginTop: 12 }}>
            I became more interested in understanding what someone has available to give, and how
            technology could respond to that capacity.
          </Body>
        </div>
      </div>

      {/* How the prototype evolved */}
      <div style={{ marginTop: 72 }}>
        <Kicker variant="eyebrow">How the prototype evolved</Kicker>
        <Small style={{ marginTop: 4 }}>Earlier prototypes, shown to trace the thinking. Neither is the current product.</Small>
        <ol className="rh-evolution">
          {PROTOTYPES.map((p) => (
            <li key={p.num}>
              <Reveal>
                <DemoVideo src={p.video} poster={p.poster} label={p.label} />
              </Reveal>
              <Heading size="xs" as="h3" style={{ marginTop: 16 }}>
                {p.num} · {p.title}
              </Heading>
              <Small style={{ marginTop: 2, fontStyle: "italic" }}>{p.meta}</Small>
              <Body style={{ marginTop: 8, fontSize: 15 }}>{p.body}</Body>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
