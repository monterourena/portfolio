import type { Meta, StoryObj } from '@storybook/react'

// COMPONENTS
import CircularButton from './CircularButton'

// CONFIG
const meta = {
  title: 'Common/Buttons/CircularButton',
  component: CircularButton,
  parameters: {
    layout: 'centered'
  },
  args: { iconName: 'ArrowUpRight' },
} satisfies Meta<typeof CircularButton>

export default meta
type Story = StoryObj<typeof meta>

// STORIES
export const DefaulSmall: Story = {
  name: 'Small (Default)',
  args: { size: 'small', isElevated: false }
}

export const ElevatedSmall: Story = {
  name: 'Small (Elevated)',
  args: { size: 'small', isElevated: true }
}

export const DefaultLarge: Story = {
  name: 'Regular (Default)',
  args: { size: 'regular', isElevated: false }
}

export const ElevatedRegular: Story = {
  name: 'Regular (Elevated)',
  args: { size: 'regular', isElevated: true }
}
