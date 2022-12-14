import React, {Component} from "react";

class Producto extends Component{
    render(){ 
        
        return(
            <div>   
                
                <div>
                    <p>{this.props.nombre}</p>
                    <p>{this.props.precio}</p>
                    <p>{this.props.descripcion}</p>
                    <button>Comprame</button>
                </div>
            </div>
        )
    } 
}

export default Producto 