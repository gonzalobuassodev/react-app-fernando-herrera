

import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
} {

}

export const useProduct = ({ onChange, product, value = 0 }: UseProductArgs) => {
  const [counter, setCounter] = useState(value)

  const isControllerRef = useRef(!!onChange)

  const handleMinus = () => {


    if(isControllerRef.current) {
      return onChange!({count: counter - 1, product})
    }

    if (counter === 0) return;

    const newValue = counter - 1;

    setCounter(counter - 1)

    onChange && onChange({ count: newValue, product });

  }

  const handleAdd = () => {

    if (isControllerRef.current) {
      return onChange!({ count: counter + 1, product })
    }

    const newValue = counter + 1

    setCounter(counter + 1)
    onChange && onChange({ count: newValue, product });

  }

  useEffect(() => {

    setCounter(value)

  }, [value])


  return {
    counter,
    handleMinus,
    handleAdd,
  }
}
