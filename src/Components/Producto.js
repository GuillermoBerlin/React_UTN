 
import { Link } from "react-router-dom";
import {Card, Button, Col} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";
import React, {useState, useEffect} from "react";

const styles = {
    img: {
        objectFit: "contain",
        minHeight: "200px",
        maxHeight: "200px",
        
    },
}


function Producto(props) {
   
    const {nombre, precio,id, thumbnail,thumbnail2, descripcion} = props
    const [showedImage, setShowedImage] = useState(thumbnail)

    
    useEffect(() => {
        setShowedImage(thumbnail);
      }, [thumbnail])

    const handleMouseEnter = e => {
        setShowedImage(thumbnail2);
    }
    
    const handleMouseLeave = e => {
        setShowedImage(thumbnail);
    }

        return(
            <>  
            <AuthContext.Consumer>
                {
                    context=>
                    <Col>
                        <Card style={{ width: '18rem'}} className="border-0 border-bottom m-4">
                        
                        <Link to={"/producto/"+id}><Card.Img className="fluid text-center" variant="top" src={showedImage} style={styles.img} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/></Link>
                        
                        <Card.Body  >
                            <Card.Title >{nombre}</Card.Title>
                            <Card.Text>{descripcion}</Card.Text>
                            <Card.Title >{precio} €</Card.Title>
                            {
                                context.userLogin &&
                                <Button as={Link} to={"/productos/modificar/"+id} variant="light">Modificar</Button>
                            }
                                                                                
                        </Card.Body>
                        </Card>
                    </Col>                      
                }
            </AuthContext.Consumer>              
            </>
        )
    
}
 
export default Producto 