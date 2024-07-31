import type { Meta, StoryObj } from '@storybook/react'
import Chip from '@/components/common/Chips/Chip'

const meta = {
  title: 'Common/Chips/Chip',
  component: Chip,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: { type: 'select' } }
  }
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'medium',
    label: 'Chip'
  }
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Chip'
  }
}
