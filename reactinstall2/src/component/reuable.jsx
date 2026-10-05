import { Compotwo } from "./compotwo.jsx";

export function RenderComp(){
    const students = {
        "name":"renish",
        "age":19
    }
    console.log(students.name)
    return (
      <>
        <div
          style={{
            height: "200px",
            width: "100px",
            backgroundColor: "lightblue",
          }}
        >
          <h1>{students.name}</h1>
          {/* <h3>{students.age}</h3> */}
          <h3>{students.age}</h3>
          <Compotwo />
        </div>
      </>
    );
}