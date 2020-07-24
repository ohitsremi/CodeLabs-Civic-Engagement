import React, { Component } from 'react';
import firebase from 'firebase';
import "bootswatch/dist/minty/bootstrap.min.css";
import config from '../Firebase/firebase';
import SearchExample from '../Volunteer/index';
import {Link} from 'react-dom';
import {BrowserRouter as Router, Route,useParams, useLocation} from 'react-router-dom';


// Filters the database that match the organization and user zipcode
const filterObject = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((acc, val) => 
   (obj[val][filter] != filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});






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




// Gets the most recent zipcode form firebase
function getZip(obj) {
  var zip = 0;
  Object.values(obj).map(elem =>
      zip = elem.Zipcode,
    )
    
  return Object.values(obj)[0];
}




class volunteerPage extends Component {

  constructor() {
    super()

    this.state = {
      data: {},
      users: {}
    };

   


    // Get a database reference to our posts


    if (!firebase.app.length) {
      firebase.initializeApp(config);
    }

    var reference = firebase.database().ref("organizations/");
    var referenceUser = firebase.database().ref("Users/");

      referenceUser.on("child_added", (snapshot) => {
        var userData = snapshot.val();
        this.setState({ users: userData});
        console.log(userData);
        console.log(getZip(this.state.users));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  

      // Attach an asynchronous callback to read the data at our posts reference
    reference.on("value", (snapshot) => {
      var datas = snapshot.val();
      var zip = 0;
      zip = getZip(this.state.users)
      var filteredValue = filterObject(datas, "Zipcode", zip);
      this.setState({ data: filteredValue });
      console.log(datas);
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    })
    
  };

 
  render() {    
      return (
        <div>
          <div id="organization-container" class="text-center">
            <h1>Here are some opportunities</h1>

            <div class="text-center">
              <p>
                We found volenteer opportunities for you!
                        </p>
            </div>
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
                      <p class="card-text">{elem.Categories + " "}</p>
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
