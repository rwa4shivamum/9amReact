import { useState } from "react";
import { RenderComp } from "./component/reuable.jsx";
export const App = () => {
  let students = [
    {
      id: 101,
      name: "Rahul",
      age: 20,
      course: "BCA",
      marks: 85,
    },
    {
      id: 102,
      name: "Priya",
      age: 21,
      course: "BCA",
      marks: 91,
    },
    {
      id: 103,
      name: "Amit",
      age: 20,
      course: "B.Tech",
      marks: 78,
    },
  ];
  const student4 = {
    id: 104,
    name: "sumit",
    age: 22,
    course: "B.Tech",
    marks: 91,
  };
  const student5 = {
    id: 105,
    name: "sumit",
    age: 22,
    course: "B.Tech",
    marks: 91,
  };
  students = [...students, student4,student5] //rest operator
  const [a,b,c,d,e] = students
  console.log(a)
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "lightblue",
        }}
      >
        <p>{a.name}</p>
        <p>{a.age}</p>
        <p>{a.course}</p>
        <p>{a.marks}</p>
      </div>
      {students.map((ele, i) => (
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "lightblue",
          }}
          key={ele.id}
        >
          <p>{ele.name}</p>
          <p>{ele.age}</p>
          <p>{ele.course}</p>
          <p>{ele.marks}</p>
        </div>
      ))}
    </>
  );
};
