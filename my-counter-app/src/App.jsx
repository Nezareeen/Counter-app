import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const[count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);
  const [inputVisibility,setInputVisibility] = useState(true);

  return (
    <>
      <div>

        <button style={{background:"red"}} onClick={()=>{
          setInputVisibility(!inputVisibility);
        }}>Toggle visibility</button>

        {
          inputVisibility && (
            <input type="number" value={inputValue} onChange={(event)=>{
              console.log(event.target.value);
              setInputValue(event.target.value);
            }}/>
          )
        }

        
        <button style={{background:"red"}} onClick={()=>{
          setCount(parseInt(inputValue));
          setInputValue(0);
        }}>Set Counter Value</button>
        <button style={{background:"red"}} onClick={()=>{
          setCount(count+1);
        }}>count: {count}</button>
      </div>
    </>
  )
}

export default App
