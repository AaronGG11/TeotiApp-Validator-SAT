import React, {useState, useEffect} from 'react';
import fire from './firebase/Firebase';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/login/Login";
import Header from './components/header/Header';


function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, seterrorEmail] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [hasAccount, sethasAccount] = useState(false);


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

    fire
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

    fire
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
    fire.auth().signOut();
  }

  const authListener = () => {
    fire
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
    </div> 
  );
}

export default App;