import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Api from "./ApiManager";
import Game from "./Game";
export default class extends Component {
    state = {
        results: [],
        library: []
    }
    searchForGames = (e) => {
        return Api.getFromExternalApi(e)
        .then(e => e.json())
    }
    checkForGame = () => {
        this.state.library.map(item => {
            this.state.results.map(key => {
                
                if(item.id === key.id){
                    console.log("true", item.id, key.id)
                    this.setState({isInLibrary: true})
                    
                } else {
                    console.log("false", item.id, key.id)
                    this.setState({isInLibrary: false})
                }
            })
        })
    }
    componentDidMount() {
        Api.getGames(sessionStorage.getItem("User"))
        .then(response => {
            console.log(response);
            
            this.setState({
                library: response
            })
        })
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
                    
                    <Game key={game.id} isInLibrary={this.state.isInLibrary} games={game} index={index} results={this.state.results} library={this.state.library} />
                ))}
            </div>
            </React.Fragment>
        )
    }
}