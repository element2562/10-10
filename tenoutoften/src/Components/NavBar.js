import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class extends Component {
render(){
return(
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
        
      <Link to="/">My Library</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem href="/addgames">
      Add Games
    </NavItem>
    <NavItem href="#">
      Logout
    </NavItem>
</Nav>
</Navbar>
)
}
}