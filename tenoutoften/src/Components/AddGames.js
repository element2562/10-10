import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Api from "./ApiManager";
import Game from "./Game";
export default class extends Component {
    state = {
        results: []
    }
    searchForGames = (e) => {
        return Api.getFromExternalApi(e)
        .then(e => e.json())

    }
    render(){
        return(
            <React.Fragment>
            <Form>
                    <FormControl id="gameSearch" placeholder="Search for a game!" onChange={e => {
                        this.searchForGames(e.target.value)
                        .then(response => {
                            this.setState({
                                results: response
                            })
                        })
                    }} />
            </Form>
            <div>
                {this.state.results.map((game, index) => (
                    
                    <Game key={game.id} games={game} index={index} results={this.state.results} />
                ))}
            </div>
            </React.Fragment>
        )
    }
}