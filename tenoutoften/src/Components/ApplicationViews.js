import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import AddGames from "./AddGames";
import Library from "./Library";
import NavBar from "./NavBar";

export default class extends Component {
isAuthenticated = () => sessionStorage.getItem("User") !== null;
    render() {
        if(this.isAuthenticated()){
        return (
        <React.Fragment>
                <Route path="/" component={NavBar} />
                <Route exact path="/" component={Library} />
                <Route exact path="/addgames" render={props => {
                    return <AddGames {...props} />
                }} />
        </React.Fragment>
        )
    } else {
        return <Login />
    }
    }
}