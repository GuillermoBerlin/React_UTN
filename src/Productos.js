import React, {useState, useEffect} from "react";
import Producto from "./Producto";

function Productos(){

    const [listadoProductos, setListadoProductos]=useState([])
    const [loading, setLoading]=useState(false)


    useEffect(
        ()=>{
            fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setListadoProductos(data.products));   
            
            
        }, []
    )

    console.log(listadoProductos)

    

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
                {listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.title} precio={listadoProducto.price} />)}
                
            </div> 
            
        )
    }
    
}



export default Productos