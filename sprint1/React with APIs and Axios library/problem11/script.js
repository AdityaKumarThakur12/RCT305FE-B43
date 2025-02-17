let {useState} = React;
let Form = ()=>{
    let [data, setData] = useState({username:""})

    function handleData(e){
        let {name,value} = e.target;
        setData({...data, [name] : value})

    }
    function handleSubmit(e){
        e.preventDefault();
        if(data.username==""){
            alert("error")
        }
        else{
            alert(`Your Entered Username is: ${data.username}`)
            console.log(data.username)
        }
        
        setData({username:""})
    }
    return(
        <>
        <h1>Controlled Form Basics</h1>
        <form onSubmit={handleSubmit}>
            <h3>Enter Username</h3>
            <input name="username" value={data.username} placeholder="username" onChange={handleData}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

function App(){
    return(
        <Form/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)