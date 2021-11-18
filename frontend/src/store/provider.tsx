import React from "react";
import { StoreContext } from "./context";
import { useStorage } from "../utils/useStorage";

export const StoreProvider: React.FC = ({ children }) => {
  const [state, setState] = useStorage("current_user");

  return (
    <StoreContext.Provider value={{ token: null, setToken: () => {} }}>
      {children}
    </StoreContext.Provider>
  );
};
