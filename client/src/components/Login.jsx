import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
import axios from 'axios'
import "../css/Login.css"


const Login = ({setRoleVar}) => {
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[role,setRole]=useState('admin')
  const navigate= useNavigate()


    axios.defaults.withCredentials=true;
  const  handleSubmit =()=>{
  
        // Define the data to be sent
        const data = {
            username,
            password,
            role
        };
    axios.post('http://localhost:3000/auth/login',data)
    .then((res) => {
      console.log(res)
      if(res.data.login && res.data.role==='admin'){
        setRoleVar('admin')
        navigate('/dashboard')
      }
      else if(res.data.login && res.data.role==='student'){
        setRoleVar('student')
        navigate('/')
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='login_page'>
      <div className='login-container'>
        <h2 className='login-title'>Login</h2><br/>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input type='text' placeholder='Enter Username'
          onChange={(e)=> setUsername(e.target.value)}/> 
        </div>
        <div className='form-group'>
          <label htmlFor=' password'>Password:</label> 
          <input type='password' placeholder='Enter Password' 
          onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select name='role' id='role' 
          onChange={(e)=> setRole(e.target.value)}>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
            </select> 
        </div>
        <button className='btn-login' onClick={handleSubmit}>Login</button>
      </div>
    </div>
  )
}

export default Login