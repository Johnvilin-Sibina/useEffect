import { useEffect, useState } from 'react'
import './App.css'

//Example for the whole component re-renderring whenever 
//a state changes
/*function App() {
  console.log("Hello");  //Side Effect
  const [count, setCount] = useState(0)
  console.log("How are you?"); //Side Effect

  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button>
    {count}
    <button onClick={()=>setCount(count-1)}>-</button> 
    </>
  )
}

export default App */

//Examlple of using useEffect() to solve the side effect
function App() {
 
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("API Call");
  },[]);
   

  return (
    <>
    <button onClick={()=>setCount(count+1)}>+</button>
    {count}
    <button onClick={()=>setCount(count-1)}>-</button> 
    </>
  )
}

export default App

