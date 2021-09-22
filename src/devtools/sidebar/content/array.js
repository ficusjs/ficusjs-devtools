export function renderArray (value, key, title) {
  return `
    <li class="prop">
      <span class="key"${title ? ` title="${title}"` : ''}>${key}:</span>
      <span class="value">Array[${value.length}]</span>
      <ul>
        ${value.map((v, i) => `
          <li class="prop">
            <span class="key">${i}:</span>
            <span class="value">${v || ''}</span>
          </li>
        `).join('')}
      </ul>
    </li>
  `
}
