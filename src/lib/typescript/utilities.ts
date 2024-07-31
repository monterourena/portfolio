/**
 * RenameKeys
 *
 * @description Rename the keys of an object type
 * @example
 * type TButton = { label: string; width: number, onClick: () => void }
 * type TTarget = { label: 'buttonLabel'; width: 'buttonWidth' }
 * type TRenamedKeys = RenameKeys<TButton, TTarget> // { buttonLabel: string; buttonWidth: number; onClick: () => void }
 *
 */
export type RenameKeys<T, U> = {
  [K in keyof T as K extends keyof U ? (U[K] extends string ? U[K] : never) : K]: K extends keyof T
    ? T[K]
    : never
}

/**
 * This function is used to assert the type of an object and return it.
 * Intellicence will be able to infer the type of the object and provide suggestions.
 * @example
 * const theme = assertType<TailwindTheme>()({
 *  fontSize: {
 *    largeTitle: '2.5rem',
 *    title: '2rem',
 * })
 * // theme: { fontSize: { largeTitle: '2.5rem', title: '2rem' } }
 *
 */
export function assertType<T>() {
  return <U extends T>(u: U) => u
}
