import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Single Use Planet</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/items">Browse Items</Nav.Link>
        <Nav.Link href="/resources">Zero Waste Resources</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/feedback">Feedback</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar