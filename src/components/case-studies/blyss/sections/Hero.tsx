import { Body, Eyebrow, Heading, Highlight, Label, Placeholder } from "../primitives";
import blyssLogo from "../../../../assets/blyss-logo.png";

export function Hero() {
  return (
    <section id="hero" className="blyss__hero">
      <div className="blyss__hero-content">
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <Eyebrow>More space for connection</Eyebrow>
            <img src={blyssLogo} alt="Blyss logo" className="bl-hero-logo" />
          </div>

          <div
            className="bl-grid-stack"
            style={{ marginTop: 28, display: "grid", gridTemplateColumns: "minmax(0, 1fr) 420px", gap: 48, alignItems: "center" }}
          >
            <div>
              <Heading as="h1" size="hero">
                Building a company around
                <br />
                <Highlight>real-world connection.</Highlight>
              </Heading>

              <Body large style={{ marginTop: 28, maxWidth: 560 }}>
                What started as a dating app became a broader exploration of how technology can
                help people discover each other, their cities, and more reasons to experience
                life offline.
              </Body>
            </div>

            <div style={{ position: "relative" }}>
              <Placeholder style={{ width: "100%", aspectRatio: "4 / 3", borderRadius: 16 }}>
                [Desktop · Blyss web]
              </Placeholder>
              <Placeholder
                variant="solid"
                style={{
                  position: "absolute",
                  right: -16,
                  bottom: -36,
                  width: "42%",
                  aspectRatio: "9 / 19",
                  borderRadius: 26,
                }}
              >
                [App · Today]
              </Placeholder>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bl-hero-band"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 24,
        }}
      >
        <div>
          <Label style={{ color: "#A9BDCD" }}>My role</Label>
          <div style={{ marginTop: 10, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            Co-Founder + CTO
          </div>
        </div>
        <div>
          <Label style={{ color: "#A9BDCD" }}>Platform</Label>
          <div style={{ marginTop: 10, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            iOS + Web
          </div>
        </div>
        <div>
          <Label style={{ color: "#A9BDCD" }}>Scope</Label>
          <div style={{ marginTop: 10, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            Product Strategy · Design
          </div>
          <div style={{ marginTop: 2, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            Fullstack Development
          </div>
        </div>
        <div>
          <Label style={{ color: "#A9BDCD" }}>Outcome</Label>
          <div style={{ marginTop: 10, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            Live in TestFlight
          </div>
          <div style={{ marginTop: 2, fontSize: 15, fontWeight: 400, lineHeight: 1.45, color: "#fff" }}>
            Early testing in Durham + DC
          </div>
        </div>
      </div>
    </section>
  );
}
