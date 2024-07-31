import { FC } from 'react'
import { style } from '@/lib/tailwind/utilities'
import Icon, { IconProps } from '@/components/common/Icons/Icon'

interface CircularButtonProps {
  isElevated?: boolean
  iconName?: IconProps['name']
  size?: 'small' | 'regular'
  iconProps?: Omit<IconProps, 'name'>
}

const CircularButton: FC<CircularButtonProps> = ({ isElevated, size = 'regular', iconName = 'ArrowUpRight', iconProps }) => {

  const containerStyles = style(
    'bg-black-secondary border border-black-quaternary',
    'flex justify-center items-center rounded-full',
    size === 'small' && 'h-8 w-8',
    size === 'regular' && 'h-12 w-12',
    isElevated && 'bg-black-tertiary'
  )

  const iconStyles = style(
    'stroke-white-quaternary',
    size === 'small' && 'h-6 w-6',
    size === 'regular' && 'h-8 w-8'
  )
  return (
    <button className={containerStyles}>
      <Icon name={iconName} {...iconProps} className={iconStyles} />
    </button>
  )
}

export default CircularButton
