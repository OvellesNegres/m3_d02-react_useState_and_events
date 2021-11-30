import { useState } from "react";

const normalTheme = {
    backgroundColor: "yellow",
    color: "blue",
    width: "600px",
    height: "300px"
  }
  const invertedTheme = {
    backgroundColor: "blue",
    color: "yellow",
    width: "600px",
    height: "300px"
  }

export default function SpecialDiv() {
    const [theme, setTheme] = useState(normalTheme) // This is called a "hook" because gives you access to insed React render operations
  
    return (
      <>
        <h1>Hello Iornhackers!</h1>
        <button onClick={()=>setTheme(invertedTheme)} > Invert theme </button>
        <button onClick={()=>setTheme(normalTheme)} > Reset theme </button>
        <div style={theme}> This is a special div</div>
      </>
    );
  }
  
  