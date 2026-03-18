import { Link } from "react-router";
import {
  ArrowLeft,
  Search,
  Calendar,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { ProjectTag } from "../../components/ProjectTag";
import {
  CaseStudySection,
  CaseStudyTextBlock,
} from "../../components/CaseStudySection";
import imgRectangle from "figma:asset/45a10cc7c6d98d586fbe304eaebdbc922fa85486.png";
import imgNounSearch612833511 from "figma:asset/7e904dcbdcdd6fdaa6b05ddbd5a51ab35fd06a1c.png";
import imgNounConnect72652541 from "figma:asset/37660d6b8252ed982b7705f2fb9c91440c85230d.png";
import imgScreenshot20251009At23142Pm1 from "figma:asset/0c8aa568b4c983e711a447410374ffb6bd064cd2.png";
import imgScreenshot20251009At23142Pm2 from "figma:asset/2769e3bd70416904811f29ab7ddfebef3e294cc0.png";
import imgScreenshot20241215At22701Pm1 from "figma:asset/392ce42d764f6f03ddf58accd5c131d9aa1067f5.png";
import imgScreenshot20241215At22636Pm1 from "figma:asset/1fa487554bd869a2fb989421a3a24ed3a77b9a4c.png";
import imgScreenshot20241215At22549Pm1 from "figma:asset/a7e0c0e4167c6b0af659bf043276cbf1084f0fa9.png";
import imgScreenshot20251016At101714Am1 from "figma:asset/e837d7a21daa8f19d4b2cc684ba78707118054e8.png";
import imgScreenshot20251016At102310Am1 from "figma:asset/6af52bfd02fa407167767ff0744c526127a45a22.png";
import imgScreenshot20251016At102333Am1 from "figma:asset/2c64cd9753b6f65bd708077d97960167b606615a.png";
import imgScreenshot20241215At121227Pm1 from "figma:asset/586e69d7678d170f49003bffc6c2407878c56713.png";
import imgScreenshot20241215At121206Pm1 from "figma:asset/600664a31cc8b51da32f0bf7646c3342808f6f7a.png";
import imgScreenshot20241215At121127Pm1 from "figma:asset/495d8db0dd49a3cc2e056d89085ac793b356acc4.png";
import imgScreenshot20241215At121144Pm1 from "figma:asset/98b57188a56da07f49ebdf3ca2a746d6508f6b2a.png";
import imgScreenshot20241215At121312Pm from "figma:asset/dbaecdbdd96329e112dc7761dc99fa78cd30e1e6.png";
import imgScreenshot20241215At122738Pm1 from "figma:asset/1e117656a54ebcaf657d8b2ea4e010c95edd9d95.png";
import imgScreenshot20241215At122801Pm1 from "figma:asset/30e01e0647dccd396d804eb5de86b5b0c1909c0b.png";
import imgScreenshot20241215At122303Pm1 from "figma:asset/30990a3f3c2863de48e0f43adab7d15608bbcb94.png";
import imgScreenshot20241215At22701Pm2 from "figma:asset/dbaecdbdd96329e112dc7761dc99fa78cd30e1e6.png";
import imgScreenshot20241215At22636Pm2 from "figma:asset/600664a31cc8b51da32f0bf7646c3342808f6f7a.png";
import imgScreenshot20241215At22549Pm2 from "figma:asset/3636ec43d46c50fdfd2c7961f9249287e59a6c70.png";

export function Blyss() {
  return (
    <div className="min-h-screen">

      {/* Hero Section - Based on BlyssIntro design */}
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <p
              className="text-heading-4 uppercase mb-2"
              style={{
                color: "var(--color-gray-text)",
                letterSpacing: "0.05em",
              }}
            >
              Redefining social experiences with
            </p>

            <h1
              className="mb-26"
              style={{
                fontSize: "5rem",
                lineHeight: "1.1",
                fontWeight: "800",
                color: "#3d5d7b",
                whiteSpace: "nowrap",
              }}
            >
              BLYSS SOCIAL
            </h1>

            <h2
              className="uppercase mb-8"
              style={{
                color: "#3d5d7b",
                fontSize: "1.25rem",
                lineHeight: "1.3",
                maxWidth: "500px",
              }}
            >
              Eliminate the stress of who to meet, where to go, and how to plan.
            </h2>

            <p
              className="text-body-large"
              style={{ color: "var(--color-gray-text)" }}
            >
              Blyss Social connects young professionals with
              curated events and guaranteed reservations—so they
              can focus on the experience, not the logistics.
            </p>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={imgRectangle}
                alt="Blyss Social App Interface"
                className="w-full h-auto"
                style={{ transform: "rotate(-3deg)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Row */}
      <div className="max-w-6xl mx-auto px-6 py-12 border-b border-gray-200">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="text-heading-4 mb-3">Role:</h3>
            <p className="text-body mb-2">
              Chief of Design and Development
            </p>
            <p className="text-body text-sm italic">
              Designed MVP, Lead usability testing, Manage
              development team
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">Timeline:</h3>
            <p className="text-body text-sm">
              Fall 2021 - Spring 2023 (Dating)
            </p>
            <p className="text-body text-sm">
              Summer 2023 - Present (Social)
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">Skills:</h3>
            <p className="text-body text-sm">
              Front-End Development • ​Product Management •
              UI/UX Design • Usability Testing & Research
            </p>
          </div>

          <div>
            <h3 className="text-heading-4 mb-3">
              Languages + Softwares:
            </h3>
            <p className="text-body text-sm">
              Figma • GitHub • HTML/CSS • JavaScript • Jira •
              React/React Native
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Understanding the Problem Section */}
        <div className="py-16 mb-20 border-b border-gray-200">
          <h2 className="text-heading-2 mb-6">
            Understanding the Problem:
          </h2>
          <h3
            className="text-heading-2 mb-12"
            style={{ color: "#5885ae" }}
          >
            How might we make socializing effortless for busy
            professionals?
          </h3>
          <p className="text-body-large mb-16">
            We conducted 200+ user interviews to uncover common
            challenges and created two personas highlighting
            pain points in planning, connection, and engagement.
          </p>

          {/* Two Column Personas */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Persona 1: Alex Chen */}
            <div>
              <div className="flex gap-6 items-start mb-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={imgScreenshot20251009At23142Pm1}
                    alt="Alex Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className="text-heading-3 mb-2"
                    style={{ color: "#5885ae" }}
                  >
                    Alex Chen, 24
                  </h4>
                  <p className="text-body">
                    <span
                      style={{
                        fontWeight:
                          "var(--font-weight-semibold)",
                      }}
                    >
                      Profession:{" "}
                    </span>
                    Software Engineer
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="text-body mb-3"
                  style={{
                    fontWeight: "var(--font-weight-semibold)",
                  }}
                >
                  Background + Motivations:
                </p>
                <ul className="text-body space-y-2 ml-5 list-disc">
                  <li>
                    Interested in trying new activities and
                    exploring the city
                  </li>
                  <li>
                    Wants to meet new people and make meaningful
                    friendships
                  </li>
                  <li>
                    Values connecting with others who share
                    similar interests
                  </li>
                </ul>
              </div>
            </div>

            {/* Persona 2: Chloe Wilson */}
            <div>
              <div className="flex gap-6 items-start mb-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src={imgScreenshot20251009At23142Pm2}
                    alt="Chloe Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4
                    className="text-heading-3 mb-2"
                    style={{ color: "#5885ae" }}
                  >
                    Chloe Wilson, 28
                  </h4>
                  <p className="text-body">
                    <span
                      style={{
                        fontWeight:
                          "var(--font-weight-semibold)",
                      }}
                    >
                      Profession:{" "}
                    </span>
                    Marketing Manager
                  </p>
                </div>
              </div>
              <div>
                <p
                  className="text-body mb-3"
                  style={{
                    fontWeight: "var(--font-weight-semibold)",
                  }}
                >
                  Background + Motivations:
                </p>
                <ul className="text-body space-y-2 ml-5 list-disc">
                  <li>
                    Needs to coordinate plans with her
                    established friend group
                  </li>
                  <li>
                    Feels overwhelmed by juggling multiple
                    commitments
                  </li>
                  <li>
                    Seeks opportunities for stress-free,
                    enjoyable experiences
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-20 pb-20 border-b border-gray-200">
          <div className="text-center mb-12">
            <p className="text-heading-3 mb-4">
              Using these personas, we designed a seamless
              social journey:
            </p>
            <h2
              className="mb-12"
              style={{
                color: "#5885ae",
                fontSize: "4rem",
                fontWeight: "800",
                letterSpacing: "0.02em",
              }}
            >
              EXPLORE, ATTEND, CONNECT.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Discover Events */}
            <div>
              <div className="mb-4">
                <Search size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 mb-4">
                Discover Events
              </h3>
              <p className="text-body">
                Explore curated gatherings at top venues near
                you. Filter by interests, location, and timing
                to find experiences that truly match your
                lifestyle.
              </p>
            </div>

            {/* Reserve Instantly */}
            <div>
              <div className="mb-4">
                <Calendar size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 mb-4">
                Reserve Instantly
              </h3>
              <p className="text-body">
                Secure your spot with one tap—no more endless
                group chats or last-minute coordination stress.
                Reservations are guaranteed, letting you focus
                on the experience.
              </p>
            </div>

            {/* Connect & Enjoy */}
            <div>
              <div className="mb-4">
                <Users size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-3 mb-4">
                Connect & Enjoy
              </h3>
              <p className="text-body">
                Show up, meet new people, and make meaningful
                connections. Spend your time enjoying the event
                instead of worrying about planning and
                logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Design Process Section */}
        <div className="mb-20">
          <h2 className="text-heading-2 mb-12">
            Design Process
          </h2>

          <div className="grid md:grid-cols-[300px_1fr] gap-12">
            {/* Left Column - Process Steps */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-heading-3 mb-2"
                  style={{
                    color: "var(--color-blue-accent, #5885ae)",
                  }}
                >
                  Research:
                </h3>
                <p className="text-body">
                  Identified core challenges in social planning.
                </p>
              </div>

              <div>
                <h3
                  className="text-heading-3 mb-2"
                  style={{
                    color: "var(--color-blue-accent, #5885ae)",
                  }}
                >
                  Ideation:
                </h3>
                <p className="text-body">
                  Mapped user journeys and defined core app
                  flows.
                </p>
              </div>

              <div>
                <h3
                  className="text-heading-3 mb-2"
                  style={{
                    color: "var(--color-blue-accent, #5885ae)",
                  }}
                >
                  Wireframing:
                </h3>
                <p className="text-body">
                  Built low-fidelity layouts to validate
                  usability and navigation.
                </p>
              </div>

              <div>
                <h3
                  className="text-heading-3 mb-2"
                  style={{
                    color: "var(--color-blue-accent, #5885ae)",
                  }}
                >
                  High-Fidelity Prototypes:
                </h3>
                <p className="text-body">
                  Created polished interfaces and a cohesive
                  visual identity.
                </p>
              </div>

              <div>
                <h3
                  className="text-heading-3 mb-2"
                  style={{
                    color: "var(--color-blue-accent, #5885ae)",
                  }}
                >
                  Development:
                </h3>
                <p className="text-body">
                  Guided front-end implementation of final
                  designs.
                </p>
              </div>
            </div>

            {/* Right Column - Process Images */}
            <div className="space-y-6">
              {/* Research/Ideation Images */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src={imgScreenshot20251016At102310Am1}
                  alt="User journey mapping"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20251016At102333Am1}
                  alt="App flow diagrams"
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* Mobile Screens Grid */}
              <div className="grid grid-cols-4 gap-4">
                <img
                  src={imgScreenshot20241215At22636Pm1}
                  alt="Mobile screen 1"
                  className="w-full rounded-lg"
                />
                <img
                  src={imgScreenshot20251016At101714Am1}
                  alt="Mobile screen 2"
                  className="w-full rounded-lg"
                />
                <img
                  src={imgScreenshot20241215At22549Pm1}
                  alt="Mobile screen 3"
                  className="w-full rounded-lg"
                />
                <img
                  src={imgScreenshot20241215At22701Pm1}
                  alt="Mobile screen 4"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* From Dating to Social Section */}
      <div className="border-t border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-heading-2 mb-6">
            From Dating to Social: Evolving Through User Insight
          </h2>
          <p className="text-body-large mb-16">
            200+ insights from usability testing sessions
            revealed that users wanted more than dating—they
            craved ways to meet friends, plan group events, and
            explore their city. In response to these insights
            and an oversaturated dating market, we pivoted to a
            social platform centered on connection and event
            coordination.
          </p>

          {/* Side-by-Side Comparison */}
          <div className="grid grid-cols-2 gap-20">
            {/* Blyss Dating */}
            <div>
              <h3
                className="text-heading-2 text-center mb-8"
                style={{ color: "#5885ae" }}
              >
                BLYSS DATING
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src={imgScreenshot20241215At22636Pm1}
                  alt="Blyss Dating Screen 1"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={imgScreenshot20241215At22549Pm1}
                  alt="Blyss Dating Screen 2"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={imgScreenshot20241215At22701Pm1}
                  alt="Blyss Dating Screen 3"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Blyss Social */}
            <div>
              <h3
                className="text-heading-2 text-center mb-8"
                style={{ color: "#5885ae" }}
              >
                BLYSS SOCIAL
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src={imgScreenshot20241215At22636Pm2}
                  alt="Blyss Social Screen 1"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={imgScreenshot20241215At22549Pm2}
                  alt="Blyss Social Screen 2"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src={imgScreenshot20241215At22701Pm2}
                  alt="Blyss Social Screen 3"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Prototype Section */}
      <div className="bg-[#f6f8f9] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[550px_1fr] gap-16">
            {/* Left Column - Feature List */}
            <div>
              <h2 className="text-heading-2 mb-8">
                From Insights to the Interface
              </h2>
              <p className="text-body-large mb-12">
                I translated early user insights into scalable
                solutions, leading design and managing team of
                developers.
              </p>

              <div className="space-y-8">
                <div>
                  <h3
                    className="text-heading-3 mb-1"
                    style={{ color: "#5885ae" }}
                  >
                    Event Planning:
                  </h3>
                  <p className="text-body-large">
                    Easily schedule or join group events through
                    integrated venue listings.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-heading-3 mb-1"
                    style={{ color: "#5885ae" }}
                  >
                    Smart Matching:
                  </h3>
                  <p className="text-body-large">
                    Discover friends and venues aligned with
                    shared interests.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-heading-3 mb-1"
                    style={{ color: "#5885ae" }}
                  >
                    Dynamic Profiles:
                  </h3>
                  <p className="text-body-large">
                    Personalizes experience with hobbies,
                    flashcards, and event history.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Screens Grid */}
            <div>
              <p
                className="text-label uppercase tracking-wider mb-6"
                style={{ color: "#acacac" }}
              >
                FINAL PROTOTYPE
              </p>
              <div className="grid grid-cols-4 gap-4 mb-6">
                <img
                  src={imgScreenshot20241215At121127Pm1}
                  alt="Final prototype screen 1"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At121144Pm1}
                  alt="Final prototype screen 2"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At121206Pm1}
                  alt="Final prototype screen 3"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At121227Pm1}
                  alt="Final prototype screen 4"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <img
                  src={imgScreenshot20241215At121312Pm}
                  alt="Final prototype screen 5"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At122303Pm1}
                  alt="Final prototype screen 6"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At122738Pm1}
                  alt="Final prototype screen 7"
                  className="w-full rounded-lg shadow-md"
                />
                <img
                  src={imgScreenshot20241215At122801Pm1}
                  alt="Final prototype screen 8"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-heading-2 uppercase mb-4">
            at blyss, I
          </p>
          <h2
            className="mb-16"
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#5885ae",
              lineHeight: "1.1",
              textTransform: "uppercase",
            }}
          >
            Design for connection, not just conversion.
          </h2>

          <a
            href="https://www.figma.com/proto/eugu3V9kBgYAbo0no9lc7E/2024-DESIGN-FILE?page-id=0%3A1&node-id=405-8326&viewport=-58%2C1258%2C0.2&t=DIUEymHuF255stpd-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=479%3A18454&show-proto-sidebar=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgba(88,133,174,0.61)] px-6 py-2 rounded-lg shadow-md hover:bg-[rgba(88,133,174,0.75)] transition-colors mb-16"
          >
            <p className="uppercase text-white text-body">
              View Full Prototype
            </p>
          </a>

          {/* Cards Grid - 2x2 */}
          <div className="grid grid-cols-2 gap-8">
            {/* Role Summary Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3
                className="text-heading-3 uppercase mb-4"
                style={{ color: "#5885ae" }}
              >
                Role Summary:
              </h3>
              <p className="text-body">
                Lead design and development, bridging strategy,
                user insights, and execution to bring Blyss'
                vision to life.
              </p>
            </div>

            {/* Impact Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3
                className="text-heading-3 uppercase mb-4"
                style={{ color: "#5885ae" }}
              >
                Impact:
              </h3>
              <p className="text-body">
                Our work fosters meaningful engagement between
                users and local partnered venues, transforming
                digital interactions into memorable in-person
                experiences.
              </p>
            </div>

            {/* Key Learnings Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3
                className="text-heading-3 uppercase mb-4"
                style={{ color: "#5885ae" }}
              >
                Key Learnings:
              </h3>
              <ul className="text-body space-y-2 ml-5 list-disc">
                <li>
                  Design decisions should simplify, not add
                  distraction.
                </li>
                <li>
                  Every prototype should bridge vision and
                  execution.
                </li>
                <li>
                  It's challenging to align user needs with
                  business goals!
                </li>
              </ul>
            </div>

            {/* Next Steps Card */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3
                className="text-heading-3 uppercase mb-4"
                style={{ color: "#5885ae" }}
              >
                Next Steps:
              </h3>
              <ul className="text-body space-y-2 ml-5 list-disc">
                <li>
                  Test additional features for event discovery +
                  social interaction.
                </li>
                <li>
                  Conduct another round of usability tests to
                  optimize UX flows.
                </li>
                <li>
                  Expand partnerships with venues for broader
                  reach.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/case-studies/noted-by-nani"
            className="group flex items-center justify-between hover:opacity-70 transition-opacity"
          >
            <div>
              <p className="text-label mb-2">Next Project</p>
              <h3 className="text-heading-2">Noted by Nani</h3>
            </div>
            <ArrowLeft size={32} className="rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}