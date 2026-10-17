import { Body, Eyebrow, Heading, Italic, Label, Reveal, Small } from "../primitives";

const STATS = [
  { label: "Branding", title: "Brand identity", body: "Created CRWN's identity across the app and website." },
  { label: "Visual system", title: "Complete redesign", body: "Unified colors, components, and interactions." },
  { label: "Component library", title: "Reusable foundations", body: "Developed shared components across both experiences." },
  { label: "Frontend + website", title: "Design to launch", body: "Implemented the redesign and rebuilt the website." },
];

export function Overview() {
  return (
    <section id="overview" className="crwn-section" tabIndex={-1}>
      <Reveal>
        <Eyebrow>Overview</Eyebrow>
        <Heading size="section" style={{ marginTop: 18 }}>
          One app for everyone <Italic>shaping textured hair.</Italic>
        </Heading>
        <div className="crwn-grid-2 crwn-stack-md" style={{ marginTop: 32, gap: "24px 56px" }}>
          <Body>
            CRWN brings together the people wearing textured hair and the professionals caring for it. Clients come to explore
            styles, learn about their hair, and find someone they trust. Stylists, barbers, braiders, and locticians come to show
            their work, get discovered, and run their business.
          </Body>
          <Body>
            I joined CRWN as a UX engineer and led its brand identity, design system, and product redesign. I also developed the
            frontend, rebuilt the company website, and helped bring the app to launch.
          </Body>
        </div>
      </Reveal>

      <Reveal className="crwn-grid-4 crwn-stats" style={{ marginTop: 80 }}>
        {STATS.map((s) => (
          <div key={s.label}>
            <Label tone="maroon">{s.label}</Label>
            <Heading as="div" size="md" style={{ marginTop: 10 }}>
              {s.title}
            </Heading>
            <Small style={{ marginTop: 8 }}>{s.body}</Small>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
