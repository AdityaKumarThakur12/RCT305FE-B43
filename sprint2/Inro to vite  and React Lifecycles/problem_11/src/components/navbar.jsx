export let Navbar = ()=>{
    return(
        <div className="navbar" style={{backgroundColor:"red", padding:"20px", display:"flex", alignItems:"center", justifyContent:"space-evenly"}}>
            <button style={{padding:"8px 15px", borderRadius:"8px"}}><a>Home</a></button>
            <button style={{padding:"8px 15px", borderRadius:"8px"}}><a>About</a></button>
            <button style={{padding:"8px 15px", borderRadius:"8px"}}><a>Contact</a></button>
        </div>
        
    )
}