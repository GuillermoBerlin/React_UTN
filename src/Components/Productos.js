import React, {useState, useEffect} from "react";
import { getAllProductos } from "../Service/productosServices";
import Producto from "./Producto";
import Row from 'react-bootstrap/Row'


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
                console.log(listadoProductos)
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, []
    )

    if(loading){
        return(
        <div>
            Cargando...
        </div>
        )
    }else{
        return(
            
            <div>  
                <h4>Productos</h4>
                
                <Row>
                {listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.data().name} precio={listadoProducto.data().price} id={listadoProducto.id}/>)}
                </Row>
                
            </div> 
            
        )
    }
    
}

export default Productos