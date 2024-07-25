import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/common/Buttons/Button'

const meta = {
  title: 'Common/Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: { action: 'onClick Event' }
  },

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    variant:'solid',
    label: 'Solid Button',
  }
}

export const Faded: Story = {
  args: {
    variant:'faded',
    label: 'Faded Button',
  }
}