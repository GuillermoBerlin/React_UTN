function Loading(props){
 
const {loading, children} = props

if(loading){
    return(
        <div>
            ... CARGANDO
        </div>
    )
  
}else{
    return(
    <>
        {children}
    </>
    )
} 
   
}

export default Loading