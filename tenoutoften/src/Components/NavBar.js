import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


export default class extends Component {
render(){
  let username = sessionStorage.getItem("Username");
return(
  <React.Fragment>
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
<NavDropdown title={username} id="user-dropdown">
<MenuItem id="userDrop" onClick={() => {
      sessionStorage.removeItem("User")
      window.location.reload();
    }}>
      Logout
    </MenuItem>
</NavDropdown>
</Nav>
</Navbar>

</React.Fragment>
)
}
}