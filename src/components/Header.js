import React from 'react'
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap'
import logo from "./../assets/svg-pyramid-1.svg"

function Header(props) {
    const {handleLogout} = props

    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/Welcome">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/Pending'>Pendientes</Nav.Link>
                        <Nav.Link href='/Approved'>Aprobadas</Nav.Link>
                        <Nav.Link href='/Rejected'>Rechazadas</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Button variant="outline-warning" onClick={handleLogout}>Cerrar sesión</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header
