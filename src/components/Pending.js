import React, {useEffect, useState} from 'react'
import {Table} from "react-bootstrap"
import {handleSellerList} from "./../firebase/Actions"

function Pending(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        handleSellerList(0)
      }, [])

    return (
        <div className="container">
            Pending ...
        </div>
    )
}

export default Pending
