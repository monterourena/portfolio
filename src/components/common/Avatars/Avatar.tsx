import { FC } from 'react'
import Image from 'next/image'

interface AvatarProps {
  size?: number
  src: string
}

const Avatar: FC<AvatarProps> = ({ src, size = 96 }) => {
  return (
    <Image
      className="rounded-full border-2 border-black-quaternary"
      src={src}
      width={size}
      height={size}
      alt="Avatar"
    />
  )
}

export default Avatar
