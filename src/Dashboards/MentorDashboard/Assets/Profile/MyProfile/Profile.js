import React, { Component } from "react";
import axios from 'axios';
import Name from "./Assets/Name"
import About from "./Assets/About"
import Cookies from 'js-cookie'
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myProfile: {}
		};
	
	}

	componentDidMount() {
		var myid = Cookies.get('id')
		var persons;

		axios.get(`http://localhost:8081/mentor/profile/` + myid)
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
