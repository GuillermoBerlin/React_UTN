import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Service/productosServices"
import { useState, useEffect } from "react"
import Loading from "../Components/Loading"
import {Container, Col, Row} from 'react-bootstrap/'

const styles = {
    mainImage: {
        objectFit: "contain",
        width: "100%",
        minHeight: "300px",
        maxHeight: "500px",
        margin: "10px"
      
    }


}

function Detalle(){
    const {id} = useParams()
    const [producto, setProducto] = useState({})
    const [loading, setLoading]=useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getByIdProductos(id)
                setProducto(response.data())
                setLoading(false)
                
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, [id]
    ) 
    
    return(
         <Loading loading={loading}>
                
                <Row style={{marginTop: "25px"}}>
                    <Col lg={8}> 
                        <Col>
                        <img style={styles.mainImage} src={producto.thumbnail}/>
                        </Col>
                        <Col>
                        <img style={styles.mainImage} src={producto.thumbnail2}/>
                        </Col>     
                    </Col>

                    <Col>           
                        <h2>{producto.name}</h2>
                        <p className="lead">{producto.description}</p>
                        <h3>{producto.price}€</h3>
                        <div style={{borderTop: "20px"}}>
                        <p className="lead">{producto.descriptionLong}</p>   
                        </div>                
                    </Col>
                </Row>
                
        </Loading>
    )
}
 
export default Detalle