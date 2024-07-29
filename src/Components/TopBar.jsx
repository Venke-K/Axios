import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';


function TopBar() {

let {pathname} = useLocation()

  return <>

  <Navbar className="custom-navbar"  >
      <Container >
        <Navbar.Brand >Personal Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Link className={`text-decoration-none mr-10 ${pathname==='/home'? 'active' :""}`} to='/'><Nav.Item>Home</Nav.Item></Link> */}
            <Link className={`text-decoration-none mr-10 ${pathname==='/dashboard'? 'active' :""}`} to='/dashboard'> <Nav.Item>DashBoard</Nav.Item></Link>
            <Link className={`text-decoration-none mr-10 ${pathname==='/create'? 'active' :""}`} to='/create'><Nav.Item>Create</Nav.Item></Link>
            <Link className={`text-decoration-none mr-10 ${pathname==='/view'? 'active' :""}`} to='/view'><Nav.Item>View</Nav.Item></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default TopBar
