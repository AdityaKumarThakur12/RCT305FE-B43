// App.tsx
import React, { useState } from "react";
import { Priority, Task } from "./types";
import TaskCard from "./TaskCard";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"All" | "Completed" | "Incomplete">("All");
  const [newTask, setNewTask] = useState<string>("");
  const [newPriority, setNewPriority] = useState<Priority>(Priority.Low);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTaskObject: Task = {
      id: tasks.length + 1,
      description: newTask,
      priority: newPriority,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask(""); // Clear input field
  };

  // Toggle task completion
  const toggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = filter === "All"
    ? tasks
    : tasks.filter((task) =>
        filter === "Completed" ? task.completed : !task.completed
      );

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task Manager</h1>

      {/* Add Task */}
      <div>
        <input
          type="text"
          placeholder="Task description"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value as Priority)}
        >
          <option value={Priority.Low}>Low</option>
          <option value={Priority.Medium}>Medium</option>
          <option value={Priority.High}>High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Filter Options */}
      <div>
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value as "All" | "Completed" | "Incomplete")}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incomplete">Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <div>
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} />
        ))}
      </div>
    </div>
  );
};

export default App;
