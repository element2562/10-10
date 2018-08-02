import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import YourGames from "./YourGames";
import Api from "./ApiManager";
export default class extends Component {
    state = {
        library: [],
        show: false,
        ratingShow: false
    }
    getRating = (rating) => {
        this.setState({yourRating: rating});
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
    showRating = () => {
        this.setState({ratingShow: true});
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
                        yourRating={this.state.yourRating}
                        comment={this.state.comment}
                        showRating={this.showRating}
                        seeRating={this.state.showRating}
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