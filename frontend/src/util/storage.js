export function getStorage(key) {
  return JSON.parse(window.sessionStorage.getItem(key));
}

export function setStorage(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}