import { useCallback, useState } from "react";
import { Storage } from "./storage";

export const useStorage = (key: string) => {
  const [state, setState] = useState(() => Storage.get(key));

  const set = useCallback(
    (newValue) => {
      Storage.set(key, newValue);
      setState(newValue);
    },
    [key]
  );

  const remove = useCallback(() => {
    Storage.remove(key);
    setState(null);
  }, [key]);

  return [state, set, remove];
};
