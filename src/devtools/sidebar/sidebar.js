/* global browser */
import { createEventBus, createAppState } from '../../lib/ficusjs.mjs'
import { createHeaderComponent } from './header/header.js'
import { createContentComponent } from './content/content.js'
import { initSelection, updateElementView } from './selection/selection.js'
import './theme.js'

// Create a connection to the background page
const backgroundPageConnection = browser.runtime.connect({
  name: 'sidebar'
})

backgroundPageConnection.postMessage({
  name: 'init',
  tabId: browser.devtools.inspectedWindow.tabId
})

backgroundPageConnection.onMessage.addListener(function (msg) {
  if (msg.action === 'element-changed') {
    updateElementView(eventBus)
  }
})

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
