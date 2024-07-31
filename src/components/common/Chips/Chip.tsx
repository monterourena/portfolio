import { FC } from 'react'
import { style } from '@/lib/tailwind/utilities'

import Typography from '@/components/common/Typography/Typography'

interface ChipProps {
  label: string
  size?: 'small' | 'medium'
}

/**
 * @component Chip
 * 
 * @description This component is part of the `Chips` component. 
 * It is used to display information in a small rounded container.
 * @prop **label** `Required` - The label to be displayed in the chip. `string`
 * @prop **size** `Optional`- The size of the chip. `"small"` | `"medium" (default)` 
 */
const Chip: FC<ChipProps> = ({ label, size = 'medium' }) => {
  const variant = size === 'small' ? 'caption' : 'body'
  return (
    <article
      className={style(
        'px-4 rounded-full flex justify-center items-center',
        'bg-black-secondary border border-black-quaternary',
        size === 'small' && 'h-8',
        size === 'medium' && 'h-9'
      )}
    >
      <Typography align="center" variant={variant} color="tertiary">
        {label}
      </Typography>
    </article>
  )
}

export default Chip
