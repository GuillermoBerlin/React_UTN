import { useParams } from "react-router-dom"
import { getByIdProductos } from "../Service/productosServices"
import { useState, useEffect } from "react"
import Loading from "../Components/Loading"

function Detalle(){
    const {id} = useParams()
    const [producto, setProducto] = useState({})
    const [loading, setLoading]=useState(true)
    
    useEffect(
        ()=>{
            const request = async ()=>{
            try{
                const response = await getByIdProductos(id)
                setProducto(response.data())
                setLoading(false)
                
            }catch(e){
                console.log(e)
            }    
        }
        request()
            
        }, [id]
    ) 
    
    return(
         <Loading loading={loading}>
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <p>{producto.description}</p>
        </Loading>
    )
}
 
export default Detalle