import React from "react";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className="list-group-item m-2">
      <input
      className="m-1"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button
        className="btn btn-danger btn-sm ml-2 m-2"
        onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
