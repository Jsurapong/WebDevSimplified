import { useEffect, useRef } from "react";

// not working react18
// useEffect Change
// const useUpdateEffect = (callback: Function, dependencies: any[]) => {

//   const firstRenderRef = useRef(true);

//   useEffect(() => {
//     console.log(firstRenderRef.current);

//     if (firstRenderRef.current) {
//       firstRenderRef.current = false;
//       return;
//     }
//     return callback();
//   }, dependencies);
// };

const useUpdateEffect = (callback: Function, dependencies: any[]) => {
  const firstRenderRef = useRef<boolean | undefined>(undefined);

  useEffect(() => {
    if (firstRenderRef.current === undefined) {
      firstRenderRef.current = true;
      return;
    }

    if (firstRenderRef.current === true) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};
export default useUpdateEffect;
