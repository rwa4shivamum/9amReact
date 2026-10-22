"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const validateInput = (obj) =>{
    if(!obj.name || !obj.email || !obj.password || !obj.phone){
      return [false,"All Input Required"]
    }else if(!obj.email.includes("@gmail.com") || !obj.password.length >= 8 || !obj.phone != 10){
      return [false,"Not input given Proper"]
    }
    return [true]
  }
  const [arrOfObj, setArrOfObj] = useState([]);
  const [update, setUpdate] = useState(null);

  // Load data from localStorage
  useEffect(() => {
    const localStorageArr = JSON.parse(
      localStorage.getItem("userDetail") || "[]",
    );

    setArrOfObj(localStorageArr);
  }, []);

  // Handle input changes
  const handlechange = (e) => {
    setObj({
      ...obj,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update user
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = validateInput(obj)
    if(valid[0] === false){
      console.log(valid)
      alert(valid[1])
      return false
    }
    let finalArry;

    if (update !== null) {
      // Update existing user
      finalArry = arrOfObj.map((ele, index) => {
        if (index === update) {
          return obj;
        }
        return ele;
      });
    } else {
      // Add new user
      finalArry = [...arrOfObj, obj];
    }

    setArrOfObj(finalArry);

    localStorage.setItem("userDetail", JSON.stringify(finalArry));

    // Reset form
    setObj({
      name: "",
      email: "",
      password: "",
      phone: "",
    });

    setUpdate(null);
  };

  // Edit user
  const handleEdit = (index) => {
    setObj({ ...arrOfObj[index] });
    setUpdate(index);
  };

  // Delete user
  const handleDelete = (index) => {
    const finalArry = arrOfObj.filter((ele, i) => i !== index);

    setArrOfObj(finalArry);

    localStorage.setItem("userDetail", JSON.stringify(finalArry));

    // Reset form if the edited user is deleted
    if (update === index) {
      setObj({
        name: "",
        email: "",
        password: "",
        phone: "",
      });

      setUpdate(null);
    } else if (update !== null && update > index) {
      setUpdate(update - 1);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={obj.name}
          onChange={handlechange}
      
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={obj.email}
          onChange={handlechange}
      
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={obj.password}
          onChange={handlechange}
      
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone"
          value={obj.phone}
          onChange={handlechange}
      
        />

        <button type="submit">
          {update !== null ? "Update User" : "Submit"}
        </button>

        {update !== null && (
          <button
            type="button"
            onClick={() => {
              setUpdate(null);
              setObj({
                name: "",
                email: "",
                password: "",
                phone: "",
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <ol>
        {arrOfObj.map((ele, index) => (
          <li key={index}>
            Name: {ele.name}, Email: {ele.email}, Phone: {ele.phone}
            <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
