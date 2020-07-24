import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 
import "bootswatch/dist/minty/bootstrap.min.css"; 

function SearchExample() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams;
}


class Search extends Component {
  constructor() {
    super()
    this.state = {
      zip: null,
      type: null
    };
  }
  render() {
    return (
      <div class="container-fluid">
    <div class ="text-left">
      <h3>I am a... <span class="text-primary">Volunteer</span></h3>
    </div>
    
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">in zipcode</label>
      <input class="form-control form-control-lg" type="text" placeholder="zipcode" id="inputLarge" onChange={(e) => this.setState({zip: e.target.value})}></input>
    </div>

    <fieldset class="form-group">
      <legend>interested in volunteering at a</legend>
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
      <label class="col-form-label col-form-label-lg" for="inputLarge">reach me at this email</label>
      <input class="form-control form-control-lg" type="text" placeholder="email" id="inputLarge"></input>
    </div>

    <Link to={ROUTES.DIRECTORY+'?zip= ' + this.state.zip}><button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button></Link>
    



  </div>
    

    )
  }

}


/*
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
      <label class="col-form-label col-form-label-lg" for="inputLarge">reach me at this email</label>
      <input class="form-control form-control-lg" type="text" placeholder="email" id="inputLarge"></input>
    </div>

    <Link to={ROUTES.DIRECTORY}><button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button></Link>
    



  </div>
    

  
  
);
*/
export default Search;