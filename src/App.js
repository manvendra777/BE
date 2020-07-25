import React from 'react';
import StartupDashboard from './Dashboards/StartupDashboard/StartupDashboard';
import MentorDashboard from './Dashboards/MentorDashboard/MentorDashboard';
import FrontPage from './FrontPage/FrontPage';
import { Route, BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import RegistrationPg from './FrontPage/Registration/RegistrationPg';
import LoginPg from './FrontPage/Registration/LoginPg'
import StartupForm from './ProfileManagement/startup/StartupForm'
import CommunityForm from './ProfileManagement/Community/CommunityForm';
import InvestorForm from './ProfileManagement/Investor/InvestorForm';
import MentorForm from './ProfileManagement/Mentor/MentorForm'
import InvestorDashboard from './Dashboards/InvestorsDashboard/InvestorDashboard';
import CommunityDashboard from './Dashboards/CommunityDashboard/CommunityDashboard';
import axios from 'axios';
import Cookies from 'js-cookie'
import { Button } from '@material-ui/core';
import Auth from './Auth';
import Register from './Registration/Register'
import regS from './Registration/Startup/Startup'
import regM from './Registration/Mentor/Mentor'
import regI from './Registration/Investor/Investor'
import regC from './Registration/Community/Community'
import Demo from './Demo'
import FP from './SpringFP/FP'
import { Spring } from 'react-spring/renderprops'
import Loading from './Animations/Loading'
function App() {
  const cookieValue = Cookies.get('isLoggedIn')
  const username = document.cookie.split('=')[0];
  const getVal = () => {
    console.log(document.cookie)
  }

  return (

    <div>
      <Router>
        {/* <ProtectedLogin exact path="/" component={FP} cookieValue={cookieValue} />*/}
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>

          {props => <div style={props} ><ProtectedLogin exact path="/" component={FP} cookieValue={cookieValue} /></div>}
        </Spring>


        
                <ProtectedLogin path="/LoginPg" component={LoginPg} cookieValue={cookieValue} />
            
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>

          {props => <div style={props}> <ProtectedLogin path="/registrationPg" component={RegistrationPg} cookieValue={cookieValue} /></div>}
        </Spring>


        {/*
        <ProtectedLogin path="/profileFrontPg" component={Register} cookieValue={cookieValue} />
        <ProtectedLogin path="/startupform" component={StartupForm} cookieValue={cookieValue} />
        <ProtectedLogin path="/mentorform" component={MentorForm} cookieValue={cookieValue} />
        <ProtectedLogin path="/investorform" component={InvestorForm} cookieValue={cookieValue} />
        <ProtectedLogin path="/communityform" component={CommunityForm} cookieValue={cookieValue} />
        */}


        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>
          {
            props =>
              <div style={props}>
                <ProtectedLogin path="/register" component={Register} cookieValue={cookieValue} />
              </div>
          }
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>
          {props => <div style={props}> <ProtectedLogin path="/registerStartup" component={regS} cookieValue={cookieValue} /></div>}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>
          {props => <div style={props}><ProtectedLogin path="/registerMentor" component={regM} cookieValue={cookieValue} /></div>}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>
          {props => <div style={props}><ProtectedLogin path="/registerInvestor" component={regI} cookieValue={cookieValue} /></div>}
        </Spring>

        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 200 }}>
          {props => <div style={props}> <ProtectedLogin path="/registerCommunity" component={regC} cookieValue={cookieValue} /></div>}
        </Spring>

        <ProtectedLogin path="/loading" component ={Loading} />
        <ProtectedRoute path="/startupDashboard" component={StartupDashboard} cookieValue={cookieValue} />
        <ProtectedRoute path="/MentorDashboard" component={MentorDashboard} cookieValue={cookieValue} />
        <ProtectedRoute path="/investorDashboard" component={InvestorDashboard} cookieValue={cookieValue} />
        <ProtectedRoute path="/CommunityDashboard" component={CommunityDashboard} cookieValue={cookieValue} />
       

      </Router>
    </div >



  );
}

const ProtectedRoute = ({ cookieValue, component: Component, ...rest }) => {
  return (
    <Route   {...rest} render={props => Auth.getAuth() ? (<Component />) : (<Redirect to="/" />)}
    />
  )
}


const ProtectedLogin = ({ cookieValue, component: Component, ...rest }) => {
  switch (Cookies.get('type')) {
    case "S":
      return (
        <Route {...rest} render={props => Auth.getAuth() ? (<Redirect to="/startupDashboard/Home" />) : (<Component />)}
        />
      )
      break;
    case "M":
      return (
        <Route {...rest} render={props => Auth.getAuth() ? (<Redirect to="/mentorDashboard/Home" />) : (<Component />)}
        />
      )
      break;
    case "I":
      return (
        <Route {...rest} render={props => Auth.getAuth() ? (<Redirect to="/investorDashboard/Home" />) : (<Component />)}
        />
      )
      break;
    case "C":
      return (
        <Route {...rest} render={props => Auth.getAuth() ? (<Redirect to="/CommunityDashboard/Home" />) : (<Component />)}
        />
      )
      break;
    default:
      return (<Route {...rest} render={props => (<Component />)}
      />)
  }
}

export default App;
