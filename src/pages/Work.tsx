import { Link } from "react-router";
import ClarityAssistImage from "figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png";
import AmazonLearnImage from "figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png";
import "../styles/portfolio.css";
import { BlyssComposition, CrwnComposition, RhythmComposition } from "../components/portfolio/ProjectComposition";
import { Reveal } from "../components/portfolio/Reveal";
import { PROJECT_COLORS } from "../components/portfolio/projectColors";

const INDUSTRY = [
  {
    href: "https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1",
    image: AmazonLearnImage,
    alt: "Amazon Learn assignments page",
    name: "Amazon Learn",
    role: "UX Design Intern · 2023",
    description:
      "Developed UI components for a career management platform used by 3M+ users, contributing to Amazon's internal design system.",
  },
  {
    href: "https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1",
    image: ClarityAssistImage,
    alt: "Clarity Assist interface",
    name: "Clarity Assist",
    role: "UX Design Intern · 2024",
    description:
      "Designed and conducted usability tests for a generative AI/LLM platform hosting 1.4k+ people metrics and 175k+ customized reports.",
  },
];

type Built = { name: string; description: string; to?: string; href?: string };

const BUILT: Built[] = [
  { name: "Lately", description: "A private, invite-only app for close friend groups, built solo end to end with React and Firebase." },
  {
    name: "Mentor Me Collective",
    description: "Brand guide, campaign assets, and event materials for a mentorship nonprofit.",
    to: "/case-studies/mentor-me-collective",
  },
  {
    name: "Duke NSBE Website",
    description: "Designed and built the chapter's first website from scratch, member sign-in included.",
    href: "https://www.dukensbe.com/",
  },
  {
    name: "Triangle AI Hackathon",
    description: "Rebranded a regional student hackathon with a new logo, an event website built from scratch, and flyers for print and social.",
    href: "https://triangleaihackathon.com/",
  },
];

