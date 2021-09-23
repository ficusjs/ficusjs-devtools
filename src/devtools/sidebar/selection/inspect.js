(function () {
  window._FICUSJS_DEVTOOLS_ELEMENT_INSPECT_ = window._FICUSJS_DEVTOOLS_ELEMENT_INSPECT_ || function (ele) {
    function isFicusCustomElement (element) {
      return (element.ficusCustomElement && element.ficusCustomElement === element.tagName.toLowerCase()) ||
      (
        (element._processProps && typeof element._processProps === 'function') ||
        (element._processRender && typeof element._processRender === 'function') ||
        (element._updateRender && typeof element._updateRender === 'function') ||
        (element._callLifecycleMethods && typeof element._callLifecycleMethods === 'function')
      )
    }

    function getProps (element) {
      if (isFicusCustomElement(element)) {
        return element.props
      }
    }

    function getPropsDefinition (element) {
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

    function getComputed (element) {
      if (isFicusCustomElement(element)) {
        const computed = element._computed
        const nc = {}
        Object.keys(computed).forEach(p => {
          nc[p] = element[p]
        })
        return nc
      }
    }

    function getState (element) {
      if (isFicusCustomElement(element) && element.state && element._state) {
        return element._state
      }
    }

    return {
      tagName: ele.tagName.toLowerCase(),
      isFicusCustomElement: isFicusCustomElement(ele),
      props: getProps(ele),
      propsDef: getPropsDefinition(ele),
      computed: getComputed(ele),
      localState: getState(ele)
    }
  }
})()
