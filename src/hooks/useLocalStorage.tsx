import { Key, useEffect, useState } from "react";

const getSavedValue = (key: string, initialValue: Key | Function) => {
  const savedValue = localStorage.getItem(key) ?? "";

  if (savedValue) return JSON.parse(savedValue);

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
};

const useLocalStorage = (key: string, initialValue: Key | Function) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
