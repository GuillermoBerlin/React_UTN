import React, {useState, useEffect} from "react";
import Producto from "./Producto";

function Productos(){

    const [listadoProductos, setListadoProductos]=useState()
    const [titulo, setTitulo]=useState("Listado Productos oferta")
    const [loading, setLoading]=useState(false)


    useEffect(
        ()=>{
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data =>{ 
                setListadoProductos(data.products)
                console.log(listadoProductos)
            })    
            
            
        }, []
    )

    
/*
    if(loading){
        return(
        <div>
            Cargando...
        </div>
        )
    }else{
        return(
            <div>  
                <h4>{titulo}</h4>
                {listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.nombre} precio={listadoProducto.precio} descripcion = {listadoProducto.descripcion}/>)}
                
            </div>
        )
    }
*/    
}



export default Productos