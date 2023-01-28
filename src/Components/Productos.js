import React, {useState, useEffect} from "react";
import { getAllProductos } from "../Service/productosServices";
import Producto from "./Producto";
import Row from 'react-bootstrap/Row'
import Loading from "./Loading";


 

function Productos(){

    const [listadoProductos, setListadoProductos]=useState([])
    const [loading, setLoading]=useState(true)
    const [buscar, setBuscar] = useState()
    
    
    
    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getAllProductos()
                setListadoProductos(response);
                setLoading(false)
                
            }catch(e){
                console.log(e)
                
            }    
        }
        request()
            
        }, [buscar]
    )

   
 


    return(
        <>
        

        <Loading loading={loading}>
                <div>                                         
                    <Row>
                    {listadoProductos.map(listadoProducto=><Producto 
                        key={listadoProducto.id} 
                        nombre= {listadoProducto.data().name} 
                        precio={listadoProducto.data().price} 
                        id={listadoProducto.id} 
                        thumbnail={listadoProducto.data().thumbnail}
                        thumbnail2={listadoProducto.data().thumbnail2}  
                        descripcion={listadoProducto.data().description}
                        descripcionLarga={listadoProducto.data().descriptionLong}
                        
                    />)}
                    </Row>     
                            
                </div>  
            </Loading>    
        </>             
    )
    }    


export default Productos