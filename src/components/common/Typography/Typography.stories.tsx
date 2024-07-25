import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@/components/common/Typography/Typography'

const meta = {
  title: 'Common/Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  argTypes: {}
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'body',
    align: 'left',
    display: 'block',
    gutterBottom: false,
    noWrap: false,
    weight: 'normal',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lacus lectus. Cras vel diam tristique, suscipit odio in, egestas diam. Aliquam erat volutpat. Nullam at nunc a nisl varius vulputate. Aliquam luctus, metus et laoreet posuere, ligula urna suscipit ligula, in commodo dui velit ac neque. Mauris dapibus placerat imperdiet.'
  }
}
