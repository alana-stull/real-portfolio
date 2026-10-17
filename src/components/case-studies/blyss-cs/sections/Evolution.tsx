import { blyssImages, type BlyssImage } from "../images";
import { Body, Eyebrow, Heading, Icon, ImageSlot, Label, Pill, Reveal, Small, type IconName, type SlotTone } from "../primitives";

const TAX: { icon: IconName; label: string }[] = [
  { icon: "calendar", label: "schedules" },
  { icon: "pin", label: "places" },
  { icon: "heart", label: "preferences" },
  { icon: "chat", label: "group chats" },
  { icon: "check", label: "commitment" },
];

const LEARNED = [
  {
    eyebrow: "We thought",
    title: "Connection started with the right person.",
    body: "Blyss began as a dating app focused on intentional matches.",
  },
  {
    eyebrow: "We learned",
    title: "Finding people was only part of the problem.",
    body: "Turning social intentions into actual plans was just as challenging.",
  },
  {
    eyebrow: "We changed",
    title: "We expanded the problem, not just the features.",
    body: "Blyss evolved to connect discovery with real-world experiences.",
  },
];

type Step = {
  tag: { text: string; now?: boolean };
  title: string;
  body: string;
  dot: string;
  now?: boolean;
  screens: { image: BlyssImage; w: number; h: number; radius: number; tone: SlotTone }[];
};

const PIVOT: Step[] = [
  {
    tag: { text: "2021 → 2023" },
    title: "Dating",
    body: "Helping people form more intentional romantic connections.",
    dot: "#8B8F94",
    screens: [
      { image: blyssImages.pivotOld1, w: 146, h: 286, radius: 22, tone: "archive" },
      { image: blyssImages.pivotOld2, w: 146, h: 286, radius: 22, tone: "archive" },
    ],
  },
  {
    tag: { text: "2024 → 2026" },
    title: "Social planning",
    body: "Reducing the coordination tax between wanting to hang out and actually making a plan.",
    dot: "#B7D3E0",
    screens: [
      { image: blyssImages.pivotMid1, w: 146, h: 286, radius: 24, tone: "default" },
      { image: blyssImages.pivotMid2, w: 146, h: 286, radius: 24, tone: "default" },
    ],
  },
  {
    tag: { text: "Now", now: true },
    title: "Social discovery",
    body: "Connecting people, places, and plans to create more possibilities for life offline.",
    dot: "#5BA8D3",
    now: true,
    screens: [
      { image: blyssImages.pivotCurrent1, w: 140, h: 304, radius: 26, tone: "now" },
      { image: blyssImages.pivotCurrent2, w: 140, h: 304, radius: 26, tone: "now" },
    ],
  },
];

