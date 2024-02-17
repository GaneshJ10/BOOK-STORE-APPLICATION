import React from 'react'
import "../css/Login.css"
import { useState } from 'react'
import axios from 'axios'
import{useNavigate} from 'react-router-dom'

const AddStudent = () => {
    const[roll,setRoll]=useState('')
    const[username,setUsername]=useState('')
    const[grade,setGrade]=useState('')
  const[password,setPassword]=useState('')
  const navigate= useNavigate()


  const  handleSubmit =(e)=>{
    e.preventDefault()
    const data = {
        roll,
        username,
        grade,
        password,
    };
axios.post('http://localhost:3000/student/register',data)
.then((res) => {
  console.log(res)
  console.log("you have alredy registered go do login to view the dashboard")
  if(res.data.registered)
  {
  navigate('/dashboard')
  }
  console.log(res)
 
  
})
.catch((error) => {
  console.log(error);
});
}
  return (
    <div className='student-form-container'>
        <form className='student-form' onSubmit={handleSubmit}>
            <h2 className='stu-title' >Add Student</h2>
            <div className='form-group'>
          <label htmlFor='roll'>Roll No:</label>
          <input type='text' id='roll' placeholder='Enter Roll Number' name='roll' onChange={(e)=> setRoll(e.target.value)}/> 
        </div>
        <div className='form-group'>
          <label htmlFor='username'>User Name:</label>
          <input type='text' id='username' placeholder='Enter User Name' name='username' onChange={(e)=> setUsername(e.target.value)}/> 
        </div>
        <div className='form-group'>
          <label htmlFor='grade'>Grade:</label>
          <input type='text' id='grade' placeholder='Enter Grade' name='grade' onChange={(e)=> setGrade(e.target.value)}/> 
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input type='text' id='password' placeholder='Enter Password' name='password' onChange={(e)=> setPassword(e.target.value)}/> 
        </div>
        <button type='submit'>Register</button>
             </form>
    </div>
  )
}

export default AddStudent