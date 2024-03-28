import { StorageKey } from './storage';

export const getLocalStorageItem = (key: StorageKey) => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: StorageKey, value: string) => {
  return localStorage.setItem(key, value);
};

export const deleteLocalStorageItem = (key: StorageKey) => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  return localStorage.clear();
};
