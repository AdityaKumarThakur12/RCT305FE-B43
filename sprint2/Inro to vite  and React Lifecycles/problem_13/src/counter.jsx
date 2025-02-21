import { useState, useEffect } from "react"

export let Counter = ()=>{
    let [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(`counter value: ${count}`)
    }, [count])

    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}