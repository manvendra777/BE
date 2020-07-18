import React, { Component } from "react";
import Header from "./Assets/Header/Header.js";
import Notification from "./Assets/Notifications/Notifications"
import Profile from "./Assets/Profile/MyProfile/Profile"
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates"
import Messaging from './Assets/Messaging/Messaging'
import Connections from "./Assets/Connections/Connections"
import Home from "./Assets/home/Home"

import TargetMentor from './Assets/Profile/MentorProfile/NotConnected/TargetMentor'
import MyMentor from './Assets/Profile/MentorProfile/Connected/MyMentor'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import MyInvestor from './Assets/Profile/InvestorProfile/Connected/MyInvestor'
import TargetInvestor from './Assets/Profile/InvestorProfile/NotConnected/TargetInvestor'
import Advertise from './Assets/Advertise/Advertise'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Feed from './Assets/home/Assets/Feed'
export default class StartupDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {
		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#e91e63',
				}
			}
		});

		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<Router >
						<Header />

						<div style={{ margin: '75px', marginLeft: '10px' }}>
							<ListOfOnlineCandidates/>
							<Advertise />
							<div style={{ marginTop: "5%" }}>
							</div>
							<div style={{ marginLeft: '18.5%', width: '80%' }}>
								<Route path="/communityDashboard/Profile" component={Profile} />
								<Route path="/communityDashboard/Notification" component={Notification} />
								<Route path="/communityDashboard/Messaging" component={Messaging} />
								<Route path="/communityDashboard/Connections" component={Connections} />
								<Route path="/communityDashboard/Home" component={Home} />
								
								
								<Route exact path="/communityDashboard/TargetMentor/:id" component={TargetMentor} />
								<Route exact path="/communityDashboard/MyMentor/:id" component={MyMentor} />

								<Route path="/communityDashboard/TargetInvestor/:id" component={TargetInvestor} />
								<Route path="/communityDashboard/MyInvestor/:id" component={MyInvestor} />
								<Route path="/communityDashboard/Ads" component={Advertise}></Route>
								
								<Route path="/communityDashboard/Feed/:Domain" component={Feed}></Route>
							</div>
						</div>

					</Router>

				</MuiThemeProvider>
			</div>);
	}
}