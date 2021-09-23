import { createComponent, withStore } from '../../../lib/ficusjs.mjs'

export function createContentStateComponent (store) {
  createComponent(
    'content-state',
    withStore(store, {
      render () {
        if (!this.store.state.data.localState) return ''
        return `
          <details open>
            <summary>State</summary>
            <ul>
              ${Object.keys(this.store.state.data.localState).map(p => `
                <li class="prop">
                  <span class="key">${p}:</span>
                  <span class="value">${this.store.state.data.localState[p] != null ? this.store.state.data.localState[p] : ''}</span>
                </li>
              `).join('')}
            </ul>
          </details>
        `
      }
    })
  )
}
