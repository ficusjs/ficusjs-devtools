export function renderObject (value, key, title) {
  return `
    <li class="prop">
      <span class="key"${title ? ` title="${title}"` : ''}>${key}:</span>
      <span class="value">Object</span>
      <ul>
        ${Object.keys(value).map(k => `
          <li class="prop">
            <span class="key">${k}:</span>
            <span class="value">${value[k] || ''}</span>
          </li>
        `).join('')}
      </ul>
    </li>
  `
}
