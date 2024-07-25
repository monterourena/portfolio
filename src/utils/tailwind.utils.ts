import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes with the help of `clsx` and `tailwind-merge`.
 *
 * @param args - Tailwind CSS classes to merge.
 * @returns - Merged Tailwind CSS classes.
 */
export function style(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
