import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();

  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      obj.name.length < 3 ||
      !obj.email.includes("@") ||
      obj.password.length < 6 ||
      !/^[6-9]\d{9}$/.test(obj.phone)
    ) {
      alert("Please enter valid details");
      return;
    }

    const arr = JSON.parse(localStorage.getItem("students") || "[]");

    arr.push({ ...obj, id: Date.now() });

    localStorage.setItem("students", JSON.stringify(arr));

    navigate("/students");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />

      <button>Submit</button>
    </form>
  );
}
