import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/headerPage/Header';
import Login from './Page/login/Login';
import Register from './Page/register/Register';
import AddProduct from './Page/addProduct/AddProduct';
import UpdateProduct from './Page/updateProduct/UpdateProduct.jsx';
import ProductList from './Page/productList/ProductList';
import { useEffect } from 'react';
import Index from './web-site';

function App() {
  const isLogin = (localStorage.getItem("is_login") == "1")
  useEffect(()=>{
    console.log(window.location.pathname)
   },[window.location.pathname])
 
   const is_dashboard = window.location.pathname.includes("dashboard")
  return (
    <div className="App">
      <BrowserRouter>
      {!is_dashboard && <Routes>
                <Route path="/" element={<Index/>} />
              </Routes>}

      {is_dashboard &&
        <div>
        {isLogin ?
         ( <Routes path="dashboard">
            <Route path='/product' element={<ProductList/>}/>
            <Route path='/add-pro' element={<AddProduct/>}/>
            <Route path='/update-pro/:id' element={<UpdateProduct/>}/>
            <Route path='*' element={<ProductList/>}/>
          </Routes>):(
          <Routes path="dashboard" element={<Login/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Login/>}/>
          </Routes>)
        
        }
        </div>
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
