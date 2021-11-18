import Cookie from "js-cookie";

export type Props = {
  set: (key: string, value: string) => void;
  get: (key: string) => string | null;
  remove: (key: string) => void;
};

export const Storage: Props = {
  set: (key, value): void => localStorage.setItem(key, JSON.stringify(value)),
  get: (key): string | null => {
    const item = localStorage.getItem(key) || "";
    try {
      return JSON.parse(item);
    } catch {
      return null;
    }
  },
  remove: (key): void => localStorage.removeItem(key),
};

export const cookie = { set: Cookie.set, get: Cookie.get, remove: Cookie.remove }; //getJSON
