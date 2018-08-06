import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews"
export default class extends Component {
    render() {
        return(
            <React.Fragment>
                {/* <NavBar /> */}
                <ApplicationViews />
            </React.Fragment>
        )
    }
}