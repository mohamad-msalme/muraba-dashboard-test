import React from "react";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "../utils/localStorage";

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = React.useState<T>(() =>
    getLocalStorageValue<T>(key, defaultValue)
  );

  // Update local storage when the storedValue changes
  React.useEffect(() => {
    setLocalStorageValue(key, storedValue);
  }, [key, storedValue]);

  // Function to update the local storage and state
  const setValue = (value: T) => {
    setStoredValue(value);
  };

  return [storedValue, setValue] as const;
};
