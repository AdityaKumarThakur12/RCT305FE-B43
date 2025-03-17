import React, { useState } from 'react'
import db from '../firebaseConfig/firebase';
import { ref, push } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState('');
    const [priority, setPriority] = useState("low");
    const[dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    function handleCreate(){
        const task = ref(db, "tasks");
        push(task, {
            title,
            des,
            priority,
            dueDate,
            status : "To Do",
        }).then(()=> {
            navigate("/dashboard")
        })
    }

  return (
    <div>
        <h1>Create Task</h1>
        <input type="text" placeholder='Title' value={title} onChange={(e)=> setTitle(e.target.value)} />
        <textarea placeholder='description' value={des} onChange={(e)=> setDes(e.target.value)}></textarea>
        <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        <input type="data" value={dueDate} onChange={(e)=> setDueDate(e.target.value)} />
        <button onClick={handleCreate}>Create</button>
      
    </div>
  )
}

export default CreateTask
