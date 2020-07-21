
import React, { Component } from "react";
import axios from 'axios';
import Name from "./Assets/Name"
import Cookies from 'js-cookie'
export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myProfile: {}
		};
	
	}

	componentDidMount() {
		var id = Cookies.get('id')
		var persons;

		axios.get(`http://54.237.17.61/management/startup/profile/` + id)
			.then(res => {
				persons = res.data;
				console.log(persons);
				this.setState({ myProfile: persons })
			})
	}
	render() {
		return <div style={{width:'60%',marginLeft:'auto',marginRight:'auto' }}>
			<Name data={this.state.myProfile} />
			
		</div>;
	}
}