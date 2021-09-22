/* global browser */

// apply theme
if (browser.devtools.panels.themeName && browser.devtools.panels.themeName === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark')
}

// theme change listener
browser.devtools.panels.onThemeChanged && browser.devtools.panels.onThemeChanged.addListener(newThemeName => {
  document.documentElement.setAttribute('data-theme', newThemeName === 'firebug' ? 'light' : newThemeName)
})
