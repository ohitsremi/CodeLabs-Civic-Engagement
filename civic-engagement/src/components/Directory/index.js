import React, { Component } from 'react';
import firebase from '../Firebase';
import "bootswatch/dist/minty/bootstrap.min.css";
import SearchExample from '../Volunteer/index';
import {Link} from 'react-dom';

class App extends Component {

  constructor() {
    super()

    this.state = {
      data: {},
      users: {}
    };

   
    // Get a database reference to our posts

    //var reference = firebase.database().ref('organizations/');
    //var referenceUser = firebase.database().ref("Users/");

      firebase.user.on("child_added", (snapshot) => {
        var userData = snapshot.val();
        this.setState({ users: userData});
        console.log(userData);
        console.log(firebase.getZip(this.state.users));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  

      // Attach an asynchronous callback to read the data at our posts reference

    firebase.db.on("value", (snapshot) => {
      var datas = snapshot.val();
      var zip = 0;
      zip = firebase.getZip(this.state.users)
      var filteredValue = firebase.filterObject(datas, "Zipcode", zip);
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


export default App;
