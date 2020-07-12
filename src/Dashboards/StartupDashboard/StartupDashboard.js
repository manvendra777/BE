import React, { Component } from "react";
import Header from "./Assets/Header/Header.js";
import Notification from "./Assets/Notifications/Notifications"
import Profile from "./Assets/Profile/MyProfile/Profile"
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates"
import Messaging from './Assets/Messaging/Messaging'
import Connections from "./Assets/Connections/Connections"
import Home from "./Assets/home/Home"
import FindMentors from './Assets/FindMentors/FindMentors'
import TargetMentor from './Assets/Profile/MentorProfile/NotConnected/TargetMentor'
import MyMentor from './Assets/Profile/MentorProfile/Connected/MyMentor'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Cookie from './Cookie'
import FindInvestor from './Assets/FindInvestor/FindInvestor'
import FindByCapacity from "./Assets/FindInvestor/FindByCapacity.js";
import MyInvestor from './Assets/Profile/InvestorProfile/Connected/MyInvestor'
import TargetInvestor from './Assets/Profile/InvestorProfile/NotConnected/TargetInvestor'

export default class StartupDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
		
	}
	
	render() {

		return (
			<div>

				<Router >
					<Header/>

					<div style={{ margin: '75px' }}>
						<ListOfOnlineCandidates />
					
					<Route path="/startupDashboard/Profile" component={Profile} />
					<Route path="/startupDashboard/Notification" component={Notification} />
					<Route path="/startupDashboard/Messaging" component={Messaging} />
					<Route path="/startupDashboard/Connections" component={Connections} />
					<Route path="/startupDashboard/Home" component={Home} />
					<Route path="/startupDashboard/FindMentors" component={FindMentors} />
					<Route path="/startupDashboard/FindInvestor" component={FindInvestor} />
					<Route exact path="/startupDashboard/TargetMentor/:id" component={TargetMentor} />
					<Route exact path="/startupDashboard/MyMentor/:id" component={MyMentor} />
					<Route path="/startupDashboard/TargetInvestor/:id" component={TargetInvestor} />
					<Route path="/startupDashboard/MyInvestor/:id" component={MyInvestor} />
					<Route path="/startupDashboard/cookie/" component={Cookie}></Route>
					</div>
				</Router>


			</div>);
	}
}