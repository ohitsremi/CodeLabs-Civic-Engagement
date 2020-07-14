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

        this.auth = app.auth();
        this.db = app.database();
    }
  // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        // *** User API ***
 
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}
 
export default Firebase;