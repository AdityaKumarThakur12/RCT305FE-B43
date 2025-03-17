import React, { useEffect, useState } from 'react'
import db from '../firebaseConfig/firebase'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://finanace-5dc1c-default-rtdb.asia-southeast1.firebasedatabase.app/tasks")
                setData(res.data)
            }catch(err){
                console.log(err)
            }

        }
        fetchData()
    },[])
  return (
    <div>
      <h1>Click here to create task 👇</h1>
      <button onClick={()=> navigate("/create")}>Create task</button>
      {data.map((ele)=>{
        <>
        <h1>{ele.title}</h1>
        <h1>{ele.des}</h1>
        </>
        
      })}
    </div>
  )
}

export default Dashboard
