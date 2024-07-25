import { FC } from 'react'
import { IntrinsicElementsMapper } from '@/utils/common.utils'
import { style } from '@/utils/tailwind.utils'

interface TypographyProps {
  variant?: 'largeTitle' | 'title' | 'subtitle' | 'headline' | 'body' | 'caption'
  align?: 'left' | 'center' | 'right'
  weight?: 'light' | 'normal'| 'medium' | 'semibold' | 'bold'
  noWrap?: boolean
  gutterBottom?: boolean
  display?: 'inline' | 'block'
  children: string
}

const Typography: FC<TypographyProps> = ({
  variant = 'body',
  align = 'left',
  display = 'block',
  gutterBottom = false,
  noWrap = false,
  weight = 'normal',
  children
}) => {
  const mapper = new IntrinsicElementsMapper({
    largeTitle: 'h1',
    title: 'h2',
    subtitle: 'h3',
    headline: 'h4',
    body: 'p',
    caption: 'span'
  })

  const TAG = mapper.getTag('title')
  const styles = style(
    'text-white-primary',
    variant === 'largeTitle' && 'text-largeTitle',
    variant === 'title' && 'text-title',
    variant === 'subtitle' && 'text-subtitle',
    variant === 'headline' && 'text-headline',
    variant === 'body' && 'text-body',
    variant === 'caption' && 'text-caption',
    align === 'left' && 'text-left',
    align === 'center' && 'text-center',
    align === 'right' && 'text-right',
    display === 'inline' && 'inline',
    display === 'block' && 'block',
    weight === 'light' && 'font-light',
    weight === 'normal' && 'font-normal',
    weight === 'medium' && 'font-medium',
    weight === 'semibold' && 'font-semibold',
    weight === 'bold' && 'font-bold',
    noWrap && 'whitespace-nowrap',
    gutterBottom && 'mb-4'
  )

  return <TAG className={styles}>{children}</TAG>
}

export default Typography