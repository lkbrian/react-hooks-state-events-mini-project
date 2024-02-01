import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  function addTask(event) {
    event.preventDefault();
    const newTask = {
      text: newTaskDesc,
      category: selectedCategory,
    };

    if (onTaskFormSubmit) {
      onTaskFormSubmit(newTask);
    }

    // Reset form fields
    setNewTaskDesc("");
    setSelectedCategory("");
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTaskDesc}
          onChange={(e) => setNewTaskDesc(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
