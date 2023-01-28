import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from "../Context/AuthContext"
import Container from 'react-bootstrap/Container'

function Menu(){
    
    return(
        <>
            <AuthContext.Consumer>
                {
                    context=>

                    
                    <Navbar bg="light" expand="lg" >
                    <div className="container" >             
                    <Nav.Link as={Link} to="/"><Navbar.Brand  href="#home">Onkel Rolo Lagerhaus</Navbar.Brand></Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {!context.userLogin &&
                            <>
                                <Nav.Link as={Link} to="/alta">Registro</Nav.Link>
                                <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                            </>
                        }        
                        {context.userLogin && 
                            <>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                                    </NavDropdown>
                                <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                                
                                <Navbar.Brand>Hola {context.userInfo.name} amigaso </Navbar.Brand>
                                
                            </>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>

                   

            </div>            
            </Navbar>
            
                          

            }
            
            </AuthContext.Consumer>
        </>
    )
}

export default Menu