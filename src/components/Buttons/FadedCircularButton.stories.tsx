import type { Meta, StoryObj } from '@storybook/react'

// COMPONENTS
import FadedCircularButton from './FadedCircularButton'

// CONFIG
const meta = {
  title: 'Buttons/FadedCircularButton',
  component: FadedCircularButton,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof FadedCircularButton>

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
