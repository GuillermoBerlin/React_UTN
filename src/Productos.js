import React, {Component} from "react";
import Producto from "./Producto";

class Productos extends Component{
    render(){ 
        return(
            <div>  
                <Producto nombre="Moto G" precio="$1000"/>
                <Producto nombre="Moto F" precio="$1400"/>
                <Producto nombre="Moto X" precio="$3000"/>
                <borrame></borrame>
            </div>
        )
    }
}

export default Productos