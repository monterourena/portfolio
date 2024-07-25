import { FC } from 'react'
import { icons, LucideProps } from 'lucide-react'

export interface IconProps extends LucideProps {
  name: 'ArrowUpRight' | 'ArrowDownRight' | 'ArrowDownLeft' | 'ArrowUpLeft'
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const LucideIcon = icons[name]
  return <LucideIcon {...props} />
}

export default Icon
