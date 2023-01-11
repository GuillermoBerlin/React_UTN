 
import { Link } from "react-router-dom";
import {Card, Button, Col} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";


const styles = {
    img: {
        width:"100%",
        
    }
}

function Producto(props) {
   
    const {nombre, precio,id, thumbnail} = props



        
        return(
            <>  
            <AuthContext.Consumer>
                {
                    context=>
                    <Col>
                        <Card style={{ width: '18rem' }} className="text-center m-4">
                        <Card.Img className="text-center" variant="top" src={thumbnail} style={styles.img} />
                        <Card.Body className="text-center">
                            <Card.Title >{nombre}</Card.Title>
                            <Card.Text>${precio}</Card.Text>
                            {
                                context.userLogin &&
                                <Button as={Link} to={"/productos/modificar/"+id} variant="primary">Modificar</Button>
                            }
                            <Button as={Link} to={"/producto/"+id} variant="primary">Detalles</Button>                                                    
                        </Card.Body>
                        </Card>
                    </Col>                      
                }
            </AuthContext.Consumer>              
            </>
        )
    
}
 
export default Producto 