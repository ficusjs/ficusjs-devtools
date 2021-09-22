import { renderArray } from './array.js'
import { renderObject } from './object.js'

export function renderValue (value, key, title) {
  if (value && Array.isArray(value)) {
    return renderArray(value, key, title)
  }
  if (value && !Array.isArray(value) && typeof value === 'object') {
    return renderObject(value, key, title)
  }
  return `
    <li class="prop">
      <span class="key"${title ? ` title="${title}"` : ''}>${key}:</span>
      <span class="value">${value || ''}</span>
    </li>
  `
}
