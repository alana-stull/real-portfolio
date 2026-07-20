import { Link } from "react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import BlyssImageStatic from "figma:asset/a599320fb284b50fd85c5467705d2e1467d43acb.png";
import RhythmImageStatic from "figma:asset/ea41269c606125350e08adaa0b350dd2e791ab23.png";
import ClarityAssistImage from "figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png";
import {
  FeaturedProjectCarousel,
  type FeaturedProject,
} from "../components/FeaturedProjectCarousel";

export function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  const expertiseCards = [
    {
      title: "Design",
      description:
        "Skilled product designer experienced in design thinking, product development, and usability testing, crafting intuitive, human-centered experiences.",
    },
    {
      title: "Development",
      description:
        "Expanding expertise in front-end development, building scalable, cross-platform interfaces that bring design systems to life.",
    },
    {
      title: "AI & Emerging Tech",
      description:
        "Exploring how AI can enhance digital experiences, designing intelligent systems that make products more adaptive, useful, and intuitive.",
    },
    {
      title: "Strategy",
      description:
        "Applying design strategy and product thinking to translate complex ideas into clear, impactful solutions.",
    },
    {
      title: "Leadership",
      description:
        "Empathetic leader passionate about mentorship and community impact, committed to cultivating collaborative growth.",
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % expertiseCards.length);
  };

  const featuredProjects: FeaturedProject[] = [
    {
      id: "blyss",
      title: "Blyss Social",
      category: "SOCIAL DISCOVERY",
      image: BlyssImageStatic,
      accentColor: "var(--color-maroon)",
      ctaLabel: "View case study",
      accordion: [
        {
          title: "The Pivot",
          description:
            "Killed the original dating app concept for something people actually needed.",
        },
        {
          title: "End to End",
          description:
            "Every screen, every line of code, mine from Figma to shipped product.",
        },
        {
          title: "App Store Push",
          description:
            "Currently learning Swift to take Blyss fully native.",
        },
      ],
    },
    {
      id: "rhythm",
      title: "Rhythm",
      category: "PERSONAL WELLNESS",
      image: RhythmImageStatic,
      accentColor: "var(--color-tan)",
      ctaLabel: "View case study",
      accordion: [
        {
          title: "The Problem",
          description:
            "Wellness apps track data but rarely turn it into action.",
        },
        {
          title: "The Build",
          description:
            "A web dashboard and Electron app pulling from Oura and Google Calendar in real time.",
        },
        {
          title: "What's Next",
          description:
            "Layering in LLM-powered microbreak prompts as the product matures.",
        },
      ],
    },
    {
      id: "clarity-assist",
      title: "Clarity Assist",
      category: "AMAZON INTERNSHIP",
      image: ClarityAssistImage,
      accentColor: "var(--color-brown)",
      ctaLabel: "View prototype",
      externalLink:
        "https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1",
      ndaNote: "Some specifics are limited due to NDA.",
      accordion: [
        {
          title: "Two Users, One Tool",
          description:
            "Same AI system, built differently for corporate managers and hourly team leads.",
        },
        {
          title: "Access as Strategy",
          description:
            "The real design problem wasn't the interface, it was who gets to see what.",
        },
        {
          title: "The Impact",
          description: "Why the split-access model mattered.",
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--color-off-white)" }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="max-w-5xl ml-0 lg:ml-12">
            {/* Badge */}
            <div className="mb-8">
              <span
                className="inline-block px-4 py-2 rounded-full"
                style={{
                  fontSize: "13px",
                  fontWeight: "var(--font-weight-semibold)",
                  letterSpacing: "0.05em",
                  color: "var(--color-ink)",
                  textTransform: "uppercase",
                  backgroundColor: "var(--color-linen)",
                }}
              >
                ux engineer & entrepreneur
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "1.1",
                color: "var(--color-ink)",
                marginBottom: "1.5rem",
              }}
            >
              hey, i'm alana!
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                lineHeight: "1.4",
                color: "var(--color-warm-grey)",
                marginBottom: "3rem",
                maxWidth: "55rem",
              }}
            >
              building human-centered, ai-powered experiences that{" "}
              <span style={{ whiteSpace: "nowrap" }}>empower, connect, and simplify.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg group"
                style={{
                  backgroundColor: "var(--color-maroon)",
                  color: "white",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <span>See my work</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="mailto:stull.alana@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-opacity-80"
                style={{
                  backgroundColor: "var(--color-linen)",
                  color: "var(--color-ink)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Background Cards - Stacked/Fanned Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Third card - furthest back */}
              <div
                className="absolute w-[320px] h-[420px] rounded-2xl"
                style={{
                  backgroundColor: "var(--color-linen)",
                  transform: "translateY(-16px) translateX(-12px) rotate(-4deg) scale(0.92)",
                  zIndex: 1,
                  opacity: 0.5,
                }}
              />
              {/* Second card - middle */}
              <div
                className="absolute w-[320px] h-[420px] rounded-2xl"
                style={{
                  backgroundColor: "var(--color-linen)",
                  transform: "translateY(-8px) translateX(-6px) rotate(-2deg) scale(0.96)",
                  zIndex: 2,
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Active Card with Animation */}
            <div className="relative z-10 w-[320px] h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-white rounded-2xl p-8 flex flex-col"
                  style={{
                    border: "1px solid var(--color-linen)",
                    transform: "rotate(3deg)",
                    boxShadow: "0 32px 70px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  {/* Card Number */}
                  <div
                    className="text-sm mb-4"
                    style={{
                      color: "var(--color-warm-grey)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    {String(currentCard + 1).padStart(2, "0")} / {String(expertiseCards.length).padStart(2, "0")}
                  </div>

                  {/* Card Title */}
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "var(--font-weight-bold)",
                      color: "var(--color-maroon)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {expertiseCards[currentCard].title}
                  </h3>

                  {/* Card Description */}
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "var(--color-warm-grey)",
                      flex: 1,
                    }}
                  >
                    {expertiseCards[currentCard].description}
                  </p>

                  {/* Navigation Arrow at Bottom Right of Card */}
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={nextCard}
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: "var(--color-maroon)",
                        color: "white",
                      }}
                      aria-label="Next card"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 py-8 md:py-10"
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-maroon)",
            }}
          >
            FEATURED WORK
          </h2>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg group"
            style={{
              backgroundColor: "var(--color-linen)",
              color: "var(--color-ink)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            <span>See all work</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>

        <FeaturedProjectCarousel projects={featuredProjects} />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--color-ink) 0%, var(--color-brown) 50%, var(--color-maroon) 100%)",
          }}
        >
          <div className="relative z-10 max-w-3xl">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "var(--font-weight-semibold)",
                letterSpacing: "0.1em",
                color: "var(--color-linen)",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              GET IN TOUCH
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "1.1",
                color: "var(--color-linen)",
                marginBottom: "2rem",
              }}
            >
              Let's create experiences that
              <br />
              <span
                style={{
                  color: "var(--color-tan)",
                }}
              >
                empower, connect, and simplify.
              </span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:stull.alana@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-opacity-90 group"
                style={{
                  backgroundColor: "white",
                  color: "var(--color-ink)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <span>Email me</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alanastull/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-white hover:bg-opacity-30 group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "white",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
