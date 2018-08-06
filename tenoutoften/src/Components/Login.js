import React, { Component } from "react";
import { Form, Well, FormGroup, InputGroup, FormControl, ControlLabel, Button, Modal, PageHeader } from "react-bootstrap";
import Api from "./ApiManager";
export default class extends Component {
    state = {
        show: false,
        username: "",
        password: "",
        registerUsername: "",
        registerPassword: ""
    }
    handleShow = () => {
        this.setState({show: true});
    }
    handleClose = () => {
        this.setState({show: false});
    }
    loginCheck = () => {
        Api.getUsers(this.state.username)
        .then(response => { 
            if(response.length > 0 && response[0].password === this.state.password) {
                sessionStorage.setItem("User", response[0].id);
                sessionStorage.setItem("Username", response[0].username);
                window.location.reload();
            } else {
                alert("The username or password you entered is incorrect.");
            }
        })
    }
    handleRegister = () => {
        Api.addNewUser(this.state.registerUsername, this.state.registerPassword)
        .then(response => {
            sessionStorage.setItem("User", response.id);
            sessionStorage.setItem("Username", response.username);
            window.location.reload();
        })
    }
    render() {
        return (
            <div>
            <PageHeader id="PageHeader">
            Welcome to 10/10 <br />
            <small id="subtextHeader">Sign in or register to continue</small>
            </PageHeader>
            <div>
            <Modal show={this.state.show}>
            <Modal.Header>
            <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><em>Create a username and password and click register to continue!</em></p>
                <Form>
                <InputGroup>
                <label>Username</label><input  onChange={e => {
                    this.setState({registerUsername: e.target.value})
                }}/>
                <label>Password</label><input type="password" onChange={e => {
                    this.setState({registerPassword: e.target.value})
                }}/>
                </InputGroup>
                </Form>
            </Modal.Body>
        
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary" onClick={this.handleRegister}>Register</Button>
            </Modal.Footer>
            </Modal>
            </div>
            <div>
            <Well id="Login">
            <FormGroup>
            <Form>
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" id="username" onChange={e => {
                    this.setState({username: e.target.value});    
                }} /> <br />
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" id="password" onChange={e => {
                    this.setState({password: e.target.value});
                }} /> <br />
                <Button onClick={this.loginCheck}>Login</Button>
                <Button onClick={this.handleShow}>Register</Button>
            </Form>
            </FormGroup>
            </Well>
            </div>
            </div>
        )
    }
}