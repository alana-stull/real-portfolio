/**
 * Screenshots for the project compositions on Home and Work.
 *
 * To add one: drop the file in src/assets/projects/, import it here, and set
 * `src` on the matching entry, e.g.
 *   import blyssExplore from "../../assets/projects/blyss-explore.png";
 *   blyssExploreHero: { src: blyssExplore, alt: "Blyss explore screen" },
 *
 * Entries without `src` render the dashed placeholder with `label`.
 */

import blyssExplore from "../../assets/blyss/blyss final/download-8.jpg";
import blyssTrivia from "../../assets/blyss/blyss final/download-30.jpg";
import blyssFlightClub from "../../assets/blyss/blyss final/download-34.jpg";
import blyssInviteCard from "../../assets/blyss/blyss final/download-22.png";
import blyssStatusCard from "../../assets/blyss/blyss final/download-21.png";
import blyssPlanCard from "../../assets/blyss/blyss final/download-23.png";
import blyssVenueCard from "../../assets/blyss/blyss final/download-12.png";
import rhythmTodayDesktop from "../../assets/rhythm/Today-Desktop@1x (2).png";
import rhythmTodayMobile from "../../assets/rhythm/1-today.png";
import crwnExplore from "../../assets/crwn/explore-after-1.png";
import crwnStylistProfile from "../../assets/crwn/stylist-profile-1.png";
import crwnBooking from "../../assets/crwn/inbox-2-booking-request.png";

export interface ProjectImage {
  src?: string;
  /** The screenshot already includes a phone frame: show it bare (no slot border) with a drop shadow. */
  framed?: boolean;
  /** Placeholder text shown until `src` is set. */
  label: string;
  /** Alt text for the real image. Defaults to the label without brackets. */
  alt?: string;
}

function defineImages<T extends Record<string, ProjectImage>>(map: T): { [K in keyof T]: ProjectImage } {
  return map;
}

export const projectImages = defineImages({
  // Blyss
  blyssPlan: { label: "[Plan screen]", src: blyssTrivia, alt: "Blyss plan: Trivia night at Shaw’s" },
  blyssExploreHero: { label: "[Explore screen · hero]", src: blyssExplore, alt: "Blyss explore: plans nearby and venues near you" },
  blyssPlace: { label: "[Venue screen]", src: blyssFlightClub, alt: "Blyss venue: Flight Club D.C." },
  blyssInvite: { label: "[Invite card]", src: blyssInviteCard, alt: "Invite card: Darts and drinks night" },
  blyssStatus: { label: "[Status tier]", src: blyssStatusCard, alt: "Social Butterfly status tier" },
  blyssVenue: { label: "[Venue card]", src: blyssVenueCard, alt: "Venue card: Code Red" },
  blyssPlanCard: { label: "[Plan card]", src: blyssPlanCard, alt: "Plan card: Sunday brunch club" },

  // Rhythm
  rhythmDashboard: { label: "[Rhythm dashboard · web]", src: rhythmTodayDesktop, alt: "Rhythm web Today" },
  rhythmMobile: { label: "[Rhythm mobile]", src: rhythmTodayMobile, alt: "Rhythm iOS Today" },

  // CRWN
  crwnStylistProfile: { label: "[Stylist profile]", src: crwnStylistProfile, alt: "CRWN stylist profile", framed: true },
  crwnBooking: { label: "[Booking]", src: crwnBooking, alt: "CRWN booking request", framed: true },
  crwnExploreHero: { label: "[Explore feed · hero]", src: crwnExplore, alt: "CRWN explore feed", framed: true },
});
