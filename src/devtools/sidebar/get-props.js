import { isFicusCustomElement } from './is-ficus-custom-element.js'

export function getProps (element) {
  if (isFicusCustomElement(element)) {
    return element.props
  }
}

export function getPropsDefinition (element) {
  function getType (prop) {
    switch (prop.type) {
      case String:
        return 'String'
      case Number:
        return 'Number'
      case Boolean:
        return 'Boolean'
      case Object:
        return 'Object'
      default:
        return 'Unsupported'
    }
  }
  if (isFicusCustomElement(element)) {
    const props = element._props
    const np = {}
    Object.keys(props).forEach(p => {
      const propDef = props[p]
      const pd = [
        `type: ${getType(props[p])}`
      ]
      if (propDef.required != null) pd.push(`required: ${propDef.required}`)
      if (propDef.default != null) pd.push(`default: ${propDef.default}`)
      if (propDef.observed != null) pd.push(`observed: ${propDef.observed}`)
      np[p] = pd
    })
    return np
  }
}
