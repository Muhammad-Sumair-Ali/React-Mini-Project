import React, { useContext } from "react";
import { useTheme } from "../../context/ThemeContext";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  const { theme } = useTheme();

  const listItemStyle = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };

  const textDecorationStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
  };

  return (
    <li className="list-group-item m-2" style={listItemStyle}>
      <input
        className="m-1 check"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span style={textDecorationStyle}>{todo.text}</span>
      <button
        className={`btn btn-${theme === "dark" ? "light" : "danger"} btn-sm ml-2 m-2`}
        onClick={() => deleteTodo(index)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
