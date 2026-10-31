import { Brain, Code, PenTool, Rocket, type LucideIcon } from "lucide-react";
import profileImage from "../imports/headshot.jpg";
import coffeeShopPhoto from "../assets/about/about-coffee-shop.jpg";
import matchaPhoto from "../assets/about/about-matcha.jpg";
import spacePhoto from "../assets/about/about-space.jpg";
import "../styles/portfolio.css";
import { Reveal } from "../components/portfolio/Reveal";

const DISCIPLINES: { Icon: LucideIcon; label: string; description: string }[] = [
  { Icon: Brain, label: "psychology", description: "understand people" },
  { Icon: PenTool, label: "design", description: "shape experiences" },
  { Icon: Code, label: "engineering", description: "bring ideas to life" },
  { Icon: Rocket, label: "entrepreneurship", description: "build what's next" },
];

const STAGES = [
  { n: "01", title: "UNDERSTAND", body: "User research, psychology, human behavior, systems thinking" },
  { n: "02", title: "STRATEGIZE", body: "Product direction, prioritization, business models, experimentation" },
  { n: "03", title: "DESIGN", body: "Product design, interaction design, design systems, prototyping" },
  { n: "04", title: "BUILD", body: "Frontend dev, React Native, API integrations, technical implementation" },
];

/**
 * "Beyond the screen" photos. They're still missing in the mockup; set `src`
 * (import from src/assets/) to replace a dashed slot with the photo.
 */
const BEYOND_PHOTOS: { label: string; alt: string; src?: string; aspect: string; wide?: boolean; position?: string }[] = [
  {
    label: "coffee shop photo",
    alt: "A coffee shop counter with a “Support Local Coffee Shops” mural",
    src: coffeeShopPhoto,
    aspect: "3 / 2",
    wide: true,
    position: "50% 47%",
  },
  { label: "matcha photo", alt: "A layered iced matcha on a wooden shelf in a coffee shop", src: matchaPhoto, aspect: "4 / 5" },
  { label: "a space you love", alt: "A bright café with round marble tables and plants", src: spacePhoto, aspect: "4 / 5" },
];

