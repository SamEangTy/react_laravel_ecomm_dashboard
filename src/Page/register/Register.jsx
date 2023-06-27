import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import Header from '../headerPage/Header'

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSignup = ()=>{
    let form = new FormData()
    form.append("name",name)
    form.append("email",email)
    form.append("password",password)
    let url = "http://localhost:8000/api/register"
    axios(url,{
        method:"POST",
        data:form,
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        }
    }).then(res=>{
      console.log(res);
      localStorage.setItem('user_info',JSON.stringify(res.data))
      localStorage.setItem('is_login',"1")
      window.location.href = "/add-pro"
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <Header/>
      <h1>Register</h1>
      <div className='col-sm-6 offset-sm-3'>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} className='form-control'/>
        <br />
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
        <br />
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
        <br />
        <button onClick={handleSignup} className='btn btn-primary'>Sign Up</button>
      </div>
    </div>
  )
}
