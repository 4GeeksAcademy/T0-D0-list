import { useState } from "react";

function InputTodo({ setTodos }) {
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos(prev => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={addTodo}>➕</button>
    </div>
  );
}

export default InputTodo;