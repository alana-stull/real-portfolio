import { Link } from "react-router";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import MentorMeImage from "../imports/Group33987";
import NotedByNaniImage from "../imports/Group33988";
import BlyssImageStatic from "figma:asset/a599320fb284b50fd85c5467705d2e1467d43acb.png";
import RhythmImageStatic from "figma:asset/ea41269c606125350e08adaa0b350dd2e791ab23.png";
import ClarityAssistImage from "figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png";
import AmazonLearnImage from "figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const [currentCard, setCurrentCard] = useState(0);

  const expertiseCards = [
    {
      title: "Design",
      description:
        "Skilled product designer experienced in design thinking, product development, and usability testing—crafting intuitive, human-centered experiences.",
    },
    {
      title: "Development",
      description:
        "Expanding expertise in front-end development, building scalable, cross-platform interfaces that bring design systems to life.",
    },
    {
      title: "AI & Emerging Tech",
      description:
        "Exploring how AI can enhance digital experiences—designing intelligent systems that make products more adaptive, useful, and intuitive.",
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

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + expertiseCards.length) % expertiseCards.length);
  };

  const personalProjects = [
    {
      id: "blyss",
      title: "Blyss Social",
      description:
        "Leading product pivot for social discovery platform with AI-powered venue recommendations and event coordination",
      role: "Co-Founder, Chief of Design & Development",
      category: "SOCIAL DISCOVERY",
      tags: [
        "End-to-End Product Development",
        "Design Strategy",
        "Startup",
      ],
      image: BlyssImageStatic,
      imageType: "static",
    },
    {
      id: "rhythm",
      title: "Rhythm",
      description:
        "AI-driven wellness tool integrating behavioral, physiological, and calendar data into personalized insights",
      role: "Founder, UX Engineer",
      category: "PERSONAL WELLNESS",
      tags: [
        "AI Systems",
        "Data-Driven Design",
        "Fullstack Development",
      ],
      image: RhythmImageStatic,
      imageType: "static",
    },
    {
      id: "crwn",
      title: "CRWN",
      description:
        "Community-driven marketplace connecting young Black adults to stylists, inspiration, and trusted hair guidance",
      role: "Contract UX Engineer",
      category: "NATURAL HAIRCARE",
      tags: ["Brand Design", "Product Design", "Frontend Development"],
      image:
        "https://images.unsplash.com/photo-1664099160144-f6991681878d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwaGFpciUyMGNhcmUlMjBwcm9kdWN0cyUyMGN1cmx5JTIwaGFpcnxlbnwxfHx8fDE3NzM2NzUyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageType: "url",
    },
  ];

  const professionalProjects = [
    {
      id: "clarity-assist",
      title: "Clarity Assist",
      description:
        "Designed and conducted usability tests for generative AI/LLM platform hosting 1.4k+ people metrics and 175k+ customized reports.",
      role: "UX Design Intern",
      category: "AMAZON INTERNSHIP",
      tags: [
        "Generative AI",
        "Conversation Design",
        "Data-Driven Design",
      ],
      externalLink:
        "https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1",
      image: ClarityAssistImage,
      imageType: "static",
    },
    {
      id: "amazon-learn",
      title: "Amazon Learn",
      description:
        "Developed UI components for a career management platform used by 3M+ users, contributing to Amazon’s internal design system.",
      role: "UX Design Intern",
      category: "AMAZON INTERNSHIP",
      tags: ["Edtech", "Product Design", "Enterprise UX"],
      externalLink:
        "https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1",
      image: AmazonLearnImage,
      imageType: "static",
    },
    {
      id: "mentor-me-collective",
      title: "Mentor Me Collective",
      description:
        "Led full brand redesign and content strategy, growing a multi-platform community reaching 40k+ students and professionals.",
      role: "Content Designer",
      category: "SOCIAL IMPACT",
      tags: [
        "Brand Strategy",
        "Product Leader",
        "Social Impact",
      ],
      image: MentorMeImage,
      imageType: "component",
    },
  ];

  const allProjects = [
    ...personalProjects,
    ...professionalProjects,
  ];

  return (
    <div style={{ backgroundColor: "var(--color-off-white)" }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
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
                  className="absolute inset-0 bg-white rounded-2xl p-8 flex flex-col shadow-xl"
                  style={{
                    border: "1px solid var(--color-linen)",
                    transform: "rotate(3deg)",
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

      {/* Personal Ventures Section */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex items-center justify-between mb-12">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-maroon)",
            }}
          >
            PERSONAL VENTURES
          </h2>
          <span
            style={{
              fontSize: "14px",
              color: "var(--color-warm-grey)",
            }}
          >
            0{personalProjects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link
                to={`/case-studies/${project.id}`}
                className="group block h-full"
              >
                <ProjectCard project={project} index={index} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-maroon)",
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
          <span
            style={{
              fontSize: "14px",
              color: "var(--color-warm-grey)",
            }}
          >
            0{professionalProjects.length} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {professionalProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {project.externalLink ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </a>
              ) : (
                <Link
                  to={`/case-studies/${project.id}`}
                  className="group block h-full"
                >
                  <ProjectCard
                    project={project}
                    index={index}
                  />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
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

function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  return (
    <motion.div
      className="relative h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col"
        style={{
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Image */}
        <div
          className="aspect-[4/3] bg-white flex items-center justify-center p-8 overflow-hidden relative"
          style={{ backgroundColor: "var(--color-off-white)" }}
        >
          {project.imageType === "static" ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : project.id === "noted-by-nani" ? (
            <div className="w-[450px] h-[450px] relative scale-[0.72] transition-transform duration-500 group-hover:scale-[0.76]">
              <NotedByNaniImage />
            </div>
          ) : project.id === "mentor-me-collective" ? (
            <div className="w-[450px] h-[450px] relative scale-[0.65] transition-transform duration-500 group-hover:scale-[0.68]">
              <MentorMeImage />
            </div>
          ) : project.imageType === "url" ? (
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          ) : null}

          {/* Number Badge */}
          <div
            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--color-linen)",
              fontSize: "14px",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-warm-grey)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex-1 flex flex-col">
          {/* Category */}
          <p
            style={{
              fontSize: "12px",
              fontWeight: "var(--font-weight-semibold)",
              letterSpacing: "0.1em",
              color: "var(--color-brown)",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {project.category}
          </p>

          {/* Title */}
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-ink)",
              marginBottom: "0.75rem",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: "var(--font-size-body)",
              color: "#5B5B5B",
              lineHeight: "1.6",
              marginBottom: "auto",
            }}
          >
            {project.description}
          </p>

          {/* Divider and bottom section */}
          <div
            className="flex items-center justify-between pt-6 mt-6"
            style={{
              borderTop: "1px solid var(--color-linen)",
            }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 flex-1">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md"
                  style={{
                    backgroundColor: "#F5F5F5",
                    color: "#5B5B5B",
                    fontSize: "13px",
                    fontWeight: "var(--font-weight-medium)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Arrow Button */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 group-hover:!bg-[var(--color-maroon)]"
              style={{
                backgroundColor: "var(--color-linen)",
                color: "var(--color-brown)",
              }}
            >
              <ArrowUpRight size={18} className="transition-colors duration-300 group-hover:!text-[var(--color-linen)]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}