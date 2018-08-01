import React, { Component } from "react";
import { Form, InputGroup, Button, Modal, ModalDialog, ModalTitle, ModalHeader, ModalFooter, PageHeader } from "react-bootstrap";
import Api from "./ApiManager";
export default class extends Component {
    state = {
        show: false,
        username: "",
        password: ""

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
                window.location.reload();
            } else {
                alert("Try again dipshit");
            }
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
                <Form>
                <InputGroup>
                <label>Username</label><input />
                <label>Password</label><input />
                </InputGroup>
                </Form>
            </Modal.Body>
        
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
            </Modal>
            </div>
            <div>
            <Form id="loginForm">
                <label>Username</label>
                <input type="text" id="username" onChange={e => {
                    this.setState({username: e.target.value});    
                }} /> <br />
                <label>Password</label>
                <input type="password" id="password" onChange={e => {
                    this.setState({password: e.target.value});
                }} /> <br />
                <Button onClick={this.loginCheck}>Login</Button>
                <Button onClick={this.handleShow}>Register</Button>
            </Form>
            </div>
            </div>
        )
    }
}