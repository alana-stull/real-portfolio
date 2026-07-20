import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import MentorMeImage from "../imports/Group33987";
import NotedByNaniImage from "../imports/Group33988";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Project {
  id: string;
  title: string;
  description: string;
  role?: string;
  category: string;
  tags: string[];
  image?: any;
  imageType: "static" | "component" | "url";
  externalLink?: string;
  wip?: boolean;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="relative h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_32px_80px_rgba(0,0,0,0.14)] h-full flex flex-col"
        style={{
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.07)",
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
            {/* Tags - plain text, dot-separated */}
            <p
              className="flex-1 pr-4"
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "#5B5B5B",
                lineHeight: "1.8",
              }}
            >
              {project.tags.join("   ·   ")}
            </p>

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
