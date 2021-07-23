import React, {useEffect, useState} from 'react'
import {Table} from "react-bootstrap"
import {handleSellerList} from "./../firebase/Actions"

function Approved() {
    const [items, setItems] = useState([])

    useEffect(() => {
        handleSellerList(1)
    }, [])
    
    return (
        <div className="container">
            Approved page ...
        </div>
    )
}

export default Approved
