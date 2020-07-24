import React, { Component } from 'react';
import firebase from 'firebase';
import "bootswatch/dist/minty/bootstrap.min.css";
import config from '../Firebase/firebase';

function writeUserData(catagory, location, name, zip) {
  var refence = firebase.database().ref("organizations/");

  var newData = {
    Catagory: catagory,
    Address: location,
    Name: name,
    Zipcode: zip
  }
  refence.push(newData);
}

class volunteerPage extends Component {

  constructor() {
    super()

    this.state = {
      data: {}
    };


    // Get a database reference to our posts


    if (!firebase.app.length) {
      firebase.initializeApp(config);
    }

    var reference = firebase.database().ref("organizations/");

    // Attach an asynchronous callback to read the data at our posts reference
    reference.on("value", (snapshot) => {
      var data = snapshot.val();
      this.setState({ data: snapshot.val() });
      console.log(snapshot.val());
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  };

  render() {
    return (
      <div>
        <div id="organization-container" class="text-center">
          <h1>We found volunteer opportunities for you!</h1>

          {/* Adding JS */}
          {Object.values(this.state.data).map(elem => (

            <div class="justfiy-content center">
              <div class="card text-white bg-primary mb-3" style={{ width: "500px", margin: 'auto' }}>

                <div class="card-header">
                  <h4>{elem.Name}</h4>
                </div>

                <div class="card-body">

                  <p>{elem.Zipcode}</p>
                  <p class="card-text">{elem.Address}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default volunteerPage;
