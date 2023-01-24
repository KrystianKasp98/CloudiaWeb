interface KeysI {
  [key: string]: string;
}

export default class LocalStorage {
  static keys: KeysI = {
    lang: 'lang',
    darkMode: 'darkMode'
  }

  static isSupported(): boolean {
    return typeof Storage !== 'undefined';
  }

  static has(key: string): boolean {
    return localStorage.hasOwnProperty(key);
  }

  static get(key: string) {
    try {
      const keyValue = localStorage.getItem(key);
      return keyValue ? JSON.parse(keyValue) : null;
    } catch {
      return null;
    }
  }

  static set(key: string, value: string | number | [] | {}) {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      console.error(`Can not save value to localStorage, falsy value was passed: ${value}`);
    }
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }
}
