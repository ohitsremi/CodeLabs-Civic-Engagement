import React from 'react';
import { Link } from 'react-router-dom';
 
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.VOLUNTEER}>Volunteer Opportunities</Link>
    </li>
  </ul>
);
 
export default Navigation;