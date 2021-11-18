import { createContext } from "react";

export const StoreContext: any = createContext({
  token: null,
  setToken: () => {},
});
