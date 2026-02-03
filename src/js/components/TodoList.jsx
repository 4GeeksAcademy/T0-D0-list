import TodoItem from "./TodoItem.jsx";

function TodoList({ todos, setTodos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;