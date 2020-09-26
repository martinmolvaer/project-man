import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default () => {
  // just an example, needs customising
  return (
    
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Navbar.Brand>
        <Link style={{textDecoration: "none", color: "black"}} to="/">
          Dashboard
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link >
            <Link style={{textDecoration: "none", color: "black"}} to="/projects">
              Projects
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={{textDecoration: "none", color: "black"}} to="/clients">
              Clients
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link style={{textDecoration: "none", color: "black"}} to="/employees">
              Employees
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
