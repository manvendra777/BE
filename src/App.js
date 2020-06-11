import React from 'react';
import StartupDashboard from './Dashboards/StartupDashboard/StartupDashboard';
import FrontPage from './FrontPage/FrontPage';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom'
import RegistrationPg from './FrontPage/Registration/RegistrationPg';
import LoginPg from './FrontPage/Registration/LoginPg'
import StartupForm from './ProfileManagement/startup/StartupForm'
import  ProfileFrontPage from './ProfileManagement/ProfileFrontPage'
import CommunityForm from './ProfileManagement/Community/CommunityForm';
import InvestorForm from './ProfileManagement/Investor/InvestorForm';
import MentorForm from './ProfileManagement/Mentor/MentorForm'


function App() {
  return (
  <div>
    
  <Router>
        <Route exact path= "/" component= {FrontPage}/>
        <Route path= "/loginPg" component= {LoginPg}/>
        <Route path= "/registrationPg" component= {RegistrationPg}/>
        <Route  path= "/profileFrontPg" component= {ProfileFrontPage}/>
        <Route path= "/startupform" component= {StartupForm}/>
        <Route path= "/mentorform" component= {MentorForm}/>
        <Route path= "/investorform" component= {InvestorForm}/>
        <Route path= "/communityform" component= {CommunityForm}/>
        </Router>
  </div>
  );
}

export default App;
