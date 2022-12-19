import React, {useState, useEffect} from "react";
import Producto from "./Producto";

function Productos(){

    const [listadoProductos, setListadoProductos]=useState([])
    const [loading, setLoading]=useState(true)
    const [buscar, setBuscar]=useState("ipad")
    


    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q='+buscar).then(res=>res.json())
                setListadoProductos(data.results);
                    
                setLoading(false)
                console.log(listadoProductos)
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, [buscar]
    )

    const filtrar = () => {
        setBuscar("sony")
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
                <h4>Productos</h4>
                <button onClick={filtrar}>Dame Sony</button>
                {listadoProductos.map(listadoProducto=><Producto nombre= {listadoProducto.title} precio={listadoProducto.price} />)}
                
            </div> 
            
        )
    }
    
}



export default Productos