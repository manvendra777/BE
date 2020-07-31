import React, { Component } from "react";
import Header from "./Assets/Header/Header.js";
import Profile from "./Assets/Profile/MyProfile/Profile"
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates"
import Messaging from './Assets/Messaging/Messaging'
import Connections from "./Assets/Connections/Connections"
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
import BusinessEvalution from './Assets/Calculator/BusinessEvalution'
import { Button } from "@material-ui/core";
import Home from "./Assets/home/Home"
import Feed from './Assets/home/Assets/Feed'
import { ToastContainer, toast } from 'react-toastify';
export default class StartupDashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}
	componentWillMount() {
		document.body.style.backgroundColor = "#eeeeee";
	}
	render() {
		const theme = createMuiTheme({
			palette: {
				primary: {
					main: '#5c6bc0',
				}
			}
		});
		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<Router >
						<Header />
						<div style={{ margin: '75px', marginLeft: '10px' }}>
							{<ListOfOnlineCandidates />}
							<Advertise />
							<div style={{ marginTop: "5%" }}>
							</div>
							<div style={{ marginLeft: '18.5%', width: '75%' }}>
								<Route path="/startupDashboard/Profile" component={Profile} />
								<Route path="/startupDashboard/Messaging" component={Messaging} />
								<Route path="/startupDashboard/Connections" component={Connections} />
								<Route path="/startupDashboard/FindMentors" component={FindMentors} />
								<Route path="/startupDashboard/FindInvestor" component={FindInvestor} />
								<Route exact path="/startupDashboard/TargetMentor/:id" component={TargetMentor} />
								<Route exact path="/startupDashboard/MyMentor/:id" component={MyMentor} />
								<Route path="/startupDashboard/TargetInvestor/:id" component={TargetInvestor} />
								<Route path="/startupDashboard/MyInvestor/:id" component={MyInvestor} />
								<Route path="/startupDashboard/Ads" component={Advertise}></Route>
								<Route path="/startupDashboard/MyAdvertise" component={MyAdvertise}></Route>
								<Route path="/startupDashboard/viewAd/:id" component={ViewAd} />
								<Route path="/startupDashboard/BusinessEvalution" component={BusinessEvalution} />
								<Route path="/startupDashboard/Feed/:Domain" component={Feed}></Route>
								<Route path="/startupDashboard/Home" component={Home} />
							</div>
						</div>

					</Router>
					<ToastContainer
                    position="bottom-right"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover />
				</MuiThemeProvider>
			</div>);
	}
}