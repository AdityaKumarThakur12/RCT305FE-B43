import { useState, useEffect } from "react";
import axios from "axios";

const Grade = ()=>{
    const [grades, setGrades] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://app-5912d-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json")
                const coursesArr = Object.entries(res.data).map(([key, value]) => ({
                    id: key,
                    ...value
                }))
                setGrades(coursesArr);
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
        <h1>Wlcome to Grading Page</h1>
        </>
    )
}
 export default Grade