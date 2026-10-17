import { Send, Smartphone, Calendar, MessageCircle, RefreshCw, Sparkles, Users, MapPin, ChevronRight } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, Placeholder, Card, Pill } from "../primitives";

const LOOP_STEPS = [
  { icon: <Send size={16} color="var(--bl-navy)" />, title: "Discover Blyss", note: "Waitlist / outreach" },
  { icon: <Smartphone size={16} color="var(--bl-navy)" />, title: "Try the product", note: "TestFlight" },
  { icon: <Calendar size={16} color="var(--bl-navy)" />, title: "Make or join a plan", note: "Real social behavior" },
  { icon: <MessageCircle size={16} color="var(--bl-navy)" />, title: "Tell us what happened", note: "Feedback + iteration" },
];

export function Launch() {
  return (
    <>
      <section id="launch" className="blyss__section">
        <Eyebrow>07 · Launch</Eyebrow>
        <Heading size="xl" style={{ marginTop: 20, maxWidth: 940 }}>
          The next questions can't be answered in <Highlight>Figma.</Highlight>
        </Heading>

        <div className="bl-grid-stack" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          <Body>
            After years of shaping the product, the questions we're asking now are behavioral.
            Will people create plans without being prompted? Will friends actually commit? Will
            discovering something on Blyss lead to doing something offline?
          </Body>
          <Body>
            We're testing those questions through early users in Durham and Washington, DC,
            starting with controlled TestFlight groups before expanding further.
          </Body>
        </div>

        <div className="bl-grid-stack" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }}>
          <MarketCard city="DURHAM, NC" />
          <MarketCard city="WASHINGTON, DC" />
        </div>

        {/* Testing loop */}
        <div style={{ marginTop: 72 }}>
          <Eyebrow>Early testing loop</Eyebrow>
          <div
            className="bl-grid-stack-3"
            style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 16 }}
          >
            {LOOP_STEPS.map((step, i) => (
              <div key={step.title} style={{ display: "flex", alignItems: "stretch", gap: 12 }}>
                <Card style={{ padding: 18, minHeight: 140, flexGrow: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "var(--bl-sky-pale)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.icon}
                    </span>
                    <Label>{String(i + 1).padStart(2, "0")}</Label>
                  </div>
                  <div style={{ marginTop: 14, fontSize: 15, fontWeight: 800, lineHeight: 1.3 }}>{step.title}</div>
                  <div className="bl-small" style={{ marginTop: 4, fontSize: 13 }}>
                    {step.note}
                  </div>
                </Card>
                <ChevronRight size={18} color="var(--bl-sky)" className="bl-hide-mobile" style={{ alignSelf: "center", flexShrink: 0 }} />
              </div>
            ))}
            <Card style={{ padding: 18, minHeight: 140, background: "var(--bl-navy)", borderColor: "var(--bl-navy)" }}>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.14)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RefreshCw size={16} color="#fff" />
              </span>
              <Label style={{ color: "var(--bl-powder)", marginTop: 14 }}>05</Label>
              <div style={{ marginTop: 14, fontSize: 15, fontWeight: 800, lineHeight: 1.3, color: "#fff" }}>Ship again</div>
            </Card>
          </div>
          <div className="bl-small" style={{ textAlign: "center", marginTop: 16, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--bl-navy)" }}>
            ↺ and back again
          </div>
        </div>

        <div
          className="bl-grid-stack"
          style={{
            marginTop: 56,
            background: "var(--bl-panel)",
            borderRadius: 24,
            padding: 32,
            display: "grid",
            gridTemplateColumns: "280px minmax(0, 1fr)",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div>
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Sparkles size={18} color="var(--bl-navy)" />
            </span>
            <Heading size="xs" style={{ marginTop: 16, color: "var(--bl-navy)" }}>
              Testing a social product requires something to be social about.
            </Heading>
          </div>
          <Body>
            Some of Blyss's core flows only become meaningful when other people participate. So
            testing isn't just about handing someone the app. We've had to seed places, create
            plans, and design testing around enough real activity for people to experience the
            system as intended.
          </Body>
        </div>
      </section>

      {/* Where it is now */}
      <section id="now" className="blyss__section" style={{ paddingTop: 120 }}>
        <Eyebrow>Where it is now</Eyebrow>
        <Heading size="xl" style={{ marginTop: 20, maxWidth: 900 }}>
          Five years later, the question is <Highlight>bigger.</Highlight>
        </Heading>

        <div className="bl-grid-stack" style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}>
          <Body>
            Blyss is no longer a dating app or simply a planning tool. It's becoming a social
            discovery platform built around people, places, and plans, with the plan acting as
            the connective layer between discovering a possibility and experiencing it in real
            life.
          </Body>
          <Body>
            The product is still evolving, but the goal has become much clearer: create more
            possibilities for people to experience life together.
          </Body>
        </div>

        <div
          className="bl-bleed"
          style={{
            marginTop: 56,
            background: "var(--bl-sky-pale)",
            padding: 32,
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Label style={{ color: "var(--bl-navy)", width: "100%" }}>Big current product moment</Label>
          <div>
            <Pill variant="on" style={{ marginBottom: 8 }}>
              <Users size={14} color="var(--bl-navy)" />
              People
            </Pill>
            <Placeholder style={{ width: 200, height: 420, borderRadius: 30 }}>[People screen]</Placeholder>
          </div>
          <Placeholder
            variant="solid"
            style={{ width: 260, height: 560, borderRadius: 36, boxShadow: "0 24px 60px rgba(55,81,105,0.18)" }}
          >
            [Current explore screen · hero]
          </Placeholder>
          <div>
            <Pill variant="on" style={{ marginBottom: 8 }}>
              <MapPin size={14} color="var(--bl-navy)" />
              Places
            </Pill>
            <Placeholder style={{ width: 200, height: 420, borderRadius: 30 }}>[Places screen]</Placeholder>
          </div>
          <Placeholder
            style={{ width: "100%", maxWidth: 300, height: 180, borderRadius: "22px 22px 0 0", borderColor: "var(--bl-powder)" }}
          >
            [Plans screen · bottom sheet crop]
          </Placeholder>
        </div>

        <div className="bl-grid-stack-3" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 32 }}>
          <NowPillar icon={<Users size={16} color="var(--bl-navy)" />} label="PEOPLE" title="Find the people already in your life and the ones you haven't met yet." />
          <NowPillar icon={<MapPin size={16} color="var(--bl-navy)" />} label="PLACES" title="Discover more of what's around you." />
          <NowPillar icon={<Calendar size={16} color="var(--bl-navy)" />} label="PLANS" title="Turn possibilities into something real." />
        </div>
      </section>
    </>
  );
}

function MarketCard({ city }: { city: string }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <Heading size="xs" as="span">
          {city}
        </Heading>
        <Pill variant="on">
          <MapPin size={14} color="var(--bl-navy)" />
          Early market
        </Pill>
      </div>
      <Placeholder style={{ marginTop: 16, height: 300, borderRadius: 20 }}>
        [{city} · map / city photography / product]
      </Placeholder>
    </div>
  );
}

function NowPillar({ icon, label, title }: { icon: React.ReactNode; label: string; title: string }) {
  return (
    <div>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
          {icon}
        </span>
        <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", color: "var(--bl-navy)" }}>{label}</span>
      </div>
      <Heading size="xs" style={{ marginTop: 14, fontWeight: 600 }}>
        {title}
      </Heading>
    </div>
  );
}
