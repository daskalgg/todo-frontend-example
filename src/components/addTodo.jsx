import { useState } from "react";

export const FILTER = {
  DOING: 0,
  DONE: 1,
};

export default function AddTodo({ onCreate, onFilterChange }) {
  const [text, setText] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
          onCreate({ text, filter: FILTER.DOING });
          setText("");
        }}
      >
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button type="submit">Create Todo!</button>
      </form>
      <button
        onClick={() => {
          onFilterChange(FILTER.DOING);
        }}
      >
        Show ongoing todos
      </button>
      <button
        onClick={() => {
          onFilterChange(FILTER.DONE);
        }}
      >
        Show done todos
      </button>
    </div>
  );
}
