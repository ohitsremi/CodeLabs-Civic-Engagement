import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import "bootswatch/dist/minty/bootstrap.min.css";
import * as ROUTES from '../../constants/routes';
import { Link, withRouter } from 'react-router-dom';
import Checkbox from "./Checkbox"

const CATAGORIES = ["FoodBank", "HomelessShelter", "PetRescue", "RetirementCommunity"]

const OrganizationPage = () => (
  <div>
    <Organizations />
  </div>
)

class orgSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organizationlist: [],
      catagories: CATAGORIES.reduce(
        (catagories, option) => ({
          ...catagories,
          [option]: false
        }),
        {}
      ),
    };
  }


  componentDidMount() {
    this.getUserData();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    this.props.firebase.organizations()
      .set(this.state);
    console.log("DATA SAVED")
  }

  getUserData = () => {
    this.props.firebase.organizations().on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let zipcode = this.refs.zipcode.value;
    let email = this.refs.email.value;
    let catagories = [];

    Object.keys(this.state.catagories)
      .filter(checkbox => this.state.catagories[checkbox])
      .forEach(checkbox => {
        catagories.push(checkbox);
        console.log(checkbox, "is selected")
      });

    //const { organizations } = this.state;
    this.props.firebase.organizations().push({
      name: name,
      address: address,
      zipcode: zipcode,
      catagories: catagories,
      email: email
    });
    //this.setState({ organizations });

    this.refs.name.value = "";
    this.refs.address.value = "";
    this.refs.zipcode.value = "";
    this.refs.email.value = "";
    this.refs.catagories = [];
    this.props.history.push(ROUTES.THANKYOU);

  }

  updateData = organizationlist => {
    this.refs.name.value = organizationlist.name;
    this.refs.address.value = organizationlist.address;
    this.refs.zipcode.value = organizationlist.zipcode;
    this.refs.email.value = organizationlist.email;
    this.refs.catagories = organizationlist.catagories
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      catagories: {
        ...prevState.catagories,
        [name]: !prevState.catagories[name]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.catagories[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => CATAGORIES.map(this.createCheckbox);

  render() {
    const { name, catagory, organizations } = this.state;

    return (
      <React.Fragment>
        <div class="container-fluid">

          <div class="text-left">
            <h3>I am a... <span class="text-primary">Organization</span></h3>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label class="col-form-label col-form-label-lg" for="inputLarge">Named</label>
              <input class="form-control form-control-lg"
                type="text"
                placeholder="name"
                id="inputLarge"
                ref="name"
              />
            </div>

            <div class="form-group">
              <label class="col-form-label col-form-label-lg" for="inputLarge">in zipcode</label>
              <input class="form-control form-control-lg"
                type="text"
                placeholder="zipcode"
                id="inputLarge"
                ref="zipcode"
              />
            </div>

            <div class="form-group">
              <label class="col-form-label col-form-label-lg" for="inputLarge">address</label>
              <input class="form-control form-control-lg"
                type="text"
                placeholder="street address"
                id="inputLarge"
                ref="address"
              />
            </div>

            <div class="form-group">
              <legend>that provides the services</legend>
              {this.createCheckboxes()}
            </div>

            <div class="form-group">
              <label class="col-form-label col-form-label-lg" for="inputLarge">Send volunteer requests to</label>
              <input class="form-control form-control-lg"
                type="text"
                placeholder="email"
                id="inputLarge"
                ref="email"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">SUBMIT</button>


          </form>

        </div>
      </React.Fragment>
    );
  }
}

const Organizations = withRouter(withFirebase(orgSignup));

export default OrganizationPage;
