import React from 'react';
import StartupDashboard from './Dashboards/StartupDashboard/StartupDashboard';
import MentorDashboard from './Dashboards/MentorDashboard/MentorDashboard';
import FrontPage from './FrontPage/FrontPage';
import { Route, BrowserRouter as Router, Link, Redirect } from 'react-router-dom'
import RegistrationPg from './FrontPage/Registration/RegistrationPg';
import LoginPg from './FrontPage/Registration/LoginPg'
import StartupForm from './ProfileManagement/startup/StartupForm'
import ProfileFrontPage from './ProfileManagement/ProfileFrontPage'
import CommunityForm from './ProfileManagement/Community/CommunityForm';
import InvestorForm from './ProfileManagement/Investor/InvestorForm';
import MentorForm from './ProfileManagement/Mentor/MentorForm'
import InvestorDashboard from './Dashboards/InvestorsDashboard/InvestorDashboard';
import CommunityDashboard from './Dashboards/CommunityDashboard/CommunityDashboard';
import axios from 'axios';
function App() {
  const cookieValue = document.cookie.split('=')[1];
  const username = document.cookie.split('=')[0];

  return (

    <div>
      <Router>
        <ProtectedLogin exact path="/" component={FrontPage} cookieValue={cookieValue} />
        <ProtectedLogin path="/LoginPg" component={LoginPg} cookieValue={cookieValue} />
        <ProtectedLogin path="/registrationPg" component={RegistrationPg}  cookieValue={cookieValue} />
        <ProtectedRoute path="/profileFrontPg" component={ProfileFrontPage} cookieValue={cookieValue}/>
        <ProtectedRoute path="/startupform" component={StartupForm} cookieValue={cookieValue}/>
        <ProtectedRoute path="/mentorform" component={MentorForm} cookieValue={cookieValue}/>
        <ProtectedRoute path="/investorform" component={InvestorForm} cookieValue={cookieValue}/>
        <ProtectedRoute path="/communityform" component={CommunityForm} cookieValue={cookieValue}/>
        <ProtectedRoute path="/startupDashboard" component={StartupDashboard} cookieValue={cookieValue}/>
        <ProtectedRoute path="/MentorDashboard" component={MentorDashboard} cookieValue={cookieValue}/>
        <ProtectedRoute path="/investorDashboard" component={InvestorDashboard} cookieValue={cookieValue}/>
        <ProtectedRoute path="/CommunityDashboard" component={CommunityDashboard} cookieValue={cookieValue}/>
      </Router>
    </div>
  );
}

const ProtectedRoute = ({cookieValue,component:Component,...rest}) =>{
  return(
    <Route
    {...rest}
    render={()=>typeof cookieValue == "string" ?(
      <Component/>
    ):
      (
        <Redirect to="/"/>
      )      
  }
      />
  )
}


const ProtectedLogin= ({cookieValue,component:Component,...rest}) =>{
  return(
    <Route
    {...rest}
    render={()=>typeof cookieValue == "undefined" ?(
      <Component/>
    ):
      (
        <Redirect to="/startupDashboard/Home"/>
      )      
  }
      />
  )
}

export default App;
