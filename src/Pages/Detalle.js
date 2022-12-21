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
                setProducto(response.data)
                
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, [id]
    )
    
    return(
         <>
            <p>{producto.title}</p>
        </>
    )
}
 
export default Detalle