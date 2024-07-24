import { FC } from 'react'
import { style } from '@/utils/tailwind.utils'

interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={style(
        'h-12 px-8 py-4 rounded-full',
        'bg-white border-black-quaternary',
        'justify-center items-center inline-flex',
        'hover:bg-opacity-80 hover:border-opacity-20',
      )}>
      <p className="text-black-quaternary font-bold">{label}</p>
    </button>
  )
}

export default Button
