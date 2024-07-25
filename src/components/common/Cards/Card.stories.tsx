import type { Meta, StoryObj } from '@storybook/react'

import Card from '@/components/common/Cards/Card'

const meta = {
  title: 'Common/Cards/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}