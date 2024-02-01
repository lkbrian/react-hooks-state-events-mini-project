import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleSelectCategory = (selectedCategory) => {
    const updatedTasks =
      selectedCategory === "All"
        ? TASKS
        : TASKS.filter((task) => task.category === selectedCategory);
  
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };
  

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.text !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(filteredTasks.filter((task) => task.text !== taskId));
  };

  const handleTaskFormSubmit = (newTask) => {
    
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasks} setTasks={setTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
