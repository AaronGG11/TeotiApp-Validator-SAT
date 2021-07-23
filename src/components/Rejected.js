import React, {useEffect, useState} from 'react'
import {Table} from "react-bootstrap"
import {handleSellerList} from "./../firebase/Actions"

function Rejected() {
    const [items, setItems] = useState([])

    useEffect(() => {
        handleSellerList(2)
    }, [])


    return (
        <div className="container">
            Rejected page ...
        </div>
    )
}

export default Rejected
