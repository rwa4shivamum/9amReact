import React, { useState } from 'react'

const UseStateWithExample = () => {
    const data = [
      {
        id: 1, // number
        name: "Alice", // string
        isActive: true, // boolean
        score: 95.5, // number (float)
        tags: ["admin", "user"], // array
        meta: {
          // object
          role: "manager",
          joined: null, // null
        },
      },
      {
        id: 2,
        name: "Bob",
        isActive: false,
        score: 72,
        tags: ["guest"],
        meta: {
          role: "viewer",
          joined: "2024-01-15",
        },
      },
    ];
    console.log(data[1].meta.role)
    const [state, updateState] = useState(data)
  return (
    <div>
      {state.map((ele) => (
        <div key={ele.id}>
          <h5>Name:{ele.name}</h5>
          <p>isAvtive:{ele.isActive ? "True" : "False"}</p>
          <p>score:{ele.score}</p>
          <ul>
            {ele.tags.map((ele, index) => (
              <li key={index}>tags:{ele}</li>
            ))}
          </ul>
          <p>Role:{ele.meta.role}</p>
          <p>Joined:{}</p>
            {Object.entries(ele.meta).map((ele, index)=>(
                <p key={index}>{ele[0]}:{ele[1]}</p>
            ))}
        </div>
      ))}
    </div>
  );
}

export default UseStateWithExample
