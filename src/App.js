import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/headerPage/Header';
import Login from './Page/login/Login';
import Register from './Page/register/Register';
import AddProduct from './Page/addProduct/AddProduct';
import UpdateProduct from './Page/updateProduct/UpdateProduct.jsx';
import ProductList from './Page/productList/ProductList';

function App() {
  const isLogin = (localStorage.getItem("is_login") == "1")
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
        {isLogin &&
          <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/add-pro' element={<AddProduct/>}/>
            <Route path='/update-pro/:id' element={<UpdateProduct/>}/>
            {/* <Route path='*' element={<AddProduct/>}/> */}
        </Routes>
        }
        {!isLogin &&
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Login/>}/>
          </Routes>
        
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
