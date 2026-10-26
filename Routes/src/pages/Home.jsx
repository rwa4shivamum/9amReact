import React, { useState } from 'react'

const Home = () => {
    const initialObj = {
        name:"",
        email:"",
        password:"",
        phone:""
    }
    const [obj, setObj] = useState(initialObj)
    const handleChange = (e) =>{
        setObj({
            ...obj,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={obj.name} onChange={handleChange}/>
        <input type="text" name='emial' value={obj.email} onChange={handleChange}/>
        <input type="text" name='password' value={obj.password} onChange={handleChange}/>
        <input type="text" name='phone' value={obj.phone} onChange={handleChange}/>
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default Home
