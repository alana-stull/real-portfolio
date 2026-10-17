import type { CSSProperties } from "react";
import { AvatarStack, Icon } from "./primitives";

/** "ONE PLAN" card that the three paths in Decision 01 converge on. */
export function OnePlanCard({ style }: { style?: CSSProperties }) {
  return (
    <div
      style={{
        width: 240,
        background: "#375169",
        borderRadius: 18,
        padding: "16px 18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 10px 30px rgba(55,81,105,0.25)",
        ...style,
      }}
    >
      <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Icon name="calendar" size={18} color="#B7D3E0" />
        <span style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.14em", color: "#FFFFFF" }}>ONE PLAN</span>
      </span>
      <AvatarStack colors={["#B7D3E0", "#5BA8D3", "#333333"]} size={22} overlap={7} ring="#375169" />
    </div>
  );
}

/** Signal pill in the personalization diagram. */
export function SignalPill({ icon, label }: { icon: "heart" | "sparkle" | "card" | "pin" | "star"; label: string }) {
  return (
    <div
      style={{
        height: 48,
        borderRadius: 999,
        border: "1px solid #B7D3E0",
        background: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "0 18px",
      }}
    >
      <Icon name={icon} size={16} color="#5BA8D3" />
      <span style={{ fontSize: 14, fontWeight: 700 }}>{label}</span>
    </div>
  );
}

export function SignalPlus() {
  return (
    <div aria-hidden="true" style={{ height: 36, display: "flex", alignItems: "center", paddingLeft: 22, fontSize: 16, fontWeight: 700, color: "#5BA8D3" }}>
      +
    </div>
  );
}
