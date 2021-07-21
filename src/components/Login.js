import React from 'react'
import {Button, Alert, Row, Col} from "react-bootstrap"
import LoginImage from "./LoginImage"
import LoginForm from "./LoginForm"

function Login(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        sethasAccount,
        errorEmail,
        seterrorEmail,
        errorPassword,
        seterrorPassword
      } = props;

    return (
        <Row className="landing">
            <Col xs={6}>
                <LoginForm 
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
            </Col>
            <Col xs={6}><LoginImage /></Col>
        </Row>
    )
}

export default Login
