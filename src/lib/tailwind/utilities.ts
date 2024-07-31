import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import ThemeService from '@/lib/tailwind/theme'

/**
 * Merges Tailwind CSS classes with the help of `clsx` and `tailwind-merge`.
 *
 * @param args - Tailwind CSS classes to merge.
 * @returns - Merged Tailwind CSS classes.
 */
export function mergeStyles(...args: ClassValue[]) {
  const fontSizeOptions = ThemeService.getPropertyOptionsWithPrefix('fontSize', 'text')
  const twMerge = extendTailwindMerge({
    override: {
      classGroups: {
        'font-size': fontSizeOptions
      }
    }
  })
  return twMerge(clsx(args))
}
