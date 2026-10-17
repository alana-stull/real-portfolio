import { Check, X } from "lucide-react";
import { Body, Eyebrow, Heading, Highlight, Label, Slot, Card, Small } from "../primitives";

export function Build() {
  return (
    <section id="build" className="blyss__section">
      <div className="bl-bleed" style={{ background: "var(--bl-navy)", padding: "64px 24px", color: "#fff" }}>
        <Eyebrow variant="dark">06 · Engineering</Eyebrow>
        <Heading size="xl" style={{ marginTop: 20, maxWidth: 900, color: "#fff" }}>
          The product strategy had to{" "}
          <span style={{ color: "var(--bl-powder)", fontWeight: 800 }}>survive the code.</span>
        </Heading>
        <Slot style={{ marginTop: 24, maxWidth: 560, minHeight: 72, borderColor: "rgba(183,211,224,0.5)", color: "#DCE6EE" }}>
          [Body · 2 to 3 sentences on why the earlier architecture was rebuilt]
        </Slot>

        <div className="bl-grid-stack" style={{ marginTop: 56, display: "grid", gridTemplateColumns: "260px minmax(0, 1fr)", gap: 48, alignItems: "start" }}>
          <div>
            <Label style={{ color: "#A9BDCD", marginBottom: 16 }}>Before</Label>
            <StackRow muted>Expo / React Native</StackRow>
            <StackRow muted>Express / Node</StackRow>
            <StackRow muted last>Supabase</StackRow>
          </div>
          <div>
            <Label style={{ color: "var(--bl-powder)", marginBottom: 16 }}>After</Label>
            <div className="bl-grid-stack" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 200px", gap: 32, alignItems: "start" }}>
              <div>
                <StackRow>Expo / React Native</StackRow>
                <div
                  style={{
                    border: "1px solid var(--bl-powder)",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 18,
                    padding: 20,
                    marginTop: 8,
                  }}
                >
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Supabase</div>
                  <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 8 }}>
                    <ServiceChip>Auth</ServiceChip>
                    <ServiceChip>Postgres</ServiceChip>
                    <ServiceChip active>RLS</ServiceChip>
                    <ServiceChip active>Triggers</ServiceChip>
                    <ServiceChip>Storage</ServiceChip>
                    <ServiceChip>Realtime</ServiceChip>
                  </div>
                </div>
                <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "var(--bl-powder)" }}>
                  ↑ Product rules increasingly live here.
                </div>
              </div>
              <div>
                <Label style={{ color: "#A9BDCD", marginBottom: 8, fontSize: 10 }}>External + supporting</Label>
                <ExternalRow>Google Places</ExternalRow>
                <ExternalRow>Ticketmaster</ExternalRow>
                <ExternalRow>Expo Push</ExternalRow>
                <ExternalRow>Next.js web previews</ExternalRow>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product x Engineering */}
      <div style={{ padding: "72px 0 56px" }}>
        <Eyebrow>Product × Engineering</Eyebrow>
        <Heading size="lg" style={{ marginTop: 20, maxWidth: 900 }}>
          Looking at something isn't the same as committing to it.
        </Heading>

        <div className="bl-grid-stack-3" style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label style={{ marginBottom: 10 }}>Before</Label>
            <StepCard>View external event</StepCard>
            <StepCard>Database write</StepCard>
            <StepCard dashed muted icon={<X size={16} color="var(--bl-grey)" />}>
              Plan accidentally exists
            </StepCard>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Label style={{ marginBottom: 10, color: "var(--bl-navy)" }}>After</Label>
            <StepCard>View external event</StepCard>
            <StepCard>Read-only preview</StepCard>
            <StepCard highlight>"Plan this"</StepCard>
            <StepCard>Pre-filled creation flow</StepCard>
            <StepCard dark icon={<Check size={16} color="var(--bl-powder)" />}>
              Database write only on commitment
            </StepCard>
          </div>
          <div>
            <Label style={{ marginBottom: 10 }}>What changed</Label>
            <Slot style={{ minHeight: 160 }}>[Short explanation · the product-flow correction]</Slot>
          </div>
        </div>
      </div>
    </section>
  );
}

function StackRow({ children, muted, last }: { children: React.ReactNode; muted?: boolean; last?: boolean }) {
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 12,
          padding: "14px 16px",
          fontSize: 14,
          fontWeight: 600,
          color: muted ? "#A9BDCD" : "#fff",
        }}
      >
        {children}
      </div>
      {!last && (
        <div aria-hidden style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
          ↓
        </div>
      )}
    </>
  );
}

function ServiceChip({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div
      style={{
        borderRadius: 999,
        border: active ? "1px solid var(--bl-sky)" : "1px solid rgba(255,255,255,0.25)",
        background: active ? "var(--bl-sky)" : "transparent",
        padding: "8px 10px",
        textAlign: "center",
        fontSize: 12,
        fontWeight: 700,
        color: active ? "#0F2233" : "#DCE6EE",
      }}
    >
      {children}
    </div>
  );
}

function ExternalRow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ borderTop: "1px dashed rgba(255,255,255,0.25)", padding: "12px 0", fontSize: 13, fontWeight: 600, color: "#DCE6EE" }}>
      {children}
    </div>
  );
}

function StepCard({
  children,
  dashed,
  muted,
  dark,
  highlight,
  icon,
}: {
  children: React.ReactNode;
  dashed?: boolean;
  muted?: boolean;
  dark?: boolean;
  highlight?: boolean;
  icon?: React.ReactNode;
}) {
  if (dark) {
    return (
      <div style={{ display: "flex", gap: 10, alignItems: "center", background: "var(--bl-navy)", borderRadius: 12, padding: "12px 14px", fontSize: 14, fontWeight: 700, color: "#fff" }}>
        {icon}
        {children}
      </div>
    );
  }
  if (highlight) {
    return (
      <div style={{ alignSelf: "flex-start", background: "var(--bl-navy)", borderRadius: 999, padding: "10px 20px", fontSize: 14, fontWeight: 700, color: "#fff", width: "fit-content" }}>
        {children}
      </div>
    );
  }
  return (
    <div
      className="bl-card"
      style={{
        padding: "12px 14px",
        fontSize: 14,
        fontWeight: 600,
        borderRadius: 12,
        display: dashed ? "flex" : undefined,
        gap: dashed ? 10 : undefined,
        alignItems: dashed ? "center" : undefined,
        borderStyle: dashed ? "dashed" : undefined,
        background: muted ? "#F4F5F6" : undefined,
        color: muted ? "var(--bl-grey)" : undefined,
      }}
    >
      {icon}
      {children}
    </div>
  );
}
