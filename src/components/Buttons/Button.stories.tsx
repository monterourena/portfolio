import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/Buttons/Button'

const meta = {
  title: 'Buttons/Button',
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

export const Default: Story = {
  args: {
    label: 'Solid Button',
  }
}