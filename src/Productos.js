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
                    descripcion: "Celular deluxex "
                }
            ],
            titulo: "Listado de productos en oferta"

        }
    }

    handleClick=()=>{
        this.setState({
            titulo:"Listado productos modificado"
        })
    }

    handleClickFiltrarProducto=()=>{
        this.setState({
            listadoProductos: [
             
                {
                    nombre: "Iphone",
                    precio: "2000",
                    descripcion: "Celular deluxex "
                    borrame
                }
            ]
        })
    }

    render(){ 
        
   
        return(
            <div>  
                <h4>{this.state.titulo}</h4>
                {this.state.listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.nombre} precio={listadoProducto.precio} descripcion = {listadoProducto.descripcion}/>)}
                <button onClick={this.handleClick}>Cambiar titulo</button>
                <button onClick={this.handleClickFiltrarProducto}>Filtrar producto</button>
            </div>
        )
    }  
}

export default Productos