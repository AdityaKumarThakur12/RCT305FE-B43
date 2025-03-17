import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../contextAPI/userContext';


const Home = () => {
    const [name, setName] = useState('');
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    function handleLogin(){
        setUser(name);
        navigate("/dashboard")
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='enter your name' value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      
    </div>
  )
}

export default Home