export function Evolution() {
  return (
    <section id="evolution" className="bc-sec" tabIndex={-1}>
      {/* It started with dating */}
      <Reveal className="bc-g bc-stack-xl" style={{ gridTemplateColumns: "400px minmax(0, 1fr)", gap: 72, alignItems: "start" }}>
        <div>
          <Eyebrow>02 · Evolution</Eyebrow>
          <Heading size="sec" className="bc-head-gap">
            It started with dating.
          </Heading>
          <Body className="bc-body-gap">
            We started Blyss in 2021 as a dating app built around more meaningful connection. We spent years researching, designing, and
            building it. Even then, the harder question was what happened after two people wanted to connect.
          </Body>
        </div>
        <div style={{ background: "#F4F5F6", border: "1px solid #E3E4E6", borderRadius: 20, padding: "28px clamp(18px, 3vw, 32px) 32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <Label as="span">Blyss Dating · archive</Label>
            <span className="bc-h" style={{ fontSize: "clamp(32px, 3vw, 44px)", fontWeight: 800, color: "#8B8F94" }}>
              2021
            </span>
          </div>
          <div className="bc-screens" style={{ marginTop: 24 }}>
            <ImageSlot image={blyssImages.datingProfile} w={144} h={312} radius={22} tone="archive" />
            <ImageSlot image={blyssImages.datingScreen2} w={144} h={312} radius={22} tone="archive" delay={0.1} />
            <ImageSlot image={blyssImages.datingScreen3} w={144} h={312} radius={22} tone="archive" delay={0.2} />
          </div>
          <div style={{ marginTop: 24, borderTop: "1px solid #E3E4E6", paddingTop: 20 }}>
            <Label as="span">Early wireframes</Label>
            <div className="bc-g bc-stack-md" style={{ marginTop: 14, gridTemplateColumns: "1374fr 2030fr", gap: 12, alignItems: "start" }}>
              <ImageSlot image={blyssImages.datingWireframe} w={1374} h={1352} radius={12} tone="white" contain style={{ border: "1px solid #E3E4E6", maxWidth: "none" }} />
              <ImageSlot image={blyssImages.datingWireframe2} w={2030} h={1310} radius={12} tone="white" contain delay={0.1} style={{ border: "1px solid #E3E4E6", maxWidth: "none" }} />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Soft launch */}
      <Reveal
        className="bc-g bc-stack-xl bc-sub"
        style={{ gridTemplateColumns: "minmax(0, 1fr) 380px", gap: 72, alignItems: "start" }}
      >
        <div className="bc-g" style={{ gridTemplateColumns: "1.3fr 1fr", gridTemplateRows: "230px 190px", gap: 14 }}>
          <div style={{ gridRow: "span 2" }}>
            <ImageSlot image={blyssImages.launchParty1} fill radius={18} tone="archive" />
          </div>
          <ImageSlot image={blyssImages.launchParty2} fill radius={18} tone="archive" delay={0.12} />
          <ImageSlot image={blyssImages.launchMaterials} fill radius={18} tone="archive" delay={0.24} />
        </div>
        <div>
          <Eyebrow variant="sub">2023 · Soft launch</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            We brought the idea into the world.
          </Heading>
          <Body className="bc-body-gap">In 2023 we held a soft launch and a launch party for the dating app.</Body>
          <Body style={{ marginTop: 16 }}>
            Getting it onto the App Store was harder. In a crowded dating market, the reviewer saw matching and schedule alignment but never
            reached the planning flow. The app wasn’t approved.
          </Body>
          <Body style={{ marginTop: 16 }}>
            The lesson stuck: if the value only shows up deep in the flow, the product hasn’t made it clear enough.
          </Body>
          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <Pill variant="sl">Soft launch</Pill>
              <span className="bc-sm">Launch event for the dating app</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <Pill dashed>App Store</Pill>
              <span className="bc-sm">Not approved for public release</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* What we learned */}
      <div className="bc-sub">
        <Reveal>
          <Eyebrow variant="sub">What we learned</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            The more we learned, the bigger the question became.
          </Heading>
          <div
            className="bc-g bc-stack-lg bc-body-gap"
            style={{ gridTemplateColumns: "minmax(0, 1fr) 340px", gap: 72, alignItems: "start" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <Body>
                People weren’t only struggling to meet someone. They were struggling to turn social possibilities into real experiences:
                finding a time, deciding where to go, finding people to go with, and getting everyone to actually commit.
              </Body>
              <Body>We started calling that friction the coordination tax.</Body>
            </div>
            <div style={{ borderTop: "2px solid #375169", paddingTop: 20 }}>
              <Label style={{ color: "#375169" }}>The term</Label>
              <div className="bc-h bc-h-ins" style={{ marginTop: 12 }}>
                The coordination tax
              </div>
              <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TAX.map((t) => (
                  <Pill key={t.label} icon={t.icon}>
                    {t.label}
                  </Pill>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="bc-cols3 bc-after-head" style={{ borderTop: "1px solid #E3E4E6", paddingTop: 28 }}>
          {LEARNED.map((c, i) => (
            <div key={c.eyebrow} style={{ padding: i === 0 ? "0 32px 0 0" : i === 2 ? "0 0 0 32px" : "0 32px" }}>
              <Label style={{ color: "#375169" }}>{c.eyebrow}</Label>
              <h4 className="bc-h bc-h-card" style={{ marginTop: 12 }}>
                {c.title}
              </h4>
              <Body className="bc-bd--sm" style={{ marginTop: 10 }}>
                {c.body}
              </Body>
            </div>
          ))}
        </Reveal>
      </div>

      {/* The pivot (full-bleed band) */}
      <div
        className="bc-bleed bc-band-tint bc-band-pad bc-sub"
      >
        <Reveal>
          <Eyebrow variant="sub">The pivot</Eyebrow>
          <Heading as="h3" size="sub" className="bc-head-gap">
            Sometimes building the right product means letting go of the first one.
          </Heading>
        </Reveal>
        <Reveal className="bc-tl bc-after-head">
          {PIVOT.map((s, i) => (
            <PivotStepWithArrow key={s.title} step={s} last={i === PIVOT.length - 1} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function PivotStepWithArrow({ step, last }: { step: Step; last: boolean }) {
  return (
    <>
      <div className={`bc-tl__step ${step.now ? "bc-tl__step--now" : ""}`}>
        <div className="bc-tl__dot" style={{ background: step.dot }} aria-hidden="true" />
        <div>
          {step.tag.now ? (
            <Pill variant="sl" style={{ height: 26 }}>
              {step.tag.text}
            </Pill>
          ) : (
            <span className="bc-lb">{step.tag.text}</span>
          )}
        </div>
        <h4
          style={{
            margin: "14px 0 0",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: step.now ? "#375169" : "#333333",
          }}
        >
          {step.title}
        </h4>
        <Small style={{ marginTop: 10, fontSize: 15 }}>
          <span className="bc-tl__desc" style={{ display: "block" }}>
            {step.body}
          </span>
        </Small>
        <div className="bc-tl__screens">
          {step.screens.map((sc, j) => (
            <ImageSlot key={j} image={sc.image} w={sc.w} h={sc.h} radius={sc.radius} tone={sc.tone} delay={j * 0.1} />
          ))}
        </div>
      </div>
      {!last && (
        <div className="bc-tl__arrow" aria-hidden="true">
          <Icon name="chevronRight" size={22} color="#5BA8D3" />
        </div>
      )}
    </>
  );
}
