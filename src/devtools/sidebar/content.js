import { createComponent, withEventBus } from '../../lib/ficusjs.mjs'

export function createContentComponent (eventBus) {
  createComponent(
    'sidebar-content',
    withEventBus(eventBus, {
      state () {
        return {
          data: undefined
        }
      },
      mounted () {
        this.eventBus.subscribe('element-change', data => {
          this.state.data = data
        })
      },
      render () {
        return `
          <div class="section">
            ${this.state.data && this.state.data.isFicusCustomElement && this.state.data.props && Object.keys(this.state.data.props).length > 0
              ? `
                  <details open>
                    <summary>Props</summary>
                    <ul>
                      ${Object.keys(this.state.data.props).map(p => `
                        <li class="prop">
                          <span class="key" title="${this.state.data.propsDef[p].join(', ')}">${p}:</span>
                          <span class="value">${this.state.data.props[p] || ''}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </details>
                `
              : ''}
          </div>
        `
      }
    })
  )
}
