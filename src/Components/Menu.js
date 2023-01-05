import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Menu(){

    

    return(
        <>
            <Navbar bg="light" expand="lg">
                
                    <Navbar.Brand href="#home">Almacen Tio Rolo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                        <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                            
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                                </NavDropdown>
                            
                    </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </>
    )
}

export default Menu