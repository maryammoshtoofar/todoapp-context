import { useState } from "react";

function useInputState(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const reset = (e) => {
    setInputValue("");
  };

  return [inputValue, handleChange, reset];
}

export default useInputState;
