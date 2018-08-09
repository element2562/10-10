import React from "react";
import { Modal, FormGroup, ControlLabel, Button, FormControl } from "react-bootstrap";
import Api from "./ApiManager";
export default props => {
    return (
    <Modal show={props.show}>
    <Modal.Header>
    <Modal.Title>Review</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <p><em>Give your rating and a comment then click submit!</em></p>
        <FormGroup>
        <ControlLabel>Rating</ControlLabel><FormControl type="number" min="0" max="100" onChange={(e) => {
            props.getRating(e.target.value);
        }}/>
        <ControlLabel>Comment</ControlLabel><FormControl onChange={(e) => {
            props.getComment(e.target.value);
        }}/>
        </FormGroup>
    </Modal.Body>

    <Modal.Footer>
    <Button onClick={props.handleClose}>Close</Button>
    <Button bsStyle="primary" id={props.games.id} onClick={(e) => {
        if(props.yourRating > 100 || props.yourRating < 0 || props.yourRating === undefined){
            alert("Sorry, but your rating must be between 0 and 100.");
        } else {
            console.log(e.target.id);
            
            Api.addRating(e.target.id, props.yourRating, props.comment)
            .then(response => {
                props.populateState();
                props.showRating();
                props.handleClose();
            })
        }
    }}>Submit</Button>
    </Modal.Footer>
    </Modal>
    )
}