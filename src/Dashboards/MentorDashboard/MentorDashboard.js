import React, { Component } from "react";
import Header from "./Assets/Header/Header";
import Profile from "./Assets/Profile/MyProfile/Profile";
import ListOfOnlineCandidates from "./Assets/Messaging/Assets/ListOfOnlineCandidates";
import Messaging from "./Assets/Messaging/Messaging";
import Connections from "./Assets/Connections/Connections";
import FindStartup from "./Assets/FindStartup/FindStartup";
import TargetStartup from "./Assets/Profile/StartupProfile/NotConnected/TargetStartup";
import MyStartup from "./Assets/Profile/StartupProfile/Connected/MyStartup";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Advertise from "./Assets/Advertise/Advertise";
import Cookies from "js-cookie";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MyConnectedStartup from './Assets/Home/ConnectedStartup';
import ConnectedStartup from "./Assets/Home/ConnectedStartup";
import BookMarkedStartup from './Assets/Home/BookMarkedStartup'
import Home from './Assets/Home/Home';
import Feed from './Assets/Home/Assets/Feed'


import { ToastContainer, toast } from 'react-toastify';
export default class StartupDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount(){
		document.body.style.backgroundColor = "#eeeeee";
	}
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#607d8b",
        },
      },
    });
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Header />
            <div style={{ margin: "75px", marginLeft: "10px" }}>   
            <BookMarkedStartup/>
              <Advertise />
              <div style={{ marginTop: "5%" }}></div>
              <div style={{ marginLeft: "18.5%", width: "80%" }}>
                <Route path="/mentorDashboard/Profile" component={Profile} />
                <Route
                  path="/mentorDashboard/Messaging"
                  component={Messaging}
                />
                <Route
                  path="/mentorDashboard/Connections"
                  component={Connections}
                />
                <Route
                  path="/mentorDashboard/FindStartup"
                  component={FindStartup}
                />
                <Route
                  exact
                  path="/mentorDashboard/TargetStartup/:id"
                  component={TargetStartup}
                />
                <Route
                  exact
                  path="/mentorDashboard/MyStartup/:id"
                  component={MyStartup}
                />
                <Route
                  path="/mentorDashboard/Ads"
                  component={Advertise}
                >
                </Route>
                <Route
                  path="/mentorDashboard/Home"
                  component={Home}
                >
                </Route>
                <Route path="/mentorDashboard/Feed/:Domain" component={Feed}></Route>
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
      </div>
    );
  }
}