export function About() {
  return (
    <div className="pg pg-about">
      {/* Intro */}
      <section className="pg-wrap" style={{ paddingTop: 96, paddingBottom: 64 }}>
        <Reveal style={{ display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "center" }}>
          <div style={{ flex: "999 1 520px", minWidth: 0 }}>
            <h1 className="pg-eyb">a little about me</h1>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: 829,
                font: "700 clamp(2rem, 4vw, 3rem)/1.08 var(--pg-sans)",
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
              }}
            >
              i'm curious about people, how things work, and{" "}
              <span style={{ color: "var(--color-maroon)" }}>what we could make better.</span>
            </p>
            <p className="pg-bd" style={{ marginTop: 28, maxWidth: 760 }}>
              i'm a product designer, frontend developer, and entrepreneur. i build products around problems i genuinely care about,
              especially how we connect with each other, take care of ourselves, and navigate everyday life.
            </p>
            <p className="pg-bd" style={{ marginTop: 16, maxWidth: 760 }}>
              i'm drawn to ideas that make life more connected, intentional, and enjoyable.
            </p>
          </div>
          <div className="pg-headshot" style={{ maxWidth: 364, aspectRatio: "320 / 427" }}>
            <img src={profileImage} alt="Alana Stull" />
          </div>
        </Reveal>
      </section>

      {/* How I got here */}
      <section className="pg-wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Reveal>
          <h2 className="pg-eyb">how i got here</h2>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: "24px 64px", alignItems: "start" }}>
            <p className="pg-h2" style={{ flex: "1 1 420px" }}>
              from understanding people to building for them.
            </p>
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
              <p className="pg-bd">
                i started with psychology to understand how people think, behave, and experience the world. design gave me a way to
                shape those experiences, engineering gave me the tools to bring ideas to life, and entrepreneurship opened up new
                possibilities for what i could create.
              </p>
              <p className="pg-bd" style={{ marginTop: 16 }}>
                today, i bring those perspectives together in the way i approach problems and build products.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal className="pg-disc pg-disc--card">
          {DISCIPLINES.map(({ Icon, label, description }) => (
            <div key={label} className="pg-disc-i">
              <Icon size={30} strokeWidth={1.5} color="var(--color-maroon)" aria-hidden="true" />
              <h3 className="pg-disc-l">{label}</h3>
              <p className="pg-disc-d">{description}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* How I work */}
      <section className="pg-wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}>
            <h2 className="pg-eyb">how i work</h2>
            <a href="/Stull-Alana-Resume.pdf" target="_blank" rel="noopener noreferrer" className="pg-lk">
              view resume ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="pg-h2 pg-oneline" style={{ marginTop: 20 }}>
            a little strategy, a lot of curiosity, and a willingness to build.
          </p>
          <div
            style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 32 }}
          >
            {STAGES.map((s) => (
              <div key={s.n} className="pg-stage">
                <p className="pg-cat">{s.n}</p>
                <h3 className="pg-stage__t">{s.title}</h3>
                <p className="pg-b" style={{ marginTop: 12, color: "var(--color-warm-grey)" }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Education */}
      <section className="pg-wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Reveal>
          <h2 className="pg-eyb" style={{ marginBottom: 32 }}>
            education
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 0" }}>
            <div className="pg-edu-col" style={{ flex: "1 1 360px", paddingRight: 48, boxSizing: "border-box" }}>
              <h3 style={{ margin: "0 0 4px", font: "600 22px/1.3 var(--pg-sans)", letterSpacing: "-0.01em", color: "var(--color-ink)" }}>
                M.Eng. in Design and Technology Innovation
              </h3>
              <p className="pg-b" style={{ fontStyle: "italic", marginBottom: 4 }}>
                Innovation &amp; Entrepreneurship Certificate
              </p>
              <p className="pg-b" style={{ color: "#374151", marginTop: 16 }}>
                Duke University
              </p>
              <p className="pg-b" style={{ marginTop: 4 }}>
                Expected Graduation: December 2026
              </p>
            </div>
            <div className="pg-edu-div" aria-hidden="true" />
            <div className="pg-edu-col" style={{ flex: "1 1 360px", paddingLeft: 48, boxSizing: "border-box" }}>
              <h3 style={{ margin: "0 0 4px", font: "600 22px/1.3 var(--pg-sans)", letterSpacing: "-0.01em", color: "var(--color-ink)" }}>
                B.A. in Psychology (Human Factors)
              </h3>
              <p className="pg-b" style={{ fontStyle: "italic", marginBottom: 4 }}>
                Engineering Design, Entrepreneurship, and African-American Studies
              </p>
              <p className="pg-b" style={{ color: "#374151", marginTop: 16 }}>
                Rice University
              </p>
              <p className="pg-b" style={{ marginTop: 4 }}>
                Graduated May 2025
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* A little more about me */}
      <section className="pg-wrap" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <Reveal
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--color-linen)",
            borderRadius: 24,
            padding: "clamp(32px, 5vw, 64px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 64px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "999 1 480px", minWidth: 0 }}>
            <h2 className="pg-eyb">a little more about me</h2>
            <p className="pg-h2" style={{ marginTop: 20 }}>
              i care about how experiences make people feel.
            </p>
            <p className="pg-bd" style={{ marginTop: 24, maxWidth: 620 }}>
              i've always been drawn to the little details that shape an experience, whether it's an intuitive app, a thoughtfully
              designed space, or a really good cup of matcha.
            </p>
            <p className="pg-bd" style={{ marginTop: 14, maxWidth: 620 }}>
              i love exploring coffee shops, trying new places, and noticing what makes people want to stay. the lighting, the music,
              the menu, the way a space brings people together. i find inspiration in all of it.
            </p>
            <p style={{ margin: "24px 0", font: "italic 700 clamp(1.25rem, 2vw, 1.625rem)/1.2 var(--pg-sans)", color: "var(--color-maroon)" }}>
              one day, i want to create a space of my own.
            </p>
            <p className="pg-bd" style={{ maxWidth: 620 }}>
              a coffee shop and coworking space filled with real plants, seasonal drinks, fresh baked goods, and plenty of room to work,
              connect, or simply exist.
            </p>
            <p className="pg-bd" style={{ marginTop: 14, maxWidth: 620 }}>
              until then, i'm exploring those same ideas through technology: creating experiences that make more room for people to be
              human.
            </p>
          </div>
          <div
            style={{ flex: "1 1 320px", maxWidth: 440, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}
          >
            {BEYOND_PHOTOS.map((p) => (
              <div
                key={p.label}
                className={`pg-dz ${p.src ? "pg-dz--filled" : ""}`}
                style={{ aspectRatio: p.aspect, gridColumn: p.wide ? "span 2" : undefined }}
                {...(p.src ? {} : { role: "img", "aria-label": `Missing photo: ${p.label}` })}
              >
                {p.src ? (
                  <img src={p.src} alt={p.alt} style={p.position ? { objectPosition: p.position } : undefined} />
                ) : (
                  <span>
                    missing asset:
                    <br />
                    {p.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
