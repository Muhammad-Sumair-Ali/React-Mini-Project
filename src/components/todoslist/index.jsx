import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { useTheme } from "../../context/ThemeContext";
import "./todo.css";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={` main-cnt container-fuild ${theme === "dark" ? "bg-dark text-white" : ""}`}>
      <h2 className="m-2">Todo List React</h2>
      <input
        type="checkbox"
        id="themeToggle"
        className="w-75 theme-toggle-checkbox visually-hidden"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="themeToggle" className="theme-toggle-label m-2">
        <span className="slider" />
      </label>
      <p className="m-2 mt-0">Change Theme</p>

      <AddTodoForm addTodo={addTodo} />
      <input
        
        type="text"
        className={`form-control mb-3 m-2 w-75 ${theme === "dark" ? "bg-dark text-white" : "bg-white text-dark"} ` }
        placeholder="Search todos"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="list-group">
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <p className="text-center m-2 text-primary">
        Todo app by / Muhammad Sumair Ali{" "}
      </p>
    </div>
  );
};

export default Index;
