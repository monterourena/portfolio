import { FC } from 'react'
import { style } from '@/lib/tailwind/utilities'

export interface ButtonProps {
  label: string
  variant?: 'solid' | 'faded'
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick, variant = 'solid' }) => {
  return (
    <button
      onClick={onClick}
      className={style(
        'h-12 px-8 py-4 rounded-full',
        'justify-center items-center inline-flex',
        variant === 'solid' && 'bg-white text-black-primary',
        variant === 'faded' && 'bg-black-secondary border border-black-quaternary text-white-primary'
      )}>
      <p className="text-base font-semibold">{label}</p>
    </button>
  )
}

export default Button
