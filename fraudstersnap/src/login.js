
import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app' 
import 'firebase/auth';
import FirebaseData from './FirebaseData.js';
import MainPage from './MainPage.js';

const firebaseApp = firebase.initializeApp(FirebaseData);
class Login extends Component {
  constructor() {
    super();
    this.props = {
      user,
      signOut,
      signInWithGoogle,
    };
  
  }

  renderMain(user, signOut){
    return(
      <p>Hello, {user.displayName}</p>,
      <button onClick={signOut}>Sign out</button>
    )
  };
  renderlogin(signInWithGoogle){ 
    return(
      <p>Please sign in.</p>,
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
  };
  
  render() {    
    return (
      <div>
          {
            user
              ? renderMain(user, signOut)
              : renderlogin(signInWithGoogle)
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