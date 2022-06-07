import React from 'react'
import {
    Navbar, 
    Container, 
    Nav, 
    Form, 
    FormControl, 
    Button
} 
from "react-bootstrap";
import {Link , useNavigate} from "react-router-dom";
import Cookies from 'js-cookie'




const Header = () => {

  const isLogin = Cookies.get("token")
  const navigate = useNavigate()

  return (
    <Navbar bg="light" expand="dark">
  <Container fluid>
    <Navbar.Brand as={Link} to="/">React Mini Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        { isLogin ? (
          <>
          <Nav.Link as={Link} to ="/dashboard-admin">Dashboard Admin</Nav.Link>
          <Nav.Link as={Link} to ="/register">Register</Nav.Link>  
          <Nav.Link 
            onClick = {() => {
              Cookies.remove("token")
              navigate("/login");
           }}
          > 
           Logout
          </Nav.Link>
            
          </>
          ) : (
            <Nav.Link as={Link} to ="/login">Login</Nav.Link>
          )}
        
     
      </Nav>

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="secondary">Search</Button> 
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header