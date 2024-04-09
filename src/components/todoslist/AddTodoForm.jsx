// AddTodoForm.js
import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group m-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="input-group-append m-1">
          <button className="btn btn-primary m-1" type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
