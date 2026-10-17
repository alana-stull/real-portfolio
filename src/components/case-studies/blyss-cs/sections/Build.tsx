import { Body, Eyebrow, Heading, Icon, Label, Reveal, Small } from "../primitives";

function Down({ color }: { color: string }) {
  return (
    <div aria-hidden="true" style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
      <Icon name="chevronDown" size={18} color={color} />
    </div>
  );
}

function StepDown() {
  return (
    <div aria-hidden="true" style={{ padding: "4px 0 4px 14px" }}>
      <Icon name="chevronDown" size={16} color="#8B8F94" />
    </div>
  );
}

/** Highlighted chips are where product rules are enforced. */
const SUPABASE = [
  { label: "Auth", role: "Who someone is" },
  { label: "Postgres", role: "People, places, plans" },
  { label: "RLS", role: "Who can see what", hl: true },
  { label: "Triggers", role: "Rules on write", hl: true },
  { label: "Storage", role: "Media" },
  { label: "Realtime", role: "Live updates" },
];

const EXTERNAL = ["Google Places", "Ticketmaster", "Expo Push", "Next.js web previews"];

function Architecture() {
  return (
    <div className="bc-g bc-stack-lg" style={{ gridTemplateColumns: "240px minmax(0, 1fr)", gap: 64, alignItems: "start" }}>
      <div>
        <Label style={{ color: "#A9BDCD", marginBottom: 16 }}>Before</Label>
        <div className="bc-arch-box">Expo / React Native</div>
        <Down color="#8FA7BC" />
        <div className="bc-arch-box">Express / Node</div>
        <Down color="#8FA7BC" />
        <div className="bc-arch-box">Supabase</div>
        <Small style={{ marginTop: 14, fontSize: 13, color: "#A9BDCD" }}>A custom server sat between the app and the data.</Small>
      </div>
      <div>
        <Label style={{ color: "#B7D3E0", marginBottom: 16 }}>After</Label>
        <div className="bc-g bc-stack-md" style={{ gridTemplateColumns: "minmax(0, 1fr) 180px", gap: 40, alignItems: "start" }}>
          <div>
            <div className="bc-arch-box" style={{ borderColor: "rgba(255,255,255,0.6)", color: "#FFFFFF" }}>
              Expo / React Native
            </div>
            <Down color="#B7D3E0" />
            <div style={{ border: "1px solid #B7D3E0", background: "rgba(255,255,255,0.06)", borderRadius: 18, padding: 20 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#FFFFFF" }}>Supabase</div>
              <div className="bc-g" style={{ marginTop: 14, gridTemplateColumns: "repeat(auto-fit, minmax(132px, 1fr))", gap: 8 }}>
                {SUPABASE.map((c) => (
                  <div key={c.label} className={`bc-arch-chip ${c.hl ? "bc-arch-chip--hl" : ""}`}>
                    {c.label}
                    <span>{c.role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 14, display: "flex", gap: 8, alignItems: "center", fontSize: 13, fontWeight: 600, color: "#B7D3E0" }}>
              <span aria-hidden="true" style={{ width: 12, height: 12, borderRadius: 4, background: "#5BA8D3", flexShrink: 0 }} />
              Product rules increasingly live here, in the data layer.
            </div>
          </div>
          <div>
            <Label style={{ color: "#8FA7BC", marginBottom: 6, fontSize: 10 }}>Supporting integrations</Label>
            {EXTERNAL.map((e) => (
              <div key={e} className="bc-arch-ext">
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IntentFlows() {
  return (
    <div className="bc-g bc-stack-md" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 24, alignItems: "start" }}>
      <div style={{ border: "1px solid #E3E4E6", borderRadius: 20, padding: 24, background: "#FFFFFF" }}>
        <Label>Before · browsing wrote data</Label>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
          <div className="bc-card bc-step">View external event</div>
          <StepDown />
          <div className="bc-card bc-step">Database write</div>
          <StepDown />
          <div
            className="bc-step"
            style={{ display: "flex", gap: 10, alignItems: "center", border: "1px dashed #B5B8BC", background: "#F4F5F6", color: "#6B7076" }}
          >
            <Icon name="x" size={16} color="#6B7076" />
            Plan accidentally exists
          </div>
        </div>
      </div>
      <div style={{ border: "1px solid #B7D3E0", borderRadius: 20, padding: 24, background: "#F1F7FA" }}>
        <Label style={{ color: "#375169" }}>After · writing requires intent</Label>
        <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
          <div className="bc-card bc-step">View external event</div>
          <StepDown />
          <div className="bc-card bc-step">Read-only preview</div>
          <StepDown />
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ background: "#375169", borderRadius: 999, padding: "12px 22px", fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>
              “Plan this”
            </div>
            <span className="bc-cap" style={{ color: "#375169", fontWeight: 700 }}>
              ← intent
            </span>
          </div>
          <StepDown />
          <div className="bc-card bc-step">Pre-filled creation flow</div>
          <StepDown />
          <div className="bc-step" style={{ display: "flex", gap: 10, alignItems: "center", background: "#375169", fontWeight: 700, color: "#FFFFFF" }}>
            <Icon name="check" size={16} color="#B7D3E0" />
            Database write only on commitment
          </div>
        </div>
      </div>
    </div>
  );
}

export function Build() {
  return (
    <section id="build" className="bc-sec bc-sec--flush" tabIndex={-1}>
      {/* Architecture (full-bleed slate band) */}
      <div className="bc-bleed bc-build bc-on-dark">
        <Reveal>
          <Eyebrow>05 · Build</Eyebrow>
          <Heading size="sec" className="bc-head-gap" style={{ color: "#FFFFFF" }}>
            The product strategy had to <span style={{ color: "#B7D3E0", fontWeight: 800 }}>survive the code.</span>
          </Heading>
        </Reveal>

        <div className="bc-sub">
          <Reveal>
            <Eyebrow variant="sub">01 · Architecture</Eyebrow>
            <Heading as="h3" size="sub" className="bc-head-gap" style={{ color: "#FFFFFF" }}>
              Rebuilding the architecture.
            </Heading>
            <Body className="bc-body-gap bc-measure" style={{ color: "#DCE6EE" }}>
              As Blyss evolved, I rebuilt the backend around Supabase, bringing authentication, data, storage, and realtime into one system.
              This also allowed product decisions around privacy and access to become enforceable database rules, not just interface
              behavior.
            </Body>
          </Reveal>
          <Reveal className="bc-after-head">
            <Architecture />
          </Reveal>
        </div>
      </div>

      {/* Product × Engineering */}
      <div style={{ paddingTop: "var(--bc-sec-y)" }}>
        <Reveal>
          <Eyebrow variant="sub">02 · Product × Engineering</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            Looking at something isn’t the same as committing to it.
          </Heading>
          <div className="bc-cols2 bc-body-gap">
            <Body>
              Viewing an external event used to create a plan record. In the data, browsing and committing looked the same, so plans existed
              that nobody had chosen to make.
            </Body>
            <Body>
              The fix wasn’t a patch to one screen. It was a product decision about what a plan is, and it meant changing the data flow
              underneath: viewing became read-only, and a plan is written only when someone chooses “Plan this.”
            </Body>
          </div>
        </Reveal>
        <Reveal className="bc-after-head">
          <IntentFlows />
        </Reveal>
        <Reveal className="bc-rule" style={{ marginTop: 32 }}>
          <div style={{ padding: "40px 56px 40px 40px", background: "#FFFFFF" }}>
            <Eyebrow variant="sub">Product principle</Eyebrow>
            <div className="bc-h bc-h-ins" style={{ marginTop: 20 }}>
              Browsing isn’t commitment.
            </div>
            <Small style={{ marginTop: 14, fontSize: 15 }}>A plan should exist only after someone intends to make one.</Small>
          </div>
          <div style={{ padding: "40px 40px 40px 56px", background: "#EAF3F8" }}>
            <Eyebrow variant="sub">System rule</Eyebrow>
            <div className="bc-h bc-h-ins" style={{ marginTop: 20, color: "#375169" }}>
              No plan record on view.
            </div>
            <Small style={{ marginTop: 14, fontSize: 15, color: "#4A5F73" }}>
              Plans are written only from “Plan this,” which keeps the data honest about intent.
            </Small>
          </div>
          <div className="bc-rule__link" aria-hidden="true">
            <Icon name="link" size={18} color="#5BA8D3" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
