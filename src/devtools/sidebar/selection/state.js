import { isFicusCustomElement } from './is-ficus-custom-element.js'

export function getState (element) {
  if (isFicusCustomElement(element) && element.state) {
    return undefined
  }
}
