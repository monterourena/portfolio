import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@/components/common/Typography/Typography'

const meta = {
  title: 'Common/Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    hue: { control: { type: 'inline-radio' } },
    color: { control: { type: 'inline-radio' } },
    variant: { control: { type: 'select' } },
    weight: { control: { type: 'select' } },
    align: { control: { type: 'inline-radio' } },
    display: { control: { type: 'inline-radio' } },
  }
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    hue: 'white',
    color: 'primary',
    variant: 'body',
    weight: 'normal',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id lacus lectus. Cras vel diam tristique, suscipit odio in, egestas diam. Aliquam erat volutpat. Nullam at nunc a nisl varius vulputate. Aliquam luctus, metus et laoreet posuere, ligula urna suscipit ligula, in commodo dui velit ac neque. Mauris dapibus placerat imperdiet.',
    align: 'left',
    display: 'block',
    gutterBottom: false,
    noWrap: false,
  }
}
