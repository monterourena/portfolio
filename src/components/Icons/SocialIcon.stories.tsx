import type { Meta, StoryObj } from '@storybook/react'
import SocialIcon from '@/components/Icons/SocialIcon'


const meta = {
  title: 'Icons/SocialIcon',
  component: SocialIcon,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof SocialIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {type: 'github', color: 'white-primary'}
}