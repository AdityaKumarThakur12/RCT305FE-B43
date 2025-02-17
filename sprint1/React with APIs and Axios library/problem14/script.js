function TaskList() {
  const [tasks, setTasks] = React.useState([]);

  const fetchData = () => {
    axios("https://masai-45749-default-rtdb.firebaseio.com/tasks.json")
      .then((response) => {
        const tasksArray = Array.isArray(response.data) ? response.data : Object.keys(response.data).map(key => ({
          id: key, 
          ...response.data[key] 
        }));
        setTasks(tasksArray);
      })
      .catch((error) => console.log("Error fetching tasks:", error));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li> // Ensure task.id exists
        ))}
      </ul>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TaskList/>)
