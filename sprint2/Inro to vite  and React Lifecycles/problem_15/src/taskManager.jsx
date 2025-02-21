import { useState, useEffect } from "react";
import { db, ref, push, set, onValue, update, remove } from "./firebase";
import "./App.css"; 

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  
  useEffect(() => {
    const tasksRef = ref(db, "tasks");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTasks(Object.entries(data).map(([id, task]) => ({ id, ...task })));
      } else {
        setTasks([]);
      }
    });
  }, []);

  
  const addTask = () => {
    if (taskName.trim()) {
      const newTaskRef = push(ref(db, "tasks"));
      set(newTaskRef, {
        name: taskName,
        status: "not-started",
      });
      setTaskName("");
    }
  };


  const updateTask = (id, newName, newStatus) => {
    update(ref(db, `tasks/${id}`), {
      name: newName || tasks.find((t) => t.id === id).name,
      status: newStatus || tasks.find((t) => t.id === id).status,
    });
  };

  
  const deleteTask = (id) => {
    remove(ref(db, `tasks/${id}`));
  };


  const taskCounts = {
    completed: tasks.filter((task) => task.status === "completed").length,
    ongoing: tasks.filter((task) => task.status === "ongoing").length,
    notStarted: tasks.filter((task) => task.status === "not-started").length,
  };

  return (
    <div className="container">
      <nav>
        <h1>Task Manager</h1>
        <div className="task-status">
          <div className="status-card">
            Completed: {taskCounts.completed}
            <div className="hover-list">
              {tasks
                .filter((task) => task.status === "completed")
                .map((task) => (
                  <p key={task.id}>{task.name}</p>
                ))}
            </div>
          </div>
          <div className="status-card">
            Ongoing: {taskCounts.ongoing}
            <div className="hover-list">
              {tasks
                .filter((task) => task.status === "ongoing")
                .map((task) => (
                  <p key={task.id}>{task.name}</p>
                ))}
            </div>
          </div>
          <div className="status-card">
            Not Started: {taskCounts.notStarted}
            <div className="hover-list">
              {tasks
                .filter((task) => task.status === "not-started")
                .map((task) => (
                  <p key={task.id}>{task.name}</p>
                ))}
            </div>
          </div>
        </div>
      </nav>

      
      <div className="task-input">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.name}</span>
            <select
              value={task.status}
              onChange={(e) => updateTask(task.id, null, e.target.value)}
            >
              <option value="not-started">Not Started</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
