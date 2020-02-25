import React, { useState } from 'react';
import './todo.css';
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }} >
      <input
        type="text"
        className="form-control todo-list-input"
        value={value}
        style={{ width: "100%" }}
        onChange={e => setValue(e.target.value)}
      />
    
    </form>
  )
}

export default TodoForm;