import React, {Component} from "react";
import { Link } from "react-router-dom";

function Producto(props) {
   
    const {nombre, precio,id} = props
        
        return(
            <div>   
                
                <div>
                    <p>{nombre}</p>
                    <p>{precio}</p>
                    <button>Comprame</button>
                    <Link to={"/producto/"+id}>Ver Detalle</Link>
                </div>
            </div>
        )
    
}

export default Producto 