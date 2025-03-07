import { useState } from "react";

function useToggle(initialValue, initialPosition = 0) {
  if (!Array.isArray(initialValue) || initialValue.length === 0) {
    throw new Error("initialValue must be a non-empty array");
  }

  const [index, setIndex] = useState(initialPosition % initialValue.length);

  const toggleState = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };

  return [initialValue[index], toggleState];
}

export default useToggle;
