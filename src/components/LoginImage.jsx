import React from 'react'
import {Image } from "react-bootstrap"
import logo from "./../assets/applogin.png"

const LoginImage = () => {
    return (
        <div>
            <div style={{height: "100vh", display: "flex", flexDirection: "column" , alignItems: "center", justifyContent: "center", backgroundColor:"#404040", opacity: 0.85}}>
                <Image 
                    src={logo}
                />
            </div>
        </div>
    )
}

export default LoginImage
