import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/home">
          Ran-Quote
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mx-3" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/mysuggestion">
              My Suggestion
            </Nav.Link>
            <Nav.Link className="mx-3" as={Link} to="/savedquotes">
              Saved Quotes
            </Nav.Link>
            <Button className="ml-3" variant="secondary" as={Link} to="/login">
              Login
            </Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
