/**
 * Every image on the Blyss case study, in one place.
 *
 * To add one: drop the file in src/assets/blyss/, import it at the top of this
 * file, and set `src` on the matching entry, e.g.
 *   import peopleScreen from "../../../assets/blyss/people-screen.png";
 *   nowPeople: { src: peopleScreen, alt: "People screen" },
 *
 * Without `src`, a slot renders the mockup's dashed placeholder labeled with
 * its alt text (the mockup's placeholder label). Edit the alt once the real
 * image is in.
 */

import blyssLogo from "../../../assets/blyss-logo.png";
import dating1 from "../../../assets/blyss/dating 1.png";
import dating2 from "../../../assets/blyss/dating 2.png";
import dating3 from "../../../assets/blyss/dating 3.png";
import dating4 from "../../../assets/blyss/dating 4.png";
import datingAvailability from "../../../assets/blyss/e837d7a21daa8f19d4b2cc684ba78707118054e8.png";
import datingWireframe from "../../../assets/blyss/dating wireframe.png";
import datingWireframe2 from "../../../assets/blyss/dating wireframe 2.png";
// Current product (blyss final): .jpg = full screens, .png = component crops
import scrHome from "../../../assets/blyss/blyss final/download.jpg";
import scrSetExpectations from "../../../assets/blyss/blyss final/download-2.jpg";
import scrBestMatch from "../../../assets/blyss/blyss final/download-4.jpg";
import scrPlanPreview from "../../../assets/blyss/blyss final/download-7.jpg";
import scrExplore from "../../../assets/blyss/blyss final/download-8.jpg";
import scrVenue from "../../../assets/blyss/blyss final/download-9.jpg";
import scrExploreList from "../../../assets/blyss/blyss final/download-11.jpg";
import scrFreeGrid from "../../../assets/blyss/blyss final/download-14.jpg";
import scrWhatToDo from "../../../assets/blyss/blyss final/download-26.jpg";
import scrWhosComing from "../../../assets/blyss/blyss final/download-28.jpg";
import cmpCodeRed from "../../../assets/blyss/blyss final/download-12.png";
import cmpRoofers from "../../../assets/blyss/blyss final/download-14.png";
import cmpShare from "../../../assets/blyss/blyss final/download-17.png";
import scrTriviaJoined from "../../../assets/blyss/blyss final/download-30.jpg";
import scrMakeItYours from "../../../assets/blyss/blyss final/download-32.jpg";
import scrRecap from "../../../assets/blyss/blyss final/download-33.jpg";
import scrFlightClub from "../../../assets/blyss/blyss final/download-34.jpg";
import cmpStatus from "../../../assets/blyss/blyss final/download-21.png";
import launchTeam from "../../../assets/blyss/launch/launch-team.jpg";
import launchRose from "../../../assets/blyss/launch/launch-rose.jpg";
import launchCookie from "../../../assets/blyss/launch/launch-cookie.jpg";
import social1 from "../../../assets/blyss/social 1.png";
import socialTeamEvent from "../../../assets/blyss/dbaecdbdd96329e112dc7761dc99fa78cd30e1e6.png";

export interface BlyssImage {
  src?: string;
  alt: string;
  /** The image already includes a phone frame: show it whole, with no slot border, over a soft shadow. */
  framed?: boolean;
  /** A full app screen: drawn inside a CSS iPhone frame. */
  phone?: boolean;
  /** A UI component crop: shown on a rounded white card. */
  card?: boolean;
  /** CSS object-position for photos cropped by their slot, e.g. "50% 30%". */
  position?: string;
}

function defineImages<T extends Record<string, BlyssImage>>(map: T): { [K in keyof T]: BlyssImage } {
  return map;
}

