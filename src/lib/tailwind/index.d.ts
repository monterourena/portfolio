import { Config } from 'tailwindcss'
import { customTheme } from './theme'

export type TailwindConfig = Config
export type ThemeBaseConfig = Config['theme']
export type CustomTheme = typeof customTheme

type ThemeProperty = Exclude<keyof CustomTheme, 'extend'> | keyof CustomTheme['extend']
type RemoveDefault<T extends string> = T extends `${infer P}-DEFAULT` ? P : T
type ExcludeDefault<T extends string> = T extends `${infer P}-DEFAULT` ? never : T
type FlattenNestedObject<T, S extends string = '-'> = T extends object
  ? {
      [K in keyof T]: T[K] extends object
        ? RemoveDefault<K & string> | `${RemoveDefault<K & string>}${S}${FlattenNestedObject<T[K]> & string}`
        : RemoveDefault<K & string>
    }[keyof T]
  : never
type FlattenedTheme = {
  [K in ThemeProperty]: K extends keyof CustomTheme
    ? ExcludeDefault<FlattenNestedObject<CustomTheme[K]>>
    : K extends keyof CustomTheme['extend']
      ? ExcludeDefault<FlattenNestedObject<CustomTheme['extend'][K]>>
      : never
}

export type PropertyOption<T extends ThemeProperty> = FlattenedTheme[T]
export type PropertyOptionWithPrefix<T extends ThemeProperty, S extends string> = `${S}-${FlattenedTheme[T]}`
