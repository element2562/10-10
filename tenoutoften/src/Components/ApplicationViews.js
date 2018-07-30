import React, { Component } from "react";
import NavBar from "./NavBar";
import { Route } from "react-router-dom";
import Login from "./Login";
export default class extends Component {
    render() {
        return (
        <Route path="/" component={Login} />
        )
    }
}