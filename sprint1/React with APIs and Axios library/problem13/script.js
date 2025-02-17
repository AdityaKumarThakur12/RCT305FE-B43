function App(){
    const [emails, setEmails] = React.useState([""]);

    function handleEmailChange(indx, value){
        const newEmails = [...emails];
        newEmails[indx] = value;
        setEmails(newEmails);
    }
    function addEmailBtn(){
        setEmails([...emails, ''])
    }
    function handleSubmit(e){
        e.preventDeafult();
        console.log(emails)
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Dynamic form</h1>
            {emails.map((email, i)=>(
                <div key={i}>
                    <input type="email" value={email} onChange={(e)=> handleEmailChange(i,e.target.value)} placeholder="Enter Email" required/>
                </div>
            ))}
            <button onClick={addEmailBtn}>Add Email</button>
            <button type="submit">Submit</button>
        </form>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)