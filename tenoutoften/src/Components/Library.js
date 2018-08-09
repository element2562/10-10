import React, { Component } from "react";
import { PageHeader, FormControl, Label, DropdownButton, MenuItem, Form } from "react-bootstrap";
import YourGames from "./YourGames";
import Api from "./ApiManager";
export default class Library extends Component {
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
    // handleSearch = (searchValue) => {
    //     Api.searchThroughLibrary(sessionStorage.getItem("User"), searchValue)
    //     .then(response => {
    //         this.setState({
    //             results: [response]
    //         })
    //         console.log(this.state.results);
            
    //     })
    // }
    componentDidMount(){
        this.populateState()
    }
    render() {
        let username = sessionStorage.getItem("Username");
        if(this.state.library.length > 0 && ! this.state.results){
        return(
            <React.Fragment>
            <PageHeader id="libraryTitle">{username}'s library</PageHeader>
            <Form>
            <FormControl placeholder="Search through your games!" autoFocus={true} className="gameSearch" onChange={(e) => this.setState({results: e.target.value})} />
            </Form>
            {/* <div>
            <Label>Sort by:</Label>
            <DropdownButton
            title="Your Rating"
            id="yourRating"
            >
            <MenuItem>Low to High</MenuItem>
            <MenuItem>High to Low</MenuItem>
            </DropdownButton>
            <DropdownButton
            title="External Rating"
            id="extRating"
            >
            <MenuItem>Low to High</MenuItem>
            <MenuItem>High to Low</MenuItem>
            </DropdownButton>
            </div> */}
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
    } else if(this.state.results){
        let searchResults = this.state.library.filter((game) => {return game.name.toLowerCase().match(this.state.results.toLowerCase())})
        return(
        <React.Fragment>
        <PageHeader id="libraryTitle">{username}'s library</PageHeader>
        <FormControl placeholder="Search through your games!" className="gameSearch" value={this.state.results} autoFocus={true} onChange={(e) => this.setState({results: e.target.value})} />
        {/* <p>Sort by:</p> */}
        {
        searchResults.map(games => (
        <YourGames 
        key={games.id}
        games={games} 
        testId={games.id}
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
    ))
    }
    </React.Fragment>
    )
    } 
    else {
        return(
            <React.Fragment>
            <PageHeader id="libraryTitle">{username}'s library</PageHeader>
            <h3>Click on the <strong>Add Games</strong> tab to populate your library!</h3>
            </React.Fragment>
        )
    }
    }
}