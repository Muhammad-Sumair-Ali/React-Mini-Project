// TodoList.js
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { useTheme } from "../../context/ThemeContext";

const index = () => {
  const [todos, setTodos] = useState([]);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); // Run once on component mount to load todos from local storage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Run whenever todos state changes to save todos to local storage

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div
      className={`container-fuild ${theme === "dark" ? "bg-dark text-white" : ""}`}>
      <h1>Todo List React </h1>
      <button className="btn btn-sm btn-secondary m-2" onClick={toggleTheme}>
        Change Theme
      </button>
      <AddTodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default index;
