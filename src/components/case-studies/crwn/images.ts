/**
 * Every image on the CRWN case study, in one place.
 *
 * To add a real image:
 *   1. Drop the file in src/assets/crwn/
 *   2. Import it at the top of this file, e.g.
 *        import exploreBefore1 from "../../../assets/crwn/explore-before-1.png";
 *   3. Set `src` on the matching entry below: { src: exploreBefore1, alt: "Explore before" }
 *
 * Any entry without `src` renders as the mockup's dashed placeholder, labeled with its alt text.
 * Alt text is the placeholder label from the approved mockup; edit it once the real image is in.
 * The comment on each entry is the file name the mockup expected (`data-image`).
 */

import exploreAfter1 from "../../../assets/crwn/explore-after-1.png";
import exploreAfter2 from "../../../assets/crwn/explore-after-2.png";
import postDetailAfter1 from "../../../assets/crwn/post-detail-after-1.png";
import postDetailAfter2 from "../../../assets/crwn/post-detail-after-2.png";
import communityAfter1 from "../../../assets/crwn/community-after-1.png";
import profileClient from "../../../assets/crwn/profile-client.png";
import stylistProfile1 from "../../../assets/crwn/stylist-profile-1.png";
import stylistProfile2 from "../../../assets/crwn/stylist-profile-2-services.png";
import stylistProfile3 from "../../../assets/crwn/stylist-profile-3-reviews.png";
import schedule1 from "../../../assets/crwn/schedule-1-calendar.png";
import schedule2 from "../../../assets/crwn/schedule-2-appointment.png";
import inbox1 from "../../../assets/crwn/inbox-1.png";
import inbox2 from "../../../assets/crwn/inbox-2-booking-request.png";
import exploreBefore from "../../../assets/crwn/explore-before.png";
import postDetailBefore from "../../../assets/crwn/post-detail-before.png";
import communityBefore from "../../../assets/crwn/community-before.png";
import communityAfter2 from "../../../assets/crwn/community-after-2.png";
import profileBefore from "../../../assets/crwn/profile-before.png";

export interface CrwnImage {
  src?: string;
  alt: string;
  /** The image already includes a phone frame: show it bare (no slot border/shadow) and uncropped. */
  framed?: boolean;
}

// Keeps the literal keys for autocomplete while typing every entry as a full CrwnImage.
function defineImages<T extends Record<string, CrwnImage>>(map: T): { [K in keyof T]: CrwnImage } {
  return map;
}

export const crwnImages = defineImages({
  // ---------- Hero ----------
  heroClientOnboarding: { src: exploreAfter1, alt: "Client explore feed", framed: true }, // client-onboarding-82ff5b.jpg
  heroStylistCalendar: { src: schedule2, alt: "Stylist appointment details", framed: true }, // stylist-calendar-b4f63f.jpg

  // ---------- Branding + system ----------

  // ---------- Before + after ----------
  exploreBefore1: { src: exploreBefore, alt: "Explore before: feed with captions and bright filters", framed: true },
  exploreAfter1: { src: exploreAfter1, alt: "Explore after: masonry feed with one create action", framed: true }, // explore-after-5f2096.jpg
  exploreAfter2: { src: exploreAfter2, alt: "Explore after: search and quieter hair-type filters", framed: true }, // explore-after-224863.jpg
  postDetailBefore: { src: postDetailBefore, alt: "Post detail before", framed: true },
  postDetailAfter1: { src: postDetailAfter1, alt: "Post detail after: the post leads", framed: true }, // post-detail-after-6723f3.jpg
  postDetailAfter2: { src: postDetailAfter2, alt: "Post detail after: comments in a bottom sheet", framed: true }, // post-detail-after-099029.jpg
  communityBefore: { src: communityBefore, alt: "Community before: bright tabs and dense threads", framed: true },
  communityAfter1: { src: communityAfter1, alt: "Community after: category filters and tagged threads", framed: true }, // community-after-3f3d1e.jpg
  communityAfter2: { src: communityAfter2, alt: "Community after: discussion with nested replies", framed: true },
  profileBefore: { src: profileBefore, alt: "Profile before", framed: true },
  profileAfter1: { src: stylistProfile3, alt: "Profile after: followers and reviews up top", framed: true }, // profile-after-9c5cbe.jpg
  profileAfter2: { src: profileClient, alt: "Profile after: hair profile incomplete prompt", framed: true }, // profile-after-d6ccf2.jpg

  // ---------- The stylist side ----------
  stylistExplore1: { src: exploreAfter2, alt: "Explore", framed: true }, // mockup reused explore-after-224863.jpg
  stylistSchedule1: { src: schedule1, alt: "Schedule: today's appointments and calendar", framed: true }, // schedule-636fdd.jpg
  stylistSchedule2: { src: schedule2, alt: "Schedule: appointment details with deposit status", framed: true },
  stylistInbox1: { src: inbox1, alt: "Inbox: booking requests above messages", framed: true },
  stylistInbox2: { src: inbox2, alt: "Inbox: booking request details", framed: true },
  stylistProfile1: { src: stylistProfile1, alt: "Stylist profile: posts", framed: true },
  stylistProfile2: { src: stylistProfile2, alt: "Stylist profile: services and requirements", framed: true },

  // ---------- Launch (left to right) ----------
  launch1: { src: exploreAfter1, alt: "Explore", framed: true },
  launch2: { src: postDetailAfter1, alt: "Post detail", framed: true },
  launch3: { src: communityAfter1, alt: "Community", framed: true },
  launch4: { src: inbox2, alt: "Stylist booking request", framed: true },
  launch5: { src: stylistProfile1, alt: "Stylist profile", framed: true },
});

export type CrwnImageKey = keyof typeof crwnImages;
