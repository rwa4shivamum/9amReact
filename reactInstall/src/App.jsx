import { useState } from 'react'
import './App.css'
import Update from './update';
import Update2 from './Update2';

function App() {
  const [count, setCount] = useState(3)
  //currentState, updateState = useState(iniitalState)
  //count = 0, setCount is Function to update state
  //props-> is used to show the state into another component but not change
  return (
    <>
    {/* <h1>{count}</h1> */}
    <button onClick={()=>{setCount(count + 1);}}>Increase</button>
    <Update count1={count}/>
    </>
  )
}

export default App
