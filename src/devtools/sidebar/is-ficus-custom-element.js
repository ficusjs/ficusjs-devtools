export function isFicusCustomElement (element) {
  return (element.ficusCustomElement && element.ficusCustomElement === element.tagName.toLowerCase()) ||
    (
      (element._processProps && typeof element._processProps === 'function') ||
      (element._processRender && typeof element._processRender === 'function') ||
      (element._updateRender && typeof element._updateRender === 'function') ||
      (element._callLifecycleMethods && typeof element._callLifecycleMethods === 'function')
    )
}
