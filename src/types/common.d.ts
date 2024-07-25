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
