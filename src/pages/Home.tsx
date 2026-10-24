import { Link } from "react-router";
import ClarityAssistImage from "figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png";
import AmazonLearnImage from "figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png";
import profileImage from "../imports/headshot.jpg";
import "../styles/portfolio.css";
import { BlyssComposition, CrwnComposition, DilComposition, RhythmComposition } from "../components/portfolio/ProjectComposition";
import { Reveal } from "../components/portfolio/Reveal";
import { PROJECT_COLORS } from "../components/portfolio/projectColors";

/** "read the case study" link in the Work page's style: caps, project color, underline, arrow turns ↗ on hover. */
function CaseLink({ color }: { color: string }) {
  return (
    <span className="pg-case-link" style={{ color, display: "inline-block", marginTop: 24 }}>
      read the case study <span className="pg-case-arrow" aria-hidden="true">→</span>
    </span>
  );
}

const CLARITY_URL =
  "https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1";
const LEARN_URL =
  "https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1";

const INDUSTRY = [
  {
    href: CLARITY_URL,
    image: ClarityAssistImage,
    alt: "Clarity Assist interface",
    eyebrow: "05 · Amazon",
    name: "Clarity Assist",
    description: "making complex enterprise data more accessible through conversational AI.",
  },
  {
    href: LEARN_URL,
    image: AmazonLearnImage,
    alt: "Amazon Learn assignments page",
    eyebrow: "06 · Amazon",
    name: "Learn",
    description:
      "developed UI components for a career management platform used by 3M+ users, contributing to Amazon's internal design system.",
    descMaxWidth: 500,
  },
];

