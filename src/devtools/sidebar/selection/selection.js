/* global browser */
import { getResult } from '../../util/get-result.js'

const scriptToRun = `(function () {
  return window._FICUSJS_DEVTOOLS_ELEMENT_INSPECT_($0)
})()`

export function initSelection (eventBus) {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    updateElementView(eventBus)
  })
  // run initially for any selected element
  updateElementView(eventBus)
}

export function updateElementView (eventBus) {
  browser.devtools.inspectedWindow.eval(scriptToRun)
    .then(result => eventBus.publish('element-change', getResult(result)))
}
