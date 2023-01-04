import React, {useState, useEffect} from "react";
import { getAllProductos } from "../Service/productosServices";
import Producto from "./Producto";
import Row from 'react-bootstrap/Row'
import Loading from "./Loading";


function Productos(){

    const [listadoProductos, setListadoProductos]=useState([])
    const [loading, setLoading]=useState(true)
    
    
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
            
        }, []
    )
 
   
    return(
            <Loading loading={loading}>
                    <div>
                        <h4>Productossss</h4>
                        <Row>
                        {listadoProductos.map(listadoProducto=><Producto key={listadoProducto.id} nombre= {listadoProducto.data().name} precio={listadoProducto.data().price} id={listadoProducto.id}/>)}
                        </Row>             
                    </div>  
            </Loading>             
    )
    }    


export default Productos