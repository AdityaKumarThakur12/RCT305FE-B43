import { useState, useEffect } from "react";
import axios from "axios"

const StudentProfile = ()=>{
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://app-5912d-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
                const coursesArr = Object.entries(res.data).map(([key, value]) => ({
                    id: key,
                    ...value
                }))
                setUsers(coursesArr);
                console.log(coursesArr)
            }
            catch(err){
                setError(err);
                console.log(err);
            }finally{
                setLoading(false)
            }
        };
        fetchData();
    },[])

    if(loading){
        return(
            <p>Loading...</p>
        ) 
    }
    if(error){
        return(
            <p>Error : {error.message}</p>
        ) 
    }


    return(
        <>
        <h1 style={{textAlign:"center", fontSize:"30px", fontWeight:"bolder"}}>Instructors section and students</h1>
        <div style={{width:"90vw", display:"flex", flexWrap:"wrap", alignItems:"center", padding:"20px", overflow:"hidden"}}>
            
        {users.map(ele=>(
            <div key={ele.id} style={{width:"40%", border:"1px solid gray", borderRadius:"10px",backgroundColor:"teal",color:"white", padding:"20px", margin:"10px", overflow:"hidden"}}>
                <h1 style={{fontSize:"20px", fontWeight:"bold"}}>{ele.role}</h1>
                <h1>{ele.name}</h1>
                <h2>{ele.email}</h2>
                {/* <img src={ele.avatar} alt="" /> */}
                
                <p>{ele.major}</p>
            </div>
        ))} 
        </div>
       
        </>
    )
}
 export default StudentProfile