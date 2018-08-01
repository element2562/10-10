import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import YourGames from "./YourGames";
import Api from "./ApiManager";
export default class extends Component {
    state = {
        library: []
    }
    componentDidMount(){
        Api.getGames()
        .then(games => {
            this.setState({library: games})
        })
    }
    render() {
        return(
            <React.Fragment>
            <PageHeader>Your library</PageHeader>
            {
                this.state.library.map(user => {
                    return user.games.map(games => (
                        <YourGames key={games.id} games={games} />
                    ))
                })
            }
            </React.Fragment>
        )
    }
}