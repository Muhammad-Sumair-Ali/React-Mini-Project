import React from "react";
import TodoList from "./components/todoslist";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
        <TodoList />
    </ThemeProvider>
  );
};

export default App;
