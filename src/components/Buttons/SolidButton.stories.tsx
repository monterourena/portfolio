import type { Meta, StoryObj } from '@storybook/react'

import SolidButton from '@/components/Buttons/SolidButton'

const meta = {
  title: 'Buttons/SolidButton',
  component: SolidButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    onClick: { action: 'onClick Event' }
  },

} satisfies Meta<typeof SolidButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Solid Button',
  }
}