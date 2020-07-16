import React from 'react';
import { Link } from 'react-router-dom';
import "bootswatch/dist/minty/bootstrap.min.css";
import * as ROUTES from '../../constants/routes'; 
 
const App = () => (
  <div class="container-fluid">
    <p>
      Hi! Welcome to <span class="text-primary">EngageForChange</span>.
    </p>
    <p>Tell us a little bit about yourself.</p>

    <h3>I am a...</h3>
    <Link to={ROUTES.VOLUNTEER}><button type="button" class="btn btn-primary btn-lg btn-block">VOLUNTEER</button></Link>
    <button type="button" class="btn btn-outline-primary btn-lg btn-block">VOLUNTEER ORGANIZATION</button>
    

  </div>
  
  
);
 
export default App;