export const getLocalStorageValue = <T>(key: string, defaultValue: T): T => {
  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return defaultValue;
  }

  try {
    // Attempt to parse the stored value as JSON
    return JSON.parse(storedValue) as T;
  } catch (error) {
    // If JSON.parse fails, it means the storedValue is not a valid JSON string
    // Assuming the value was stored as a plain string, we return it directly
    // We must cast it because TypeScript doesn't know it fits the generic type T
    return storedValue as unknown as T;
  }
};

export const setLocalStorageValue = <T>(key: string, value: T): void => {
  try {
    const valueToStore = JSON.stringify(value);
    localStorage.setItem(key, valueToStore);
  } catch (error) {
    console.error("Error writing to localStorage", error);
  }
};
