

import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
  isMaxCountReached?: boolean;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const [maxCounter] = useState<number>(initialValues?.maxCount || value);

  const isMounted = useRef(false);

  const handleMinus = () => {

    if (counter === 0) return;

    const newValue = counter - 1;
    setCounter(counter - 1);
    onChange && onChange({ count: newValue, product });

  }

  const handleAdd = () => {

    if (maxCounter) if (counter === maxCounter) return;


    const newValue = counter + 1;
    setCounter(counter + 1);
    onChange && onChange({ count: newValue, product });

  }

  const reset = () => {
    setCounter(initialValues?.count || 0);
  }

  useEffect(() => {

    if (!isMounted.current) return;
    setCounter(value);

  }, [value]);

  // useEffect(() => {

  //   isMounted.current = true;

  // },[isMounted])


  return {
    counter,
    handleMinus,
    handleAdd,
    reset,
    maxCounter,
    isMaxCountReached: !!initialValues?.count && counter === initialValues.maxCount,
  }
}
