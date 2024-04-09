import React from "react";
import TodoList from "./components/todoslist";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <TodoList />
        <p className="text-center m-2 text-primary">
          Todo app by / Muhammad Sumair Ali{" "}
        </p>
      </div>
    </ThemeProvider>
  );
};

export default App;
