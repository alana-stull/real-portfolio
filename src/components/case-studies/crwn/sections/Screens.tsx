import { crwnImages, type CrwnImage } from "../images";
import { Body, Eyebrow, Heading, Italic, Reveal, type PinSpec } from "../primitives";
import { BeforeAfter, ScreenRow, calloutsFrom, type ScreenSpec } from "../ScreenRow";

// Shaped like the framed phone screenshots (~1 : 1.92) so they fill the slot.
// Every "after" screen is the same size, a little bigger than the "before" screens.
const BEFORE_W = 250;
const AFTER_W = 270;
const shape = (image: CrwnImage, width: number, pins?: PinSpec[]): ScreenSpec => ({ image, width, height: Math.round(width * 1.92), pins });
const before = (image: CrwnImage) => shape(image, BEFORE_W);
const after = (image: CrwnImage, pins?: PinSpec[]) => shape(image, AFTER_W, pins);

const exploreAfter: ScreenSpec[] = [
  after(crwnImages.exploreAfter1, [{ n: 1, label: "True masonry", left: "8px", top: "42%" }]),
  after(crwnImages.exploreAfter2, [
    { n: 2, label: "Quieter filters", left: "8px", top: "10%" },
    // beside the + create button, bottom right of the screen
    { n: 3, label: "One create action", left: "calc(79% - 34px)", top: "calc(78.6% - 30px)" },
  ]),
];
const postDetailAfter: ScreenSpec[] = [
  after(crwnImages.postDetailAfter1, [
    { n: 1, label: "Content first", left: "8px", top: "30%" },
    // beside the product tag on the photo (middle right)
    { n: 2, label: "View Products", left: "calc(79% - 34px)", top: "calc(60.4% - 10px)" },
  ]),
  after(crwnImages.postDetailAfter2, [{ n: 3, label: "Comments sheet", left: "8px", top: "44%" }]),
];
const communityAfter: ScreenSpec[] = [
  after(crwnImages.communityAfter1, [{ n: 1, label: "Category filtering", left: "8px", top: "24%" }]),
  // the nested-replies screenshot has more space around its phone, so it gets a bit more width
  shape(crwnImages.communityAfter2, 300, [{ n: 2, label: "Nested replies", left: "8px", top: "62%" }]),
];
const profileAfter: ScreenSpec[] = [
  after(crwnImages.profileAfter1, [
    { n: 1, label: "Followers + Reviews", left: "8px", top: "28%" },
    { n: 2, label: "Simpler navigation", left: "8px", top: "42%" },
  ]),
  after(crwnImages.profileAfter2),
];

export function Screens() {
  return (
    <section id="screens" className="crwn-section" tabIndex={-1}>
      <Reveal>
        <Eyebrow>Before + after</Eyebrow>
        <Heading size="section" style={{ marginTop: 18 }}>
          Simpler and cleaner, <Italic>screen by screen.</Italic>
        </Heading>
        <Body style={{ marginTop: 24 }}>
          I went through every part of the app, named what wasn’t working, and rebuilt it against the new system.
        </Body>
      </Reveal>

      <div style={{ marginTop: 72 }}>
        <ScreenRow
          wide
          callouts={calloutsFrom(exploreAfter)}
          label="01 · Explore"
          title="From a feed to a true masonry grid."
          body="Captions and bright filters were competing with the hairstyles. A true masonry grid gives the work more room."
        >
          <BeforeAfter
            before={[before(crwnImages.exploreBefore1)]}
            after={exploreAfter}
          />
        </ScreenRow>

        <ScreenRow
          wide
          callouts={calloutsFrom(postDetailAfter)}
          label="02 · Post detail"
          title="Letting the work take up the room."
          body="Comments and products crowded each image. Now the post leads, with comments in a bottom sheet."
        >
          <BeforeAfter
            before={[before(crwnImages.postDetailBefore)]}
            after={postDetailAfter}
          />
        </ScreenRow>

        <ScreenRow
          wide
          callouts={calloutsFrom(communityAfter)}
          label="03 · Community"
          title="Organizing conversation by category."
          body="Bright tabs and dense threads made conversations hard to follow. Categories, tags, and nested replies add structure."
        >
          <BeforeAfter
            before={[before(crwnImages.communityBefore)]}
            after={communityAfter}
          />
        </ScreenRow>

        <ScreenRow
          wide
          callouts={calloutsFrom(profileAfter)}
          label="04 · Profile"
          title="Only the information that matters."
          body="Every metric showed, whether it helped or not. Profiles now lead with followers and reviews and hide what’s empty."
        >
          <BeforeAfter
            before={[before(crwnImages.profileBefore)]}
            after={profileAfter}
          />
        </ScreenRow>
      </div>
    </section>
  );
}
