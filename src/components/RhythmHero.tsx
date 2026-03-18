import { ImageWithFallback } from "./figma/ImageWithFallback";
import rhythmHeroImage from "figma:asset/317ca05e7d42c4ad31d6777a005a0004c63fbd90.png";

export function RhythmHero() {
  return (
    <div
      className="relative w-full"
      style={{ backgroundColor: "var(--color-off-white)" }}
    >
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p
              className="uppercase mb-2"
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-warm-grey)",
              }}
            >
              Productivity that feels your pulse
            </p>

            <h1
              className="mb-6"
              style={{
                fontSize: "5rem",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "var(--color-brown)",
              }}
            >
              rhythm
            </h1>

            <h2
              className="uppercase mb-8"
              style={{
                color: "var(--color-tan)",
                fontSize: "1.25rem",
                lineHeight: "1.3",
                maxWidth: "500px",
              }}
            >
              A real-time physiological alignment system
            </h2>

            <p
              className="text-body-large"
              style={{ color: "var(--color-warm-grey)" }}
            >
              Rhythm evolved from a self-reported mood dashboard into a real-time physiological alignment system — replacing gut-feel tracking with biometric signal detection.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={rhythmHeroImage}
                alt="Rhythm productivity dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Row */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3
              className="mb-3 uppercase tracking-wider"
              style={{
                fontSize: "0.75rem",
                color: "var(--color-warm-grey)",
              }}
            >
              Role
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>
              Founder, UX Engineer
            </p>
          </div>

          <div>
            <h3
              className="mb-3 uppercase tracking-wider"
              style={{
                fontSize: "0.75rem",
                color: "var(--color-warm-grey)",
              }}
            >
              Timeline
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>
              October 2025 – Present
            </p>
          </div>

          <div>
            <h3
              className="mb-3 uppercase tracking-wider"
              style={{
                fontSize: "0.75rem",
                color: "var(--color-warm-grey)",
              }}
            >
              Platform
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--color-ink)" }}>
              Web + Desktop (Electron)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}