import { isFicusCustomElement } from './is-ficus-custom-element.js'

export function getComputed (element) {
  if (isFicusCustomElement(element)) {
    const computed = element._computed
    const nc = {}
    Object.keys(computed).forEach(p => {
      nc[p] = element[p]
    })
    return nc
  }
}
