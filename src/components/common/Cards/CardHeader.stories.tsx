import type { Meta, StoryObj } from '@storybook/react'
import CardHeader from '@/components/common/Cards/CardHeader'

const meta = {
  title: 'Common/Cards/CardHeader',
  component: CardHeader,
  parameters: {
    viewport: {
      defaultViewport: 'smallCard',
      viewports: {
        smallCard: {
          name: 'Small Card',
          styles: {
            width: '388px',
            height: '213px'
          }
        }
      }
    }
  },
  argTypes: {}
} satisfies Meta<typeof CardHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { title: 'Card Header' }
}
