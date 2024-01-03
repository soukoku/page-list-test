export function register() {
  window.addEventListener('mousedown', updateUseTime)
  window.addEventListener('keydown', updateUseTime)
}
export function unregister() {
  window.removeEventListener('mousedown', updateUseTime)
  window.removeEventListener('keydown', updateUseTime)
}
function updateUseTime() {
  window.localStorage.setItem('lastUsed', new Date().getTime().toString())
}
