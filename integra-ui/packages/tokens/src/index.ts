export const integraTokens = {
  surface: {
    canvas: "var(--surface-canvas)",
    raised: "var(--surface-raised)",
    subtle: "var(--surface-subtle)",
    inverse: "var(--surface-inverse)",
  },
  content: {
    primary: "var(--content-primary)",
    secondary: "var(--content-secondary)",
    tertiary: "var(--content-tertiary)",
    inverse: "var(--content-inverse)",
  },
  line: {
    default: "var(--line-default)",
    strong: "var(--line-strong)",
    focus: "var(--line-focus)",
  },
  feedback: {
    negative: "var(--feedback-negative)",
    positive: "var(--feedback-positive)",
  },
} as const

export type IntegraTokens = typeof integraTokens
