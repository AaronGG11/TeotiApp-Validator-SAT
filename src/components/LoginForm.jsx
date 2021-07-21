import React from 'react'
import {Form, Button, } from "react-bootstrap"

const LoginForm = (props) => {
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
        <div className="container">
            <div style={{height: "100vh", display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center"}}>
                <div className="d-grid gap-2" style={{width: "50%"}}>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        autoFocus 
                        required 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <p className="errorMsg">{errorEmail}</p>

                    <label>Password: </label>
                    <input 
                        type="password" 
                        autoFocus 
                        required 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <p className="errorMsg">{errorPassword}</p>

                    <div className="d-grid gap-2">
                        <Button variant="warning" size="lg" onClick={handleLogin}>Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
