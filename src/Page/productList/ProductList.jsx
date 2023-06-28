import React, { useEffect, useState } from 'react'
import Header from '../headerPage/Header'
import axios from 'axios'
import { Table } from 'react-bootstrap'

export default function ProductList() {
  const [proList, setProList] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8000/api/listPro").then(res=>{
        setProList(res.data)
    }).catch(err=>{
        console.log(err);
    })
  },[])
  const handleDelete = (id)=>{
    axios.delete("http://localhost:8000/api/deletePro/"+id).then(res=>{
        console.log(res.data);
    }).catch(err=>{
        console.log(err);
    })
  }
  return (
    <div>
      <Header/>
      <h1>Product List have {proList.length}</h1>
      <Table style={{width:"80%"}} className='m-auto'>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Des</th>
            <th>Image</th>
            <th>Action</th>
        </tr>
        </thead>
        
        {
            proList.map((pro,index)=>{
                return(
                <tbody key={pro.id}>

                <tr >
                    <td>{pro.id}</td>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
                    <td>{pro.des}</td>
                    <td><img style={{width:100}} src={"http://localhost:8000/"+pro.file_path} alt="Image not found" /></td>
                    <td>
                        <button className='btn btn-primary' style={{marginRight:5}}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>handleDelete(pro.id)}>Delete</button>
                    </td>
                </tr>
                </tbody>
                )
            })
        }
      </Table>
      
    </div>
  )
}
