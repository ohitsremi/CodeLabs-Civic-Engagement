import firebase from "firebase"
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
      this.db = app.database();
    }
    //*** Organization API ***/
    organization = uid => this.db.ref('organizations/${uid}');
    organizations = () =>this.db.ref('organizations');
}
 
export default Firebase;