/* global browser */
import { isFicusCustomElement } from './is-ficus-custom-element.js'
import { getProps, getPropsDefinition } from './get-props.js'

function handleError (error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`)
  } else {
    console.log(`JavaScript error: ${error.value}`)
  }
}

function getResult (result) {
  if (Array.isArray(result)) {
    if (result[0] !== undefined) {
      return result[0]
    } else if (result[1]) {
      handleError(result[1])
    }
  } else {
    return result
  }
}

const scriptToRun = `(function () {
  ${isFicusCustomElement}
  ${getProps}
  ${getPropsDefinition}

  return {
    tagName: $0.tagName.toLowerCase(),
    isFicusCustomElement: isFicusCustomElement($0),
    props: getProps($0),
    propsDef: getPropsDefinition($0)
  }
})()`

export function initSelection (eventBus) {
  browser.devtools.panels.elements.onSelectionChanged.addListener(() => {
    browser.devtools.inspectedWindow.eval(scriptToRun)
      .then(result => eventBus.publish('element-change', getResult(result)))
  })

  browser.devtools.inspectedWindow.eval(scriptToRun)
    .then(result => eventBus.publish('element-change', getResult(result)))
}
