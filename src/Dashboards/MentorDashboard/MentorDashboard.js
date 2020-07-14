import React, { Component } from "react";
import Header from "./Assets/Header/Header";
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
export default class StartupDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};
		
	}
	
	render() {
		const theme = createMuiTheme({
			palette: {
			  primary:{
				main:'#607d8b',
			  }
			}
		  });
		return (
			<div>
 <MuiThemeProvider theme={theme}>
				<Router >
					<Header/>
					
					<div style={{ margin: '75px',marginLeft:'10px'}}>
						<ListOfOnlineCandidates />
						<Advertise/>
						<div style={{marginTop:"5%"}}>
					</div>
					<div style={{marginLeft:'18.5%',width:'80%'}}>
					<Route path="/mentorDashboard/Profile" component={Profile} />
					<Route path="/mentorDashboard/Notification" component={Notification} />
					<Route path="/mentorDashboard/Messaging" component={Messaging} />
					<Route path="/mentorDashboard/Connections" component={Connections} />
					<Route path="/mentorDashboard/Home" component={Home} />
					<Route path="/mentorDashboard/FindMentors" component={FindMentors} />
					<Route path="/mentorDashboard/FindInvestor" component={FindInvestor} />
					<Route exact path="/mentorDashboard/TargetMentor/:id" component={TargetMentor} />
					<Route exact path="/mentorDashboard/MyMentor/:id" component={MyMentor} />
					<Route path="/mentorDashboard/TargetInvestor/:id" component={TargetInvestor} />
					<Route path="/mentorDashboard/MyInvestor/:id" component={MyInvestor} />
					<Route path="/mentorDashboard/Ads" component={Advertise}></Route>
					</div>
					</div>
					
				</Router>
				</MuiThemeProvider>
			</div>);
	}
}