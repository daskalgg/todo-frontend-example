import { useState } from "react";
import AddTodo, { FILTER } from "./components/addTodo";
import Todo from "./components/todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState(FILTER.DOING);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(index) {
    let newTodos = todos.splice(0);
    newTodos[index].filter = FILTER.DONE;
    // newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo
        onCreate={addTodo}
        onFilterChange={(filter) => setFilter(filter)}
      />
      {todos
        .map((todo, index) => {
          if (filter === todo.filter)
            return (
              <Todo
                key={index}
                text={todo.text}
                onDelete={() => removeTodo(index)}
              />
            );
          else return null;
        })
        .filter((e) => e != null)}
    </>
  );
}

export default App;
