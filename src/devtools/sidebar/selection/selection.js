/* global browser */
import { getResult } from '../../util/get-result.js'

function injectInspector () {
  return window.fetch(browser.runtime.getURL('/devtools/sidebar/selection/inspect.js'))
    .then(res => res.text())
}

const scriptToRun = `(function () {
  return window._FICUSJS_DEVTOOLS_ELEMENT_INSPECT_($0)
})()`

export function initSelection (eventBus) {
  injectInspector()
    .then(script => {
      browser.devtools.inspectedWindow.eval(script)

      browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
        browser.devtools.inspectedWindow.eval(scriptToRun)
          .then(result => eventBus.publish('element-change', getResult(result)))
      })

      browser.devtools.inspectedWindow.eval(scriptToRun)
        .then(result => eventBus.publish('element-change', getResult(result)))
    })
}
