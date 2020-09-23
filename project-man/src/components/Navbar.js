import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default () => {
  // just an example, needs customising
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/clients">Clients</Nav.Link>
          <Nav.Link href="/employees">Employees</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};
