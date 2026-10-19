'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [obj, setObj] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
  })
  const [arrOfObj, setarrOfObj] = useState(null)
  const handlechange =(e)=>{
    setObj({
      ...obj,
      [e.target.name]:e.target.value
    })
  }
  useEffect(()=>{
        let localStorageArr = JSON.parse(localStorage.getItem("userDetail"));
        setarrOfObj(localStorageArr);
  },[])
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(obj)
    let arrOfObj = [];
    let localStorageArr = localStorage.getItem("userDetail");
    console.log(localStorageArr)
    arrOfObj = JSON.parse(localStorageArr)
    arrOfObj.push(obj)
    localStorage.setItem("userDetail", JSON.stringify(arrOfObj))
  }
  if(arrOfObj !== null){
    console.log(arrOfObj)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={obj.name} onChange={handlechange}/>
    <input type="email" name="email" value={obj.email} onChange={handlechange}/>
    <input type="password" name="password" value={obj.password} onChange={handlechange}/>
    <input type="number" name="phone" value={obj.phone} onChange={handlechange}/>
    <button type="submit">Submit</button>
    </form>
    <ol>
      {arrOfObj?.map((ele, index)=>(
        <li key={index}>Name:{ele.name}, Email:{ele.email} , Password:{ele.password}, Phone:{ele.phone}</li>
      ))}
    </ol>
    </>
  );
}
