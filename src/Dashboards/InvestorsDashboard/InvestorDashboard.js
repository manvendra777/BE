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
import Home from "./Assets/home/Home"
import Feed from './Assets/home/Assets/Feed'
export default class StartupDashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
		};

	}
	componentWillMount(){
		document.body.style.backgroundColor = "#eeeeee";
	}

	render() {
		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#607d8b',
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
								<Route path="/investorDashboard/Profile" component={Profile} />

								<Route path="/investorDashboard/Messaging" component={Messaging} />
								<Route path="/investorDashboard/Connections" component={Connections} />

								<Route path="/investorDashboard/FindStartup" component={FindStartup} />
								<Route exact path="/investorDashboard/TargetStartup/:id" component={TargetStartup} />
								<Route exact path="/investorDashboard/MyStartup/:id" component={MyStartup} />
								<Route path="/investorDashboard/Ads" component={Advertise}></Route>
								<Route path="/investorDashboard/Feed/:Domain" component={Feed}></Route>
								<Route path="/investorDashboard/Home" component={Home} />
							</div>
						</div>

					</Router>
				</MuiThemeProvider>
			</div>);
	}
}