export function localStorageSetItem(key, value) {
  localStorage.setItem(key, value);
}

export function localStorageGetItem(key) {
  return localStorage.getItem(key);
}

export function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

export function localStorageClearItem() {
  localStorage.clear();
}
