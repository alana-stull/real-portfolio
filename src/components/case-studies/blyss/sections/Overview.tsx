import { Users, MapPin, Calendar, Link2 } from "lucide-react";
import { Body, Eyebrow, Heading, Label, Placeholder, Card, Pill, AvatarStack } from "../primitives";

export function Overview() {
  return (
    <section id="overview" className="blyss__section">
      <div
        style={{
          minHeight: 420,
          position: "relative",
          background: "var(--bl-panel)",
          borderRadius: 24,
          padding: "32px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Label style={{ color: "var(--bl-navy)", width: "100%" }}>Blyss today</Label>

        <Placeholder variant="solid" style={{ width: 200, height: 432, borderRadius: 30 }}>
          [Current explore screen]
        </Placeholder>

        <Placeholder variant="solid" style={{ width: 220, height: 476, borderRadius: 32 }}>
          [Current plan screen]
          <br />
          hero device
        </Placeholder>

        <Placeholder style={{ width: 200, height: 432, borderRadius: 30 }}>
          [Availability matching]
        </Placeholder>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          <Placeholder style={{ width: 160, height: 270, borderRadius: 12 }}>
            [Web plan preview · Next.js]
          </Placeholder>
          <Label style={{ color: "var(--bl-navy)" }}>Web</Label>
        </div>

        <Card
          style={{
            width: 260,
            padding: 16,
            boxShadow: "0 8px 24px rgba(55,81,105,0.12)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 15, fontWeight: 700 }}>[Plan title]</span>
            <Pill variant="amber">
              <Calendar size={14} />
              [Day · time]
            </Pill>
          </div>
          <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <AvatarStack count={4} />
            <span
              style={{
                height: 34,
                padding: "0 16px",
                borderRadius: 999,
                background: "var(--bl-navy)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              I'm in
            </span>
          </div>
        </Card>
      </div>

      <div
        style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "minmax(0, 440px) minmax(0, 1fr)",
          gap: 48,
          alignItems: "start",
        }}
        className="bl-grid-stack"
      >
        <div>
          <Eyebrow>01 · Overview</Eyebrow>
          <Heading size="lg" style={{ marginTop: 20 }}>
            Technology can connect us without actually bringing us together.
          </Heading>
        </div>
        <div style={{ paddingTop: 8, display: "flex", flexDirection: "column", gap: 20 }}>
          <Body>
            Blyss is a social discovery platform built around a simple idea: technology should
            make it easier to experience life with other people, not become the experience
            itself.
          </Body>
          <Body>
            Today, Blyss connects people, places, and plans to help people discover what's
            around them, find something worth doing, and turn that possibility into real life.
          </Body>
        </div>
      </div>

      <div style={{ marginTop: 64, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--bl-navy)", fontSize: 13, fontWeight: 600 }}>
        <Link2 size={14} color="var(--bl-sky)" />
        People and places, connected through plans.
      </div>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 32,
        }}
      >
        {/* People */}
        <div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <IconBadge>
              <Users size={16} color="var(--bl-navy)" />
            </IconBadge>
            <Label style={{ color: "var(--bl-navy)" }}>People</Label>
          </div>
          <Heading size="xs" style={{ marginTop: 14 }}>
            Who do I want to experience life with?
          </Heading>
          <Card style={{ marginTop: 18, padding: 16 }}>
            <Placeholder style={{ height: 110, borderRadius: 10 }}>
              [Friends + group picker · cropped UI]
            </Placeholder>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <AvatarStack count={5} dashedLast size={32} />
              <Pill variant="on">
                <Users size={14} />
                [Group]
              </Pill>
            </div>
          </Card>
        </div>

        {/* Places */}
        <div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <IconBadge>
              <MapPin size={16} color="var(--bl-navy)" />
            </IconBadge>
            <Label style={{ color: "var(--bl-navy)" }}>Places</Label>
          </div>
          <Heading size="xs" style={{ marginTop: 14 }}>
            What's worth doing around me?
          </Heading>
          <Card style={{ marginTop: 18, overflow: "hidden" }}>
            <Placeholder
              style={{
                height: 150,
                border: "none",
                borderBottom: "1px dashed #9CC3D8",
                borderRadius: 0,
              }}
            >
              [Venue card · cropped UI]
            </Placeholder>
            <div style={{ padding: "14px 16px 16px" }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>[Venue name]</div>
              <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                <Pill>[Vibe]</Pill>
                <Pill>
                  <MapPin size={14} />
                  [Distance]
                </Pill>
              </div>
            </div>
          </Card>
        </div>

        {/* Plans */}
        <div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--bl-navy)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Calendar size={16} color="#fff" />
            </span>
            <Label style={{ color: "var(--bl-navy)" }}>Plans</Label>
          </div>
          <Heading size="xs" style={{ marginTop: 14 }}>
            How does possibility become something real?
          </Heading>
          <div style={{ position: "relative", marginTop: 24 }}>
            <Placeholder style={{ height: 300, borderRadius: 28 }}>[Plan screen]</Placeholder>
            <Card
              style={{
                marginTop: -40,
                marginLeft: 12,
                marginRight: -12,
                position: "relative",
                padding: 16,
                boxShadow: "0 8px 24px rgba(55,81,105,0.12)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 15, fontWeight: 700 }}>[Plan title]</span>
                <Pill variant="amber">[Day · time]</Pill>
              </div>
              <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <AvatarStack count={4} />
                <span
                  style={{
                    height: 34,
                    padding: "0 16px",
                    borderRadius: 999,
                    background: "var(--bl-navy)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  I'm in
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "var(--bl-sky-pale)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}
