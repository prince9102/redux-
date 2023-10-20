import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
const [data , setdata] = useState()

useEffect(()=>{

  setInterval(() => {
    setdata(localStorage.getItem('email'))
  }, 10);
},[])

  return (
    <>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Navbar</Navbar.Brand>
          <Nav className="me-auto">
          {!data ?
          <>
            <Nav.Link  as={Link} to={'/login'} >Login</Nav.Link>
            <Nav.Link as={Link} to={'/reg'} >Register</Nav.Link>

            </>
            :
            <>
            <Nav.Link as={Link} to={'/login'} >Logout</Nav.Link>
            <Nav.Link as={Link} to={'/doct'} >Docter</Nav.Link>
            <Nav.Link as={Link} to={'/bed'} >Bed</Nav.Link>
            <Nav.Link as={Link} to={'/patient'} >NewPatient</Nav.Link>
            <Nav.Link as={Link} to={'/table'} >Table</Nav.Link>
            <Nav.Link as={Link} to={'/delete'} >Release</Nav.Link>
            
            </>
          }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header