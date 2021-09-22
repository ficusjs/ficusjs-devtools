import { createComponent, withStore } from '../../../lib/ficusjs.mjs'

export function createContentComputedComponent (store) {
  createComponent(
    'content-computed',
    withStore(store, {
      render () {
        if (!this.store.state.data.computed) return ''
        return `
          <details open>
            <summary>Computed</summary>
            <ul>
              ${Object.keys(this.store.state.data.computed).map(p => `
                <li class="prop">
                  <span class="key">${p}:</span>
                  <span class="value">${this.store.state.data.computed[p] || ''}</span>
                </li>
              `).join('')}
            </ul>
          </details>
        `
      }
    })
  )
}
