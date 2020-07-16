import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 
import "bootswatch/dist/minty/bootstrap.min.css"; 
 
const App = () => (
  <div class="container-fluid">
    <div class ="text-left">
      <h3>I am a... <span class="text-primary">Volunteer</span></h3>
    </div>
    
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">in zipcode</label>
      <input class="form-control form-control-lg" type="text" placeholder="zipcode" id="inputLarge"></input>
    </div>

    <fieldset class="form-group">
      <legend>interested in volunteering at a</legend>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">food bank</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">homeless shelter</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">pet rescue</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
        <label class="custom-control-label" for="defaultUnchecked">retirement community</label>
      </div>
    </fieldset>

    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">reach me at this email</label>
      <input class="form-control form-control-lg" type="text" placeholder="email" id="inputLarge"></input>
    </div>

    <Link to={ROUTES.DIRECTORY}><button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button></Link>
    
  </div>
    

  
  
);
 
export default App;