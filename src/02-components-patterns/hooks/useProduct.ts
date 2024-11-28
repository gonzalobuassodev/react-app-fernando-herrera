import { useState } from "react";

export const useProduct = () => {
    const [counter, setCounter] = useState(0)

    const handleMinus = () => {
        if (counter === 0) return;
        setCounter(counter - 1)
    }
    const handleAdd = () => {
        setCounter(counter + 1)
    }
  
  return {
    counter,
    handleMinus,    
    handleAdd,
  }
}
