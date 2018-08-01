import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import AddGames from "./AddGames";
export default class extends Component {
    render() {
        return (
        <React.Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/addgames" component={AddGames} />
        </React.Fragment>
        )
    }
}