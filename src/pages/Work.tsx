import { Link } from "react-router";
import {
  ArrowUpRight,
  X,
  LayoutGrid,
  User,
  Users,
  MessageCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import BlyssImageStatic from "figma:asset/a599320fb284b50fd85c5467705d2e1467d43acb.png";
import RhythmImageStatic from "figma:asset/ea41269c606125350e08adaa0b350dd2e791ab23.png";
import AmazonLearnImage from "figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png";
import ClarityAssistImage from "figma:asset/33f3027060c6f4bca0459accb8f98b430d8f9f34.png";
import crwnImage from "../assets/crwn-image.png";
import { ProjectCard, type Project } from "../components/ProjectCard";

interface AmazonCaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  externalLink: string;
  diagram: "design-system" | "chatbot";
  imageSide: "left" | "right";
}

interface LabItem {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export function Work() {
  const [showCrwnOverlay, setShowCrwnOverlay] = useState(false);

  const personalProjects: Project[] = [
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
      image: crwnImage,
      imageType: "static",
      wip: true,
    },
  ];

  const amazonCaseStudies: AmazonCaseStudy[] = [
    {
      id: "amazon-learn",
      title: "Amazon Learn",
      category: "AMAZON INTERNSHIP #1",
      description:
        "Developed UI components for a career management platform used by 3M+ users, contributing to Amazon's internal design system.",
      externalLink:
        "https://www.figma.com/proto/3mRKne0c0SZYgb92S28miA/all-presentations?page-id=0%3A1&node-id=0-2029&starting-point-node-id=0%3A2029&scaling=scale-down&content-scaling=fixed&t=Dr5c2C1eCFC6CWZe-1",
      diagram: "design-system",
      imageSide: "right",
    },
    {
      id: "clarity-assist",
      title: "Clarity Assist",
      category: "AMAZON INTERNSHIP #2",
      description:
        "Designed and conducted usability tests for a generative AI/LLM platform hosting 1.4k+ people metrics and 175k+ customized reports.",
      externalLink:
        "https://www.figma.com/proto/fNmvcmDOMWIOM3WsYTqcDk/final-internship-presentation?page-id=0%3A1&node-id=1-12764&scaling=scale-down&content-scaling=fixed&t=QMY6bv2ctEgOflMs-1",
      diagram: "chatbot",
      imageSide: "right",
    },
  ];

