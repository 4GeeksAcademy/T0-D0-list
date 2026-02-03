function TodoItem({ todo, index, setTodos }) {
  const deleteTodo = () => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <li>
      {todo}
      <button onClick={deleteTodo}>❌</button>
    </li>
  );
}

export default TodoItem;