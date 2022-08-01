import { useEffect } from "react";

const useUpdateLogger = (value: string) => {
  useEffect(() => {
    console.log("useUpdateLogger", value);
  }, [value]);
};

export default useUpdateLogger;
