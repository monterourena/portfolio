import type { Meta, StoryObj } from '@storybook/react'
import Icon from '@/components/common/Icons/Icon'

const meta = {
  title: 'Common/Icons/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    name: { control: { type: 'select' } },
    color: { control: { type: 'color' } },
    onClick: { action: 'onClick Event' }
  }
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { name: 'ArrowUpRight', size: 48, color: '#ffffff' }
}
