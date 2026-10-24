/**
 * Every image on the Design Intelligence Lab case study, in one place.
 *
 * To fill a missing slot: drop the screenshot in src/assets/dil/, import it
 * here, and set `src` on the matching entry. Without `src`, the slot renders
 * the dashed placeholder with `label` and `hint`.
 */

import fixes from "../../../assets/dil/fixes.jpg";
import reportReady from "../../../assets/dil/report-ready.jpg";
import scoreCard from "../../../assets/dil/score-card.jpg";
import wordmark from "../../../assets/dil/dil-wordmark.png";
import mark from "../../../assets/dil/dil-mark.png";
import connect from "../../../assets/dil/connect.jpg";
import healthReport from "../../../assets/dil/health-report.jpg";
import foundation from "../../../assets/dil/foundation.jpg";
// Blyss assets, imported from their existing paths (not copied)
import blyssVenueCard from "../../../assets/blyss/blyss final/download-12.png";
import blyssShare from "../../../assets/blyss/blyss final/download-17.png";
import blyssExplore from "../../../assets/blyss/blyss final/download-8.jpg";

export interface DilImage {
  src?: string;
  alt: string;
  /** Placeholder label shown until `src` is set */
  label?: string;
  /** Placeholder note shown under the label */
  hint?: string;
}

function defineImages<T extends Record<string, DilImage>>(map: T): { [K in keyof T]: DilImage } {
  return map;
}

export const dilImages = defineImages({
  wordmark: { src: wordmark, alt: "Design Intelligence Lab" },
  mark: { src: mark, alt: "" },

  fixes: {
    src: fixes,
    alt: "Design Intelligence Lab Fixes view: nine open findings beside a detail panel showing three near identical blues, a before and after token suggestion, and code evidence",
  },
  fixesAct: {
    src: fixes,
    alt: "Fixes view with status filters Open, Accepted, Intentional, Ignored; a finding list; and a detail panel with before and after values and code evidence",
  },
  scoreCardHero: {
    src: scoreCard,
    alt: "First report card: 85 design health. Your app uses 3 colors. The code implies 1. 9 fixes to review.",
  },
  scoreCard: { src: scoreCard, alt: "Score card: 85 design health. Your app uses 3 colors. The code implies 1." },
  reportReady: {
    src: reportReady,
    alt: "Scan complete: Your report is ready, with counts of 31 colors, 6 typography pairs, 10 spacing values, and 5 corner radii",
  },

  blyssVenueCard: { src: blyssVenueCard, alt: "Blyss venue card component: Code Red, bar, 4.6 rating" },
  blyssShare: { src: blyssShare, alt: "Blyss share sheet component with friend avatars and a Send button" },
  blyssExplore: { src: blyssExplore, alt: "Blyss explore screen: Good Afternoon, Maya, with plans and venues nearby" },

  // ---------- Experience: Connect, Understand, Act ----------
  githubConnect: {
    src: connect,
    alt: "Get started: continue with GitHub, or run a free audit on a public repository URL. Read-only by default.",
  },
  healthReport: {
    src: healthReport,
    alt: "Design Health Report: a score of 83 out of 100, five dimensions with accessibility and components not measured yet, and prioritized fixes with confidence",
  },
  foundation: {
    src: foundation,
    alt: "Recommended Foundation: the color values the code already implies, merged into recommended tokens, with typography and spacing below",
  },
});
