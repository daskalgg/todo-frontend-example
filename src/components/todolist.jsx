export default function TodoList({ todos, removeTodo, updateTodo }) {
  return todos.map((todo, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-between m-2"
        onClick={() => {
          updateTodo(index);
        }}
      >
        <span style={{ textDecoration: todo.is_enabled ? "" : "line-through" }}>
          {todo.todo}
        </span>
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation();
            removeTodo(index);
          }}
        >
          X
        </button>
      </div>
    );
  });
}
