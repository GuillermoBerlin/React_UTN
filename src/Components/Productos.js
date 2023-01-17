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

    const handleBuscar=(event)=>{
        const value = event.target.value
        setBuscar(value)
    }
 
    return(
        <>
        <input type="text" value={buscar} onChange={handleBuscar}></input> 

        <Loading loading={loading}>
                <div>                     
                    <h4>Productos</h4>
                    
                    <Row>
                    {listadoProductos.map(listadoProducto=><Producto key={listadoProducto.id} nombre= {listadoProducto.data().name} precio={listadoProducto.data().price} id={listadoProducto.id} thumbnail={listadoProducto.data().thumbnail}/>)}
                    </Row>     
                            
                </div>  
            </Loading>    
        </>             
    )
    }    


export default Productos