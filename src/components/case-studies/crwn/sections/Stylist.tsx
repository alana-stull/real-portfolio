import { Calendar, Compass, MessageSquare, UserRound, type LucideIcon } from "lucide-react";
import { crwnImages, type CrwnImage } from "../images";
import { Body, Eyebrow, Heading, Italic, Reveal } from "../primitives";
import { BookingRequestMock } from "../mocks";
import { ScreenRow, StaggeredScreens, type ScreenSpec } from "../ScreenRow";

// Mockup: screens with a data-image use the 22px "screen" frame; the bare
// "screen 02" style placeholders use the 30px "phone" frame.
// 240 wide, shaped like the framed phone screenshots (~1 : 1.92).
const shot = (image: CrwnImage, variant: ScreenSpec["variant"]): ScreenSpec => ({ image, width: 240, height: 461, variant });

function TabIcon({ Icon }: { Icon: LucideIcon }) {
  return <Icon size={18} strokeWidth={1.8} color="var(--crwn-ochre)" aria-hidden="true" />;
}

export function Stylist() {
  return (
    <section id="stylist" className="crwn-section crwn-section--stylist" tabIndex={-1}>
      <Reveal>
        <Eyebrow>The stylist side</Eyebrow>
        <Heading size="section" style={{ marginTop: 18 }}>
          Turning half-defined requirements into <Italic>a product stylists could work from.</Italic>
        </Heading>
        <Body style={{ marginTop: 24 }}>
          The stylist experience was still being defined when I joined. I mapped the workflows, established the information
          architecture, and translated the requirements into screens and components that supported how providers actually work.
        </Body>
        <Heading as="h3" size="sub" style={{ marginTop: 80 }}>
          Five tabs. <Italic>Five jobs.</Italic>
        </Heading>
      </Reveal>

      <div style={{ marginTop: 48 }}>
        <ScreenRow
          compact
          headingAs="h4"
          icon={<TabIcon Icon={Compass} />}
          label="01 · Explore"
          title="See the community as a peer."
          body="The same masonry feed clients use. Other stylists’ posts open as a peer view, with no book button."
        >
          <StaggeredScreens gap={14} screens={[shot(crwnImages.stylistExplore1, "screen")]} />
        </ScreenRow>

        <ScreenRow
          compact
          headingAs="h4"
          icon={<TabIcon Icon={Calendar} />}
          label="02 · Schedule"
          title="Know what’s happening today."
          body="Today’s count up top, appointment cards with deposit status, and the calendar one tap away."
        >
          <StaggeredScreens
            gap={14}
            screens={[shot(crwnImages.stylistSchedule1, "screen"), shot(crwnImages.stylistSchedule2, "phone")]}
          />
        </ScreenRow>

        <ScreenRow
          compact
          headingAs="h4"
          icon={<TabIcon Icon={MessageSquare} />}
          label="03 · Inbox"
          title="Turn requests into appointments."
          body="Requests sit above messages. Accepting one moves it straight into Schedule."
        >
          <StaggeredScreens gap={14} screens={[shot(crwnImages.stylistInbox1, "phone"), shot(crwnImages.stylistInbox2, "phone")]} />
          <div style={{ marginTop: 24 }}>
            <BookingRequestMock />
          </div>
        </ScreenRow>

        <ScreenRow
          compact
          headingAs="h4"
          icon={<TabIcon Icon={UserRound} />}
          label="04 · Profile"
          title="Run the storefront."
          body="Specialties, services, and pricing in one place, plus the switch back to client mode."
        >
          <StaggeredScreens
            gap={14}
            screens={[shot(crwnImages.stylistProfile1, "phone"), shot(crwnImages.stylistProfile2, "phone")]}
          />
        </ScreenRow>
      </div>
    </section>
  );
}
