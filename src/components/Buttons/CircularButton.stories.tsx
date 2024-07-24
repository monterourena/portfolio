import type { Meta, StoryObj } from '@storybook/react'

// COMPONENTS
import CircularButton from './CircularButton'

// CONFIG
const meta = {
  title: 'Buttons/CircularButton',
  component: CircularButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof CircularButton>

export default meta
type Story = StoryObj<typeof meta>

// STORIES
export const DefaulSmall: Story = {
  name: 'Default / Small',
  args: { isSmall: true, isElevated: false }
}

export const ElevatedSmall: Story = {
  name: 'Elevated / Small',
  args: { isSmall: true, isElevated: true }
}

export const DefaultLarge: Story = {
  name: 'Default / Regular',
  args: { isSmall: false, isElevated: false }
}

export const ElevatedRegular: Story = {
  name: 'Elevated / Regular',
  args: { isSmall: false, isElevated: true }
}
