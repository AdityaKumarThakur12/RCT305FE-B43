import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import StudentProfile from "./studentProfile";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";


const Home = ()=>{
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("https://app-5912d-default-rtdb.asia-southeast1.firebasedatabase.app/courses.json")
                const coursesArr = Object.entries(res.data).map(([key, value]) => ({
                    id: key,
                    ...value
                }))
                setData(coursesArr);
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
        <div style={{overflow:"hidden"}}>
            <Navbar/>
        <h1 style={{fontSize:"29px", textAlign:"center", fontWeight:"bold"}}>Our All Courses</h1>
        <div style={{width:"100vw",display:"flex", alignItems:"center", margin:"auto", justifyContent:"space-between", padding:"20px"}}>
        {data.map(ele=>(
            <div style={{border:"1px solid gray",borderRadius:"10px", padding:"20px", margin:"20px"}}  key={ele.id}>
                <img style={{background:"gray", height:"200px"}} src={ele.coverImage} alt="img" />
                <h1 style={{fontSize:"20px", fontWeight:"bold", textAlign:"center"}}> {ele.name} - {ele.code}</h1>
                <p>Course Instructor: {ele.instructor}</p>
                <p>Term : {ele.term}</p>
                <p>Description: {ele.description}</p>
                <Button onClick={()=> navigate('/assignment-detail')} colorScheme="teal" marginTop="10px"> Click here to see assignments ↪️</Button>
            

            </div>
        ))}
        </div>
        <StudentProfile/>
        
        </div>
    )
}
 export default Home