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
import FindInvestor from './Assets/FindInvestor/FindInvestor'
import MyInvestor from './Assets/Profile/InvestorProfile/Connected/MyInvestor'
import TargetInvestor from './Assets/Profile/InvestorProfile/NotConnected/TargetInvestor'
import Advertise from './Assets/Advertise/Advertise'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MyAdvertise from './Assets/MyAdvertise/MyAvertise'
import ViewAd from './Assets/MyAdvertise/Assets/ViewAd'

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
					main: '#2196f3',
				}
			}
		});

		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<Router >
						<Header />

						<div style={{ margin: '75px', marginLeft: '10px' }}>
							<ListOfOnlineCandidates />
							<Advertise />
							<div style={{ marginTop: "5%" }}>
							</div>
							<div style={{ marginLeft: '18.5%', width: '80%' }}>
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
								<Route path="/startupDashboard/Ads" component={Advertise}></Route>
								<Route path="/startupDashboard/MyAdvertise" component={MyAdvertise}></Route>
								<Route path="/startupDashboard/viewAd/:id" component={ViewAd} />
							</div>
						</div>

					</Router>

				</MuiThemeProvider>
			</div>);
	}
}