import { useState, useCallback } from "react";

function Child({ handleClick }) {
  console.log("Child rendered");

  return <button onClick={handleClick}>Increase Count</button>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shivam");

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>

      <h3>Count: {count}</h3>
      <h3>Name: {name}</h3>

      <button onClick={() => setName("Rahul")}>Change Name</button>

      <hr />

      <h2>Child Component</h2>
      <Child handleClick={handleClick} />
    </div>
  );
}
