import { useState } from "react";
import Header from "./components/header";
import TodoList from "./components/todolist";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    let newTodos = todos.splice(0);
    setTodos([todo, ...newTodos]);
  }

  function removeTodo(index) {
    let newTodos = todos.splice(0);
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log("removing...");
  }

  function updateTodo(index) {
    let newTodos = todos.splice(0);
    newTodos[index].is_enabled = !newTodos[index].is_enabled;
    setTodos(newTodos);
    console.log("updating...");
  }

  return (
    <div className="p-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
