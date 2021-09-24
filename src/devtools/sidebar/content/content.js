import { createComponent, withEventBus, withStore } from '../../../lib/ficusjs.mjs'
import { createContentPropsComponent } from './props.js'
import { createContentComputedComponent } from './computed.js'
import { createContentStateComponent } from './state.js'

export function createContentComponent (eventBus, store) {
  createContentPropsComponent(store)
  createContentComputedComponent(store)
  createContentStateComponent(store)
  createComponent(
    'sidebar-content',
    withEventBus(eventBus,
      withStore(store, {
        mounted () {
          this.eventBus.subscribe('element-change', data => {
            this.store.setData(data)
          })
        },
        computed: {
          canRenderProps () {
            return this.store.state.data &&
              this.store.state.data.isFicusCustomElement &&
              this.store.state.data.propsDef &&
              Object.keys(this.store.state.data.propsDef).length > 0
          },
          canRenderComputed () {
            return this.store.state.data &&
              this.store.state.data.isFicusCustomElement &&
              this.store.state.data.computed &&
              Object.keys(this.store.state.data.computed).length > 0
          },
          canRenderState () {
            return this.store.state.data &&
              this.store.state.data.isFicusCustomElement &&
              this.store.state.data.localState &&
              Object.keys(this.store.state.data.localState).length > 0
          }
        },
        render () {
          return `
            <div class="section">
              ${this.canRenderProps ? '<content-props></content-props>' : ''}
              ${this.canRenderComputed ? '<content-computed></content-computed>' : ''}
              ${this.canRenderState ? '<content-state></content-state>' : ''}
            </div>
          `
        }
      })
    )
  )
}
