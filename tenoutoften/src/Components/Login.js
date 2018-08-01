import React, { Component } from "react";
import { Form, InputGroup, Button, Modal, ModalDialog, ModalTitle, ModalHeader, ModalFooter } from "react-bootstrap";
export default class extends Component {
    state = {
        show: false
    }
    handleShow = () => {
        this.setState({show: true});
    }
    handleClose = () => {
        this.setState({show: false});
    }
    render() {
        return (
            <div>
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
            <Form>
                <label>Username</label>
                <input id="username" />
                <label>Password</label>
                <input id="password" />
                <Button>Login</Button>
                <Button onClick={this.handleShow}>Register</Button>
            </Form>
            </div>
            </div>
        )
    }
}