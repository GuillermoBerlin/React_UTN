import React, {useState, useEffect} from "react";
import { getAllProductos } from "../Service/productosServices";
import Producto from "./Producto";

function Productos(){

    const [listadoProductos, setListadoProductos]=useState([])
    const [loading, setLoading]=useState(true)
    
    
    


    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getAllProductos()
                setListadoProductos(response.data.results);
                    
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
                
                {listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id}/>)}
                
            </div> 
            
        )
    }
    
}



export default Productos