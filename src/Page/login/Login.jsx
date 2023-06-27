import React, { useEffect, useState } from 'react'
import Header from '../headerPage/Header'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  const handleLogin = ()=>{
    const form = new FormData()
    form.append("email",email)
    form.append("password",password)
    const url = "http://localhost:8000/api/login"
    axios(url,{
      method:"POST",
      data:form,
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    }).then(res=>{
      if(res.data.email != email ){
        console.log("Email or Password incorrect");
      }else{
        localStorage.setItem("user_info",JSON.stringify(res.data))
        localStorage.setItem("is_login","1")
        window.location.href = "/add-pro"
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <Header/>
     <h1>Login</h1>
     <div className='col-sm-6 offset-sm-3'>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
        <br/>
        <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
        <br/>
        <button className='btn btn-primary' onClick={handleLogin}>Login</button>
     </div>
    </div>
  )
}
