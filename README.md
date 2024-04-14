# React + Vite

### Simple Todo List App
The Simple Todo List App is a minimalist task management application built using React.js. It allows users to create, manage, and organize their tasks in a straightforward and intuitive interface. The application supports features such as adding new tasks, marking tasks as complete, deleting tasks, toggling between light and dark themes, filtering tasks by search query, and persisting todo list data locally using the browser's localStorage API.

## Key Features

- **Add New Tasks:** Easily add new tasks to your todo list by entering task descriptions in the provided input field and clicking the "Add" button.
- **Toggle Task Completion:** Mark tasks as complete by clicking on a checkbox next to each task. Completed tasks are visually distinguished from incomplete tasks.
- **Delete Tasks:** Remove tasks from your todo list by clicking on the "Delete" button next to each task.
- **Theme Toggle:** Toggle between light and dark themes to switch between different color schemes based on your preference.
- **Filtering:** Filter tasks by entering search queries in the search input field. Only tasks matching the search query will be displayed.
- **Local Storage Persistence:** Todo list data is stored locally using the browser's localStorage API, ensuring that your todo list persists across browser sessions.

## Technologies Used

- **React.js:** Used for building the user interface and managing component state.
- **Bootstrap:** Used for styling the user interface and creating responsive layouts.
- **localStorage API:** Used for persisting todo list data locally in the user's browser.

## Usage
To run the application locally:
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Future Enhancements

- **Edit Tasks:** Allow users to edit task descriptions after they've been added to the todo list.
- **Sorting:** Implement sorting options to help users organize and manage their tasks more effectively.
- **Multiple Lists:** Enable users to create and manage multiple todo lists for different purposes or categories.

## Project Structure

- project-root/
- │
- ├── src/
- │ ├── components/
- │ │ ├── AddTodoForm.js
- │ │ ├── TodoItem.js
- │ │ ├── ThemeContext.js
- │ │ └── TodoList.js
- │ ├── context/
- │ │ └── ThemeContext.js
- │ ├── App.css
- │ └── App.js
- └─── README.md