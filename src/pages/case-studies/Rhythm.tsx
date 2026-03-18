import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { RhythmHero } from "../../components/RhythmHero";
import imgChart1 from "figma:asset/6e779625fb662faf58d030a5d5d0c8c97aba8332.png";
import imgScreenshot20251209At93850Pm1 from "figma:asset/25d5106bdba9de064632f793d4254244f12a9077.png";
import imgScreenshot20251210At43235Pm1 from "figma:asset/c7f19defa44cc725455837139730c5c11137da75.png";
import imgScreenshot20251210At43235Pm2 from "figma:asset/7159b76e7713bc4b775f93ca2793e258323c147a.png";

export function Rhythm() {
  return (
    <div style={{ backgroundColor: "var(--color-off-white)" }}>
      {/* Header */}
      <div
        className="border-b"
        style={{ borderColor: "var(--color-linen)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ color: "var(--color-warm-grey)" }}
          >
            <ArrowLeft size={20} />
            <span style={{ fontWeight: "var(--font-weight-medium)" }}>
              Back to work
            </span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <RhythmHero />

      {/* The Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          The Problem
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-brown)",
            marginBottom: "1.5rem",
          }}
        >
          Digital overload operates below conscious awareness
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            maxWidth: "640px",
            marginBottom: "2rem",
          }}
        >
          You check your phone 147 times per day. You switch browser tabs every 19 seconds. By 3 PM your focus is fractured, but you blame sleep or caffeine, never connecting it to six hours of accumulated screen exposure.
        </p>

        {/* Pull Quote */}
        <div
          className="border-l-2 pl-6 py-1.5 my-8"
          style={{ borderColor: "var(--color-brown)" }}
        >
          <p
            style={{
              fontSize: "1.1875rem",
              fontStyle: "italic",
              lineHeight: "1.6",
              color: "var(--color-ink)",
            }}
          >
            Most productivity tools optimize for output while ignoring how users feel, when their energy dips, and when they genuinely need to stop.
          </p>
        </div>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            maxWidth: "640px",
          }}
        >
          The missing piece isn't another checklist or timer. It's a system that treats productivity as inseparable from human physiology, one that adapts to the person, not the other way around.
        </p>
      </section>

      {/* Product Evolution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Product Evolution
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-brown)",
            marginBottom: "0.625rem",
          }}
        >
          Two semesters, two fundamentally different systems
        </h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.7",
            color: "var(--color-warm-grey)",
            fontStyle: "italic",
            maxWidth: "620px",
            marginBottom: "1.75rem",
            paddingLeft: "1rem",
            borderLeft: "2px solid var(--color-brown)",
          }}
        >
          The fall semester forced a fundamental reframe: the user isn't "burnt out," their physiological capacity and behavioral workload are simply misaligned. Everything was rebuilt around that insight.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Phase 1 */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--color-linen)",
              border: "0.5px solid rgba(0,0,0,0.10)",
            }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3"
              style={{
                backgroundColor: "#F5EDE0",
                color: "#7A4F1E",
                letterSpacing: "0.1em",
                fontSize: "10px",
              }}
            >
              Fall 2025
            </span>
            <h3
              style={{
                fontSize: "1.3125rem",
                fontWeight: "var(--font-weight-semibold)",
                marginBottom: "0.375rem",
                color: "var(--color-ink)",
              }}
            >
              Mindful Productivity Dashboard
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#8A8780",
                fontStyle: "italic",
                marginBottom: "0.875rem",
                lineHeight: "1.5",
              }}
            >
              If you could see your habits, you'd make better choices.
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.7",
                color: "var(--color-warm-grey)",
                marginBottom: "1.125rem",
              }}
            >
              Streamlit dashboard, users logged screen time, sleep, and productivity score daily. k-means clustering mapped inputs to a Rhythm State, Gemini returned a personalized non-digital microbreak.
            </p>
            <div
              className="pt-4 border-t flex flex-col gap-3"
              style={{
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#8A8780",
                    marginBottom: "0.375rem",
                  }}
                >
                  Key finding
                </div>
                <ul className="space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Screen time was the single overwhelming predictor of productivity decline, more than sleep, exercise, or stress combined
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Justified building interventions around non-digital breaks
                  </li>
                </ul>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#8A8780",
                    marginBottom: "0.375rem",
                  }}
                >
                  What didn't work
                </div>
                <ul className="space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Manual logging felt passive, insights arrived too late to be actionable
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Gemini misread prompts as medical advice, requiring neutral cluster names and multiple rounds of prompt tuning
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Streamlit overrode CSS constantly, making it hard to match the Figma designs
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "white",
              border: "0.5px solid rgba(0,0,0,0.10)",
            }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase mb-3"
              style={{
                backgroundColor: "#E8F0E6",
                color: "#2C5C2A",
                letterSpacing: "0.1em",
                fontSize: "10px",
              }}
            >
              Spring 2026
            </span>
            <h3
              style={{
                fontSize: "1.3125rem",
                fontWeight: "var(--font-weight-semibold)",
                marginBottom: "0.375rem",
                color: "var(--color-ink)",
              }}
            >
              Rhythm as a System
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#8A8780",
                fontStyle: "italic",
                marginBottom: "0.875rem",
                lineHeight: "1.5",
              }}
            >
              Stop asking users how they feel. Detect it.
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.7",
                color: "var(--color-warm-grey)",
                marginBottom: "1.125rem",
              }}
            >
              FastAPI backend pulling Oura Ring biometrics and Google Calendar data. React + TypeScript dashboard for pattern analysis, plus an Electron menu bar mini-app for real-time ambient nudges.
            </p>
            <div
              className="pt-4 border-t flex flex-col gap-3"
              style={{
                borderColor: "rgba(0,0,0,0.06)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#8A8780",
                    marginBottom: "0.375rem",
                  }}
                >
                  Key shifts
                </div>
                <ul className="space-y-1" style={{ listStyle: "none", padding: 0 }}>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Self-reported inputs to passive biometric detection via Oura + Calendar APIs
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Five subjective clusters to four threshold-based states grounded in real physiology
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Single dashboard to two-surface system: full analysis view + ambient menu bar app
                  </li>
                  <li
                    style={{
                      fontSize: "13px",
                      color: "var(--color-warm-grey)",
                      lineHeight: "1.7",
                      paddingLeft: "0.875rem",
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, color: "#8A8780" }}>·</span>
                    Streamlit to React + TypeScript + FastAPI, removing all prior UX constraints
                  </li>
                </ul>
              </div>
              <div
                className="rounded-lg p-3"
                style={{
                  backgroundColor: "#E6F1FB",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: "var(--font-weight-medium)",
                    color: "#185FA5",
                    marginBottom: "0.25rem",
                  }}
                >
                  What's next
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#185FA5",
                    lineHeight: "1.65",
                  }}
                >
                  A physical home base, Arduino-powered ambient lamp with an OLED display. State shown through color and pulse, with a contextual nudge on screen so the user always has a path forward, not just a warning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 Deep Dive: Data Analysis */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Phase 1 — Fall 2025: Research & Analysis
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-brown)",
            marginBottom: "1rem",
          }}
        >
          How do digital habits affect productivity, stress, and wellbeing?
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "2.5rem",
          }}
        >
          I analyzed the 2025 Screen Time Wellness dataset using Python (leveraging logistic regression, k-means clustering, and decision trees) to study how screen time, sleep, and productivity interact.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Decision Tree */}
          <div>
            <div className="mb-4">
              <img
                src={imgChart1}
                alt="Decision tree analysis"
                className="w-full rounded-lg"
                style={{ border: "1px solid var(--color-linen)" }}
              />
            </div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-ink)",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Decision Tree
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#8A8780",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.75rem",
              }}
            >
              Determine predictors of productivity
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.75",
                color: "var(--color-warm-grey)",
              }}
            >
              Screen Time hours was identified as the overwhelming factor in determining productivity, providing the justification for non-digital interventions.
            </p>
          </div>

          {/* K-means Clustering */}
          <div>
            <div className="mb-4">
              <img
                src={imgScreenshot20251209At93850Pm1}
                alt="K-means clustering visualization"
                className="w-full rounded-lg"
                style={{ border: "1px solid var(--color-linen)" }}
              />
            </div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-ink)",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              K-means Clustering
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#8A8780",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: "0.75rem",
              }}
            >
              Determine "rhythm states" for users
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.75",
                color: "var(--color-warm-grey)",
              }}
            >
              Unsupervised learning revealed five distinct Rhythm States by grouping users based on their screen time, sleep, and productivity habits.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1 Deep Dive: UX Design */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Phase 1 — Fall 2025: UX Design
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-brown)",
            marginBottom: "1rem",
          }}
        >
          Design concept & information architecture
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "2.5rem",
            maxWidth: "720px",
          }}
        >
          Design a digital tool that encourages users to reduce screen time while supporting mindful productivity. The interface needed to be intuitive, approachable, and visually aligned with clarity, grounding, and reflection.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column: Design Decisions */}
          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--color-ink)",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              Design Decisions
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-tan)" }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    1
                  </span>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Card-Based Layout
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "var(--color-warm-grey)",
                    }}
                  >
                    Separates rhythm, goal, insight, and microbreak for quick comprehension and low cognitive load.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-tan)" }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    2
                  </span>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Immediate Feedback
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "var(--color-warm-grey)",
                    }}
                  >
                    Users instantly see their current state and actionable recommendations, supporting rapid reflection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-tan)" }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    3
                  </span>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "15px",
                      fontWeight: "var(--font-weight-semibold)",
                      color: "var(--color-ink)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Visual Cues & History
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "var(--color-warm-grey)",
                    }}
                  >
                    Icons, brief descriptions, and past insights help users track progress and understand patterns at a glance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Screenshots */}
          <div className="space-y-8">
            <div>
              <div className="mb-3">
                <img
                  src={imgScreenshot20251210At43235Pm1}
                  alt="Landing page - user input"
                  className="w-full rounded-lg shadow-lg"
                  style={{ border: "2px solid black" }}
                />
              </div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-ink)",
                  marginBottom: "0.375rem",
                  textTransform: "uppercase",
                }}
              >
                Landing Page
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8780",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                User Input
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "var(--color-warm-grey)",
                }}
              >
                Enter daily metrics and goals in a simple, focused interface.
              </p>
            </div>

            <div>
              <div className="mb-3">
                <img
                  src={imgScreenshot20251210At43235Pm2}
                  alt="Secondary page - LLM result"
                  className="w-full rounded-lg shadow-lg"
                  style={{ border: "2px solid black" }}
                />
              </div>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "var(--font-weight-semibold)",
                  color: "var(--color-ink)",
                  marginBottom: "0.375rem",
                  textTransform: "uppercase",
                }}
              >
                Secondary Page
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "#8A8780",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                LLM Result
              </p>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.65",
                  color: "var(--color-warm-grey)",
                }}
              >
                View Rhythm State and personalized microbreaks in clear, actionable card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: 5 States */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brown)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Phase 1 — Fall 2025
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-ink)",
            marginBottom: "1.5rem",
          }}
        >
          Five states from unsupervised learning
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "1.75rem",
          }}
        >
          k-means clustering on screen time, sleep, and productivity data revealed five distinct user profiles. These became the foundation for all AI-generated recommendations.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          <StateCard
            color="#4A90D9"
            title="Flow State"
            description="High productivity · High sleep · Low screen time"
          />
          <StateCard
            color="#5BAD72"
            title="Balanced State"
            description="Medium across all three dimensions"
          />
          <StateCard
            color="#E8A838"
            title="Digital Drift"
            description="Med. productivity · High screen time · Med. sleep"
          />
          <StateCard
            color="#E07050"
            title="Fatigue State"
            description="Med. productivity · Med. screen time · Low sleep"
          />
          <div
            className="md:col-span-2 flex items-start gap-3 p-4 rounded-xl"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--color-linen)",
            }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
              style={{ backgroundColor: "#C0392B" }}
            ></div>
            <div>
              <h4
                style={{
                  fontSize: "13px",
                  fontWeight: "var(--font-weight-medium)",
                  marginBottom: "0.25rem",
                  color: "var(--color-ink)",
                }}
              >
                Burnout State
              </h4>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--color-warm-grey)",
                  lineHeight: "1.5",
                }}
              >
                Low productivity · High screen time · Low sleep
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Alignment */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brown)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Phase 2 — Spring 2026
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-ink)",
            marginBottom: "1.5rem",
          }}
        >
          Alignment = Recovery + Exposure
        </h2>
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "1.75rem",
          }}
        >
          Instead of self-reporting, the system now reads two indices in real time. The gap between them is what Rhythm calls misalignment — the actual cause of productivity crashes.
        </p>

        {/* Formula Block */}
        <div
          className="flex flex-col md:flex-row rounded-2xl overflow-hidden mb-6 shadow-lg"
          style={{
            backgroundColor: "white",
            border: "1px solid var(--color-linen)",
          }}
        >
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--color-linen)" }}>
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-warm-grey)",
                marginBottom: "0.5rem",
              }}
            >
              Recovery Index
            </label>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "var(--font-weight-medium)",
                marginBottom: "0.75rem",
                color: "var(--color-ink)",
              }}
            >
              Physiological capacity
            </div>
            <ul className="space-y-1">
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Readiness score × 0.60
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · HRV normalized × 0.25
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Sleep score × 0.15
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Source: Oura Ring API
              </li>
            </ul>
          </div>

          <div
            className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r"
            style={{
              backgroundColor: "white",
              borderColor: "var(--color-linen)",
              fontSize: "24px",
              color: "var(--color-warm-grey)",
            }}
          >
            +
          </div>

          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--color-linen)" }}>
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-warm-grey)",
                marginBottom: "0.5rem",
              }}
            >
              Exposure Index
            </label>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "var(--font-weight-medium)",
                marginBottom: "0.75rem",
                color: "var(--color-ink)",
              }}
            >
              Behavioral demand
            </div>
            <ul className="space-y-1">
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · (Meeting hours / 8) × 70
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Deadlines today × 10
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Perceived friction score
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Source: Google Calendar API
              </li>
            </ul>
          </div>

          <div
            className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r"
            style={{
              backgroundColor: "white",
              borderColor: "var(--color-linen)",
              fontSize: "24px",
              color: "var(--color-warm-grey)",
            }}
          >
            =
          </div>

          <div className="flex-1 p-6" style={{ backgroundColor: "white" }}>
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-warm-grey)",
                marginBottom: "0.5rem",
              }}
            >
              Alignment Score
            </label>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "var(--font-weight-medium)",
                marginBottom: "0.75rem",
                color: "var(--color-ink)",
              }}
            >
              Capacity vs. demand
            </div>
            <ul className="space-y-1">
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Triggers state classification
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Drives LLM intervention
              </li>
              <li style={{ fontSize: "12px", color: "var(--color-warm-grey)", lineHeight: "1.75" }}>
                · Predicts decline 30 min ahead
              </li>
            </ul>
          </div>
        </div>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "1.25rem",
          }}
        >
          The four updated Rhythm States are threshold-based — not clustered. Cleaner, more actionable, easier to intervene on.
        </p>

        <div className="grid md:grid-cols-2 gap-3">
          <StateCard
            color="#5BAD72"
            title="Aligned"
            description="Recovery ≥ 80, Exposure ≤ 50 — ideal for deep work"
          />
          <StateCard
            color="#4A90D9"
            title="Balanced"
            description="Recovery ≥ 60, moderate exposure — sustainable pace"
          />
          <StateCard
            color="#E8A838"
            title="Strained"
            description="Recovery < 60, any load — body needs protecting"
          />
          <StateCard
            color="#C0392B"
            title="Overloaded"
            description="Recovery < 75, Exposure ≥ 70 — fatigue accumulating"
          />
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brown)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          How It Works
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-ink)",
            marginBottom: "1.5rem",
          }}
        >
          A three-layer architecture
        </h2>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
            marginBottom: "1.75rem",
          }}
        >
          The system syncs once per day to seed the dashboard, then the Electron mini-app surfaces state in real time — 12 seconds average interaction, zero interruption to workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--color-linen)",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-brown)",
                fontWeight: "var(--font-weight-semibold)",
                marginBottom: "0.75rem",
              }}
            >
              Backend
            </label>
            <ul className="space-y-1.5">
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                FastAPI (Python)
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Oura Ring API
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Google Calendar API
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Gemini 2.5 Flash
              </li>
            </ul>
          </div>

          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--color-linen)",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-brown)",
                fontWeight: "var(--font-weight-semibold)",
                marginBottom: "0.75rem",
              }}
            >
              Dashboard
            </label>
            <ul className="space-y-1.5">
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                React + TypeScript
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Vite build
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Full pattern analysis
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                History + daily sync
              </li>
            </ul>
          </div>

          <div
            className="p-5 rounded-xl"
            style={{
              backgroundColor: "white",
              border: "1px solid var(--color-linen)",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "10px",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                color: "var(--color-brown)",
                fontWeight: "var(--font-weight-semibold)",
                marginBottom: "0.75rem",
              }}
            >
              Mini-App
            </label>
            <ul className="space-y-1.5">
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Electron + React
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Menu bar presence
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Real-time state
              </li>
              <li style={{ fontSize: "14px", color: "var(--color-warm-grey)", lineHeight: "1.85" }}>
                Ambient nudges
              </li>
            </ul>
          </div>
        </div>

        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.82",
            color: "var(--color-warm-grey)",
          }}
        >
          The LLM prompt positions Rhythm as a calm, supportive wellness assistant — like a trusted advisor who never overreacts. Tone was as important as accuracy. Neutral state names and careful framing were key iteration points from user testing.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div style={{ height: "1px", backgroundColor: "var(--color-linen)" }}></div>
      </div>

      {/* Key Learnings */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brown)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Key Learnings
        </p>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "1.22",
            color: "var(--color-ink)",
            marginBottom: "1.75rem",
          }}
        >
          Three things that shaped the product
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div
              style={{
                fontSize: "2.125rem",
                color: "#D4C4B0",
                fontWeight: "var(--font-weight-bold)",
                marginBottom: "0.75rem",
                lineHeight: "1",
              }}
            >
              01
            </div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--color-ink)",
                marginBottom: "0.5rem",
              }}
            >
              Data-driven pivot
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-warm-grey)",
                lineHeight: "1.72",
              }}
            >
              Screen time's dominance in the decision tree wasn't just a finding — it was the justification for the entire intervention strategy. Good analysis changes what you build.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: "2.125rem",
                color: "#D4C4B0",
                fontWeight: "var(--font-weight-bold)",
                marginBottom: "0.75rem",
                lineHeight: "1",
              }}
            >
              02
            </div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--color-ink)",
                marginBottom: "0.5rem",
              }}
            >
              AI tone is product design
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-warm-grey)",
                lineHeight: "1.72",
              }}
            >
              Prompt tuning and neutral cluster names made Gemini's output feel like a trusted advisor, not an alarm. The warmth of the language mattered as much as the accuracy.
            </p>
          </div>

          <div>
            <div
              style={{
                fontSize: "2.125rem",
                color: "#D4C4B0",
                fontWeight: "var(--font-weight-bold)",
                marginBottom: "0.75rem",
                lineHeight: "1",
              }}
            >
              03
            </div>
            <h4
              style={{
                fontSize: "13px",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--color-ink)",
                marginBottom: "0.5rem",
              }}
            >
              Passive beats active
            </h4>
            <p
              style={{
                fontSize: "13px",
                color: "var(--color-warm-grey)",
                lineHeight: "1.72",
              }}
            >
              Every friction point in data collection kills long-term engagement. The 340% lift wasn't from better insights — it was from removing the ask entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="max-w-4xl mx-auto px-6 py-16 pb-32">
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-brown)",
            fontWeight: "var(--font-weight-semibold)",
            marginBottom: "1rem",
          }}
        >
          Next Step
        </p>

        <div
          className="rounded-xl p-6 border-l-2"
          style={{
            backgroundColor: "#F5EDE0",
            borderColor: "var(--color-brown)",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-brown)",
              lineHeight: "1.65",
            }}
          >
            A physical mini-display with LED or audio signal that communicates Rhythm State without adding any screen time at all — ambient awareness beyond the screen.
          </p>
        </div>
      </section>
    </div>
  );
}

function StateCard({ color, title, description }: { color: string; title: string; description: string }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl"
      style={{
        backgroundColor: "white",
        border: "1px solid var(--color-linen)",
      }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
        style={{ backgroundColor: color }}
      ></div>
      <div>
        <h4
          style={{
            fontSize: "13px",
            fontWeight: "var(--font-weight-medium)",
            marginBottom: "0.25rem",
            color: "var(--color-ink)",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: "12px",
            color: "var(--color-warm-grey)",
            lineHeight: "1.5",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}