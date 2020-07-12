import React from 'react';
import StartupDashboard from './Dashboards/StartupDashboard/StartupDashboard';
import MentorDashboard from './Dashboards/MentorDashboard/MentorDashboard';
import FrontPage from './FrontPage/FrontPage';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import RegistrationPg from './FrontPage/Registration/RegistrationPg';
import LoginPg from './FrontPage/Registration/LoginPg'
import StartupForm from './ProfileManagement/startup/StartupForm'
import ProfileFrontPage from './ProfileManagement/ProfileFrontPage'
import CommunityForm from './ProfileManagement/Community/CommunityForm';
import InvestorForm from './ProfileManagement/Investor/InvestorForm';
import MentorForm from './ProfileManagement/Mentor/MentorForm'
import Profile from './Dashboards/StartupDashboard/Assets/Profile/MyProfile/Profile'
import InvestorDashboard from './Dashboards/InvestorsDashboard/Dashboard';

function App() {
  return (
   
    <div>
      <Router>
        <Route exact path="/" component={FrontPage} />
        <Route path="/LoginPg" component={LoginPg} />
        <Route path="/registrationPg" component={RegistrationPg} />
        <Route path="/profileFrontPg" component={ProfileFrontPage} />
        <Route path="/startupform" component={StartupForm} />
        <Route path="/mentorform" component={MentorForm} />
        <Route path="/investorform" component={InvestorForm} />
        <Route path="/communityform" component={CommunityForm} />
        <Route path="/startupDashboard" component={StartupDashboard} />
    <Route path="/InvestorDashboard" component={InvestorDashboard} />
     <Route path="/MentorDashboard" component={MentorDashboard} />
      </Router>
    </div>
  );
}

export default App;
