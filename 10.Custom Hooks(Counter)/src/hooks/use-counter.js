import { useState, useEffect } from "react";
const useCounter = (counterUpdateFn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Interval Set");
    const interval = setInterval(() => {
      setCounter(counterUpdateFn);
    }, 1000);

    return () => {
      console.log("Interval Cleared");
      clearInterval(interval);
    };
  }, [counterUpdateFn]);
  console.log("First");
  return counter;
};
export default useCounter;