export function Home() {
  return (
    <div className="pg">
      {/* Hero */}
      <section className="pg-wrap" style={{ paddingTop: "clamp(72px, 9vw, 120px)", paddingBottom: "clamp(64px, 7vw, 96px)" }}>
        <Reveal>
          <p className="pg-cat" style={{ fontSize: 16, letterSpacing: "0.12em" }}>
            hi, i'm alana!
          </p>
          <h1 className="pg-hero-h">
            i believe technology should give us
            <br className="pg-hbr" /> <span style={{ color: "var(--color-maroon)" }}>more space to be human.</span>
          </h1>
          <div style={{ height: 1, background: "#E6DFD8", marginTop: "clamp(40px, 4.5vw, 56px)" }} />
          <div className="pg-hero-cols">
            <p className="pg-hero-l">product designer, frontend developer, and entrepreneur.</p>
            <p className="pg-bd pg-hero-r">
              i'm a builder at heart, drawn to ideas that make everyday life more connected, intentional, and enjoyable.
            </p>
          </div>
          <a href="#work" className="pg-lk" style={{ marginTop: "clamp(36px, 4vw, 48px)", fontSize: 17 }}>
            explore my work ↓
          </a>
        </Reveal>
      </section>

      {/* Selected work */}
      <section id="work" className="pg-wrap" style={{ paddingTop: 24, paddingBottom: 24, scrollMarginTop: 100 }}>
        <div className="pg-shd">
          <h2 className="pg-cat">selected work</h2>
          <Link to="/work" className="pg-lk" style={{ fontSize: 15 }}>
            all work ↗
          </Link>
        </div>

        <Link to="/blyss" className="pg-pj" style={{ marginTop: 40 }}>
          <Reveal from="bottom" style={{ maxWidth: 900, margin: "0 auto" }}>
            <BlyssComposition />
          </Reveal>
          <Reveal className="pg-feat-info">
            <div>
              <p className="pg-cat" style={{ color: PROJECT_COLORS.blyss }}>
                01 · More connection
              </p>
              <p className="pg-pname" style={{ marginTop: 14 }}>
                Blyss Social
              </p>
              <p className="pg-role" style={{ marginTop: 10 }}>
                Co-Founder + CTO
              </p>
            </div>
            <div>
              <h3 className="pg-ph1">building a company around real-world connection.</h3>
              <p className="pg-b" style={{ marginTop: 14, maxWidth: 560 }}>
                co-founded and evolved a dating app into a social discovery platform, leading product strategy, design, and
                engineering.
              </p>
              <CaseLink color={PROJECT_COLORS.blyss} />
            </div>
          </Reveal>
        </Link>

        <div className="pg-pdiv" role="presentation" />
        <Link to="/rhythm" className="pg-pj pg-prow">
          <Reveal>
            <p className="pg-cat" style={{ color: PROJECT_COLORS.rhythm }}>
              02 · More alignment
            </p>
            <p className="pg-pname" style={{ marginTop: 14, fontSize: "clamp(32px, 3.4vw, 46px)" }}>
              Rhythm
            </p>
            <p className="pg-role" style={{ marginTop: 8 }}>
              Founder + UX Engineer
            </p>
            <h3 className="pg-ph1" style={{ marginTop: 24, fontSize: "clamp(22px, 2vw, 28px)" }}>
              designing for capacity, not productivity.
            </h3>
            <p className="pg-b" style={{ marginTop: 12 }}>
              developing a capacity intelligence platform connecting health, calendar, and task data to support daily
              decision-making.
            </p>
            <CaseLink color={PROJECT_COLORS.rhythm} />
          </Reveal>
          <Reveal from="right" className="pg-prow-visual">
            <RhythmComposition />
          </Reveal>
        </Link>

        <div className="pg-pdiv" role="presentation" />
        <Link to="/crwn" className="pg-pj pg-prow pg-prow--flip">
          <Reveal from="left" className="pg-prow-visual">
            <CrwnComposition />
          </Reveal>
          <Reveal>
            <p className="pg-cat" style={{ color: PROJECT_COLORS.crwn }}>
              03 · More expression
            </p>
            <p className="pg-pname" style={{ marginTop: 14, fontSize: "clamp(32px, 3.4vw, 46px)" }}>
              CRWN
            </p>
            <p className="pg-role" style={{ marginTop: 8 }}>
              UX Engineer
            </p>
            <h3 className="pg-ph1" style={{ marginTop: 24, fontSize: "clamp(22px, 2vw, 28px)" }}>
              reimagining textured hair discovery, community, and care.
            </h3>
            <p className="pg-b" style={{ marginTop: 12 }}>
              designed and developed the platform from the ground up, spanning brand, product design, and frontend engineering.
            </p>
            <CaseLink color={PROJECT_COLORS.crwn} />
          </Reveal>
        </Link>

        <div className="pg-pdiv" role="presentation" />
        <Link to="/design-intelligence-lab" className="pg-pj pg-prow">
          <Reveal>
            <p className="pg-cat" style={{ color: PROJECT_COLORS.dil }}>
              04 · More thoughtful design
            </p>
            <p className="pg-pname" style={{ marginTop: 14, fontSize: "clamp(32px, 3.4vw, 46px)" }}>
              Design Intelligence Lab
            </p>
            <p className="pg-role" style={{ marginTop: 8 }}>
              Co-Founder + Lead Engineer
            </p>
            <h3 className="pg-ph1" style={{ marginTop: 24, fontSize: "clamp(22px, 2vw, 28px)" }}>
              building at ai speed without losing design intent.
            </h3>
            <p className="pg-b" style={{ marginTop: 12 }}>
              designed and developed an ai-powered platform that helps teams identify design inconsistencies and maintain quality as they
              build.
            </p>
            <CaseLink color={PROJECT_COLORS.dil} />
          </Reveal>
          <Reveal from="right" className="pg-prow-visual">
            <DilComposition />
          </Reveal>
        </Link>

        <div className="pg-pdiv" role="presentation" />
        <Reveal>
          {INDUSTRY.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-pj pg-irow pg-irow--home"
              style={{ paddingTop: i === 0 ? 0 : 40 }}
            >
              <div className="pg-fig">
                <img src={p.image} alt={p.alt} />
              </div>
              <div>
                <p className="pg-cat">{p.eyebrow}</p>
                <p className="pg-pname2" style={{ marginTop: 8, fontSize: 24 }}>
                  {p.name}
                </p>
                <p className="pg-role" style={{ marginTop: 4 }}>
                  UX Design Intern
                </p>
              </div>
              <p className="pg-b pg-ix" style={{ maxWidth: "descMaxWidth" in p ? p.descMaxWidth : undefined }}>
                {p.description}
              </p>
              <span className="pg-lk pg-ix" style={{ fontSize: 15 }}>
                view project ↗<span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {/* About preview */}
      <section className="pg-wrap" style={{ paddingTop: 80, paddingBottom: 24 }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "center" }}>
          <div className="pg-headshot" style={{ flex: "1 1 360px", maxWidth: 400 }}>
            <img src={profileImage} alt="Alana Stull" />
          </div>
          <div style={{ flex: "999 1 480px", minWidth: 0 }}>
            <h2 className="pg-eyb">beyond the screen</h2>
            <p style={{ margin: "20px 0 0", font: "700 clamp(2rem, 3.6vw, 2.75rem)/1.15 var(--pg-sans)", color: "var(--color-ink)" }}>
              technology is my medium. <em style={{ color: "var(--color-maroon)" }}>for now.</em>
            </p>
            <p className="pg-bd" style={{ marginTop: 24, maxWidth: 640 }}>
              i'm a product designer, frontend developer, and entrepreneur who cares about creating experiences that extend beyond a
              screen.
            </p>
            <p className="pg-bd" style={{ marginTop: 14, maxWidth: 640 }}>
              outside of building products, you'll usually find me exploring coffee shops, searching for the best matcha, or noticing
              the little things that make a space feel welcoming.
            </p>
            <p style={{ margin: "20px 0 0", font: "700 22px/1.3 var(--pg-sans)", color: "var(--color-maroon)" }}>
              one day, i'll open my own.
            </p>
            <p className="pg-bd" style={{ marginTop: 14, maxWidth: 640 }}>
              a coffee shop and coworking space designed for people to work, connect, gather, or simply be.
            </p>
            <p className="pg-bd" style={{ marginTop: 14, maxWidth: 640 }}>
              for now, i'm bringing that same curiosity and intention into the products i build.
            </p>
            <Link to="/about" className="pg-btn2" style={{ marginTop: 32 }}>
              get to know me <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
