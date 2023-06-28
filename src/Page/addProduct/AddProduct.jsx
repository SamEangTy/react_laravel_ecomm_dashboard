import React, { useState } from 'react'
import Header from '../headerPage/Header'
import axios from 'axios'
export default function AddProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [des, setDes] = useState("")
  const [file, setFile] = useState("")

  const handleAdd = ()=>{
    console.log(name,price,des,file.name);
    // return false
    const form = new FormData()
    form.append("name",name)
    form.append("price",price)
    form.append("des",des)
    form.append("file",file)
    let url = "http://localhost:8000/api/addPro"
    axios.post(url,form).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div>
      <Header/>
       <br />
       <h1>Add Product</h1>
       <div className='col-sm-6 offset-sm-3'>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} className='form-control'/>
        <br />
        <input type="text" placeholder='Price' onChange={(e)=>setPrice(e.target.value)} className='form-control'/>
        <br />
        <input type="text" placeholder='Des' onChange={(e)=>setDes(e.target.value)} className='form-control'/>
        <br />
        <input type="file" placeholder='File' onChange={(e)=>setFile(e.target.files[0])} className='form-control'/>
        <br />
        <button className='btn btn-primary' onClick={handleAdd}>Add</button>
       </div>
    </div>
  )
}
