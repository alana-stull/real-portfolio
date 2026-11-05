import { Body, Eyebrow, Heading, Italic } from "../../rhythm/primitives";

export function Problem() {
  return (
    <section id="problem" className="rhythm__section" tabIndex={-1}>
      <Eyebrow>01 · The problem</Eyebrow>
      <Heading size="lg" className="rh-h-section rh-nowrap-wide" style={{ marginTop: 18 }}>
        What if our tools understood our <Italic>capacity,</Italic> not just our commitments?
      </Heading>
      <Body large style={{ marginTop: 22 }}>
        Wearables track how we've recovered. Calendars track what's ahead. Task managers track
        what needs to get done. But none of them help us understand whether we have the capacity
        for the day we've planned.
      </Body>

    </section>
  );
}
