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

class Firebase{
    constructor(){
      app.initializeApp(config);

      var db = app.database().ref('organizations/');
      var user = app.database().ref('Users/');

    }
   

    //** Organization API **/

    addOrganization = (catagory, location, name, zip) => {
      var newData = {
        Catagory: catagory,
        Address: location,
        Name: name,
        Zipcode: zip
      }
      Firebase.db.push(newData);
        console.log("NEW ORGANIZATION ADDED")
    }
}
 
export default Firebase;