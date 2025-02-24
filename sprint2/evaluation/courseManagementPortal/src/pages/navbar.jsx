import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div style={{width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", gap:"60px"}}>
            <Link style={{fontSize:"20px"}} to="/">Home 🏠</Link>
            <Link style={{fontSize:"20px"}} to="/profile">profile</Link>
            <Link style={{fontSize:"20px"}} to="/assignment-detail">Assignments 📝</Link>
        </div>
        
    )
}
export default Navbar