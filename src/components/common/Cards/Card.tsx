import { FC, PropsWithChildren } from 'react'

interface CardProps extends PropsWithChildren {}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <article className="bg-black-secondary border border-black-quaternary rounded-lg p-10 min-w-52 min-h-52">
      {children}
    </article>
  )
}

export default Card
