import type { ReactNode } from "react";
import { Body, Eyebrow, Heading, Italic, Label, Reveal, Small } from "../primitives";
import {
  ButtonPair,
  CommentsSheet,
  CommunityCard,
  EmptyStateTabs,
  FilterChips,
  FrostedOverlay,
  GradientTopic,
  IconSet,
  LikeIcon,
  MasonryDemo,
  NestedReplies,
  PaletteGroup,
  SearchBar,
  TopicTag,
  type Swatch,
} from "../ui";
import { AnalyticsMock, BookingWorkflowMock, LoadingStatesMock, OnboardingMock } from "../mocks";

const CORE: Swatch[] = [
  { name: "Black", hex: "#1A1A1A" },
  { name: "Maroon", hex: "#562321" },
  { name: "Brown", hex: "#452715" },
  { name: "Earth brown", hex: "#4D4134" },
];
const EARTH: Swatch[] = [
  { name: "Green", hex: "#435141" },
  { name: "Bark", hex: "#7B6A51" },
  { name: "Taupe", hex: "#A5978A" },
  { name: "Burnt ochre", hex: "#A86137" },
  { name: "Honey", hex: "#EFBC56" },
];
const NEUTRALS: Swatch[] = [
  { name: "Off white", hex: "#FCFCFC", edge: true },
  { name: "Champagne", hex: "#BFB196" },
  { name: "Light gray", hex: "#D1D1D1", edge: true },
  { name: "Charcoal", hex: "#5E5E5E" },
];

const PRODUCT_CALLS = [
  { title: "Make specialties discoverable.", body: "Created a provider taxonomy that helps clients find professionals by the work they actually do." },
  { title: "Prioritize trust over vanity metrics.", body: "Elevated followers and reviews, removing post count from the profile header." },
  { title: "Keep reviews accessible, not dominant.", body: "Moved reviews into a detail view rather than giving them a permanent tab." },
  { title: "Only show what has meaning.", body: "Hid empty tabs and sections instead of presenting unfinished experiences." },
  { title: "Give booking its own flow.", body: "Made booking a dedicated experience rather than routing it through Services." },
];

function FeatureCard({
  stage,
  title,
  body,
  tall,
  className = "",
}: {
  stage: ReactNode;
  title: string;
  body: string;
  tall?: boolean;
  className?: string;
}) {
  return (
    <div className={`crwn-card ${className}`}>
      <div className={`crwn-card__stage ${tall ? "crwn-card__stage--tall" : ""}`}>{stage}</div>
      <h4 className="crwn-card__title" style={{ margin: "16px 0 0" }}>
        {title}
      </h4>
      <Small style={{ marginTop: 4 }}>{body}</Small>
    </div>
  );
}

function ModeCard({ swatches, label, tone, body }: { swatches: string[]; label: string; tone: "maroon" | "ochre"; body: string }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "center",
        background: "var(--crwn-white)",
        border: "1px solid var(--crwn-card-border)",
        borderRadius: 16,
        padding: "16px 20px",
      }}
    >
      <div style={{ display: "flex", flexShrink: 0 }} aria-hidden="true">
        {swatches.map((c, i) => (
          <span key={c} style={{ width: 44, height: 44, borderRadius: 12, background: c, marginLeft: i ? -8 : 0 }} />
        ))}
      </div>
      <div>
        <Label tone={tone}>{label}</Label>
        <Small style={{ marginTop: 4 }}>{body}</Small>
      </div>
    </div>
  );
}

