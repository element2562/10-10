import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export default class extends Component {
    render() {
        return (
            <Form>
                <label>Username</label>
                <input />
                <label>Password</label>
                <input />
                <Button>Login</Button>
            </Form>
        )
    }
}