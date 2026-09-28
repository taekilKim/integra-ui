import type { Preview } from "@storybook/nextjs"
import "../app/globals.css"

const preview: Preview = {
  parameters: {
    a11y: { test: "todo" },
    controls: { expanded: true },
    backgrounds: { disable: true },
  },
}

export default preview
