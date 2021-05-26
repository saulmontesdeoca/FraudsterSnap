import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app' 
import 'firebase/auth';
import firebaseConfig from './firebase';

let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

class Login extends Component {

    handleClick(){
      window.open("/transactions","_self");
      //this opens in a new tab (believe that is what the owner of the question wanted if not you can do window.location.href = "/insert/your/path/here". 
    }

    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
            {
              user
                ? <div><p>Hello, {user?.displayName}</p><br/><button onClick={this.handleClick}>Go to transactions</button></div>
                : <p>Please sign in.</p>
            }
  
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);