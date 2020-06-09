import React, { Component } from "react";
import Header from "./Assets/Header/Header.js";
import Notification from "./Assets/Notifications/Notifications"
import Profile from "./Assets/Profile/Profile.js"
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates"
import Messaging from './Assets/Messaging/Messaging'
import Connections from "./Assets/Connections/Connections"
import Home from "./Assets/home/Home"
export default class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currComponent:'3'
		};
	}
	showComponents=(props)=>{
		switch (this.state.currComponent) {
			case '1':
				return (<Profile/>)
				break;
				
			case '2':
				return (<Notification/>)
				break;

			case '3':
				return (<Messaging/>)
				break;

			case '4':
				return (<Connections/>)
				break;

			case '5':
				return (<Home/>)
				break;

			default :
				return (<Profile/>)
				break;
		}
	}
	setProfile=()=>{
		this.setState({currComponent:'1'})
	}
	setNotifications=()=>{
		this.setState({currComponent:'2'})
	}
	setMessagin=()=>{
		this.setState({currComponent:'3'})
	}
	setConnections=()=>{
		this.setState({currComponent:'4'})
	}
	setHome=()=>{
		this.setState({currComponent:'5'})
	}
	render() {
		return <div><Header home={this.setHome} connections={this.setConnections} messaging={this.setMessagin} notification={this.setNotifications} profile={this.setProfile} />
					<div style={{margin:'75px'}}>
					{this.showComponents()}
					<ListOfOnlineCandidates/>
					</div>
				</div>;
	}
}