import React, { Component } from "react";

import Name from "./Assets/Name"
import About from "./Assets/About"
export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <div style={{right:"25%",float:"right",position:"relative"}}>
		<Name/>
		<About/>
		</div>;
	}
}
