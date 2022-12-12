import React, {Component} from "react";

class Producto extends Component{
    render(){ 
        console.log(this.props)
        return(
            <div>  
                <div>
                    <p>{this.props.nombre}</p>
                    <p>{this.props.precio}</p>
                </div>
            </div>
        )
    }
}

export default Producto 