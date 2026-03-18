import { Link } from "react-router";
import { ArrowLeft, BookOpen, Lightbulb, Megaphone } from "lucide-react";
import img31 from "figma:asset/6763ac2e1ed27a6b963c8d289616574909ed35ff.png";
import imgOfficialPage11 from "figma:asset/db282a65613be920312978bce14576f0ca3a731e.png";
import imgScreenshot20251106At123522Pm1 from "figma:asset/7dcf5949d294ee9d24eb178c5f350446ceec2178.png";
import imgScreenshot20251106At123522Pm2 from "figma:asset/90cfa5172b7e9995b6f60fb0343f9f6c36b91f1c.png";
import imgScreenshot20251106At123522Pm3 from "figma:asset/6ed4c4d1d5661148d196dcb95f41860f13d80e5e.png";
import imgScreenshot20251105At24015Pm1 from "figma:asset/3a8e523b80cb3e8ff0eccd9f44223311dcb8bd61.png";
import imgScreenshot20251105At24027Pm1 from "figma:asset/e0f59109560405254b5b6e6a921479b10b25531f.png";
import imgScreenshot20251105At123210Pm1 from "figma:asset/f63232b703f4f7b15594140272262d9d1849cd7c.png";

export function NotedByNani() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Based on NotedIntro design */}
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
              shaping personal productivity with
            </p>

            <h1
              className="mb-20"
              style={{
                fontSize: "5rem",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "#6c382a",
              }}
            >
              noted by nani
            </h1>

            <h2
              className="uppercase mb-4"
              style={{
                color: "#b88c6f",
                fontSize: "1.5rem",
                lineHeight: "1.3",
              }}
            >
              live intentionally, plan mindfully.
            </h2>

            <p
              className="text-body-large"
              style={{ color: "var(--color-gray-text)" }}
            >
              Noted by Nani leverages data-driven insights and digital
              planning strategies to help users structure their time,
              analyze their habits, and prioritize tasks—so they can
              focus on meaningful work, not chaotic schedules.
            </p>
          </div>

          {/* Right Column - Tilted Planner Images */}
          <div className="relative h-[500px] mt-10">
            {/* Back planner - rotated right */}
            <div
              className="absolute w-[300px] shadow-lg"
              style={{
                top: "0",
                right: "0",
                transform: "rotate(7deg)",
              }}
            >
              <img
                src={img31}
                alt="Noted by Nani Planner"
                className="w-full h-auto"
              />
            </div>

            {/* Front planner - rotated left */}
            <div
              className="absolute w-[280px] shadow-lg"
              style={{
                top: "80px",
                left: "0",
                transform: "rotate(-6deg)",
                zIndex: 10,
              }}
            >
              <img
                src={imgOfficialPage11}
                alt="Noted by Nani Planner"
                className="w-full h-auto"
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
            <p className="text-body mb-2">
              Founder, Digital Product Designer
            </p>
            <p className="text-body text-sm italic">
              Product Strategy, Data Analysis + Visualization
            </p>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-heading-4 mb-3">Timeline:</h3>
            <p className="text-body text-sm">
              May 2025 - Present (Initial Ideation)
            </p>
            <p className="text-body text-sm">
              October 2025 - Present (Data Viz)
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-heading-4 mb-3">Skills:</h3>
            <p className="text-body text-sm">
              Content Design • Digital Product Design • Data Analysis &
              Visualization • Instructional Design • UX Research
            </p>
          </div>

          {/* Languages + Softwares */}
          <div>
            <h3 className="text-heading-4 mb-3">
              Languages + Softwares:
            </h3>
            <p className="text-body text-sm">
              Canva • Figma • Matplotlib/Seaborn • Python (pandas/numpy) •
              Tableau • Streamlit • Wix/Editor X
            </p>
          </div>
        </div>
      </div>

      {/* Three Pillars Section - Based on Noted2 design */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-heading-3 mb-2"
            style={{ color: "#6c382a", textTransform: "uppercase" }}
          >
            peace of mind, one page at a time.
          </h2>
          <p className="text-body-large mb-16">
            Minimal digital planners and self-reflection tools designed
            to support your daily flow, long-term vision, and overall
            well-being.
          </p>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Reflect */}
            <div>
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={imgScreenshot20251106At123522Pm1}
                  alt="Reflect"
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-heading-3 mb-1"
                style={{ color: "#6c382a" }}
              >
                REFLECT
              </h3>
              <p
                className="text-body mb-4"
                style={{ color: "#a1a1a1", textTransform: "uppercase" }}
              >
                Personal Development + Mindset
              </p>
            </div>

            {/* Align */}
            <div>
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={imgScreenshot20251106At123522Pm2}
                  alt="Align"
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-heading-3 mb-1"
                style={{ color: "#6c382a" }}
              >
                ALIGN
              </h3>
              <p
                className="text-body mb-4"
                style={{ color: "#a1a1a1", textTransform: "uppercase" }}
              >
                Planning + Productivity
              </p>
            </div>

            {/* Grow */}
            <div>
              <div className="mb-6 rounded-2xl overflow-hidden">
                <img
                  src={imgScreenshot20251106At123522Pm3}
                  alt="Grow"
                  className="w-full h-auto"
                />
              </div>
              <h3
                className="text-heading-3 mb-1"
                style={{ color: "#6c382a" }}
              >
                GROW
              </h3>
              <p
                className="text-body mb-4"
                style={{ color: "#a1a1a1", textTransform: "uppercase" }}
              >
                Goal Setting + Habit Tracking
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Framing the Challenge Section - Based on Noted3 design */}
      <div className="bg-[#f8f8f8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            {/* Left Column - Problem Framing */}
            <div>
              <h2
                className="text-heading-3 mb-6"
                style={{ color: "#6c382a", textTransform: "uppercase" }}
              >
                Problem Framing:
              </h2>

              <div className="mb-8">
                <p className="text-body mb-4">
                  <span
                    className="italic"
                    style={{ fontWeight: "var(--font-weight-semibold)" }}
                  >
                    Non-Planners:
                  </span>{" "}
                  Avoid planning to save time, often leading to
                  inefficiency and stress.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-body mb-4">
                  <span
                    className="italic"
                    style={{ fontWeight: "var(--font-weight-semibold)" }}
                  >
                    Over-Planners:
                  </span>{" "}
                  Face frustration with existing tools that are overly
                  complex, cluttered, or fail to support mindful
                  productivity.
                </p>
              </div>

              <h3
                className="text-heading-4 mb-4 mt-12"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
              >
                What's missing?
              </h3>
              <p className="text-body mb-8">
                Existing tools overlook the person behind the task,
                ignoring cognitive load, stress, and intentional living.
              </p>

              <h3
                className="text-heading-4 mb-4"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
              >
                What we do:
              </h3>
              <p className="text-body">
                Guided by research, our tools help users reflect, plan,
                and remain grounded while achieving their goals.
              </p>
            </div>

            {/* Right Column - Three Pillars Expanded */}
            <div className="space-y-8">
              {/* Reflect Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3
                  className="text-heading-3 mb-1"
                  style={{ color: "#6c382a", textTransform: "uppercase" }}
                >
                  Reflect
                </h3>
                <p
                  className="text-body mb-4"
                  style={{ color: "#b88c6f", textTransform: "uppercase" }}
                >
                  Personal Development + Mindset
                </p>
                <p className="text-body" style={{ color: "#a1a1a1" }}>
                  Gratitude journals, reflection prompts, and mindfulness
                  tools to cultivate clarity, balance, and intentional
                  moments.
                </p>
              </div>

              {/* Align Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3
                  className="text-heading-3 mb-1"
                  style={{ color: "#6c382a", textTransform: "uppercase" }}
                >
                  Align
                </h3>
                <p
                  className="text-body mb-4"
                  style={{ color: "#b88c6f", textTransform: "uppercase" }}
                >
                  Planning + Productivity
                </p>
                <p className="text-body" style={{ color: "#a1a1a1" }}>
                  Daily, weekly, and monthly layouts that bring structure
                  without overwhelm, helping you manage time and take
                  consistent action.
                </p>
              </div>

              {/* Grow Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3
                  className="text-heading-3 mb-1"
                  style={{ color: "#6c382a", textTransform: "uppercase" }}
                >
                  Grow
                </h3>
                <p
                  className="text-body mb-4"
                  style={{ color: "#b88c6f", textTransform: "uppercase" }}
                >
                  Goal Setting + Habit Tracking
                </p>
                <p className="text-body" style={{ color: "#a1a1a1" }}>
                  SMART goal worksheets, habit trackers, and wellness grids
                  that turn aspirations into daily practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Central Research Question Section - Based on Noted4 */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-heading-4 mb-4"
            style={{ color: "#acacac", textTransform: "uppercase" }}
          >
            central research question:
          </p>
          <h2
            className="text-heading-3 mb-16"
            style={{ color: "#6c382a", textTransform: "uppercase" }}
          >
            How does social media usage affect productivity, stress, and
            digital wellbeing habits?
          </h2>

          {/* Two Column Grid for Charts */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Chart */}
            <div>
              <div className="mb-6 h-[300px] flex items-center justify-center">
                <img
                  src={imgScreenshot20251105At24015Pm1}
                  alt="Actual Productivity by Wellbeing Status"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3
                className="text-heading-4 mb-3"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
              >
                ACTUAL PRODUCTIVITY BY WELLBEING STATUS
              </h3>
              <p className="text-body-large" style={{ color: "#a1a1a1" }}>
                Productivity scores show little difference between users
                with and without digital wellbeing features.
              </p>
            </div>

            {/* Right Chart */}
            <div>
              <div className="mb-6 h-[300px] flex items-center justify-center">
                <img
                  src={imgScreenshot20251105At24027Pm1}
                  alt="Actual Productivity by Uses Focus Apps"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3
                className="text-heading-4 mb-3"
                style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
              >
                ACTUAL PRODUCTIVITY BY USES FOCUS APPS
              </h3>
              <p className="text-body-large" style={{ color: "#a1a1a1" }}>
                Actual productivity scores are similar for users and
                non-users of focus apps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Visualization Results Section - Based on Noted5 */}
      <div className="bg-[#f8f8f8] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 items-center">
            {/* Left Column - Key Findings */}
            <div>
              <p
                className="text-body-large mb-8 italic"
                style={{ fontWeight: "var(--font-weight-semibold)" }}
              >
                The data proves that traditional methods (focus apps and
                digital wellbeing tools) don't improve productivity.
              </p>

              <p className="text-body mb-12">
                Traditional tools offer no statistically significant
                advantage; true productivity stems from intentional habits.
                This validates Noted by Nani as a habit-building,
                wellness-centered experience designed for sustainable
                focus.
              </p>

              <h3
                className="text-heading-4 mb-4"
                style={{ textTransform: "uppercase" }}
              >
                VISUALIZATIONS EXPLORED:
              </h3>
              <ul className="text-body space-y-2 list-disc pl-6">
                <li>
                  Social Media Usage by Actual Productivity (Scatterplot)
                </li>
                <li>Social Media Platform Usage (Wordcloud)</li>
                <li>
                  Actual Productivity by Wellbeing Status (Box Plot)
                </li>
                <li>
                  Actual Productivity by Uses Focus Apps (Bar Graph)
                </li>
                <li>Monthly Burnout by Social Media Usage (Bar Graph)</li>
                <li>
                  Monthly Burnout by Weekly Offline Hours (Bar Graph)
                </li>
              </ul>
            </div>

            {/* Right Column - Visualizations */}
            <div className="space-y-12">
              {/* Scatterplot */}
              <div>
                <h3
                  className="text-heading-4 text-center mb-4"
                  style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
                >
                  SOCIAL MEDIA BY ACTUAL PRODUCTIVITY
                </h3>
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src={imgScreenshot20251105At123210Pm1}
                    alt="Social Media by Actual Productivity Scatterplot"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Wordcloud */}
              <div>
                <h3
                  className="text-heading-4 text-center mb-4"
                  style={{ textTransform: "uppercase", fontWeight: "var(--font-weight-semibold)" }}
                >
                  SOCIAL MEDIA PLATFORM USAGE (WORDCLOUD)
                </h3>
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src={imgScreenshot20251105At123210Pm1}
                    alt="Social Media Platform Usage Wordcloud"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* From Data to Daily Habits Section - Based on Noted6 */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-heading-3 mb-4"
            style={{ color: "#6c382a", textTransform: "uppercase" }}
          >
            From Data to Daily Habits
          </h2>
          <p className="text-body-large mb-16" style={{ color: "#5b5b5b" }}>
            Data analysis validated the need to prioritize intentional
            planning and habit-building, guiding product and brand
            decisions.
          </p>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* Product Development */}
            <div>
              <div className="mb-4">
                <BookOpen
                  size={48}
                  strokeWidth={1.5}
                  style={{ color: "#6c382a" }}
                />
              </div>
              <h3
                className="text-heading-3 mb-4"
                style={{ color: "#6c382a", textTransform: "uppercase" }}
              >
                PRODUCT DEVELOPMENT
              </h3>
              <p className="text-body" style={{ color: "#5b5b5b" }}>
                Shift focus to building templates aligned with the
                necessity of habit-building, not just task-logging (e.g.,
                dedicated reflection sections, time-blocking layouts).
              </p>
            </div>

            {/* Brand Positioning */}
            <div>
              <div className="mb-4">
                <Lightbulb
                  size={48}
                  strokeWidth={1.5}
                  style={{ color: "#6c382a" }}
                />
              </div>
              <h3
                className="text-heading-3 mb-4"
                style={{ color: "#6c382a", textTransform: "uppercase" }}
              >
                BRAND POSITIONING
              </h3>
              <p className="text-body" style={{ color: "#5b5b5b" }}>
                Emphasize mindful productivity and balance in brand
                messaging to directly differentiate from simple
                checklist/screen time apps.
              </p>
            </div>

            {/* Marketing Focus */}
            <div>
              <div className="mb-4">
                <Megaphone
                  size={48}
                  strokeWidth={1.5}
                  style={{ color: "#6c382a" }}
                />
              </div>
              <h3
                className="text-heading-3 mb-4"
                style={{ color: "#6c382a", textTransform: "uppercase" }}
              >
                MARKETING FOCUS
              </h3>
              <p className="text-body" style={{ color: "#5b5b5b" }}>
                Prioritize TikTok and Instagram for all outreach and
                platform-specific content creation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/case-studies/sereniti"
            className="group flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <div>
              <p className="text-label mb-2">Next Project</p>
              <h3 className="text-heading-2">Sereniti</h3>
            </div>
            <ArrowLeft size={32} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}