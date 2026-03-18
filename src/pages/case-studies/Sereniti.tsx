import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import imgScreenshot20241215At121312Pm from "figma:asset/298325a5e1cd42dcbe41f17bf3f2bd4ca2a659a8.png";
import imgScreenshot20241215At122303Pm2 from "figma:asset/6a9780652e29528ced58475759c7b30273afbd0f.png";
import imgScreenshot20241215At121227Pm1 from "figma:asset/3ed1c000d7538da22d027dda172cc9e2c1b1529d.png";
import imgScreenshot20241215At122738Pm1 from "figma:asset/d67cab671755a0a0adc40929ff70e1108b4cc728.png";
import imgScreenshot20241215At122303Pm1 from "figma:asset/6a9780652e29528ced58475759c7b30273afbd0f.png";
import imgScreenshot20241205At115250Am1 from "figma:asset/d6c42ecf355f3fde7ef7764af39cf62d56eab35c.png";
import imgScreenshot20241205At114955Am1 from "figma:asset/f1f93d7d44bb1d1a90417dc8e186de7bfee2a4d7.png";

export function Sereniti() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p
              className="text-heading-4 uppercase mb-2"
              style={{
                color: "var(--color-gray-text)",
                letterSpacing: "0.05em",
              }}
            >
              cultivating workplace wellness with
            </p>

            <h1
              className="mb-20"
              style={{
                fontSize: "5rem",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "#ffb347",
              }}
            >
              SERENITI
            </h1>

            <h2
              className="uppercase mb-4"
              style={{
                color: "#ffb347",
                fontSize: "1.5rem",
                lineHeight: "1.3",
              }}
            >
              Perform Well, Together.
            </h2>

            <p
              className="text-body-large"
              style={{ color: "var(--color-gray-text)" }}
            >
              Sereniti helps professionals and teams prioritize workplace
              wellbeing with tools for stress management, work-life balance,
              and productivity—so they can stay focused, healthy, and perform
              at their best.
            </p>
          </div>

          {/* Right Column - App Mockups */}
          <div className="relative h-[500px] mt-10">
            {/* Left phone - rotated left */}
            <div
              className="absolute w-[200px]"
              style={{
                top: "40px",
                left: "0",
                transform: "rotate(-8deg)",
                zIndex: 1,
              }}
            >
              <img
                src={imgScreenshot20241215At121312Pm}
                alt="Sereniti App - Mindfulness"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            {/* Center phone - straight */}
            <div
              className="absolute w-[220px]"
              style={{
                top: "0",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <img
                src={imgScreenshot20241215At121227Pm1}
                alt="Sereniti App - Dashboard"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            {/* Right phone - rotated right */}
            <div
              className="absolute w-[200px]"
              style={{
                top: "30px",
                right: "0",
                transform: "rotate(6deg)",
                zIndex: 1,
              }}
            >
              <img
                src={imgScreenshot20241215At122303Pm2}
                alt="Sereniti App - Habits"
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-8">
          {/* Role */}
          <div>
            <h3 className="text-heading-4 mb-3">Role:</h3>
            <p className="text-body mb-2">Founder & Product Designer</p>
            <p className="text-body text-sm italic">
              UX/UI Design, Research, Prototyping
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-heading-4 mb-3">Timeline:</h3>
            <p className="text-body text-sm">July – December 2024</p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-heading-4 mb-3">Skills:</h3>
            <p className="text-body text-sm">
              Academic Research • Emotion Tracking • Interface, Interaction & Visual Design • Usability Testing & User Research
            </p>
          </div>

          {/* Languages + Softwares */}
          <div>
            <h3 className="text-heading-4 mb-3">
              Languages + Softwares:
            </h3>
            <p className="text-body text-sm">
              Figma • Miro • Notion
            </p>
          </div>
        </div>
      </div>

      {/* Project Context Section */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-heading-4 mb-2"
            style={{ color: "#acacac", textTransform: "uppercase" }}
          >
            project context
          </p>

          <p className="text-body-large mb-16" style={{ maxWidth: "1200px" }}>
            After high-stress internships and leadership roles, I became
            fascinated by how emotions shape focus, collaboration, and
            decision-making at work. Drawing from my coursework in emotion,
            motivation, and industrial/organizational psychology, I set out to
            explore how emotional regulation could improve both personal
            well-being and workplace culture.
          </p>

          {/* Three Column Grid - Visual Representations */}
          <div className="grid md:grid-cols-3 gap-16">
            {/* Research */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-16 min-h-[300px] flex flex-col justify-center space-y-4">
                {/* Visual representation of research */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-300 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-gray-400 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-300 rounded"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-gray-400 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                    <div className="h-2 bg-gray-200 rounded w-11/12"></div>
                  </div>
                </div>
              </div>
              <h3
                className="text-heading-3 text-center"
                style={{ color: "#000" }}
              >
                RESEARCH
              </h3>
            </div>

            {/* Emotion Tracking */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-6 min-h-[300px] flex flex-col justify-center space-y-4">
                {/* Visual representation of emotion tracking bars */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-5 bg-gray-200 rounded"></div>
                  <div className="flex-1 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#ffc471] rounded"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <h3
                className="text-heading-3 text-center"
                style={{ color: "#000" }}
              >
                EMOTION TRACKING
              </h3>
            </div>

            {/* App Design */}
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-6 min-h-[300px] flex gap-4 justify-center items-center">
                {/* Two phone mockups side by side */}
                <div className="w-1/2 border border-gray-300 bg-white rounded-2xl p-4 space-y-3">
                  <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/5 mt-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/5 mt-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="flex gap-2 mt-6">
                    <div className="h-3 w-10 bg-[#ffb347] rounded-full"></div>
                    <div className="h-3 w-10 bg-gray-200 rounded-full border border-[#ffc471]"></div>
                  </div>
                </div>
                <div className="w-1/2 border border-gray-300 bg-white rounded-2xl p-4 space-y-3">
                  <div className="h-3 bg-gray-300 rounded w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/5 mt-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-3 bg-gray-300 rounded w-4/5 mt-6"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                  <div className="flex gap-2 mt-6">
                    <div className="h-3 w-10 bg-[#ffb347] rounded-full"></div>
                    <div className="h-3 w-10 bg-gray-200 rounded-full border border-[#ffc471]"></div>
                  </div>
                </div>
              </div>
              <h3
                className="text-heading-3 text-center"
                style={{ color: "#000" }}
              >
                APP DESIGN
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Design Philosophy Section */}
      <div className="border-t border-gray-200">
        <div className="grid md:grid-cols-[1fr_1fr]">
          {/* Left Column - White Background */}
          <div className="bg-white px-12 py-20">
            <p
              className="text-heading-4 mb-4"
              style={{ color: "#acacac", textTransform: "uppercase" }}
            >
              project framing / design philosphy
            </p>

            <h2
              className="text-heading-3 mb-8"
              style={{ color: "#ffb347", textTransform: "uppercase" }}
            >
              grounded in emotional awareness
            </h2>

            <p className="text-body-large mb-12">
              I believe that effective leadership starts with emotional
              awareness. By consciously regulating emotions and cultivating
              mindfulness, individuals can show up with clarity, empathy, and
              resilience—strengthening both themselves and their teams.
            </p>

            {/* Emotional Regulation */}
            <div className="mb-10">
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ffb347" }}
                >
                  <span
                    className="text-white"
                    style={{ fontWeight: "var(--font-weight-bold)" }}
                  >
                    1
                  </span>
                </div>
                <h3
                  className="text-heading-3"
                  style={{ textTransform: "uppercase" }}
                >
                  EMOTIONAL REGULATION
                </h3>
              </div>
              <p className="text-body-large mb-2 ml-13">
                The ability to monitor and adjust emotional responses to stay
                balanced and effective.
              </p>
              <p
                className="text-body italic ml-13"
                style={{ color: "#979797" }}
              >
                Self-awareness, mindfulness, adaptability, support
              </p>
            </div>

            {/* Emotional Intelligence */}
            <div>
              <div className="flex items-start gap-4 mb-3">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#ffb347" }}
                >
                  <span
                    className="text-white"
                    style={{ fontWeight: "var(--font-weight-bold)" }}
                  >
                    2
                  </span>
                </div>
                <h3
                  className="text-heading-3"
                  style={{ textTransform: "uppercase" }}
                >
                  EMOTIONAL INTELLIGENCE
                </h3>
              </div>
              <p className="text-body-large mb-2 ml-13">
                The capacity to understand, manage, and influence emotions in
                yourself and others.
              </p>
              <p
                className="text-body italic ml-13"
                style={{ color: "#979797" }}
              >
                Social awareness, empathy, relationship management
              </p>
            </div>
          </div>

          {/* Right Column - Beige Background with Stats */}
          <div className="bg-[#f9f8f6] px-12 py-20">
            <div className="space-y-16">
              {/* Quote */}
              <div className="mb-12">
                <p
                  className="text-[3rem] mb-0"
                  style={{
                    color: "#ffb347",
                    fontWeight: "var(--font-weight-bold)",
                    fontStyle: "italic",
                    lineHeight: "1",
                  }}
                >
                  "
                </p>
                <p
                  className="text-body-large italic"
                  style={{ fontWeight: "var(--font-weight-bold)" }}
                >
                  Emotional intelligence is a better predictor of career
                  success than IQ.
                </p>
              </div>

              {/* Stat 1 */}
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1",
                    fontWeight: "var(--font-weight-bold)",
                    color: "#ffb347",
                  }}
                >
                  67%
                </p>
                <p className="text-body-large">
                  of a leader's effectiveness is predicted by emotional
                  intelligence
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1",
                    fontWeight: "var(--font-weight-bold)",
                    color: "#ffb347",
                  }}
                >
                  75%
                </p>
                <p className="text-body-large">
                  of Fortune 500 companies invest in EQ training for their
                  teams.
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "4rem",
                    lineHeight: "1",
                    fontWeight: "var(--font-weight-bold)",
                    color: "#ffb347",
                  }}
                >
                  127%
                </p>
                <p className="text-body-large">
                  increase in performance for employees with high emotional
                  intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Overview Section */}
      <div className="border-t border-gray-200">
        <div className="grid md:grid-cols-[1fr_1fr]">
          {/* Left Column - Beige Background with App Screens */}
          <div className="bg-[#f9f8f6] px-12 py-20">
            {/* Top Row - 3 Phones */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241205At115250Am1}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241205At114955Am1}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241215At121227Pm1}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Bottom Row - 3 Phones */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241215At121312Pm}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241215At122303Pm1}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={imgScreenshot20241215At122738Pm1}
                  alt="Sereniti App Screen"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="bg-white px-12 py-20">
            <p
              className="text-heading-4 mb-8"
              style={{ color: "#acacac", textTransform: "uppercase" }}
            >
              PLATFORM OVERVIEW
            </p>

            <h3
              className="text-heading-4 mb-4"
              style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
            >
              What's missing?
            </h3>
            <p className="text-body-large mb-12">
              Most workplace tools track performance, not well-being. Teams
              need systems that help individuals manage emotions while
              fostering empathy and support.
            </p>

            <h3
              className="text-heading-4 mb-4"
              style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
            >
              The platform:
            </h3>
            <p className="text-body-large">
              A wellness platform built for modern workplaces—helping
              individuals track emotions, practice mindfulness, and managers
              provide proactive support.
            </p>
          </div>
        </div>
      </div>

      {/* Empowering Well-Being at Work Section */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-heading-4 mb-2"
            style={{ color: "#acacac", textTransform: "uppercase" }}
          >
            KEY TAKEAWAYS
          </p>

          <h2
            className="mb-6"
            style={{
              fontSize: "2.5rem",
              fontWeight: "var(--font-weight-bold)",
              color: "#ffb347",
              textTransform: "uppercase",
            }}
          >
            EMPOWERING WELL-BEING AT WORK
          </h2>

          <p className="text-body-large mb-16" style={{ color: "#5b5b5b", maxWidth: "1200px" }}>
            Sereniti empowers individuals and teams to achieve balanced
            well-being and enhanced productivity through personalized tools and
            support.
          </p>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-16">
            {/* Column 1 */}
            <div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#ffb347" }}
              >
                <span
                  className="text-white"
                  style={{ fontWeight: "var(--font-weight-bold)", fontSize: "1.25rem" }}
                >
                  1
                </span>
              </div>
              <h3
                className="text-heading-4 mb-4"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)", minHeight: "3.5rem" }}
              >
                Access to Well-Being Resources
              </h3>
              <p className="text-body-large" style={{ color: "#5b5b5b" }}>
                Provides essential wellness tools and support to users across
                diverse work environments, making it easier to prioritize
                mental and emotional health.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#ffb347" }}
              >
                <span
                  className="text-white"
                  style={{ fontWeight: "var(--font-weight-bold)", fontSize: "1.25rem" }}
                >
                  2
                </span>
              </div>
              <h3
                className="text-heading-4 mb-4"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)", minHeight: "3.5rem" }}
              >
                Holistic Health Approach
              </h3>
              <p className="text-body-large" style={{ color: "#5b5b5b" }}>
                Supports mental and emotional well-being through a balanced,
                multifaceted approach, helping users navigate stress, build
                resilience, and foster self-awareness.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#ffb347" }}
              >
                <span
                  className="text-white"
                  style={{ fontWeight: "var(--font-weight-bold)", fontSize: "1.25rem" }}
                >
                  3
                </span>
              </div>
              <h3
                className="text-heading-4 mb-4"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)", minHeight: "3.5rem" }}
              >
                Enhanced Workforce Engagement
              </h3>
              <p className="text-body-large" style={{ color: "#5b5b5b" }}>
                Encourages engagement and focus by offering personalized
                insights and tools, helping individuals and teams maintain
                clarity, balance, and a positive work environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/case-studies/pebb"
            className="group flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <div>
              <p className="text-label mb-2">Next Project</p>
              <h3 className="text-heading-2">Clarity Assist (Amazon Internship)</h3>
            </div>
            <ArrowLeft size={32} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}