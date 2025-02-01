import { useState } from "react";

const useClickCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const makeCount = () => {
    setCount(count + 1);
  };
  return [count, makeCount];
};

export default useClickCounter;
