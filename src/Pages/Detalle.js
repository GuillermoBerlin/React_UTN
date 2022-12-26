import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Service/productosServices"
import { useState, useEffect } from "react"


function Detalle(){
    const {id} = useParams()
    const [producto, setProducto] = useState({})
    
    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getByIdProductos(id)
                setProducto(response)
                
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, [id]
    )
    
    return(
         <>
            <p>{producto.data().name}</p>
            <p>{producto.data().price}</p>
            <p>{producto.data().description}</p>
        </>
    )
}
 
export default Detalle