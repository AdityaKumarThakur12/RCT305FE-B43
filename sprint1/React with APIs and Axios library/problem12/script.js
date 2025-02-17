const UncontrolledInput =()=>{
    const inputRef = React.useRef();
    const handleSubmit = ()=>{
        alert(inputRef.current.value)
        inputRef.current.value = "";
        
    }
    return(
        <form>
            <h1>Uncontrolled Form Fundamental</h1>
            <input type="text" placeholder="Enter the Text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

function App(){
    return(
        <UncontrolledInput/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)