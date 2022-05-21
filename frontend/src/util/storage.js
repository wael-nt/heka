export function getStorage(key) {
  return JSON.parse(window.sessionStorage.getItem(key));
}

export function setStorage(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function clearStorage(key) {
  window.sessionStorage.removeItem(key)
}

export function isStorage(key) {
  if (window.sessionStorage.getItem(key) == null)
    return false
  else
    return true
}