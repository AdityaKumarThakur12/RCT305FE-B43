import { useRef, useEffect } from "react";

function App() {
  const countRef = useRef(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []); 

  return (
    <div>
      <button
        onClick={() => {
          
          console.log(`Button clicked ${countRef.current += 1} times`);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default App;
