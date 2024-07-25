import type { Meta, StoryObj } from '@storybook/react'
import SectionHeader, { SectionHeaderProps } from '@/components/common/Sections/SectionHeader'

const meta = {
  title: 'Common/Sections/SectionHeader',
  component: SectionHeader,
  parameters: {
    viewport: {
      defaultViewport: 'sectionContainer',
      viewports: {
        sectionContainer: {
          name: 'Section Container',
          styles: {
            width: '800px',
            height: '200px'
          }
        }
      }
    }
  },
  argTypes: { onButtonClick: { action: 'clicked' } }
} satisfies Meta<typeof SectionHeader>

export default meta
type Story = StoryObj<typeof meta> & {
  args: SectionHeaderProps
}

export const FadedButton: Story = {
  name: 'Faded Button (Default)',
  args: {
    title: 'Section Header Title',
    buttonLabel: 'Faded Button',
    buttonVariant: 'faded'
  }
}
export const SolidButton: Story = {
  args: {
    title: 'Section Header Title',
    buttonLabel: 'Solid Button',
    buttonVariant: 'solid'
  }
}
