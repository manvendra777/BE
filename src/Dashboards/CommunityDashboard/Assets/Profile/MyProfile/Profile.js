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
		var id = '5ed7d3b239ff0059a0a9980e'
		var persons;

		axios.get(`http://localhost:8082/community/profile/` + id)
			.then(res => {
				persons = res.data;
				console.log(persons);
				this.setState({ myProfile: persons })
			})
	}
	render() {
		return <div style={{width:'84%' }}>
			<Name data={this.state.myProfile} />
		</div>;
	}
}
