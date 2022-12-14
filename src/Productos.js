import React, {Component} from "react";
import Producto from "./Producto";

class Productos extends Component{
    constructor(){
        super(   )
        this.state={
            listadoProductos: [
                {
                    nombre: "Moto G",
                    precio: "1000",
                    descripcion: "Celular choto",
                },
                {
                    nombre: "Moto X",
                    precio: "1500", 
                    descripcion: "Celular mediocre"
                },
                {
                    nombre: "Iphone",
                    precio: "2000",
                    descripcion: "Celular deluxe "
                }
            ],
            titulo: "Listado de productos en oferta"

        }
    }
    render(){ 
        
   
        return(
            <div>  
                <h4>{this.state.titulo}</h4>
                {this.state.listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.nombre} precio={listadoProducto.precio} descripcion = {listadoProducto.descripcion}/>)}
                 
            </div>
        )
    }
}

export default Productos