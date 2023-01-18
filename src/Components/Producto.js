 
import { Link } from "react-router-dom";
import {Card, Button, Col} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext";


const styles = {
    img: {
        width: "100%",
        height: "100%",
        
    },
    

}

function Producto(props) {
   
    const {nombre, precio,id, thumbnail, descripcion} = props
        
        return(
            <>  
            <AuthContext.Consumer>
                {
                    context=>
                    <Col>
                        <Card style={{ width: '18rem'}} className="border-0 m-4">
                        
                        <Link to={"/producto/"+id}><Card.Img className="text-center" variant="top" src={thumbnail} style={styles.img} /></Link>
                        
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