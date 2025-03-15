import React from "react";
import { Task } from "./types";

interface TaskCardProps {
  task: Task;
  toggleTaskStatus: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, toggleTaskStatus }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <h3>{task.description}</h3>
      <p>Priority: {task.priority}</p>
      <p>Status: {task.completed ? "Completed" : "Incomplete"}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskStatus(task.id)}
      />
    </div>
  );
};

export default TaskCard;
