import type { ReactNode } from "react";
import { Body, Eyebrow, Heading, Italic, Label, Reveal, Small } from "../primitives";

const METHOD = [
  "Audit shared components first",
  "Make surgical fixes",
  "Separate styling changes from logic changes",
  "Track every file changed",
];

function CodeBlock({ before, after }: { before: ReactNode; after: ReactNode }) {
  return (
    <div className="crwn-code">
      <Label style={{ color: "#A5978A" }}>Before</Label>
      <pre>
        <code>{before}</code>
      </pre>
      <Label style={{ marginTop: 16, color: "var(--crwn-honey)" }}>After</Label>
      <pre>
        <code>{after}</code>
      </pre>
    </div>
  );
}

export function Code() {
  return (
    <section id="code" className="crwn-section" tabIndex={-1}>
      <Reveal>
        <Eyebrow>Design × code</Eyebrow>
        <Heading size="section" style={{ marginTop: 18 }}>
          The fixes only someone in <Italic>both design and code</Italic> would catch.
        </Heading>
        <Body style={{ marginTop: 24 }}>
          As the product moved toward launch, my work extended beyond implementing the redesign. I worked across frontend behavior,
          navigation, data models, and backend integrations, debugging issues that affected how the two-sided platform actually
          functioned.
        </Body>
      </Reveal>

      <Reveal className="crwn-grid-2 crwn-stack-lg" style={{ marginTop: 64, gap: 24 }}>
        <article className="crwn-find">
          <Label tone="maroon">Find 01 · Routing</Label>
          <Heading as="h3" size="card" style={{ marginTop: 12 }}>
            A finished feature nobody could reach.
          </Heading>
          <Small size="md" style={{ marginTop: 10 }}>
            StylistProfileScreen was fully built and unreachable. The tab navigator hardcoded the generic ProfileScreen regardless
            of role. I fixed the routing instead of rebuilding a feature that already existed.
          </Small>
          <CodeBlock
            before={
              <>
                <span className="tk-muted">Profile tab →</span> ProfileScreen <span className="tk-dim">// every role</span>
              </>
            }
            after={
              <>
                <span className="tk-muted">Profile tab →</span> role === "stylist"
                {"\n  "}
                <span className="tk-muted">?</span> <b className="tk-hl">StylistProfileScreen</b>
                {"\n  "}
                <span className="tk-muted">:</span> ProfileScreen
              </>
            }
          />
        </article>

        <article className="crwn-find">
          <Label tone="maroon">Find 02 · Data model</Label>
          <Heading as="h3" size="card" style={{ marginTop: 12 }}>
            Two ideas sharing one field.
          </Heading>
          <Small size="md" style={{ marginTop: 10 }}>
            Onboarding style selections were writing into hair_profiles.goals alongside actual hair goals. I split them into a
            separate style_preferences field so the two concepts stay distinct.
          </Small>
          <CodeBlock
            before={
              <>
                hair_profiles.goals <span className="tk-muted">= [goals + styles]</span>
              </>
            }
            after={
              <>
                hair_profiles.goals <span className="tk-muted">= [goals]</span>
                {"\n"}
                <b className="tk-hl">style_preferences</b> <span className="tk-muted">= [styles]</span>
              </>
            }
          />
        </article>
      </Reveal>

      <Reveal style={{ marginTop: 100 }}>
        <div className="crwn-method-head">
          <div>
            <Eyebrow>Working method</Eyebrow>
            <Heading as="h3" size="row" style={{ marginTop: 16 }}>
              Design stayed <Italic>the source of truth.</Italic>
            </Heading>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span className="crwn-tag">Figma</span>
            <span style={{ color: "var(--crwn-maroon)" }} aria-hidden="true">
              →
            </span>
            <span className="crwn-tag" style={{ borderColor: "var(--crwn-maroon)" }}>
              Implementation spec
            </span>
            <span style={{ color: "var(--crwn-maroon)" }} aria-hidden="true">
              →
            </span>
            <span className="crwn-tag">Code</span>
          </div>
        </div>
        <ol className="crwn-method" style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
          {METHOD.map((m, i) => (
            <li key={m}>
              <span className="crwn-label crwn-label--maroon" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="crwn-h crwn-h-sm">{m}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
