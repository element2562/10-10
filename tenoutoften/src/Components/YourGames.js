import React, { Component } from "react";
import { Image, Button, ListGroupItem, FormGroup, FormControl, ControlLabel, Well } from "react-bootstrap";
import Api from "./ApiManager";
import Modal from "./Modal";
export default class EachGame extends Component {   
    state = {
        show: false
    }
    handleRating = () => {
        this.setState({show: true})
    }
    handleClose = () => {
        this.setState({show: false})
    }
    render(){
    return(
        <React.Fragment>
        <Modal 
        getComment={this.props.getComment}
        getRating={this.props.getRating} 
        handleShow={this.props.handleShow}
        populateState={this.props.populateState}
        handleClose={this.handleClose}
        games={this.props.games}
        show={this.state.show}
        showRating={this.props.showRating}
        yourRating={this.props.yourRating}
        comment={this.props.comment}
        />
        <ListGroupItem className="gameCards">
        <h2 className="gameTitle">{this.props.games.name}</h2>
        <Well>
        <Image src={this.props.games.picture} width="125" height="220" thumbnail />
        <p><strong>Summary: </strong>{this.props.games.summary}</p>
        <p><strong>Rating: </strong>{this.props.games.rating}</p>
        { (this.props.games.yourRating) ? (
        <div>
        <p><strong>Your Rating: </strong>{this.props.games.yourRating}/100</p>
        <p><strong> Your Comment: </strong>{this.props.games.comment}</p>
        </div>
        ) : <p>Click the rate button to review</p>
            }
        <Button id={this.props.games.id} onClick={e => {
            Api.deleteGame(e.target.id)
            .then(() => this.props.populateState());
        }}>Delete</Button>
        <Button onClick={() => {
            this.handleRating();
        }}>Rate</Button>
        </Well>
        </ListGroupItem>
        </React.Fragment>
    )
}
}