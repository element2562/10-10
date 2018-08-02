import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import YourGames from "./YourGames";
import Api from "./ApiManager";
export default class extends Component {
    state = {
        library: [],
        show: false,
        rating: "",
        comment: ""
    }
    getRating = (rating) => {
        this.setState({rating: rating});
    }
    getComment = (comment) => {
        this.setState({comment: comment});
    }
    populateState = () => {
        Api.getGames(sessionStorage.getItem("User"))
        .then(games => {
            this.setState({library: games})
        })
    }
    handleRating = () => {
        this.setState({show: true})
    }
    handleClose = () => {
        this.setState({show: false})
    }
    componentDidMount(){
        this.populateState()
    }
    render() {
        let username = sessionStorage.getItem("Username");
        if(this.state.library.length > 0){
        return(
            <React.Fragment>
            <PageHeader>{username}'s library</PageHeader>
            {
                this.state.library.map(games => (
                        <YourGames 
                        key={games.id} 
                        games={games} 
                        populateState={this.populateState}
                        handleRating={this.handleRating}
                        handleClose={this.handleClose}
                        getRating={this.getRating}
                        getComment={this.getComment}
                        show={this.state.show}
                        rating={this.state.rating}
                        />
                )
            )
        }
            </React.Fragment>
        )
    } else {
        return(
            <h3>Click on the <strong>Add Games</strong> tab to populate your library!</h3>
        )
    }
    }
}