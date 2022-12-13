import { useState } from "react";

export default function Header({ addTodo }) {
  const [value, setValue] = useState("");
  return (
    <form
      className="d-flex"
      onSubmit={(e) => {
        e.preventDefault();
        if (value !== "") {
          addTodo({ todo: value, is_enabled: true });
          setValue("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Add new Todo"
        className="form-control"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="btn btn-primary" type="submit">
        Create todo
      </button>
    </form>
  );
}
