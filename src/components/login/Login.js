import React from 'react'
import {Button, Alert} from 'react-bootstrap';

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
        <section className="login">

            <div className="d-grid gap-2">
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
        </section>
    )
}

export default Login
