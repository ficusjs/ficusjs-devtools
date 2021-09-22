import { createComponent, withEventBus } from '../../lib/ficusjs.mjs'

export function createHeaderComponent (eventBus) {
  createComponent(
    'sidebar-header',
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
          <div class="header d-flex align-items-center">
            <span class="html-tag mr-4">${this.state.data ? this.state.data.tagName : 'unknown'}</span>
            ${this.state.data && this.state.data.isFicusCustomElement && this.state.data.enableFilter
              ? `
                <form method="get" action="" class="form-search">
                  <fieldset class="d-flex align-items-center">
                    <label for="inspected-filter">
                      <svg width="14" height="14" class="icon-color-gray mr-1">
                        <use xlink:href="#icon-search" href="#icon-search"></use>
                      </svg>
                    </label>
                    <input type="search" name="inspectedFilter" id="inspected-filter" placeholder="Filter inspected data">
                  </fieldset>
                </form>
              `
              : ''
            }
          </div>
        `
      }
    })
  )
}
