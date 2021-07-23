import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import firebaseApp from './firebase/Firebase';
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore";

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Login from "./components/Login";
import Header from './components//Header';

import Approved from "./components/Approved"
import Rejected from "./components/Rejected"
import Pending from "./components/Pending"
import Welcome from "./components/Welcome"

import {handleSellerList} from "./firebase/Actions"



const db = firebase.firestore(firebaseApp)

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [hasAccount, sethasAccount] = useState(false);

  const [pending, setPending] = useState([])
  const [rejected, setRejected] = useState([])
  const [approved, setApproved] = useState([])


  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    seterrorEmail("");
    seterrorPassword("");
  }

  const handleLogin = () => {
    clearErrors();

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        switch(error.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            seterrorEmail(error.message);
            break;
          case  "auth/wrong-password":
            seterrorPassword(error.message);
            break;
        }
      })
  }

  const handleSignUp = () => {
    clearErrors();

    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        switch(error.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            seterrorEmail(error.message);
            break;
          case  "auth/weak-password":
            seterrorPassword(error.message);
            break;
           
        }
      })
  }

  const handleLogout = () => {
    firebaseApp.auth().signOut();
    setUser(null);
  }

  const authListener = () => {
    firebaseApp
    .auth()
    .onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      } else{
        setUser("");
      }
    })
  }


  useEffect(() => {
    authListener();
  }, [])


  return (
    <div className="App">
      {user ? (
          <Router>
            <Header 
              handleLogout={handleLogout}
            />
            <Switch>
              <Route exact path="/Welcome">
                <Welcome/>
              </Route>
              <Route path="/Pending">
                <Pending />
              </Route>
              <Route path="/Approved">
                <Approved />
              </Route>
              <Route path="/Rejected" >
                <Rejected />
              </Route>
            </Switch>
          </Router>
          
        ) : (
          <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            sethasAccount={sethasAccount}
            errorEmail={errorEmail}
            seterrorEmail={seterrorEmail}
            errorPassword={errorPassword}
            seterrorPassword={seterrorPassword}
          />
        )
      }
    </div> 
  );
}

export default App;