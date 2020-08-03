import React, { Component } from 'react';
import firebase from 'firebase';

import "bootswatch/dist/minty/bootstrap.min.css";
import config from '../Firebase/firebase';
import SearchExample from '../Volunteer/index';
import {Link} from 'react-dom';


// Filters the database that match the organization and user zipcode
const filterObject = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((acc, val) => 
   (obj[val][filter] != filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});






function writeUserData(zip) {
  var refence = firebase.database().ref("Users/");

  var newData = {
    Zipcode: zip
  }
  refence.push(newData);
}

function writeOrgData(address, categories, name, zip) {
  var refence = firebase.database().ref("organizations/");

  var newData = {
    Address: address,
    Categories: categories,
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
    
  return Object.values(obj)[1];
}

function getCategories(obj) {
  return Object.values(obj)[0];
}

class DirectoryPage extends Component {

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

    //writeUserData(18503);
    //writeOrgData("321 paw Street, New York, Ny","pet rescue", "Paws for Life", 10004);
      referenceUser.orderByChild("dateAdded").limitToLast(1).once("child_added", (snapshot) => {
        var userData = snapshot.val();
        console.log(JSON.stringify(snapshot.val()))
        this.setState({ users: userData});
        console.log(userData);
        console.log(getZip(this.state.users));
        console.log(getCategories(this.state.users))
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  

      // Attach an asynchronous callback to read the data at our posts reference
    reference.on("value", (snapshot) => {
      var datas = snapshot.val();
      var zip = 0;
      zip = getZip(this.state.users)
      var filteredValue = filterObject(datas, "Zipcode", zip);
      var cate = getCategories(this.state.users);
      var categoryLength = cate.length;
      var end = cate.length;
      var i;
      console.log(cate);
      //data to render
      let copy=[]
      let res = {};
      var filteredCategories = {};
      // var filteredCategories = filterObject(filteredValue,"Categories", cate[0]);
      for(let k=0; k<categoryLength; k++){
        filteredCategories = filterObject(filteredValue,"Categories", cate[k]);
        console.log(filteredCategories);
        Object.assign(res,filteredCategories);
      }
      console.log(res);
      //console.log(filteredCategories);
      this.setState({data: res});
    
      /*
      for(i=0; i<cate.length; i++) {
        var filteredCategories = filterObject(filteredValue,"Categories", cate[i]);
        console.log(filteredCategories);
        this.setState({data:filteredCategories});
      }
      */
      
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

export default DirectoryPage;
