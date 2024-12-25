import { useEffect, useState } from "react";

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.error(error);
      return value;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export { useLocalStorage };