export const blyssImages = defineImages({
  // ---------- Hero ----------
  heroLogo: { src: blyssLogo, alt: "Blyss logo" },
  heroExplore: { src: scrExplore, phone: true, alt: "Explore: Good Afternoon, Maya, with plans nearby and venues near you" },
  heroPlan: { src: scrTriviaJoined, phone: true, alt: "Plan after joining: Trivia night at Shaw’s with who’s going" },
  heroVenue: { src: scrFlightClub, phone: true, alt: "Venue detail: Flight Club D.C. with hours and Plan Event" },

  // ---------- 01 · Overview ----------
  overviewGroupPicker: { src: cmpShare, card: true, alt: "Share sheet: picking friends to send a plan to" },
  overviewVenueCard: { src: cmpRoofers, card: true, alt: "Venue card: Roofers Union, American Restaurant, 1.1 mi away, rated 4.2" },
  overviewPlanScreen: { src: scrHome, phone: true, alt: "Home: your next event, a pending plan invite, and notifications" },

  // ---------- 02 · Evolution ----------
  datingProfile: { src: dating2, framed: true, alt: "Dating onboarding: choosing what matters in a relationship" },
  datingScreen2: { src: dating3, framed: true, alt: "Blyss dating Interactive mode: matches with a short intro about date ideas in the city" },
  datingScreen3: { src: datingAvailability, framed: true, alt: "Dating onboarding: selecting when you are free to talk and date" },
  datingWireframe: { src: datingWireframe, alt: "Early hand-drawn wireframe of the dating match flow" },
  datingWireframe2: { src: datingWireframe2, alt: "Early hand-drawn wireframes of the dating preferences flow" },
  launchParty1: { src: launchTeam, alt: "The Blyss team in black tie at the 2023 launch party step-and-repeat" },
  launchParty2: { src: launchRose, alt: "A rose with a Blyss card from the launch party" },
  launchMaterials: { src: launchCookie, position: "50% 22%", alt: "A Blyss-branded cookie from the launch party" },
  pivotOld1: { src: dating1, framed: true, alt: "Blyss dating profile with personality tags" },
  pivotOld2: { src: dating4, framed: true, alt: "Blyss dating confirmed date: venue, time, map, a countdown, and chat" },
  pivotMid1: { src: social1, framed: true, alt: "Social planning feed: a recap post from a plan at Billy’s Burgers" },
  pivotMid2: { src: socialTeamEvent, framed: true, alt: "Social planning event invite: Team Bonding at Top Golf with invitees and Join or Decline" },
  pivotCurrent1: { src: scrExploreList, phone: true, alt: "Explore: nearby venues with ratings" },
  pivotCurrent2: { src: scrMakeItYours, phone: true, alt: "Make it yours: customizing how a plan invite looks" },

  // ---------- 03 · Product ----------
  pathPeople: { src: scrWhosComing, phone: true, alt: "Who’s coming? Picking friends to start a plan" },
  pathPlace: { src: scrVenue, phone: true, alt: "Venue detail for Flight Club D.C. with a Plan Event button" },
  pathIdea: { src: scrWhatToDo, phone: true, alt: "What do you want to do? Choosing a starting point like Drinks" },
  availabilityOnboarding: { src: scrFreeGrid, phone: true, alt: "When are you usually free? A weekly grid of recurring windows" },
  availabilityMatching: { src: scrBestMatch, phone: true, alt: "Time picker showing how many people are free at each time, with 5:00 PM marked Best match" },
  commitmentSettings: { src: scrSetExpectations, phone: true, alt: "Set expectations: Open, Threshold, or Secure first, with minimum and maximum people" },

  // ---------- 04 · System ----------
  privacyBefore: { src: scrPlanPreview, phone: true, alt: "Plan preview before joining: Sunday brunch club with an I’m in button" },
  privacyAfter: { src: scrTriviaJoined, phone: true, alt: "Plan after joining: Trivia night at Shaw’s with who’s going and You’re going" },
  venueCard1: { src: cmpCodeRed, card: true, alt: "Venue card: Code Red, Bar, 1.0 mi away, rated 4.6" },
  venueCard2: { src: cmpRoofers, card: true, alt: "Venue card: Roofers Union, American Restaurant, 1.1 mi away, rated 4.2" },

  // ---------- 06 · Now ----------
  nowPeople: { src: scrRecap, phone: true, alt: "Add a recap: a photo and caption from Arcade night at the Wharf" },
  nowPlaces: { src: scrFlightClub, phone: true, alt: "Venue detail: Flight Club D.C. with hours and Plan Event" },
  nowExploreHero: { src: scrExplore, phone: true, alt: "Explore: Good Afternoon, Maya, with plans nearby and venues near you" },
  nowVenueCard: { src: cmpCodeRed, card: true, alt: "Venue card: Code Red, Bar, 1.0 mi away, rated 4.6" },
  nowStatusCard: { src: cmpStatus, card: true, alt: "Social Butterfly status: progress toward Community Favorite" },

  // ---------- 07 · Reflection ----------
  signoffLogo: { src: blyssLogo, alt: "Blyss logo" },
});
