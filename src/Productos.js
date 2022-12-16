import React, {useState, useEffect} from "react";
import Producto from "./Producto";

function Productos(){

    const [listadoProductos, setListadoProductos]=useState([
        {
            nombre: "Samsung",
            precio: "1000",
            descripcion: "Celular berreta "
             
        },
        {
            nombre: "Samsung Mega",
            precio: "1500",
            descripcion: "Celular maso"
             
        },
        {
            nombre: "Iphone",
            precio: "2000",
            descripcion: "Celular deluxex "
             
        }
    ])
    const [titulo, setTitulo]=useState("Listado Productos oferta")
    const [loading, setLoading]=useState(false)

    const handleClick=()=>{
        
            setTitulo("Listado productos modificado")
        
    }

    const handleClickFiltrarProducto=()=>{
       
            setListadoProductos([
             
                {
                    nombre: "Iphone",
                    precio: "2000",
                    descripcion: "Celular deluxex "
                     
                }
            ])
        
    }

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
                <button onClick={handleClick}>Cambiar titulo</button>
                <button onClick={handleClickFiltrarProducto}>Filtrar producto</button>
            </div>
        )
    }
}



export default Productos