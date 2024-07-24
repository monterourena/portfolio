import { FC } from 'react'
import { style } from '@/utils/tailwind.utils'

interface ButtonSolidProps {
  label: string
  onClick?: () => void
}

const ButtonSolid: FC<ButtonSolidProps> = ({ label, onClick }) => {
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

export default ButtonSolid
