import { createComponent, withStore } from '../../../lib/ficusjs.mjs'
import { renderValue } from './value.js'

export function createContentPropsComponent (store) {
  createComponent(
    'content-props',
    withStore(store, {
      render () {
        if (!this.store.state.data.propsDef) return ''
        return `
          <details open>
            <summary>Props</summary>
            <ul>
              ${Object
                .keys(this.store.state.data.propsDef)
                .map(p => renderValue(this.store.state.data.props[p], p, this.store.state.data.propsDef[p].join(', ')))
                .join('')}
            </ul>
          </details>
        `
      }
    })
  )
}
