/* global browser */
const s = document.createElement('script')
s.src = browser.runtime.getURL('/devtools/sidebar/selection/inspect.js');
(document.head || document.documentElement).appendChild(s)
s.onload = function () {
  s.parentNode.removeChild(s)
}
