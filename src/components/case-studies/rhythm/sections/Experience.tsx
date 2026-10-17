import type { ReactNode } from "react";
import { Body, Eyebrow, Heading, Italic, Kicker, Phone, Small } from "../primitives";
import todayScreen from "../../../../assets/rhythm/1-today.png";
import planWeekScreen from "../../../../assets/rhythm/2-plan.png";
import planDayScreen from "../../../../assets/rhythm/2b-plan-day.png";
import onboardingScreen from "../../../../assets/rhythm/2-world.png";
import insightsScreen from "../../../../assets/rhythm/3-insights.png";
import youScreen from "../../../../assets/rhythm/4-you.png";

const TODAY_CALLOUTS = [
  { title: "How you're doing", body: "Your state, explained only by evidence that exists." },
  { title: "What matters now", body: "One suggested action that fits the time you have left." },
  { title: "Top 3 priorities", body: "A short list, not a backlog." },
  { title: "Today's schedule", body: "What's next, with the full day in Plan." },
];

const LEARNING = [
  {
    label: "Onboarding",
    body: "It starts by getting to know you: life areas, what's on your plate, and a first check-in.",
    phone: { src: onboardingScreen, alt: "Rhythm onboarding, Your world step: what does your life look like right now, with options like working full-time, in school, and a mix of a few of these" },
  },
  {
    label: "Insights",
    body: "Patterns in your states and readings over weeks and months, without overreaching on thin data.",
    phone: { src: insightsScreen, alt: "Rhythm Insights: October calendar with a Rhythm state marked on most days, and a one-month Oura readiness trend" },
  },
  {
    label: "You",
    body: "Goals, everyday rhythms, and what helps, so guidance reflects what matters to you.",
    phone: { src: youScreen, alt: "Rhythm You screen: goals Alana is making space for, everyday rhythms like a morning walk, what helps, and focus areas" },
  },
];

export function Experience() {
  return (
    <section id="experience" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>03 · The experience</Eyebrow>
      <Heading size="lg" style={{ marginTop: 18 }}>
        Knowing your capacity only matters if it <Italic>changes what happens next.</Italic>
      </Heading>

      {/* A. Understanding your day */}
      <div className="rh-grid-stack rh-exp-row" style={{ marginTop: 64, gridTemplateColumns: "minmax(0, 410px) minmax(0, 1fr)" }}>
        <div style={{ position: "relative", paddingRight: "36%" }}>
          <div style={{ position: "absolute", right: 0, top: "12%", width: "52%" }}>
            <Phone
              delay={0.15}
              src={planDayScreen}
              alt="Rhythm Plan, Day view for Thursday Oct 15: a Rhythm gym block and synced, tagged calendar events"
            />
          </div>
          <Phone
            src={todayScreen}
            alt="Rhythm Today on an Aligned day: how you're doing, what matters now with an open 11 to 1 window, three priorities, and the evening schedule"
          />
        </div>
        <div>
          <SubHead letter="A" label="Understanding your day">
            Your capacity, <Italic>in context.</Italic>
          </SubHead>
          <Body style={{ marginTop: 14 }}>
            Today brings recovery, exposure, and priorities into one view. Without enough to go on,
            it asks for a quick check-in instead of guessing.
          </Body>
          <ol className="rh-callouts" style={{ marginTop: 28 }}>
            {TODAY_CALLOUTS.map((c, i) => (
              <li key={c.title}>
                <span className="rh-callouts__num">{i + 1}</span>
                <div>
                  <div className="rh-callouts__title">{c.title}</div>
                  <Small style={{ marginTop: 2 }}>{c.body}</Small>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* B. Planning around your capacity */}
      <div className="rh-subsection">
        <div className="rh-grid-stack rh-exp-row" style={{ gridTemplateColumns: "minmax(0, 1fr) auto" }}>
          <div>
            <SubHead letter="B" label="Planning around your capacity">
              A plan that works <Italic>with you,</Italic> not against you.
            </SubHead>
            <Body style={{ marginTop: 14 }}>
              Plan and Tasks bring your calendar, commitments, protected time, and priorities
              together, and let you place a priority into an open window in your day.
            </Body>
            <Small style={{ marginTop: 14, color: "var(--rh-accent)" }}>
              Next: planning suggestions that weigh the whole week against your capacity.
            </Small>
          </div>
          <div className="rh-phone-pair rh-phone-pair--fixed">
            <figure style={{ margin: 0 }}>
              <Phone src={planDayScreen} alt="Rhythm Plan, Day view for Thursday Oct 15: a Rhythm gym block and synced, tagged calendar events" />
              <figcaption><Kicker style={{ marginTop: 14 }}>Plan · Day</Kicker></figcaption>
            </figure>
            <figure style={{ margin: "48px 0 0" }}>
              <Phone delay={0.12} src={planWeekScreen} alt="Rhythm Plan, Week view: a day strip for Oct 12 to 18 and Thursday's agenda" />
              <figcaption><Kicker style={{ marginTop: 14 }}>Plan · Week</Kicker></figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* C. Learning over time */}
      <div className="rh-subsection">
        <SubHead letter="C" label="Learning over time">
          Understanding today is <Italic>just the beginning.</Italic>
        </SubHead>

        <div className="rh-bleed" style={{ marginTop: 36, background: "var(--rh-panel)", padding: "56px 24px" }}>
          <ol className="rh-learning">
            {LEARNING.map((item, i) => (
              <li key={item.label}>
                <Phone {...item.phone} delay={i * 0.12} />
                <Kicker style={{ marginTop: 18, color: "var(--rh-ink)" }}>{item.label}</Kicker>
                <Small style={{ marginTop: 6 }}>{item.body}</Small>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function SubHead({ letter, label, children }: { letter: string; label: string; children: ReactNode }) {
  return (
    <>
      <Kicker variant="eyebrow">
        {letter} · {label}
      </Kicker>
      <Heading size="md" as="h3" style={{ marginTop: 8 }}>
        {children}
      </Heading>
    </>
  );
}
