import React from "react";
import { Image, Button, Modal, Form, InputGroup } from "react-bootstrap";
import Api from "./ApiManager";
export default props => {
    let showRating = props.ratingShow;
    return(
        <React.Fragment>
        <h3>{props.games.name}</h3>
        <Image src={props.games.picture} width="125" height="220" thumbnail />
        <p><strong>Summary: </strong>{props.games.summary}</p>
        <p><strong>Rating: </strong>{props.games.rating}</p>
        { (props.games.yourRating) ? (
        <div>
        <p><strong>Your Rating: </strong>{props.games.yourRating}/100</p>
        <p><strong> Your Comment: </strong>{props.games.comment}</p>
        </div>
        ) : <p>Click the rate button to review</p>
            }
        <Button id={props.games.id} onClick={e => {
            Api.deleteGame(e.target.id)
            .then(() => props.populateState());
        }}>Delete</Button>
        <Button onClick={() => {
            props.handleRating();
        }}>Rate</Button>
        <Modal show={props.show}>
            <Modal.Header>
            <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><em>Create a username and password and click register to continue!</em></p>
                <Form>
                <InputGroup>
                <label>Rating</label><input type="number" min="0" max="100" onChange={(e) => {
                    props.getRating(e.target.value);
                }}/>
                <label>Comment</label><input type="text" onChange={(e) => {
                    props.getComment(e.target.value);
                }}/>
                </InputGroup>
                </Form>
            </Modal.Body>
        
            <Modal.Footer>
            <Button onClick={props.handleClose}>Close</Button>
            <Button bsStyle="primary" id={props.games.id} onClick={(e) => {
                if(props.rating > 100 || props.rating < 0){
                    alert("Sorry, but your rating must be between 0 and 100.");
                } else {
                    console.log(props.yourRating);
                    
                    Api.addRating(e.target.id, props.yourRating, props.comment)
                    .then(response => {
                        props.populateState();
                        props.showRating();
                        props.handleClose();
                    })
                }
            }}>Register</Button>
            </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}