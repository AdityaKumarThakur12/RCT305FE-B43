import { createContext, useState } from "react";

export const TaskContext = createContext();
export const TaskProvider = ({Children})=>{
    const [task, setTask] = useState([]);

    return(
        <TaskContext.Provider value={{task, setTask}}>
            {Children}
        </TaskContext.Provider>
    )
}