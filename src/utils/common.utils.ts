export type IntrinsicElementsMap = { [key: string]: keyof JSX.IntrinsicElements }

/**
 * IntrinsicElementsMapper
 * 
 * @description A utility class for mapping key names to intrinsic JSX elements
 * @example
 * const intrinsicElementMapper = new IntrinsicElementsMapper({
 *  primary: 'h1',
 *  secondary: 'h2',
 *  body: 'p'
 * })
 * 
 * const IntrinsicElement = intrinsicElementMapper.getElement('primary')
 * return <IntrinsicElement>Example</IntrinsicElement> // <h1>Example</h1>
 */
export class IntrinsicElementsMapper<T extends IntrinsicElementsMap> {
  private elementsMap: T
  constructor(elementsMap: T) {
    this.elementsMap = elementsMap
  }
  /**
   * Get an intrinsic JSX element by its key name
   * @param elementName - The key of the element to get
   * @returns The intrinsic JSX element associated with the key
   */
  getElement<K extends keyof T>(elementName: K): T[K] {
    return this.elementsMap[elementName]
  }
}
