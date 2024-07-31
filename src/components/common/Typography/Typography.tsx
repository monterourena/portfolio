import { FC } from 'react'
import { IntrinsicElementsMapper } from '@/utils/common.utils'
import { mergeStyles } from '@/lib/tailwind/utilities'

interface TypographyProps {
  variant?: 'largeTitle' | 'title' | 'subtitle' | 'headline' | 'body' | 'caption'
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  hue?: 'white' | 'black'
  align?: 'left' | 'center' | 'right'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  noWrap?: boolean
  gutterBottom?: boolean
  display?: 'inline' | 'block'
  children: string
}

const Typography: FC<TypographyProps> = ({
  variant = 'body',
  color = 'primary',
  hue = 'white',
  align = 'left',
  display = 'block',
  gutterBottom = false,
  noWrap = false,
  weight = 'normal',
  children
}) => {
  const intrinsicElementelementMapper = new IntrinsicElementsMapper({
    largeTitle: 'h1',
    title: 'h2',
    subtitle: 'h3',
    headline: 'h4',
    body: 'p',
    caption: 'span'
  })

  const colorMapper = () => {
    const colorMap = {
      white: {
        primary: 'text-white-primary',
        secondary: 'text-white-secondary',
        tertiary: 'text-white-tertiary',
        quaternary: 'text-white-quaternary'
      },
      black: {
        primary: 'text-black-primary',
        secondary: 'text-black-secondary',
        tertiary: 'text-black-tertiary',
        quaternary: 'text-black-quaternary'
      }
    }
    return colorMap[hue][color]
  }

  const variantMapper = () => {
    const variantMap = {
      largeTitle: 'text-largeTitle',
      title: 'text-title',
      subtitle: 'text-subtitle',
      headline: 'text-headline',
      body: 'text-body',
      caption: 'text-caption'
    }
    return variantMap[variant]
  }

  const IntrinsicElement = intrinsicElementelementMapper.getTag(variant)
  const styles = mergeStyles(
    colorMapper(),
    variantMapper(),
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

  return <IntrinsicElement className={styles}>{children}</IntrinsicElement>
}

export default Typography
