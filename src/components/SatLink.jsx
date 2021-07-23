import React from 'react'
import {Card, Button} from "react-bootstrap"

function SatLink() {
    return (
        <div style={{marginTop: 10, marginBottom: 10}}>
            <Card>
                <Card.Body>
                    <a href="https://portalsat.plataforma.sat.gob.mx/ConsultaRFC/" variant="link" target="_blank">
                        Validación de RFC 
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SatLink
