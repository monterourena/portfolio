/**
 * IntrinsicElementsMapper
 * 
 * Maps string keys to intrinsic JSX elements
 * @example
 * const mapper = new IntrinsicElementsMapper({
 *  primary: 'h1',
 *  secondary: 'h2',
 *  body: 'p'
 * })
 * 
 * const Tag = mapper.getTag('primary')
 * return <Tag>Example</Tag> // <h1>Example</h1>
 */
export type IntrinsicElementsMap = { [key: string]: keyof JSX.IntrinsicElements }
export class IntrinsicElementsMapper<T extends IntrinsicElementsMap> {
  private tagsMap: T
  constructor(tagsMap: T) {
    this.tagsMap = tagsMap
  }
  getTag<K extends keyof T>(tagName: K): T[K] {
    return this.tagsMap[tagName]
  }
}
