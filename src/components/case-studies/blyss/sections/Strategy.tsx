import { Users, MapPin, Calendar, Image, Link2 } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, CodeLine, Card, Small } from "../primitives";

export function Strategy() {
  return (
    <section id="strategy" className="blyss__section">
      <Eyebrow>03 · Product strategy</Eyebrow>
      <Heading size="xl" style={{ marginTop: 20, maxWidth: 900 }}>
        We weren't building another <Highlight>social network.</Highlight>
      </Heading>

      <div
        className="bl-grid-stack"
        style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40 }}
      >
        <Body>
          As Blyss expanded beyond dating, the opportunity wasn't to create another place for
          people to spend time online. It was to build the connective layer between wanting a
          social life and actually having one.
        </Body>
        <Body>
          That distinction shaped what belonged in the product. Discovery needed to lead
          somewhere. Social activity needed to reflect real experiences. And plans needed enough
          structure to move beyond the group chat.
        </Body>
      </div>

      {/* System model diagram */}
      <div style={{ marginTop: 64 }}>
        <Label style={{ color: "var(--bl-navy)" }}>Fig. 03 · System model</Label>
        <div
          className="bl-flex-stack"
          style={{
            marginTop: 16,
            background: "var(--bl-panel)",
            borderRadius: 24,
            padding: 24,
            display: "flex",
            gap: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ width: 240, padding: 18, flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <IconBadge>
                <Users size={15} color="var(--bl-navy)" />
              </IconBadge>
              <Heading size="xs" as="span">
                People
              </Heading>
            </div>
            <Small xs style={{ marginTop: 12 }}>
              friends · hosts · attendees
            </Small>
          </Card>

          <Link2 size={20} color="var(--bl-sky)" className="bl-hide-mobile" />

          <div
            style={{
              width: 260,
              flexShrink: 0,
              boxSizing: "border-box",
              background: "var(--bl-navy)",
              borderRadius: 20,
              padding: "20px 22px",
              boxShadow: "0 10px 30px rgba(55,81,105,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Label style={{ color: "var(--bl-powder)" }}>Connective layer</Label>
              <Calendar size={18} color="var(--bl-powder)" />
            </div>
            <Heading size="sm" as="div" style={{ marginTop: 8, color: "#fff" }}>
              Plans
            </Heading>
            <div style={{ marginTop: 8, fontSize: 12, fontWeight: 600, lineHeight: 1.55, color: "var(--bl-powder)" }}>
              invites · availability · commitment · coordination
            </div>
            <div
              style={{
                marginTop: 14,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: "10px 12px",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>I'm in</span>
            </div>
          </div>

          <Link2 size={20} color="var(--bl-sky)" className="bl-hide-mobile" />

          <Card style={{ width: 240, padding: 18, flexShrink: 0 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <IconBadge>
                <MapPin size={15} color="var(--bl-navy)" />
              </IconBadge>
              <Heading size="xs" as="span">
                Places
              </Heading>
            </div>
            <Small xs style={{ marginTop: 12 }}>
              venues · events · experiences
            </Small>
          </Card>
        </div>

        <div style={{ marginTop: 20, display: "flex", justifyContent: "center" }}>
          <Card style={{ width: 240, padding: 18 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <IconBadge>
                <Image size={15} color="var(--bl-navy)" />
              </IconBadge>
              <Heading size="xs" as="span">
                Memories
              </Heading>
            </div>
            <Small xs style={{ marginTop: 12 }}>
              recaps · posts · status
            </Small>
          </Card>
        </div>
      </div>

      {/* The plan is the product */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>Product principle</Eyebrow>
        <Heading size="hero" style={{ marginTop: 20 }}>
          The plan is <Highlight>the product.</Highlight>
        </Heading>
        <Body style={{ margin: "28px 0 0", maxWidth: 540 }}>
          A venue recommendation isn't useful if nobody goes. A group chat isn't successful
          because everyone says "we should." For Blyss, the meaningful unit isn't a click,
          match, or message. It's a plan that becomes real.
        </Body>

        <div
          className="bl-grid-stack"
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            border: "1px solid var(--bl-border)",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "36px 32px", background: "#fff" }}>
            <Eyebrow>Product principle</Eyebrow>
            <Heading size="sm" style={{ marginTop: 18 }}>
              "The plan is the product."
            </Heading>
            <Small style={{ marginTop: 14 }}>Real-world activity should create the social layer.</Small>
          </div>
          <div style={{ padding: "36px 32px", background: "var(--bl-sky-pale)" }}>
            <Eyebrow variant="on-white">System rule</Eyebrow>
            <CodeLine>
              <span style={{ fontSize: 20, fontWeight: 600, color: "var(--bl-navy)" }}>
                posts.plan_id → required
              </span>
            </CodeLine>
            <Small style={{ marginTop: 18, color: "var(--bl-grey-navy)" }}>
              Social content has to trace back to a real plan.
            </Small>
          </div>
        </div>
      </div>

      {/* Scoping */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>Scoping</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 820 }}>
          A bigger vision needed a smaller first product.
        </Heading>

        <div
          className="bl-grid-stack"
          style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 40, alignItems: "start" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <Body>Once the vision expanded, the challenge became deciding what not to build.</Body>
            <Body>
              Blyss could eventually touch discovery, calendars, reservations, payments,
              recommendations, events, messaging, and social identity. Building all of that at
              once would make it impossible to know whether the core behavior worked.
            </Body>
          </div>
          <div style={{ borderTop: "2px solid var(--bl-sky)", paddingTop: 18 }}>
            <Heading size="sm" style={{ fontWeight: 600, color: "var(--bl-navy)" }}>
              Can we help someone turn an intention into a plan they actually show up for?
            </Heading>
          </div>
        </div>

        <div
          className="bl-grid-stack-3"
          style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.25fr 1fr 1fr", gap: 16, alignItems: "start" }}
        >
          <ScopeColumn tone="now" title="Now" items={["[Now feature 01]", "[Now feature 02]", "[Now feature 03]", "[Now feature 04]"]} />
          <ScopeColumn tone="next" title="Next" items={["[Next feature 01]", "[Next feature 02]", "[Next feature 03]"]} />
          <ScopeColumn tone="later" title="Later" items={["[Later feature 01]", "[Later feature 02]", "[Later feature 03]"]} />
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 14,
            alignItems: "center",
            borderTop: "1px solid var(--bl-border)",
            paddingTop: 20,
          }}
        >
          <IconBadge>
            <Calendar size={16} color="var(--bl-navy)" />
          </IconBadge>
          <Label style={{ color: "var(--bl-navy)" }}>Product decision</Label>
          <Heading size="xs" as="span">
            "Don't build two companies at once."
          </Heading>
        </div>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: 30,
        height: 30,
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

function ScopeColumn({
  tone,
  title,
  items,
}: {
  tone: "now" | "next" | "later";
  title: string;
  items: string[];
}) {
  const styles: Record<string, React.CSSProperties> = {
    now: { background: "var(--bl-sky-pale)", borderRadius: 20, padding: 24 },
    next: { border: "1px solid var(--bl-border)", borderRadius: 20, padding: 24, background: "#fff" },
    later: { border: "1px dashed var(--bl-grey-light)", borderRadius: 20, padding: 24 },
  };
  const pillVariant = tone === "now" ? "selected" : tone === "next" ? "on" : undefined;
  return (
    <div style={styles[tone]}>
      <span className={`bl-pill ${pillVariant ? `bl-pill--${pillVariant}` : ""}`}>{title}</span>
      <div style={{ marginTop: 16 }}>
        {items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              padding: "12px 0",
              borderTop: "1px solid var(--bl-border)",
              fontSize: 13,
              fontWeight: 600,
              color: tone === "later" ? "var(--bl-grey)" : "var(--bl-ink)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: tone === "now" ? "var(--bl-sky)" : "var(--bl-border)" }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
