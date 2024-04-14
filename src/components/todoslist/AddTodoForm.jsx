
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  const { theme } = useTheme();

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group m-2 mb-1 w-50">
        <input
          className={`form-control m-2 w-75  ${theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"} ` }
          type="text"
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
