import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCOunt] = useState(0)
  const [data, setData] = useState(null)
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data1)=> setData(data1.products));
  },[])
  //to handle side effect we useEffect, for e.g. API call, 
  data ? localStorage.setItem("products",JSON.stringify(data)) : undefined
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increse2ndCOunt
      </button>
      <h1>{count1}</h1>
      <button
        onClick={() => {
          setCOunt(count1 + 1);
        }}
      >
        Increse2ndCOunt
      </button>
    </>
  );
}

export default App
