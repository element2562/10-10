import React from "react";
import { Image } from "react-bootstrap";

export default props => {
    return(
        <React.Fragment>
        <h3>{props.games.name}</h3>
        <Image src={props.games.picture} />
        <p><strong>Summary: </strong>{props.games.summary}</p>
        </React.Fragment>
    )
}