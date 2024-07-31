import { assertType } from '@/lib/typescript/utilities'
import {
  ThemeBaseConfig,
  CustomTheme,
  ThemeProperty,
  PropertyOption,
  PropertyOptionWithPrefix
} from '@/lib/tailwind'

// THEME
export const customTheme = assertType<ThemeBaseConfig>()({
  fontSize: {
    largeTitle: '2.5rem',
    title: '2rem',
    subtitle: '1.5rem',
    headline: '1.25rem',
    body: '1rem',
    caption: '0.75rem'
  },
  colors: {
    black: {
      DEFAULT: '#000000',
      primary: '#060809',
      secondary: '#0C0E0F',
      tertiary: '#111314',
      quaternary: '#1F1F1F'
    },
    white: {
      DEFAULT: '#FFFFFF',
      primary: '#F9F9F9',
      secondary: '#D9D9D9',
      tertiary: '#ADADAD',
      quaternary: '#777777'
    }
  },
  borderRadius: {
    DEFAULT: '0.25rem',
    none: '0',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    full: '9999px'
  },
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    }
  }
} as const)

/**
 * Represents the ThemeService class that provides access to the custom theme.
 */
class ThemeService {
  public readonly theme: CustomTheme
  private static instance: ThemeService | undefined = undefined

  /**
   * Creates a new instance of the ThemeService class.
   * @param customTheme The custom theme configuration.
   */
  private constructor(customTheme: CustomTheme) {
    this.theme = customTheme
  }

  /**
   * Gets the singleton instance of the ThemeService class.
   * @param customTheme The custom theme configuration.
   * @returns The singleton instance of the ThemeService class.
   */
  public static getInstance(customTheme: CustomTheme): ThemeService {
    if (!ThemeService.instance) {
      ThemeService.instance = new ThemeService(customTheme)
    }
    return ThemeService.instance
  }

  /**
   * Flattens the theme property keys.
   * @param theme The theme object.
   * @param prefix The prefix to be added to the keys.
   * @returns An array of flattened theme property keys.
   */
  private flattenThemeProperty(theme: any, prefix = ''): string[] {
    const properties = Object.entries(theme)
    return properties.flatMap(([key, value]) => {
      const flattenedKey = (prefix ? `${prefix}-${key}` : key).replace(/-DEFAULT$/, '')
      if (typeof value === 'object' && value !== null) {
        return [flattenedKey, ...this.flattenThemeProperty(value, flattenedKey)]
      }
      return [flattenedKey]
    })
  }

  /**
   * Gets the options for a specific theme property.
   * @param property The theme property.
   * @returns An array of options for the specified theme property.
   */
  public getPropertyOptions<T extends ThemeProperty>(property: T): PropertyOption<T>[] {
    let themeProperty: any
    const theme = this.theme

    if (property in theme) {
      themeProperty = theme[property as keyof typeof theme]
    } else if (theme.extend && property in theme.extend) {
      themeProperty = theme.extend[property as keyof typeof theme.extend]
    } else {
      return []
    }

    return this.flattenThemeProperty(themeProperty) as PropertyOption<T>[]
  }

  /**
   * Gets the options for a specific theme property and adds a prefix to each option.
   * @param property The theme property.
   * @param prefix The prefix to be added to the options.
   * @returns An array of options for the specified theme property with the prefix.
   */
  public getPropertyOptionsWithPrefix<T extends ThemeProperty, S extends string>(
    property: T,
    prefix: S
  ): Array<PropertyOptionWithPrefix<T, S>> {
    const themeOptions = this.getPropertyOptions(property)
    return themeOptions.map(
      (option: PropertyOption<T>) => `${prefix}-${option}` as PropertyOptionWithPrefix<T, S>
    )
  }
}

export default ThemeService.getInstance(customTheme)