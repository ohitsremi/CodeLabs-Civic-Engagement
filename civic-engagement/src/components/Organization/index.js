import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 
import "bootswatch/dist/minty/bootstrap.min.css"; 
 
const App = () => (
  <div class="container-fluid">
    <div class ="text-left">
      <h3>I am a... <span class="text-primary">Organization</span></h3>
    </div>
    
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">in zipcode</label>
      <input class="form-control form-control-lg" type="text" placeholder="zipcode" id="inputLarge"></input>
    </div>

    <fieldset class="form-group">
      <legend>that provides the services</legend>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="foodBank"/>
        <label class="custom-control-label" for="foodBank">food bank</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="homelessShelter"/>
        <label class="custom-control-label" for="homelessShelter">homeless shelter</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="petRescue"/>
        <label class="custom-control-label" for="petRescue">pet rescue</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="retirementCommunity"/>
        <label class="custom-control-label" for="retirementCommunity">retirement community</label>
      </div>
    </fieldset>

    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">Send volunteer requests to</label>
      <input class="form-control form-control-lg" type="text" placeholder="email" id="inputLarge"></input>
    </div>
    
  </div>
    

  
  
);
 
export default App;