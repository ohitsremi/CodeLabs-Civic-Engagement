import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'; 
import "bootswatch/dist/minty/bootstrap.min.css"; 
 




class App extends Component {

  constructor() {
    super()
    this.state = {
      zip: null,
      isFoodBank: false,
      isHomelessShelter: null,
      isPetResuce: false,
      isEducation:false,
      isRetirementCommunity: false
    }  
  }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }

   
  render() {
    return (
      <div class="container-fluid">
    <div class ="text-left">
      <h3>I am a... <span class="text-primary">Volunteer</span></h3>
    </div>
    
    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">in zipcode</label>
      <input class="form-control form-control-lg" type="text" placeholder="zipcode" id="inputLarge" onChange={(e) => this.setState({zip: e.target.value})}/>
    </div>

    <fieldset class="form-group">
      <legend>interested in volunteering at a</legend>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="foodBank" value="" onClick={(e) => this.setState({isFoodBank : e.target.checked})}/>
        <label class="custom-control-label" for="foodBank">food bank</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="homelessShelter" onClick={(e) => this.setState({isHomelessShelter : e.target.checked})}/>
        <label class="custom-control-label" for="homelessShelter">homeless shelter</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="petRescue"  onClick={(e) => this.setState({isPetResuce : e.target.checked})}/>
        <label class="custom-control-label" for="petRescue">pet rescue</label>
      </div>
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="retirementCommunity" onClick={(e) => this.setState({isRetirementCommunity : e.target.checked})}/>
        <label class="custom-control-label" for="retirementCommunity">retirement community</label>
      </div>
    </fieldset>

    <div class="form-group">
      <label class="col-form-label col-form-label-lg" for="inputLarge">reach me at this email</label>
      <input class="form-control form-control-lg" type="text" placeholder="email" id="inputLarge"></input>
    </div>

    <Link to={ROUTES.DIRECTORY+"?zip="+this.state.zip + (this.state.isHomelessShelter ? "&homelessShelter" : "") + (this.state.isPetResuce ? "&petRescue" : "") + (this.state.isEducation ? "&education" : "") + (this.state.isRetirementCommunity ? "&RetirementCommunity" : "") + (this.state.isFoodBank ? "&foodbank" : "") }><button type="button" class="btn btn-primary btn-lg btn-block">SUBMIT</button></Link>
    
  </div>
    )
  }
}
function handleClick(cb) {
  //display("Clicked, new value = " + cb.checked);
  return cb.checked;
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
export default App;