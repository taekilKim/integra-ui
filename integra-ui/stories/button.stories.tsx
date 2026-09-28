import type { Meta, StoryObj } from "@storybook/react"
import { ArrowRight, Plus } from "@phosphor-icons/react"
import { Button } from "../components/ui/button"

const meta = {
  title: "Core/Button",
  component: Button,
  parameters: { layout: "centered" },
  args: { children: "예약하기" },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Loading: Story = { args: { loading: true, loadingLabel: "예약 처리 중" } }
export const IconOnly: Story = { args: { shape: "square", variant: "secondary", children: <Plus aria-hidden="true" />, "aria-label": "항목 추가" } }
export const WithIcon: Story = { args: { children: <>계속하기 <ArrowRight aria-hidden="true" /></> } }
