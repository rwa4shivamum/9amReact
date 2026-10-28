import { useState, useMemo } from "react";

export default function App() {
  const [num, setNum] = useState(5);
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");

    let fact = 1;

    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }

    return fact;
  }, [num]);
  //facorial=>7->72032
  return (
    <div>
      <h2>Number: {num}</h2>
      <h2>Factorial: {factorial}</h2>

      <button onClick={() => setNum(num + 1)}>Increase Number</button>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

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
