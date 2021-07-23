import React, {useEffect, useState} from 'react'
import {Table, Button, Col, Row} from "react-bootstrap"
import {handleSellerList, handleUpdateStatusSeller} from "./../firebase/Actions"
import SatLink from "./SatLink"


function Pending(props) {
    const [items, setItems] = useState([])
    const [hasBeenModified, setHasBeenModified] = useState(false)

    useEffect(async() => {
        const result = await handleSellerList(0)
        setItems(result)
    }, [hasBeenModified])


    const OnPushButton = (button_pressed, seller_doc) => {
        handleUpdateStatusSeller(button_pressed, seller_doc)
        setHasBeenModified(!hasBeenModified)
    }

    return (
        <div className="container">
            <SatLink />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>RFC</th>
                        <th>Dirección</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 && (
                    items.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.rfc}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <div className="btn-group">
                                    <Button variant="success" onClick={() => OnPushButton(1, item.id)}>Aprobar</Button>
                                    <Button variant="warning" onClick={() => OnPushButton(2, item.id)}>Rechazar</Button>
                                </div>
                            </td>
                        </tr>
                        ))
                    )}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Pending
