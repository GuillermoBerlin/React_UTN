import { useParams } from "react-router-dom"

function Detalle(){
    const {id} = useParams()
    return(
         <>
            <div>Detalle</div>
        </>
    )
}
 
export default Detalle