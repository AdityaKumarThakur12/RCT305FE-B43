import { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const AssignmentDetail = ()=>{
    const [assign, setAssign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://app-5912d-default-rtdb.asia-southeast1.firebasedatabase.app/assignments/course1.json")
                const coursesArr = Object.entries(res.data).map(([key, value]) => ({
                    id: key,
                    ...value
                }))
                setAssign(coursesArr);
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
        <h1 style={{fontSize:"40px", fontWeight:"bold", textAlign:"center"}}>Assignments </h1>
        <div style={{width:"100vw",display:"flex", alignItems:"center", gap:"20px", padding:"10px"}}>
        {assign.map(ele=>(
            <div key={ele.id} style={{width:"30%", border:"1px solid gray", borderRadius:"10px", padding:"10px"}}>
                <h1 style={{fontSize:"20px", color:"red"}}>{ele.title}</h1>
                <p>{ele.description}</p>
                <p>created at: {ele.createdAt}</p>
                <p>Due Date: {ele.dueDate}</p>
                <p>Points: {ele.totalPoints}</p>
            </div>
        ))}
        </div>
        

        <FormControl width="50vw" margin="auto" border="1px solid gray" padding="20px" borderRadius="10px" marginTop="20px" >
            <h1 style={{fontSize:"30px", fontWeight:"bolder"}}>Add Assignments</h1>
            <FormLabel>Id</FormLabel>
            <Input type="text" placeholder="enter id" />
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="enter Name" />
            <FormLabel>Description</FormLabel>
            <Input type="text" placeholder="Description about assigments" />
            <Button marginTop="20px" colorScheme="blue">Submit</Button>

        </FormControl>
        
        </>
    )
}
 export default AssignmentDetail