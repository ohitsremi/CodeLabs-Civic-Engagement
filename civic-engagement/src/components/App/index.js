import React, { Component } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import AdminPage from '../Admin';
import VolunteerPage from '../Volunteer';
import DirectoryPage from '../Directory';
import OrganizationPage from '../Organization';

import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
 
      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.VOLUNTEER} component={VolunteerPage}/>
      <Route exact path={ROUTES.ORGANIZATION} component={OrganizationPage}/>
      <Route exact path={ROUTES.DIRECTORY} component={DirectoryPage}/>
    </div>
  </Router>
);
 
export default App;