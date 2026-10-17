import { blyssImages } from "../images";
import { Body, Eyebrow, FitStage, Heading, Icon, IconDot, ImageSlot, Label, Pill, Reveal, type IconName } from "../primitives";

const DISCOVER: { icon: IconName; label: string; body: string }[] = [
  { icon: "users", label: "People", body: "Find the people already in your life and the ones you haven’t met yet." },
  { icon: "pin", label: "Places", body: "Discover more of what’s around you." },
];

/** People + Places are what you discover; Plans is the layer that turns them into real life. */
function Framework() {
  return (
    <div className="bc-g bc-stack-lg" style={{ gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) 40px minmax(0, 1.15fr)", gap: 24, alignItems: "stretch" }}>
      {DISCOVER.map((p) => (
        <div key={p.label} style={{ border: "1px solid #E3E4E6", borderRadius: 20, padding: "24px 24px 28px", background: "#FFFFFF" }}>
          <div className="bc-row">
            <IconDot name={p.icon} />
            <h3 className="bc-caps" style={{ margin: 0, fontSize: 13 }}>
              {p.label}
            </h3>
          </div>
          <p className="bc-h bc-h-card" style={{ marginTop: 16, fontWeight: 600 }}>
            {p.body}
          </p>
        </div>
      ))}
      <div className="bc-tl__arrow" aria-hidden="true" style={{ alignItems: "center", padding: 0 }}>
        <Icon name="chevronRight" size={22} color="#5BA8D3" />
      </div>
      <div style={{ borderRadius: 20, padding: "24px 24px 28px", background: "#375169" }}>
        <div className="bc-row">
          <IconDot name="calendar" dark />
          <h3 className="bc-caps" style={{ margin: 0, fontSize: 13, color: "#FFFFFF" }}>
            Plans
          </h3>
        </div>
        <p className="bc-h bc-h-card" style={{ marginTop: 16, fontWeight: 600, color: "#FFFFFF" }}>
          Turn possibilities into something real.
        </p>
        <p className="bc-sm" style={{ marginTop: 10, color: "#DCE6EE" }}>
          <span style={{ display: "block", marginBottom: 4, fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "#B7D3E0" }}>
            The connective layer
          </span>
          The plan helps people move from discovering an opportunity to experiencing it together.
        </p>
      </div>
    </div>
  );
}

/** The current app, 1176×840 (positions measured from the band's left edge). */
function Moment() {
  const abs = (left: number, top: number) => ({ position: "absolute" as const, left, top });
  return (
    <div style={{ position: "relative", width: 1176, height: 840 }}>
      <Label style={{ ...abs(72, 40), color: "#375169" }}>The current app</Label>

      {/* Plans: a recap that traces back to a plan */}
      <div style={abs(232, 150)}>
        <Pill variant="sl" icon="calendar">
          Plans
        </Pill>
      </div>
      <div style={{ ...abs(218, 190), width: 236 }}>
        <ImageSlot image={blyssImages.nowPeople} w={236} h={493} delay={0.15} />
      </div>

      {/* Places: venue detail + venue card */}
      <div style={abs(846, 74)}>
        <Pill variant="on" icon="pin">
          Places
        </Pill>
      </div>
      <div style={{ ...abs(722, 114), width: 236 }}>
        <ImageSlot image={blyssImages.nowPlaces} w={236} h={493} delay={0.25} />
      </div>

      {/* Hero: explore */}
      <div style={{ ...abs(418, 44), width: 340 }}>
        <ImageSlot image={blyssImages.nowExploreHero} w={340} h={710} />
      </div>

      <div style={{ ...abs(800, 580), width: 300 }}>
        <ImageSlot image={blyssImages.nowVenueCard} w={300} h={202} delay={0.45} />
      </div>

      {/* People: social status */}
      <div style={abs(96, 520)}>
        <Pill variant="on" icon="users">
          People
        </Pill>
      </div>
      <div style={{ ...abs(70, 560), width: 300 }}>
        <ImageSlot image={blyssImages.nowStatusCard} w={300} h={263} delay={0.55} />
      </div>
    </div>
  );
}

/** Phones: hero screen first, then the two side screens, then the cards. */
function MomentStacked() {
  return (
    <div style={{ padding: "32px 0 40px" }}>
      <Label style={{ color: "#375169" }}>The current app</Label>
      <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 300 }}>
          <ImageSlot image={blyssImages.nowExploreHero} w={300} h={627} />
        </div>
      </div>
      <div className="bc-screens" style={{ marginTop: 32, alignItems: "flex-start", justifyContent: "center" }}>
        <div style={{ flex: "0 1 220px", minWidth: 0 }}>
          <Pill variant="sl" icon="calendar">
            Plans
          </Pill>
          <div style={{ marginTop: 12 }}>
            <ImageSlot image={blyssImages.nowPeople} w={220} h={460} />
          </div>
        </div>
        <div style={{ flex: "0 1 220px", minWidth: 0 }}>
          <Pill variant="on" icon="pin">
            Places
          </Pill>
          <div style={{ marginTop: 12 }}>
            <ImageSlot image={blyssImages.nowPlaces} w={220} h={460} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ width: "100%", maxWidth: 320 }}>
          <ImageSlot image={blyssImages.nowVenueCard} w={320} h={215} />
        </div>
        <Pill variant="on" icon="users">
          People
        </Pill>
        <div style={{ width: "100%", maxWidth: 320 }}>
          <ImageSlot image={blyssImages.nowStatusCard} w={320} h={281} />
        </div>
      </div>
    </div>
  );
}

export function Now() {
  return (
    <section id="now" className="bc-sec" tabIndex={-1}>
      <Reveal>
        <Eyebrow>06 · Now</Eyebrow>
        <Heading size="sec" className="bc-head-gap">
          Five years later, the question is bigger.
        </Heading>
        <div className="bc-cols2 bc-body-gap">
          <Body>Blyss has evolved from dating into a social discovery platform connecting people, places, and plans.</Body>
          <Body>The goal is simple: help people discover more possibilities and turn them into shared experiences.</Body>
        </div>
      </Reveal>

      <Reveal className="bc-after-head">
        <Framework />
      </Reveal>

      {/* Full-bleed band. The composition spans the band edge to edge. */}
      <div
        className="bc-after-head"
        style={{ marginLeft: "calc(var(--bc-pad-l) * -1)", marginRight: "calc(var(--bc-pad-r) * -1)", background: "#EAF3F8" }}
      >
        <div className="bc-cq">
          <div className="bc-cq__wide">
            <FitStage width={1176} height={840}>
              <Moment />
            </FitStage>
          </div>
          <div className="bc-cq__narrow" style={{ paddingLeft: "var(--bc-pad-l)", paddingRight: "var(--bc-pad-r)" }}>
            <MomentStacked />
          </div>
        </div>
      </div>

      <Reveal style={{ marginTop: 24, display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <Pill dashed style={{ height: 26, fontSize: 12 }}>
          TestFlight
        </Pill>
        <span className="bc-cap" style={{ flex: "1 1 280px" }}>
          The rebuilt Blyss is in early testing through TestFlight, with first users in Durham and Washington, DC.
        </span>
      </Reveal>
    </section>
  );
}
