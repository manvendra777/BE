import React, { Component } from "react";
import axios from 'axios';
import Name from "./Assets/Name"
import About from "./Assets/About"
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myProfile: {}
		};
	
	}

	componentDidMount() {
		var id = '5f09f43ff0612e2e4cc7db54'
		var persons;

		axios.get(`http://localhost:8081/investor/profile/` + id)
			.then(res => {
				persons = res.data;
				console.log(persons);
				this.setState({ myProfile: persons })
			})
	}
	render() {
		return <div style={{ right: "25%", float: "right", position: "relative" }}>
			<Name data={this.state.myProfile} />
		</div>;
	}
}