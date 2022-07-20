// Mock Browser API's which are not supported by JSDOM, e.g. ServiceWorker, LocalStorage
/**
 * An example how to mock localStorage is given below 👇
 */

interface LocalStorageStore {
  token: string;
}

// Mocks localStorage
const localStorageMock = (function () {
  let store: LocalStorageStore = {
    token: "super-secure-complicated-token",
  };

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => (store[key] = value.toString()),
    clear: () => (store = {} as LocalStorageStore),
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});