function BuiltItem({ item }: { item: Built }) {
  const body = (
    <>
      <h3 className="pg-pname2" style={{ fontSize: 20, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
        {item.name}
        {(item.to || item.href) && (
          <span style={{ color: "var(--color-maroon)", fontWeight: 500, flexShrink: 0 }} aria-hidden="true">
            ↗
          </span>
        )}
      </h3>
      <p className="pg-b" style={{ marginTop: 8, fontSize: 15 }}>
        {item.description}
      </p>
    </>
  );
  if (item.to) return <Link to={item.to}>{body}</Link>;
  if (item.href)
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {body}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  return <div>{body}</div>;
}

/** Eyebrow on the left, "CASE STUDY →" on the right, both in the project color. */
function CaseMeta({ eyebrow, color }: { eyebrow: string; color: string }) {
  return (
    <div className="pg-case-meta" style={{ color }}>
      <p className="pg-cat" style={{ color }}>
        {eyebrow}
      </p>
      <span className="pg-case-link">
        case study <span className="pg-case-arrow" aria-hidden="true">→</span>
      </span>
    </div>
  );
}

export function Work() {
  return (
    <div className="pg">
      {/* Header */}
      <section
        className="pg-wrap"
        style={{
          paddingTop: 96,
          paddingBottom: 72,
          display: "flex",
          flexWrap: "wrap",
          gap: "32px clamp(64px, 11vw, 168px)",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ flex: "0 1 auto", minWidth: 0 }}>
          <p className="pg-cat">selected work</p>
          <h1
            style={{
              margin: "24px 0 0",
              font: "700 clamp(2.75rem, 5.6vw, 4.75rem)/1.02 var(--pg-sans)",
              letterSpacing: "-0.04em",
              color: "var(--color-ink)",
            }}
          >
            different problems.
            <br />
            <span style={{ color: "var(--color-maroon)" }}>one approach.</span>
          </h1>
        </div>
        <p className="pg-bd" style={{ flex: "1 1 320px", maxWidth: 520, paddingBottom: 8 }}>
          From consumer products to enterprise systems, I work across strategy, design, and engineering to turn complex ideas into
          experiences people can actually use.
        </p>
      </section>

      {/* Case studies */}
      <section className="pg-wrap" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div className="pg-shd">
          <h2 className="pg-cat">case studies</h2>
          <p className="pg-role">3 projects</p>
        </div>

        <Reveal style={{ marginTop: 40 }}>
          <Link to="/case-studies/blyss" className="pg-pj">
            <div className="pg-tint pg-tint--blyss">
              <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <BlyssComposition />
              </div>
            </div>
            <div className="pg-case-info">
              <CaseMeta eyebrow="more space for connection" color={PROJECT_COLORS.blyss} />
              <div className="pg-case-feat">
                <h3 className="pg-pname">Blyss Social</h3>
                <p className="pg-b" style={{ maxWidth: 560, fontSize: 18 }}>
                  Reimagining social discovery, from the company's direction to the product and systems behind it.
                </p>
              </div>
            </div>
          </Link>
        </Reveal>

        <div className="pg-pair pg-pair--even">
          <Reveal>
            <Link to="/case-studies/rhythm" className="pg-pj">
              <div className="pg-tint pg-tint--rhythm">
                <RhythmComposition aspect="4 / 3" />
              </div>
              <div className="pg-case-info">
                <CaseMeta eyebrow="more space for wellness" color={PROJECT_COLORS.rhythm} />
                <h3 className="pg-pname2" style={{ marginTop: 12 }}>
                  Rhythm
                </h3>
                <p className="pg-b" style={{ marginTop: 10, maxWidth: 460 }}>
                  Building capacity intelligence that connects how you're doing with what your day demands.
                </p>
              </div>
            </Link>
          </Reveal>
          <Reveal className="pg-pair__offset" delay={0.1}>
            <Link to="/case-studies/crwn" className="pg-pj">
              <div className="pg-tint pg-tint--crwn">
                <CrwnComposition aspect="4 / 3" />
              </div>
              <div className="pg-case-info">
                <CaseMeta eyebrow="more space for expression" color={PROJECT_COLORS.crwn} />
                <h3 className="pg-pname2" style={{ marginTop: 12 }}>
                  CRWN
                </h3>
                <p className="pg-b" style={{ marginTop: 10, maxWidth: 460 }}>
                  Redesigning and developing a textured-hair marketplace across brand, product, and engineering.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Industry experience */}
      <section className="pg-wrap" style={{ paddingTop: "clamp(96px, 10vw, 140px)", paddingBottom: 24 }}>
        <div className="pg-shd" style={{ borderTop: "none", paddingTop: 0 }}>
          <h2 className="pg-cat">industry experience</h2>
        </div>
        <Reveal style={{ marginTop: 20, borderTop: "1px solid var(--color-ink)" }}>
          {INDUSTRY.map((p) => (
            <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="pg-pj pg-irow pg-irow--work">
              <div className="pg-fig">
                <img src={p.image} alt={p.alt} />
              </div>
              <div>
                <h3 className="pg-pname2" style={{ fontSize: 24 }}>
                  {p.name}
                </h3>
                <p className="pg-role" style={{ marginTop: 4 }}>
                  {p.role}
                </p>
              </div>
              <p className="pg-b pg-ix">{p.description}</p>
              <span className="pg-lk pg-ix" style={{ fontSize: 15 }}>
                view project ↗<span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {/* Other things I've built */}
      <section className="pg-wrap" style={{ paddingTop: "clamp(80px, 9vw, 120px)", paddingBottom: 24 }}>
        <h2 className="pg-cat">other things i've built</h2>
        <Reveal className="pg-built">
          {BUILT.map((item) => (
            <BuiltItem key={item.name} item={item} />
          ))}
        </Reveal>
      </section>
    </div>
  );
}
