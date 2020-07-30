import 'firebase/database';
import app from 'firebase/app'
require ('firebase/auth');

 
const config = {
  apiKey: "AIzaSyAZjNiqh69sNd9u5_XWrbZH3fwAdQUDsTY",
  authDomain: "codelabs-civic-engagement.firebaseapp.com",
  databaseURL: "https://codelabs-civic-engagement.firebaseio.com",
  projectId: "codelabs-civic-engagement",
  storageBucket: "codelabs-civic-engagement.appspot.com",
  messagingSenderId: "29329951133",
  appId: "1:29329951133:web:fb6e917a41c0ecd4444774",
  measurementId: "G-Z29MPJGKH0"
};

  // Filters the database that match the organization and user zipcode
const filterObject = (obj, filter, filterValue) => 
   Object.keys(obj).reduce((acc, val) => 
   (obj[val][filter] != filterValue ? acc : {
       ...acc,
       [val]: obj[val]
   }                                        
), {});

function writeUserData(catagory, location, name, zip) {
    var refence = Firebase.database().ref("organizations/");
  
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
  

class Firebase{
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    //** Organization API **/

    addOrganization = () => {
        Firebase.database()
        .ref("/")
        .set(this.state);
        console.log("NEW ORGANIZATION ADDED")
    }
}
 
export default Firebase;