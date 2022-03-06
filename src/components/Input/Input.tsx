import { useState } from "react";
import { IInput } from "interfaces/IInput";

const Input = ({ addTodo }: IInput) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <div>
      <input
        placeholder="TODO"
        onChange={e => setInputVal(e.target.value)}
        value={inputVal}
        onKeyDown={e => (e.key === "Enter" ? addTodo(inputVal) : "")}
      />
      <button onClick={() => addTodo(inputVal)}>add</button>
    </div>
  );
};

export default Input;
