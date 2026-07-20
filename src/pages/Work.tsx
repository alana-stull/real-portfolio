import { Link } from "react-router";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import MentorMeImage from "../imports/Group33987";
import RhythmImageStatic from "figma:asset/ea41269c606125350e08adaa0b350dd2e791ab23.png";
import AmazonLearnImage from "figma:asset/2a7240ae2d20598003ea0a91aa16a212bbaaf224.png";
import crwnImage from "../assets/crwn-image.png";
import { ProjectCard, type Project } from "../components/ProjectCard";

export function Work() {
  const [showCrwnOverlay, setShowCrwnOverlay] = useState(false);

  const personalProjects: Project[] = [
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

  const professionalProjects: Project[] = [
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

      {/* Personal Ventures Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
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

      {/* Professional Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
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
                  <ProjectCard project={project} index={index} />
                </a>
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
