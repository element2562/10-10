import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class extends Component {
render(){
return(
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/library">My Library</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem>
    <Link to="#">
      Add Games
    </Link>
    </NavItem>
    <NavItem>
    <Link to="#">
      Logout
    </Link>
    </NavItem>
  </Nav>
</Navbar>
)
}
}