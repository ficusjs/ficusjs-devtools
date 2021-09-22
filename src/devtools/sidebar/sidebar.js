import { createEventBus } from '../../lib/ficusjs.mjs'
import { createHeaderComponent } from './header.js'
import { createContentComponent } from './content.js'
import { initSelection } from './selection.js'
import './theme.js'

// an event bus
const eventBus = createEventBus()

// create components
createHeaderComponent(eventBus)
createContentComponent(eventBus)

// set-up selection
initSelection(eventBus)
