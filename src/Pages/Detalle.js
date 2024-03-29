import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Service/productosServices"
import { useState, useEffect } from "react"
import Loading from "../Components/Loading"
import {Col, Row} from 'react-bootstrap/'
import CarouselDetalle from "../Components/CarouselDetalle"

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
                    <Col lg={8} className='d-none d-sm-block'> 
                        <img style={styles.mainImage} src={producto.thumbnail}/>
                        <img style={styles.mainImage} src={producto.thumbnail2}/>
                    </Col>

                    <CarouselDetalle thumbnail={producto.thumbnail} thumbnail2={producto.thumbnail2}/>

                    <Col style={{marginTop: "25px"}}>           
                        <h2>{producto.name}</h2>
                        <p className="lead">{producto.description}</p>
                        <h3>{producto.price}€</h3>
                        <div style={{marginTop: "20px", borderBottom: "1px solid lightgray"}}>
                        <p className="lead">{producto.descriptionLong}</p>   
                        </div>                
                    </Col>
                </Row>
                
                
        </Loading>
    )
}
 
export default Detalle