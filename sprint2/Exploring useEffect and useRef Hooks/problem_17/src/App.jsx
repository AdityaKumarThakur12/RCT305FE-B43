import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(`State updated: ${number}`);
  }, [number]); 

  return (
    <div>
      <p>Current Number: {number}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100))}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;