  const labProjects: LabItem[] = [
    {
      id: "lately",
      title: "Lately",
      description:
        "A private, invite-only app for close friend groups, built solo end to end with React and Firebase.",
    },
    {
      id: "nsbe-duke",
      title: "NSBE Duke Website",
      description:
        "Designed and built the chapter's first website from scratch, member sign-in included, requested directly by the chapter president.",
    },
    {
      id: "speedys-catering",
      title: "Speedy's Catering Website",
      description:
        "An ordering site built for a local catering business, from concept to launch.",
    },
    {
      id: "mentor-me-collective",
      title: "Mentor Me Collective",
      description:
        "Brand guide, campaign assets, and event materials for a mentorship nonprofit, including the Code for Climate hackathon flyer.",
      href: "/case-studies/mentor-me-collective",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--color-off-white)" }}>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <span
          className="inline-block px-4 py-2 rounded-full mb-6"
          style={{
            fontSize: "13px",
            fontWeight: "var(--font-weight-semibold)",
            letterSpacing: "0.05em",
            color: "var(--color-ink)",
            textTransform: "uppercase",
            backgroundColor: "var(--color-linen)",
          }}
        >
          all work
        </span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.1",
            color: "var(--color-ink)",
          }}
        >
          Work
        </h1>
      </section>

      {/* Tier 1: Personal Ventures */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-maroon)",
            }}
          >
            PERSONAL VENTURES
          </h2>
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
              {project.wip ? (
                <button
                  onClick={() => setShowCrwnOverlay(true)}
                  className="group block h-full w-full text-left"
                >
                  <ProjectCard project={project} index={index} />
                </button>
              ) : (
                <Link
                  to={`/case-studies/${project.id}`}
                  className="group block h-full"
                >
                  <ProjectCard project={project} index={index} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tier 2: Professional Experience */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-maroon)",
            }}
          >
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {amazonCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <AmazonCaseStudyCard study={study} imageSide={study.imageSide} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tier 3: Lab */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2
            style={{
              fontSize: "1.125rem",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-brown)",
            }}
          >
            LAB
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {labProjects.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="h-full"
            >
              <LabCard item={item} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CRWN WIP Overlay */}
      <AnimatePresence>
        {showCrwnOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
            onClick={() => setShowCrwnOverlay(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-3xl p-10 max-w-md w-full text-center"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCrwnOverlay(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-gray-100"
                style={{ color: "var(--color-warm-grey)" }}
              >
                <X size={18} />
              </button>

              <div
                className="inline-block px-4 py-1.5 rounded-full mb-6"
                style={{ backgroundColor: "var(--color-linen)", fontSize: "12px", fontWeight: "var(--font-weight-semibold)", letterSpacing: "0.08em", color: "var(--color-brown)", textTransform: "uppercase" }}
              >
                Work in Progress
              </div>

              <h3
                style={{ fontSize: "1.75rem", fontWeight: "var(--font-weight-bold)", color: "var(--color-ink)", marginBottom: "0.75rem" }}
              >
                Case study in progress...
              </h3>

              <p style={{ color: "var(--color-warm-grey)", lineHeight: "1.6", marginBottom: "2rem" }}>
                This case study is still being written. In the meantime, check out the prototype below.
              </p>

              <a
                href="https://quilt-thick-86776898.figma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg group"
                style={{ backgroundColor: "var(--color-maroon)", color: "white", fontWeight: "var(--font-weight-medium)" }}
              >
                <span>View Prototype</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 mb-20">
        <div
          className="rounded-3xl p-8 md:p-16 relative overflow-hidden"
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
                fontSize: "clamp(1rem, 4.2vw, 2.75rem)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "1.2",
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

function AmazonCaseStudyCard({
  study,
  imageSide,
}: {
  study: AmazonCaseStudy;
  imageSide: "left" | "right";
}) {
  return (
    <a
      href={study.externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)]"
      style={{ boxShadow: "0 24px 60px rgba(0, 0, 0, 0.07)" }}
    >
      <div
        className={`flex flex-col h-full ${
          imageSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Visual */}
        <div
          className="w-full md:w-2/5 flex items-center justify-center p-10 md:p-12 min-h-[260px] md:min-h-[320px]"
          style={{ backgroundColor: "var(--color-off-white)" }}
        >
          {study.diagram === "design-system" ? (
            <DesignSystemDiagram />
          ) : (
            <ChatbotDiagram />
          )}
        </div>

        {/* Text */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
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
            {study.category}
          </p>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-ink)",
              marginBottom: "0.75rem",
            }}
          >
            {study.title}
          </h3>
          <p
            style={{
              fontSize: "var(--font-size-body)",
              color: "#5B5B5B",
              lineHeight: "1.6",
              marginBottom: "1.75rem",
              maxWidth: "38rem",
              paddingRight: "2rem",
            }}
          >
            {study.description}
          </p>
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl w-fit"
            style={{
              backgroundColor: "var(--color-linen)",
              color: "var(--color-ink)",
              fontWeight: "var(--font-weight-medium)",
            }}
          >
            <span>View case study</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

function DesignSystemDiagram() {
  return (
    <div className="relative w-full max-w-[240px] aspect-square flex items-center justify-center">
      <div className="grid grid-cols-3 gap-3 w-full">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl"
            style={{
              backgroundColor:
                i % 2 === 0 ? "var(--color-linen)" : "rgba(108, 56, 42, 0.12)",
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white"
          style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
        >
          <LayoutGrid size={28} style={{ color: "var(--color-brown)" }} />
        </div>
      </div>
    </div>
  );
}

function ChatbotDiagram() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-linen)" }}
      >
        <User size={18} style={{ color: "var(--color-brown)" }} />
      </div>
      <div
        className="h-5"
        style={{ borderLeft: "1px dashed var(--color-tan)" }}
      />
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shrink-0"
        style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)" }}
      >
        <MessageCircle size={26} style={{ color: "var(--color-brown)" }} />
      </div>
      <div
        className="h-5"
        style={{ borderLeft: "1px dashed var(--color-tan)" }}
      />
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-linen)" }}
      >
        <Users size={18} style={{ color: "var(--color-brown)" }} />
      </div>
    </div>
  );
}

function LabCard({ item }: { item: LabItem }) {
  const content = (
    <div
      className="h-full rounded-xl p-5 transition-colors duration-300 min-h-[132px] flex flex-col justify-center"
      style={{ backgroundColor: "rgba(237, 232, 224, 0.4)" }}
    >
      <h4
        style={{
          fontSize: "1rem",
          fontWeight: "var(--font-weight-semibold)",
          color: "var(--color-ink)",
          marginBottom: "0.375rem",
        }}
      >
        {item.title}
      </h4>
      <p
        style={{
          fontSize: "0.875rem",
          color: "var(--color-warm-grey)",
          lineHeight: "1.5",
        }}
      >
        {item.description}
      </p>
    </div>
  );

  if (item.href) {
    return (
      <Link
        to={item.href}
        className="block h-full transition-transform duration-300 hover:-translate-y-0.5"
      >
        {content}
      </Link>
    );
  }

  return content;
}
