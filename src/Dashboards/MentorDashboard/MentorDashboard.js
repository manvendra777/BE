import React, { Component } from "react";
import Header from "./Assets/Header/Header";
import Profile from "./Assets/Profile/MyProfile/Profile"
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates"
import Messaging from './Assets/Messaging/Messaging'
import Connections from "./Assets/Connections/Connections"
import FindStartup from './Assets/FindStartup/FindStartup'
import TargetStartup from './Assets/Profile/StartupProfile/NotConnected/TargetStartup'
import MyStartup from './Assets/Profile/StartupProfile/Connected/MyStartup'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
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
				main:'#FF7d8b',
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
					<Route path="/mentorDashboard/Messaging" component={Messaging} />
					<Route path="/mentorDashboard/Connections" component={Connections} />
					<Route path="/mentorDashboard/FindStartup" component={FindStartup} />
					<Route exact path="/mentorDashboard/TargetStartup/:id" component={TargetStartup} />
					<Route exact path="/mentorDashboard/MyStartup/:id" component={MyStartup} />
					<Route path="/mentorDashboard/Ads" component={Advertise}></Route>
					</div>
					</div>
					
				</Router>
				</MuiThemeProvider>
			</div>);
	}
}