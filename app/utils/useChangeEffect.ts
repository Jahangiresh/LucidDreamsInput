import { DependencyList, useEffect, useRef } from "react";

export const useChangeEffect = (
  effect: () => void,
  deps: DependencyList
): void => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (!isInitialMount.current) {
      return effect();
    } else {
      isInitialMount.current = false;
    }
  }, deps);
};
