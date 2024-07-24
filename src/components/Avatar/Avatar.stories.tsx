import type { Meta, StoryObj } from '@storybook/react'
import Avatar from '@/components/Avatar/Avatar'

const meta = {
  title: 'Avatar/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      values: [{ name: 'Light', value: '#F9F9F9' }]
    }
  },
  argTypes: {}
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Default (Without fallback)',
  args: {
    src: 'https://www.gravatar.com/avatar/bfcb1d6a22d709849s9771d3bcec5a8c4?d=identicon&f=y&',
    size: 96
  }
}
