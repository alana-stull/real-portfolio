import { Users, MapPin, Sparkles, DollarSign, Star, Lock, ChevronDown } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, Placeholder, Card, Pill, AvatarStack, Slot, Small } from "../primitives";

export function System() {
  return (
    <section id="system" className="blyss__section">
      <Eyebrow>05 · Privacy</Eyebrow>
      <Heading size="xl" style={{ marginTop: 20, maxWidth: 1000 }}>
        Social proof shouldn't require <Highlight>social surveillance.</Highlight>
      </Heading>

      <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 32, alignItems: "center" }}>
        {/* Before committing */}
        <div className="bl-flex-stack" style={{ display: "flex", gap: 24, width: "100%", maxWidth: 720 }}>
          <Placeholder style={{ width: 220, height: 460, borderRadius: 30, flexShrink: 0, margin: "0 auto" }}>
            [Plan preview · before joining]
          </Placeholder>
          <div style={{ flexGrow: 1 }}>
            <Label style={{ color: "var(--bl-navy)", marginBottom: 8 }}>Before committing</Label>
            <VisibilityRow icon={<Users size={14} color="var(--bl-sky)" />} label="Attendee count">
              <Pill variant="on">
                <Users size={14} color="var(--bl-navy)" />
                N going
              </Pill>
            </VisibilityRow>
            <VisibilityRow icon={<Users size={14} color="var(--bl-sky)" />} label="Limited identity">
              <span style={{ display: "inline-flex", alignItems: "center" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="bl-avatar"
                    style={{ width: 28, height: 28, background: "var(--bl-grey-blur)", filter: "blur(1.5px)" }}
                  />
                ))}
              </span>
            </VisibilityRow>
          </div>
        </div>

        {/* Commit transition */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 0, height: 40, borderLeft: "2px dashed var(--bl-powder)" }} />
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "var(--bl-navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lock size={20} color="#fff" />
          </div>
          <Pill variant="selected" style={{ marginTop: 10 }}>
            I'm in
          </Pill>
          <div style={{ width: 0, height: 40, marginTop: 8, borderLeft: "2px solid var(--bl-sky)" }} />
          <Small xs style={{ marginTop: 8, textAlign: "center" }}>
            permissions change on commitment
          </Small>
        </div>

        {/* After joining */}
        <div className="bl-flex-stack" style={{ display: "flex", gap: 24, width: "100%", maxWidth: 720 }}>
          <Placeholder variant="solid" style={{ width: 220, height: 460, borderRadius: 30, flexShrink: 0, margin: "0 auto" }}>
            [Plan detail · after joining]
          </Placeholder>
          <div style={{ flexGrow: 1 }}>
            <Label style={{ color: "var(--bl-navy)", marginBottom: 8 }}>After joining</Label>
            <VisibilityRow icon={<Users size={14} color="var(--bl-sky)" />} label="Attendee identities">
              <AvatarStack count={5} size={30} />
            </VisibilityRow>
            <VisibilityRow icon={<Users size={14} color="var(--bl-sky)" />} label="Social context">
              <Slot>[Mutuals / context UI]</Slot>
            </VisibilityRow>
            <VisibilityRow icon={<Users size={14} color="var(--bl-sky)" />} label="Chat access">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ width: "78%", height: 22, borderRadius: "12px 12px 12px 4px", background: "var(--bl-sky-pale)" }} />
                <span style={{ alignSelf: "flex-end", width: "58%", height: 22, borderRadius: "12px 12px 4px 12px", background: "var(--bl-sky)" }} />
              </div>
            </VisibilityRow>
          </div>
        </div>
      </div>

      <Slot style={{ margin: "40px auto 0", maxWidth: 560, minHeight: 72 }}>
        [Short paragraph · how visibility expands after someone commits]
      </Slot>

      {/* Personalization */}
      <div style={{ marginTop: 96 }}>
        <Eyebrow>Personalization</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 820 }}>
          Start with signals we can actually understand.
        </Heading>

        <div className="bl-flex-stack" style={{ marginTop: 48, display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
            <SignalChip icon={<Sparkles size={16} color="var(--bl-sky)" />} label="Interests" />
            <ChevronDown size={16} color="var(--bl-sky)" style={{ marginLeft: 22 }} />
            <SignalChip icon={<Star size={16} color="var(--bl-sky)" />} label="Vibe" />
            <ChevronDown size={16} color="var(--bl-sky)" style={{ marginLeft: 22 }} />
            <SignalChip icon={<DollarSign size={16} color="var(--bl-sky)" />} label="Budget" />
            <ChevronDown size={16} color="var(--bl-sky)" style={{ marginLeft: 22 }} />
            <SignalChip icon={<MapPin size={16} color="var(--bl-sky)" />} label="Distance" />
            <ChevronDown size={16} color="var(--bl-sky)" style={{ marginLeft: 22 }} />
            <SignalChip icon={<Star size={16} color="var(--bl-sky)" />} label="Rating" />
          </div>

          <Card style={{ width: 260, border: "2px solid var(--bl-navy)", padding: 20, flexShrink: 0 }}>
            <Label style={{ color: "var(--bl-navy)", lineHeight: 1.5 }}>Rule-based personalization</Label>
            <Slot style={{ marginTop: 12 }}>[Rule logic detail]</Slot>
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, flexGrow: 1, minWidth: 240 }}>
            <Label style={{ color: "var(--bl-navy)" }}>Venues for you</Label>
            <Card style={{ overflow: "hidden" }}>
              <Placeholder style={{ height: 100, border: "none", borderBottom: "1px dashed #9CC3D8", borderRadius: 0 }}>
                [Venue photo]
              </Placeholder>
              <div style={{ padding: 14 }}>
                <div style={{ fontSize: 15, fontWeight: 700 }}>[Venue name]</div>
                <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                  <Pill>[Vibe]</Pill>
                  <Pill>
                    <MapPin size={14} />
                    [Distance]
                  </Pill>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div
          className="bl-flex-stack"
          style={{ marginTop: 48, display: "flex", gap: 24, alignItems: "center", borderTop: "1px solid var(--bl-border)", paddingTop: 24 }}
        >
          <div>
            <Pill variant="selected">Now</Pill>
            <Heading size="xs" style={{ marginTop: 10 }}>
              Explicit signals
            </Heading>
          </div>
          <div className="bl-hide-mobile" aria-hidden style={{ flexGrow: 1, borderTop: "2px dashed var(--bl-grey-cool)" }} />
          <div>
            <Pill variant="dashed">Later</Pill>
            <Heading size="xs" style={{ marginTop: 10, color: "var(--bl-grey)" }}>
              Behavioral signals
            </Heading>
            <Small style={{ marginTop: 4 }}>once enough real usage data exists</Small>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisibilityRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ borderTop: "1px solid var(--bl-border)", padding: "14px 0 18px" }}>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {icon}
        <Label style={{ color: "var(--bl-ink)" }}>{label}</Label>
      </div>
      <div style={{ marginTop: 10 }}>{children}</div>
    </div>
  );
}

function SignalChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        height: 44,
        boxSizing: "border-box",
        borderRadius: 999,
        border: "1px solid var(--bl-powder)",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 16px",
        width: "fit-content",
      }}
    >
      {icon}
      <span style={{ fontSize: 14, fontWeight: 700 }}>{label}</span>
    </div>
  );
}
