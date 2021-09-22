import { createEventBus, createAppState } from '../../lib/ficusjs.mjs'
import { createHeaderComponent } from './header/header.js'
import { createContentComponent } from './content/content.js'
import { initSelection } from './selection/selection.js'
import './theme.js'

// an event bus
const eventBus = createEventBus()

// a store
const store = createAppState('ficusjs.devtools.sidebar', {
  initialState: {
    data: undefined
  },
  setData (data) {
    this.setState(state => ({ ...state, data }))
  }
})

// create components
createHeaderComponent(eventBus, store)
createContentComponent(eventBus, store)

// set-up selection
initSelection(eventBus)
