import {Navbar, Nav, NavDropdown,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.scss'
export default function Header() {
  const isLogin = (localStorage.getItem("is_login") == "1")
  const user = JSON.parse(localStorage.getItem('user_info'))
  
  const handleLogout = ()=>{
    localStorage.clear()
    window.location.href = "/login"
  }
  return (
    <div className='header'>
        <Navbar variant='dark'>
            <Navbar.Brand href='/'>E-Comm</Navbar.Brand>
              <Nav className='mr-auto nav-wrapper'>
                  {isLogin && 
                  <div className='homepage'>
                    <div>
                      <Link to="/add-pro">Add Product</Link>
                      <Link to="/update-pro">Update Product</Link>
                    </div>
                    <div className='dropdown'>
                        <NavDropdown title={user.name}>
                          <NavDropdown.Item onClick={handleLogout}>
                            Logout
                          </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                    
                  </div>
                  }
                  {!isLogin &&
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                  }
              </Nav>
        </Navbar>
    </div>
  )
}
