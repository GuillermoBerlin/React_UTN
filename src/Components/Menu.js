import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import AuthContext from "../Context/AuthContext"


function Menu(){
    
    return(
        <>
            <AuthContext.Consumer>
                {
                    context=>

                    
                    <Navbar bg="light" expand="lg" shadow-sm="true" >
                    <div className="container" >             
                    <Navbar.Brand  as={Link} to="/">Onkel Rolo Lagerhaus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {!context.userLogin &&
                            <>
                                <Nav.Link as={Link} to="/alta">Register</Nav.Link>
                                <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                            </>
                        }        
                        {context.userLogin && 
                            <>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>
                                    </NavDropdown>
                                <Nav.Link onClick={context.logoutUser}>Log Out</Nav.Link>
                                
                                
                                
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