export function System() {
  return (
    <section id="system" className="crwn-section" tabIndex={-1}>
      <Reveal>
        <Eyebrow>Branding + design system</Eyebrow>
        <Heading size="section" style={{ marginTop: 18 }}>
          A new identity and <Italic>a unified design system.</Italic>
        </Heading>
        <Body style={{ marginTop: 24 }}>
          One identity, one palette, one set of rules, and one component library that the whole app is built from, client and
          stylist side alike.
        </Body>
      </Reveal>

      {/* Brand: wordmark + palette */}
      <Reveal className="crwn-brand-row" style={{ marginTop: 56 }}>
        <div className="crwn-brand-mark">
          <Label style={{ color: "var(--crwn-band-label)" }}>Branding · wordmark</Label>
          <div className="crwn-h">
            crwn<span style={{ color: "var(--crwn-honey)" }}>.</span>
          </div>
        </div>
        <div className="crwn-brand-palette">
          <Label tone="maroon">The palette</Label>
          <div className="crwn-palette crwn-palette--stack" style={{ marginTop: 16 }}>
            <PaletteGroup title="Core" swatches={CORE} />
            <PaletteGroup title="Earth" swatches={EARTH} />
            <PaletteGroup title="Neutrals" swatches={NEUTRALS} />
          </div>
        </div>
      </Reveal>

      {/* Client + stylist mode colors */}
      <Reveal style={{ marginTop: 28 }}>
        <div className="crwn-grid-2 crwn-stack-md" style={{ gap: 16 }}>
          <ModeCard
            swatches={["#562321"]}
            label="Client mode"
            tone="maroon"
            body="Maroon leads: active states, chips, and primary moments."
          />
          <ModeCard
            swatches={["#A86137", "#452715"]}
            label="Stylist mode"
            tone="ochre"
            body="Burnt ochre and warm browns for the business side."
          />
        </div>

        <div style={{ marginTop: 20, display: "flex", gap: "16px 40px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span aria-hidden="true" style={{ width: 120, height: 36, borderRadius: 12, background: "var(--crwn-gradient)" }} />
            <span className="crwn-small">Primary action gradient</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <LikeIcon size={30} />
            <span className="crwn-small">Like color</span>
          </div>
        </div>
      </Reveal>

      {/* Foundations */}
      <div style={{ marginTop: 100 }}>
        <Reveal>
          <Label tone="maroon">Foundations</Label>
          <Heading as="h3" size="lg" style={{ marginTop: 12 }}>
            The rules <Italic>underneath every screen.</Italic>
          </Heading>
        </Reveal>
        <Reveal className="crwn-grid-3 crwn-foundations" style={{ marginTop: 32 }}>
          <FeatureCard stage={<IconSet />} title="Icons" body="Every nav and action icon standardized to Lucide." />
          <FeatureCard stage={<ButtonPair />} title="Buttons" body="Gradient for the primary action, outline for the rest." />
          <FeatureCard
            stage={<EmptyStateTabs />}
            title="Empty states"
            body="Empty tabs and sections hide themselves instead of showing nothing."
          />
          <FeatureCard
            className="crwn-span-2"
            stage={<LoadingStatesMock />}
            title="Loading states"
            body="Skeletons that match the masonry layout they load into."
          />
          <FeatureCard
            stage={<OnboardingMock />}
            title="Onboarding components"
            body="Selection rows, chips, and inputs reused across onboarding."
          />
        </Reveal>
      </div>

      {/* Component library */}
      <div style={{ marginTop: 100 }}>
        <Reveal>
          <Label tone="maroon">The component library</Label>
          <Heading as="h3" size="lg" style={{ marginTop: 12 }}>
            Components made <Italic>across the entire app.</Italic>
          </Heading>
        </Reveal>
        <Reveal className="crwn-grid-4 crwn-library" style={{ marginTop: 32 }}>
          <FeatureCard
            tall
            stage={<MasonryDemo />}
            title="True masonry Explore"
            body="A custom shortest column first layout, so the feed packs instead of gapping."
          />
          <FeatureCard
            tall
            stage={<FrostedOverlay />}
            title="Frosted stylist overlays"
            body="Booking info and actions layered over the portfolio, without hiding the work."
          />
          <FeatureCard
            tall
            stage={<GradientTopic />}
            title="Gradient topic cards + primary actions"
            body="One reusable gradient pattern for topics and the create action."
          />
          <FeatureCard
            tall
            stage={<CommentsSheet />}
            title="Comments + nested replies"
            body="Comments slide up in a bottom sheet; replies keep their hierarchy."
          />
        </Reveal>

        <Reveal className="crwn-grid-2 crwn-stack-md" style={{ marginTop: 16, gap: 16 }}>
          <figure style={{ margin: 0 }}>
            <AnalyticsMock />
            <Label as="figcaption" style={{ marginTop: 10 }}>
              Analytics · the provider business view
            </Label>
          </figure>
          <figure style={{ margin: 0 }}>
            <BookingWorkflowMock />
            <Label as="figcaption" style={{ marginTop: 10 }}>
              Inbox + booking requests · the marketplace workflow
            </Label>
          </figure>
        </Reveal>

        {/* Featured: community system */}
        <Reveal className="crwn-community" style={{ marginTop: 16 }}>
          <div className="crwn-community__head">
            <Label tone="maroon">Featured · The community system</Label>
            <span className="crwn-small">Search, filter, tag, discuss</span>
          </div>
          <div className="crwn-community__grid">
            <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 0 }}>
              <Label>Search + filter chips</Label>
              <SearchBar />
              <FilterChips chips={["All", "Low Porosity", "High Porosity", "Protective"]} active="All" />
              <Label style={{ marginTop: 10 }}>Topic tags</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <TopicTag>Low Porosity</TopicTag>
                <TopicTag>Protective Styles</TopicTag>
                <TopicTag>Hair Growth</TopicTag>
              </div>
              <Label style={{ marginTop: 10 }}>Tappable hashtags</Label>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--crwn-tag-text)" }}>#protective</span>
                <span style={{ color: "#8A817B" }} aria-hidden="true">
                  →
                </span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>filtered feed</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
              <Label>Community card</Label>
              <CommunityCard topic="Low Porosity" question="Best leave-in conditioners for low porosity hair?" />
              <CommunityCard topic="Protective Styles" question="How long do you keep in protective styles?" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
              <Label>Discussion + nested replies</Label>
              <NestedReplies />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Product calls */}
      <Reveal className="crwn-split" style={{ marginTop: 100 }}>
        <div>
          <Eyebrow>Product calls</Eyebrow>
          <Heading as="h3" size="row" style={{ marginTop: 16 }}>
            The decisions <Italic>under the pixels.</Italic>
          </Heading>
        </div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {PRODUCT_CALLS.map((c, i) => (
            <li key={c.title} className="crwn-call">
              <span className="crwn-label crwn-label--maroon" style={{ paddingTop: 6 }} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="crwn-h crwn-h-md">{c.title}</h4>
                <Small size="md" style={{ marginTop: 6 }}>
                  {c.body}
                </Small>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
