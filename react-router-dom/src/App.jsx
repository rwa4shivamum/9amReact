import { Routes, Route, Link } from "react-router-dom";

import DeleteStudent from "./DeleteStudent";
import Form from "./Form";
import Students from "./Students";

export default function App() {
  return (
    <>
      <Link to="/add">Add Student</Link> |{" "}
      <Link to="/students">Student List</Link>
      <Routes>
        <Route path="/add" element={<Form />} />
        <Route path="/students" element={<Students/>} />
        <Route path="/delete/:id" element={<DeleteStudent />} />
      </Routes>
    </>
  );
}
