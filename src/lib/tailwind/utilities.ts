import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes with the help of `clsx` and `tailwind-merge`.
 *
 * @param args - Tailwind CSS classes to merge.
 * @returns - Merged Tailwind CSS classes.
 */
export function mergeStyles(...args: ClassValue[]) {
  const twMerge = extendTailwindMerge({
    override: {
      classGroups: {
        'font-size': [
          'text-largeTitle',
          'text-title',
          'text-subtitle',
          'text-headline',
          'text-body',
          'text-caption'
        ]
      }
    }
  })
  return twMerge(clsx(args))
}
