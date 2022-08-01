import { useState } from "react";

const useArray = (defaultValue: any[]) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element: any) => {
    setArray((a) => [...a, element]);
  };

  const filter = (callback: (item: any) => boolean) => {
    setArray((a) => a.filter(callback));
  };

  const update = (index: number, newElement: any) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const remove = (index: number) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  };

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};
export default useArray;
