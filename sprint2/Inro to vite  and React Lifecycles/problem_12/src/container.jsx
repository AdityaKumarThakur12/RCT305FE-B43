import { useState, useEffect } from "react";

export let Container = ()=>{
    const [joke, setJoke] = useState("...Loading")

    async function getJoke(){
        try {
            const res = await fetch("https://official-joke-api.appspot.com/random_joke");
            const data = await res.json();
            setJoke(`${data.setup} -  ${data.punchline}`)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        getJoke()
    },[])

    return(
        <div className="container">
            <h1>Random Joke</h1>
            <div>
                <h2>
                    {joke}
                </h2>
            </div>
            <button onClick={getJoke}>Get new Joke</button>
        </div>
    )
}