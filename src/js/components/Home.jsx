import { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Escribe una tarea y presiona Enter..."
        className="form-control mb-3"
      />

      {todos.length === 0 ? (
        <p className="text-muted">No hay tareas, añadir tareas</p>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo}
              <span
                className="delete-icon"
                onClick={() => deleteTodo(index)}
              >
                ❌
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;