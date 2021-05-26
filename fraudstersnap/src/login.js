import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app' 
import 'firebase/auth';
import firebaseConfig from './firebase';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

let firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
}else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

class Login extends Component {

    handleClick(){
      window.open("/transactions","_self");
      //this opens in a tab  
    }

    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
          <div>
            {
              user
                ? <div>
                    <Container>
                    <Row>
                      <Col></Col>
                      <Col>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://secureservercdn.net/198.71.233.13/cfb.925.myftpupload.com/wp-content/uploads/2010/06/Screening-Fraudulent-E-Commerce-Transactions.jpg" />
                        <Card.Body>
                          <Card.Title>Hello, {user?.displayName}</Card.Title>
                          <Card.Text>
                            Welcome to FraudsterSnap, please go to transactions to analyse your transactions.
                          </Card.Text>
                          <Button variant="primary" onClick={this.handleClick}>Go to transactios</Button>
                        </Card.Body>
                      </Card>
                      </Col>
                      <Col></Col>
                    </Row>
                    </Container>
                  </div>
                : <div>
                  <Container>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src="https://secureservercdn.net/198.71.233.13/cfb.925.myftpupload.com/wp-content/uploads/2010/06/Screening-Fraudulent-E-Commerce-Transactions.jpg" />
                          <Card.Body>
                            <Card.Title>Please sign in</Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Container>
                  </div>
            }
  
            {
              user
                ? <Button onClick={signOut}>Sign out</Button>
                : <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            }
            </div>
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