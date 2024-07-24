import { FC, PropsWithChildren } from 'react'
import { style } from '@/utils/tailwind.utils'

interface FadedCircularButtonProps extends PropsWithChildren {
  isSmall?: boolean
  isElevated?: boolean
}

const FadedCircularButton: FC<FadedCircularButtonProps> = ({ isSmall = false, isElevated, children }) => {
  return (
    <button
      className={style(
        'bg-black-secondary border border-black-quaternary',
        'justify-center items-center inline-flex',
        'h-12 w-12 p-3 rounded-full',
        isSmall && 'h-8 w-8 p-2',
        isElevated && 'bg-black-tertiary'
      )}
    >
      {children}
    </button>
  )
}

export default FadedCircularButton
